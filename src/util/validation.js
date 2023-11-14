import { z } from 'zod';

export const loginSchema = z.object({
  username: z
    .string({ required_error: 'Username required' })
    .min(6, { message: 'Username not enough 6 letters' })
    .regex(/^[a-zA-Z0-9_-]+$/, { message: 'Username is invalid' }),
  password: z
    .string({ required_error: 'Password required' })
    .min(6, { message: 'Password not enough 6 letters' })
    .regex(/^[a-zA-Z0-9_-]+$/, { message: 'password is invalid' })
    .regex(new RegExp('.*[A-Z].*'), {
      message: 'Password require 1 upscale letter',
    }),
});

export const registerSchema = z
  .object({
    username: z
      .string({ required_error: 'Username required' })
      .min(6, { message: 'Username not enough 6 letters' })
      .regex(/^[a-zA-Z0-9_-]+$/, { message: 'Username is invalid' }),
    password: z
      .string({ required_error: 'Password required' })
      .min(6, { message: 'Password not enough 6 letters' })
      .regex(/^[a-zA-Z0-9_-]+$/, { message: 'password is invalid' })
      .regex(new RegExp('.*[A-Z].*'), {
        message: 'Password require 1 upscale letter',
      }),
    passwordCfm: z
      .string({ required_error: 'Password confirm required' })
      .min(6, { message: 'Password confirm not enough 6 letters' })
      .regex(/^[a-zA-Z0-9_-]+$/, { message: 'password confirm is invalid' })
      .regex(new RegExp('.*[A-Z].*'), {
        message: 'Password confirm require 1 upscale letter',
      }),
  })
  .refine((data) => data.password === data.passwordCfm, {
    message: 'Password and Password Confirm do not match',
  });
