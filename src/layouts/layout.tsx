import Navbar from '@/components/navbar'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='min-h-screen w-full h-full dark:bg-black dark:text-white bg-white text-black'>
        <div className="px-5">
        <Navbar />
        <main className="h-full min-h-[535px] mt-3">
            {children}
        </main>
        <footer className='flex items-center justify-center text-sm'>
        &copy; 2024 | Untung Budiman
        </footer>
        </div>
    </div>
  )
}
