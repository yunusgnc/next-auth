import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır'),
});

export const profileSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z.string().optional(),
  location: z.string().optional(),
  occupation: z.string().optional(),
  education: z.string().optional(),
});

export const settingsSchema = z.object({
  emailNotifications: z.boolean(),
  pushNotifications: z.boolean(),
  twoFactorAuth: z.boolean(),
  language: z.enum(['tr', 'en']),
  theme: z.enum(['light', 'dark', 'system']),
  emailUpdates: z.boolean(),
  securityAlerts: z.boolean(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;
export type SettingsInput = z.infer<typeof settingsSchema>; 