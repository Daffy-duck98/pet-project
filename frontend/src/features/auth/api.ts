import LoginData from './types/LoginData';
import RegisterData from './types/RegisterData';
import User from './types/User';

export async function user(): Promise<
  { isLoggedIn: true; user: User } | { isLoggedIn: false }
> {
  return (await fetch('/api/auth/user')).json();
}

export async function login(data: LoginData): Promise<User> {
  const res = await fetch('/api/auth/sign-in', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }
  return res.json();
}

export async function register(data: RegisterData): Promise<User> {
  const res = await fetch('/api/auth/sign-up', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }
  return res.json();
}

export async function logout(): Promise<void> {
  await fetch('/api/auth/logout', {
    method: 'POST',
  });
}
