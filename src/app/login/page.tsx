'use client';

import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { 
  MdEmail, 
  MdLock, 
  MdPerson, 
  MdSecurity,
  MdArrowForward,
  MdCheckCircle
} from 'react-icons/md';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size={50} color="#4F46E5" />
          <p className="mt-4 text-lg text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await signIn('auth0', { callbackUrl: '/' });
    } catch (error) {
      console.error('Giriş hatası:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo ve Başlık */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            NextAuth
          </h1>
          <p className="mt-2 text-gray-600">Hesabınıza giriş yapın</p>
        </div>

        {/* Giriş Kartı */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100">
          {/* Özellikler Listesi */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <MdSecurity className="w-5 h-5 text-indigo-500" />
              <span>Güvenli Kimlik Doğrulama</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MdPerson className="w-5 h-5 text-indigo-500" />
              <span>Kişiselleştirilmiş Profil</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MdEmail className="w-5 h-5 text-indigo-500" />
              <span>E-posta Bildirimleri</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MdLock className="w-5 h-5 text-indigo-500" />
              <span>Güvenli Oturum Yönetimi</span>
            </div>
          </div>

          {/* Giriş Butonu */}
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <LoadingSpinner size={20} color="#FFFFFF" />
                <span>Giriş Yapılıyor...</span>
              </>
            ) : (
              <>
                <span>Giriş Yap</span>
                <MdArrowForward className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Bilgi Metni */}
          <p className="text-center text-sm text-gray-500">
            Giriş yaparak{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Kullanım Koşulları
            </a>
            {' '}ve{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Gizlilik Politikası
            </a>
            'nı kabul etmiş olursunuz.
          </p>
        </div>

        {/* Alt Bilgi */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Hesabınız yok mu?{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Hemen Kaydolun
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 