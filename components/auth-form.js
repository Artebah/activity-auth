'use client';
import Link from 'next/link';
import { useFormState } from 'react-dom';

import { signin, signup } from '@/actions/auth-actions';

export default function AuthForm({ mode }) {
  const authHandler = mode === 'signin' ? signin : signup;

  const [formState, formAction] = useFormState(authHandler, {});
  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {formState.errors && (
        <ul id="form-errors">
          {Object.keys(formState.errors).map((error) => (
            <li key={error}>{formState.errors[error]}</li>
          ))}
        </ul>
      )}
      <p>
        <button type="submit">
          {mode === 'signup' ? 'Create Account' : 'Sign in'}
        </button>
      </p>
      <p>
        {mode === 'signup' && (
          <Link href="/?mode=signin">Login with existing account.</Link>
        )}

        {mode === 'signin' && (
          <Link href="/?mode=signup">Create a new account.</Link>
        )}
      </p>
    </form>
  );
}
