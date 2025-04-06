// components/NavigationBar.jsx
import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav className="bg-background-dark-green">
      <div className="mx-auto max-w-[1025px] flex justify-between items-center px-4 py-3">
        {/* Left Section - Logo & Navigation */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0.5 overflow-hidden">
            <svg 
              width="23" 
              height="27" 
              viewBox="0 0 23 27" 
              fill="none" 
              className="text-background-green" // Using your custom green
            >
              <path 
                d="M22.7202 18.2941C22.7202 19.074..." 
                fill="currentColor"
              />
            </svg>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-7">
            <Link 
              href="/tags" 
              className="text-label-200 font-medium text-content-reversed hover:text-content-alpha-80 transition-colors"
            >
              Tags
            </Link>
            <Link 
              href="/artists" 
              className="text-label-200 font-medium text-content-reversed hover:text-content-alpha-80 transition-colors"
            >
              Artists
            </Link>
            <Link 
              href="/characters" 
              className="text-label-200 font-medium text-content-reversed hover:text-content-alpha-80 transition-colors"
            >
              Characters
            </Link>
            <Link 
              href="/groups" 
              className="text-label-200 font-medium text-content-reversed hover:text-content-alpha-80 transition-colors"
            >
              Groups
            </Link>
          </div>
        </div>

        {/* Right Section - Search & Login */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="w-48 px-4 py-2.5 rounded-full shadow-elevation-small outline outline-[0.84px] outline-border-transparent-white flex justify-between items-center">
            <span className="text-label-200 text-content-alpha-80">Search</span>
            <svg 
              width="17" 
              height="18" 
              viewBox="0 0 17 18" 
              className="text-background-beige" // Using your custom beige
            >
              <path 
                d="M15.2719 14.6891L11.9803 11.3981C12.9343 10.2527..." 
                fill="currentColor"
                stroke="currentColor" 
                strokeWidth="0.252446"
              />
            </svg>
          </div>

          {/* Login Button */}
          <Link
            href="/login"
            className="px-4 py-2.5 bg-background-green rounded-full hover:bg-button-secondary-hover transition-colors"
          >
            <span className="text-label-200 font-medium text-content-primary">
              Login
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}