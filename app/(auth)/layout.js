import { signout } from '@/actions/auth-actions';
import '../globals.css';

export const metadata = {
  title: 'Next Auth',
  description: 'Next.js Authentication',
};

export default function AuthRootLayout({ children }) {
  return (
    <>
      <header>
        <p>Welcome back</p>
        <form action={signout}>
          <button>Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}
