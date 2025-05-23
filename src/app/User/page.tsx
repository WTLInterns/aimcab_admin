'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter for navigation

const UserPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const router = useRouter(); // Initialize useRouter

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Static credentials
  const staticLoginCredentials = {
    email: 'user@gmail.com',
    password: 'user123',
  };

  const handleSubmitLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    // Check if the entered credentials are correct
    if (email === staticLoginCredentials.email && password === staticLoginCredentials.password) {
      alert('Login successful');
      router.push('/');  // Navigate to home page after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? 'Aimcab Login' : 'Aimcab Register'}
        </h2>

        {isLogin ? (
          <form onSubmit={handleSubmitLogin}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Login
            </button>
          </form>
        ) : (
          <form action="/register" method="post">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Register
            </button>
          </form>
        )}

        <p className="mt-4 text-center">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-green-500 hover:underline"
              >
                Register Here
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-green-500 hover:underline"
              >
                Login Here
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default UserPage;
