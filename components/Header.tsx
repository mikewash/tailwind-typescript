import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className="flex-column items-center justify-between py-">
      <div>
        <div className='flex justify-center bg-[#0152cc] pt-8 pb-8 space-x-4'>

          <div className='self-center'>
            <svg viewBox="0 0 47 27" width="47" height="27" xmlns="http://www.w3.org/2000/svg" aria-label="Digg">
              <path d="M5.025 10.025H7V17H5.025v-6.975zM0 21h12V0H7v6H0v15zM14 6h5v15h-5zm0-6h5v4h-5zm12 10h2v7h-2v-7zm-5 11h7v2h-7v4h12V6H21v15zm19-11h2v7h-2v-7zm-5 11h7v2h-7v4h12V6H35v15z" fill="#FFF" fill-rule="evenodd"></path>
            </svg>
          </div>

          <div className='border border-white-600 h-15'></div>
          <div>
            <span className='text-white text-xs'> SIGN UP FOR DIGG'S MORNING NEWSLETTER</span>
            <br></br>
            <span className='text-white'> The best stories of the day, in your inbox</span>
          </div>
          <div className='relative'>
            <button className="bg-white hover:bg-gray-100 text-[#0152cc] font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Subscribe Now
            </button>

            <button className='absolute -bottom-8 right-1 text-xs text-white'> HIDE </button>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className="grid grid-cols-3 pt-4 pb-4">
        <nav>
          <div className="p-4">
            <div>
              <ul className="flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Explore</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Merch</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='flex justify-center items-center'>
          <a href="/"> <img className='w-30 h-10 max-w-auto' src='/static/images/diggLogo.png'></img> </a>
        </div>

        <div className='flex justify-end items-center'>
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </a>
        </div>

      </div>




      <hr></hr>
      <div className="flex items-center text-base leading-5 justify-center py-4 ml-9 ">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-extrabold text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
