import Link from 'next/link';
import { auth } from '@/lib/auth';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Rocket,
  Users,
  Calendar,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  BarChart3,
  Globe,
  Linkedin,
  Instagram,
} from 'lucide-react';

const Home = async () => {
  const session = await auth();

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">
      <Navbar session={session} />

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>

        <div className="relative text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200 mb-8 hover:bg-blue-100 transition-colors">
            <Sparkles className="h-4 w-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-slate-700">
              Connecting Innovation with Investment
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-8 leading-[1.1]">
            Where{' '}
            <span className="text-blue-600 relative inline-block">
              Startups
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.3"
                />
              </svg>
            </span>{' '}
            Meet{' '}
            <span className="text-blue-600 relative inline-block">
              Investors
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.3"
                />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            Join E-Cell, NIT Rourkela in promoting Innovation, Incubation and Entrepreneurship.
            <span className="font-medium text-slate-700">
              {' '}
              Connect with investors, attend events, and accelerate your startup journey.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/auth/signup" className="cursor-pointer">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all gap-2 cursor-pointer text-base px-8 py-6 rounded-xl"
              >
                Get Started Free <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/startups" className="cursor-pointer">
              <Button
                size="lg"
                variant="ghost"
                className="text-slate-700 hover:bg-slate-100 border-2 border-slate-300 hover:border-slate-400 cursor-pointer text-base px-8 py-6 rounded-xl font-medium"
              >
                Explore Startups
              </Button>
            </Link>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-sm md:text-base text-slate-600 font-medium">Active Startups</div>
            </div>
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                200+
              </div>
              <div className="text-sm md:text-base text-slate-600 font-medium">Investors</div>
            </div>
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                $50M+
              </div>
              <div className="text-sm md:text-base text-slate-600 font-medium">Funding Raised</div>
            </div>
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                100+
              </div>
              <div className="text-sm md:text-base text-slate-600 font-medium">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* About E-Cell Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              About <span className="text-blue-600">E-Cell</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Entrepreneurship Cell, NIT Rourkela is an endeavor of the institute through the
                student body to encourage{' '}
                <span className="font-semibold text-blue-600">
                  &quot;Innovation, Incubation and Entrepreneurship.&quot;
                </span>{' '}
                It was founded in 2007 and operates under Technical Society, SAC. Its main objective
                is to promote and support entrepreneurship by developing entrepreneurial traits
                among the students and helping budding entrepreneurs achieve their goals.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To encourage entrepreneurship, ECell at NITR organizes various events and supports
                budding talents in the race for finding their dream venture. The major initiatives
                taken by ECell are{' '}
                <span className="font-semibold">
                  National Entrepreneurship Summit, Arthayan and Weekend activities
                </span>
                .
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                ECell also organizes entrepreneurship based activities during weekends throughout
                the year. Such activities have two main motives - promote the entrepreneurial
                culture among students and support the already confident students in their run
                towards entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to <span className="text-blue-600">Succeed</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive tools and resources for startups and investors to connect, collaborate,
            and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 bg-white">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">For Startups</CardTitle>
              <CardDescription className="text-slate-600">
                Showcase your innovation, connect with investors, and access resources to scale your
                business
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 bg-white">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">For Investors</CardTitle>
              <CardDescription className="text-slate-600">
                Discover promising startups, evaluate opportunities, and build your investment
                portfolio
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 bg-white">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">Events</CardTitle>
              <CardDescription className="text-slate-600">
                Attend networking events, pitch sessions, and workshops to expand your network
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 bg-white">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">
                Targeted Matching
              </CardTitle>
              <CardDescription className="text-slate-600">
                Smart algorithms connect you with the most relevant opportunities and partners
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 bg-white">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">Analytics</CardTitle>
              <CardDescription className="text-slate-600">
                Track performance, measure engagement, and make data-driven decisions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 bg-white">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-900">Global Network</CardTitle>
              <CardDescription className="text-slate-600">
                Access a worldwide community of entrepreneurs and investors across industries
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get started in minutes and unlock opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Create Your Profile</h3>
              <p className="text-slate-600">
                Sign up and build your profile as a startup or investor in minutes
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Connect & Explore</h3>
              <p className="text-slate-600">
                Browse opportunities, attend events, and connect with the right people
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Grow Together</h3>
              <p className="text-slate-600">
                Build partnerships, secure funding, and scale your ventures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/CTA Section */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <Card className="bg-blue-600 text-white border-0 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[20px_20px]" />
          <CardHeader className="text-center py-12 md:py-16 relative">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Entrepreneurial Journey?
            </CardTitle>
            <CardDescription className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join E-Cell, NIT Rourkela and become part of a thriving community of entrepreneurs,
              startups, and investors
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="cursor-pointer">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/contact" className="cursor-pointer">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-2 border-white hover:bg-white/10 backdrop-blur-sm cursor-pointer hover:text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardHeader>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="mb-4">
                <span className="text-xl font-bold text-slate-900">E-Cell, NIT Rourkela</span>
              </div>
              <p className="text-slate-600 mb-6">
                Entrepreneurship Cell, NIT Rourkela - Promoting Innovation, Incubation and
                Entrepreneurship since 2007.
              </p>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/entrepreneurship-cell-nit-rourkela/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/ecell_nitrourkela/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Platform</h4>
              <div className="space-y-2">
                <Link
                  href="/startups"
                  className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Startups
                </Link>
                <Link
                  href="/events"
                  className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Events
                </Link>
                <Link
                  href="/dashboard"
                  className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Dashboard
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <div className="space-y-2">
                <Link
                  href="/contact"
                  className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Contact
                </Link>
                <Link
                  href="/auth/signin"
                  className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 text-center text-slate-600">
            <p>&copy; 2025 E-Cell, NIT Rourkela. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
