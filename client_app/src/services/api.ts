/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

interface Config {
  ENV: string;
  API_URL: string;
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

    const init = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': this.config.ENV === 'development' ? '*' : '<origin>',
    };
    this.headers = new Headers(init);
  }


  public async get(path: string): Promise<any> {
    try {
      const requestConfig = {
        method: 'GET',
        contentType: 'application/json',
        headers: this.headers,
      };
      return await fetch(`${this.apiUrl}/${path}`, requestConfig);
    } catch (error) {
      console.error(error);
    }
  }

  public async post(path: string, body: any): Promise<any> {
    try {
      const requestConfig = {
        method: 'POST',
        contentType: 'application/json',
        headers: this.headers,
        body: JSON.stringify(body),
      };
      return await fetch(`${this.apiUrl}/${path}`, requestConfig);
    } catch (error) {
      console.error(error);
    }
  }

  public async patch(path: string, body: any): Promise<any> {
    try {
      const requestConfig = {
        method: 'PATCH',
        contentType: 'application/json',
        headers: this.headers,
        body: JSON.stringify(body),
      };
      return await fetch(`${this.apiUrl}/${path}`, requestConfig);
    } catch (error) {
      console.error(error);
    }
  }

  public async delete(path: string, body: any): Promise<any> {
    try {
      const requestConfig = {
        method: 'DELETE',
        contentType: 'application/json',
        headers: this.headers,
        body: JSON.stringify(body),
      };
      return await fetch(`${this.apiUrl}/${path}`, requestConfig);
    } catch (error) {
      console.error(error);
    }
  }
}