import { describe, it, expect } from 'vitest';
import { loginSchema, profileSchema, settingsSchema } from '@/lib/validations/auth.validation';

describe('Auth Validations', () => {
  describe('Login Schema', () => {
    it('should validate correct login data', () => {
      const validData = {
        email: 'test@example.com',
        password: 'password123'
      };
      const result = loginSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid email', () => {
      const invalidData = {
        email: 'invalid-email',
        password: 'password123'
      };
      const result = loginSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject short password', () => {
      const invalidData = {
        email: 'test@example.com',
        password: '12345'
      };
      const result = loginSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('Profile Schema', () => {
    it('should validate correct profile data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        location: 'New York',
        occupation: 'Developer',
        education: 'Bachelor'
      };
      const result = profileSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject short name', () => {
      const invalidData = {
        name: 'J',
        email: 'john@example.com'
      };
      const result = profileSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('Settings Schema', () => {
    it('should validate correct settings data', () => {
      const validData = {
        emailNotifications: true,
        pushNotifications: false,
        twoFactorAuth: true,
        language: 'tr',
        theme: 'light',
        emailUpdates: true,
        securityAlerts: true
      };
      const result = settingsSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid language', () => {
      const invalidData = {
        emailNotifications: true,
        pushNotifications: false,
        twoFactorAuth: true,
        language: 'fr', // Invalid language
        theme: 'light',
        emailUpdates: true,
        securityAlerts: true
      };
      const result = settingsSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });
}); 