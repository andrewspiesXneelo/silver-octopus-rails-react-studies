/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import APIService from "./api";

export interface User {
  id: number;
  email?: string;
}

export default class UserService extends APIService {
  constructor() {
    super();
  }

  public async getUsers(): Promise<any> {
    return await this.request('GET', 'users');
  }

  public async getUser(id: number): Promise<any> {
    const user: User = {
      id
    };
    return await this.request('POST', 'users', user);
  }

  public async createUser(user: User): Promise<any> {
    return await this.request('POST', 'users', user);
  }

  public async updateUser(user: User): Promise<any> {
    return await this.request('POST', 'users', user);
  }

  public async deleteUser(id: number): Promise<any> {
    const user: User = {
      id
    };
    return await this.request('POST', 'users', user);
  }
}