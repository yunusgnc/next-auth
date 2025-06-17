import { getSession } from 'next-auth/react';

export interface IAuthService {
  isAuthenticated(): Promise<boolean>;
  getUser(): Promise<any>;
}

export class AuthService implements IAuthService {
  async isAuthenticated(): Promise<boolean> {
    const session = await getSession();
    return !!session;
  }

  async getUser(): Promise<any> {
    const session = await getSession();
    return session?.user;
  }
}

// Dependency Injection için factory
export const createAuthService = (): IAuthService => {
  return new AuthService();
}; 