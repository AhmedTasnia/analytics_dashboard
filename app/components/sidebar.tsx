'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BarChart3, Users, TrendingUp, Settings } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    setIsOpen(true);
  }, []);

  const navItems = [
    { id: 1, label: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { id: 2, label: 'Analytics', href: '/analytics', icon: TrendingUp },
    { id: 3, label: 'Users', href: '/users', icon: Users },
    { id: 4, label: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed lg:static lg:translate-x-0 left-0 top-0 w-64 min-h-screen bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 pt-16 lg:pt-0 overflow-y-auto`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Analytics</h1>
          
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMounted && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
