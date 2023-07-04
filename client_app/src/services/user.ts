/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import APIService from "./api";

interface User {
  id: number;
  email?: string;
}

export default class UserService extends APIService {
  constructor() {
    super();
  }

  public async getUsers(): Promise<any> {
    try {
      return await this.get('users');
    } catch (error) {
      return console.error(error);
    }
  }

  public async getUser(id: number): Promise<any> {
    try {
      const user: User = {
        id
      };
      return await this.post(`users`, user);
    } catch (error) {
      return console.error(error);
    }
  }

  public async createUser(user: User): Promise<any> {
    try {
      return await this.post('users', user);
    } catch (error) {
      return console.error(error);
    }
  }

  public async updateUser(user: User): Promise<any> {
    try {
      return await this.patch(`users`, user);
    } catch (error) {
      return console.error(error);
    }
  }

  public async deleteUser(id: number): Promise<any> {
    try {
      const user: User = {
        id
      };
      return await this.delete('users', user);
    } catch (error) {
      return console.error(error);
    }
  }
}