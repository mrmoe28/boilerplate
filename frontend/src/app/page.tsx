import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-end mb-8">
          <SignedOut>
            <SignInButton>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Full Stack Application
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Built with Next.js 15, Express.js, TypeScript, Prisma, and Clerk
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900">Frontend</h3>
              <p className="text-sm text-gray-600">Next.js 15 + React</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900">Backend</h3>
              <p className="text-sm text-gray-600">Express.js + TypeScript</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900">Database</h3>
              <p className="text-sm text-gray-600">PostgreSQL + Prisma</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900">Auth</h3>
              <p className="text-sm text-gray-600">Clerk Authentication</p>
            </div>
          </div>

          <SignedIn>
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome!</h2>
              <p className="text-gray-600">You are successfully authenticated with Clerk.</p>
            </div>
          </SignedIn>
        </div>
      </div>
    </main>
  )
}