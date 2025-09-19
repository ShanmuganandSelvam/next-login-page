import LoginForm from '@/components/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Your App',
  description: 'Login to access your account',
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="w-full max-w-5xl flex rounded-2xl shadow-2xl overflow-hidden">
        {/* Left side - Image */}
        <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" }}>
          <div className="h-full w-full bg-black bg-opacity-20 flex flex-col justify-end p-12">
            <h2 className="text-white text-4xl font-bold mb-4">Welcome Back</h2>
            <p className="text-white text-lg">Sign in to continue your journey</p>
          </div>
        </div>
        
        {/* Right side - Login Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 bg-white">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
