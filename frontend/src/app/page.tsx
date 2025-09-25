import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build faster with our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
                Full-Stack
              </span>{' '}
              boilerplate
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Production-ready Next.js 15 application with authentication, database, and deployment. 
              Skip the setup and start building your ideas today.
            </p>
            
            <SignedOut>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <SignInButton mode="modal">
                  <button className="rounded-full bg-[#6c47ff] px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 hover:scale-105">
                    Get Started Free
                  </button>
                </SignInButton>
                <Link 
                  href="/sign-in" 
                  className="text-lg font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="mt-10">
                <Link 
                  href="/dashboard" 
                  className="rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all duration-200 hover:scale-105 inline-block"
                >
                  Go to Dashboard
                </Link>
              </div>
            </SignedIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Production-ready stack
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Built with modern technologies and best practices. Deploy to Vercel with one click.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-white font-bold">⚛️</span>
                  </div>
                  Next.js 15 Frontend
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  App Router, TypeScript, Tailwind CSS, and server components for optimal performance.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-white font-bold">🔒</span>
                  </div>
                  Secure Authentication
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Clerk integration with social logins, user management, and session handling.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-white font-bold">🗄️</span>
                  </div>
                  Database Ready
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  PostgreSQL with Prisma ORM, migrations, and type-safe database operations.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  One-Click Deploy
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Configured for Vercel deployment with environment variables and CI/CD.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SignedOut>
        <section className="bg-indigo-600">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to build something amazing?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
                Join thousands of developers who have accelerated their projects with our boilerplate.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <SignInButton mode="modal">
                  <button className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105">
                    Start Building Now
                  </button>
                </SignInButton>
              </div>
            </div>
          </div>
        </section>
      </SignedOut>
    </main>
  )
}