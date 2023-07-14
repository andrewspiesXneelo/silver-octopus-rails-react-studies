/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import APIService from "./api";

export interface User {
  id: number;
  name?: string;
  email?: string;
}

export default class UserService extends APIService {
  constructor() {
    super();
  }

  /**
   * getUsers()
   * 
   * Get all users
   * 
   * @returns {Promise<any>} Promise object represents users
   * @returns {Promise<User[]>} Promise object represents users
   */
  public async getUsers(): Promise<User[]> {
    return await this.request('GET', 'users');
  }

  /** 
   * getUser(id: number)
   * 
   * Get user by id
   * 
   * @param {number} id User id
   * @returns {Promise<User>} Promise object represents user
   */
  public async getUser(id: number): Promise<User> {
    const user: User = {
      id,
    };
    return await this.request('POST', 'users', user);
  }

  /**
   * createUser(user: User)
   * 
   * Create new user
   * 
   * @param {User} user User object
   * @returns {Promise<any>} Promise object represents user
   */
  public async createUser(user: User): Promise<User> {
    return await this.request('POST', 'users', user);
  }

  /**
   * updateUser(user: User)
   * 
   * Update user
   * 
   * @param {User} user User object
   * @returns {Promise<any>} Promise object represents user
   */
  public async updateUser(user: User): Promise<User> {
    return await this.request('POST', 'users', user);
  }

  /**
   * deleteUser(id: number)
   * 
   * Delete user
   * 
   * @param {number} id User id
   * @returns {Promise<any>} Promise object represents user
   */
  public async deleteUser(id: number): Promise<User> {
    const user: User = {
      id
    };
    return await this.request('POST', 'users', user);
  }
}