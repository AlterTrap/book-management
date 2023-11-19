import { z } from 'zod';

export const loginValidation = z
  .object({
    username: z.string(),
    password: z.string(),
  })
  .refine((data) => /^[a-zA-Z0-9]{6,}$/.test(data.username), {
    message:
      'Username must have at least 6 characters and without special character',
    path: ['username'],
  })
  .refine(
    (data) =>
      data.password.length >= 6 &&
      /[A-Z]/.test(data.password) &&
      /^[a-zA-Z0-9]+$/.test(data.password),
    {
      message:
        'Password must be at least 6 characters, contain at least 1 uppercase letter and no special characters',
      path: ['password'],
    }
  );

export const registerValidation = z
  .object({
    username: z.string(),
    password: z.string(),
    passwordCfm: z.string(),
  })
  .refine((data) => data.password === data.passwordCfm, {
    message: 'Password and Password Confirm do not match',
  })
  .refine((data) => /^[a-zA-Z0-9]{6,}$/.test(data.username), {
    message:
      'Username must have at least 6 characters and without special character',
    path: ['username'],
  })
  .refine(
    (data) =>
      data.password.length >= 6 &&
      /[A-Z]/.test(data.password) &&
      /^[a-zA-Z0-9]+$/.test(data.password),
    {
      message:
        'Password must be at least 6 characters, contain at least 1 uppercase letter and no special characters',
      path: ['password'],
    }
  )
  .refine((data) => data.password === data.passwordCfm, {
    message: 'Password and Password Confirm do not match',
  })
  .refine((data) => /^[a-zA-Z0-9]{6,}$/.test(data.username), {
    message:
      'Username must have at least 6 characters and without special character',
    path: ['username'],
  })
  .refine(
    (data) =>
      data.passwordCfm.length >= 6 &&
      /[A-Z]/.test(data.passwordCfm) &&
      /^[a-zA-Z0-9]+$/.test(data.password.Cfm),
    {
      message:
        'Password confirm must be at least 6 characters, contain at least 1 uppercase letter and no special characters',
      path: ['passwordCfm'],
    }
  );
