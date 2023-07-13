/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface Config {
  ENV: string;
  API_URL: string;
}

interface Headers {
  [key: string]: string;
}

export default class APIService {

  private apiUrl = '';
  private config: Config = {
    ENV: '',
    API_URL: ''
  };
  private headers: Headers;

  constructor() {
    this.config = {
      ENV: import.meta.env.VITE_ENV,
      API_URL: import.meta.env.VITE_API_URL,
    };
    this.apiUrl = this.config.API_URL;
    this.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': this.config.ENV === 'development' ? '*' : '<origin>',
    };
  }

  public async request(type: string, path: string, data?: any): Promise<any> {
    const requestConfig: RequestInit = {
      method: type,
      headers: this.headers,
      body: data ? JSON.stringify(data) : undefined,
    };
    return await fetch(`${this.apiUrl}/${path}`, requestConfig)
      .then((response) => {
        if (!response.ok) {
          // Can't pass along an exisiting error here must raise as custom error event
          const message = response.status + ' ' + response.statusText;
          const error = new Error(message);
          return dispatchEvent(new CustomEvent('error', { detail: error }));
        }
        return response.json();
      })
      .then(data => data)
      .catch((error) => {
        throw new Error(error);
        // return dispatchEvent(new CustomEvent('error', { detail: error }));
      });

  }
}