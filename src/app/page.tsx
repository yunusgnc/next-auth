'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import LoadingSpinner from '@/components/LoadingSpinner';
import { 
  FaShieldAlt, 
  FaLock, 
  FaBolt, 
  FaCode, 
  FaChartLine, 
  FaDatabase, 
  FaMobileAlt, 
  FaCloud 
} from 'react-icons/fa';
import { 
  MdSecurity, 
  MdPerson, 
  MdEmail, 
  MdVpnKey, 
  MdAccessTime, 
  MdVerifiedUser,
  MdSettings,
  MdNotifications
} from 'react-icons/md';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <LoadingSpinner size={50} color="#4F46E5" />
            <p className="mt-4 text-lg text-gray-600">Yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hoşgeldiniz Bölümü */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 mb-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Hoş Geldiniz, {session.user?.name}!
                </h1>
                <p className="text-indigo-100 text-lg">
                  Next.js, Auth0 ve NextAuth.js ile güvenli kimlik doğrulama sistemine hoş geldiniz.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {session.user?.name?.[0]?.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Son Giriş</p>
                  <p className="text-2xl font-semibold text-gray-900">Şimdi</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MdAccessTime className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Oturum Durumu</p>
                  <p className="text-2xl font-semibold text-gray-900">Aktif</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MdVerifiedUser className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Bildirimler</p>
                  <p className="text-2xl font-semibold text-gray-900">3</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MdNotifications className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Ayarlar</p>
                  <p className="text-2xl font-semibold text-gray-900">Güncel</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MdSettings className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Özellikler Bölümü */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FaShieldAlt className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Güvenli Kimlik Doğrulama</h3>
              <p className="text-gray-600">
                Auth0 ve NextAuth.js ile güvenli oturum yönetimi ve kimlik doğrulama.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FaBolt className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Yüksek Performans</h3>
              <p className="text-gray-600">
                Next.js ve Turbopack ile optimize edilmiş yüksek performanslı uygulama.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FaMobileAlt className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Tasarım</h3>
              <p className="text-gray-600">
                Tüm cihazlarda mükemmel görünen modern ve duyarlı kullanıcı arayüzü.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FaCloud className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bulut Entegrasyonu</h3>
              <p className="text-gray-600">
                Auth0 bulut altyapısı ile güvenli ve ölçeklenebilir kimlik yönetimi.
              </p>
            </div>
          </div>

          {/* Kullanıcı Bilgileri ve Sistem Durumu */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kullanıcı Bilgileri */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Kullanıcı Bilgileri</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <MdPerson className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Ad Soyad</p>
                    <p className="text-lg font-medium text-gray-900">{session.user?.name}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <MdEmail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">E-posta</p>
                    <p className="text-lg font-medium text-gray-900">{session.user?.email}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <MdVpnKey className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Oturum Tipi</p>
                    <p className="text-lg font-medium text-gray-900">JWT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sistem Durumu */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Sistem Durumu</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <MdSecurity className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Güvenlik Durumu</p>
                    <p className="text-lg font-medium text-gray-900">Aktif</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FaDatabase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Veritabanı</p>
                    <p className="text-lg font-medium text-gray-900">Bağlı</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <FaChartLine className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Performans</p>
                    <p className="text-lg font-medium text-gray-900">Optimal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
