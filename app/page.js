import AuthForm from '@/components/auth-form';
import { redirect } from 'next/navigation';

export default async function Home({ searchParams }) {
  const mode = searchParams.mode;
  if (!mode) {
    redirect('/?mode=signin');
  }

  return <AuthForm mode={mode} />;
}
