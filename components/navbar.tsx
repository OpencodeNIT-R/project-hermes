'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { Session } from 'next-auth';

interface NavbarProps {
  session: Session | null;
}

export function Navbar({ session }: NavbarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-slate-900">E-Cell, NIT Rourkela</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/startups">
              <Button
                variant="ghost"
                className={`text-slate-700 hover:text-blue-600 font-medium relative group cursor-pointer ${
                  isActive('/startups') ? 'text-blue-600' : ''
                }`}
              >
                Startups
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 rounded-full transition-all duration-100 ${
                    isActive('/startups') ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                  }`}
                />
              </Button>
            </Link>
            <Link href="/events">
              <Button
                variant="ghost"
                className={`text-slate-700 hover:text-blue-600 font-medium relative group cursor-pointer ${
                  isActive('/events') ? 'text-blue-600' : ''
                }`}
              >
                Events
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
                    isActive('/events') ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                  }`}
                />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                className={`text-slate-700 hover:text-blue-600 font-medium relative group cursor-pointer ${
                  isActive('/contact') ? 'text-blue-600' : ''
                }`}
              >
                Contact
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
                    isActive('/contact') ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                  }`}
                />
              </Button>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {session ? (
              <Link href="/dashboard">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/auth/signin">
                  <Button
                    variant="ghost"
                    className="text-slate-700 hover:text-slate-900 font-medium"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
