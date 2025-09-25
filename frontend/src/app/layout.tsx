import type { Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import './globals.css'

export const metadata: Metadata = {
  title: 'Full Stack App',
  description: 'A full-stack application built with Next.js and Express',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-xl font-semibold text-gray-900">Full Stack App</h1>
              <div className="flex items-center gap-2">
                <SignedOut>
                  <SignInButton>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg text-sm">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}