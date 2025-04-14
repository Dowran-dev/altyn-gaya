'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Неверное имя пользователя или пароль');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-light text-orange-500 mb-1">Вход в <span className="font-bold">Админку</span></h1>
          <p className="text-sm text-blue-800">Пожалуйста, введите свои данные для входа</p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Имя пользователя"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-blue-50 placeholder-blue-400 text-blue-800 border-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-blue-50 placeholder-blue-400 text-blue-800 border-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-2 rounded-full"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}
