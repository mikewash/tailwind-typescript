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
            <span className='text-white'> SIGN UP FOR DIGG'S MORNING NEWSLETTER</span>
            <br></br>
            <span className='text-white object-bottom'> The best stories of the day, in your inbox</span>
          </div>
          
          <button className="bg-white hover:bg-gray-100 text-[#0152cc] font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Subscribe Now
          </button>
        </div>
        
        <Link href="/">
          <div className="flex items-center justify-center pt-8 pb-6 ">
            <div className="mr-3">
              <img className='w-30 h-10 max-w-auto' src='/static/images/diggLogo.png'></img>
            </div>
          </div>
        </Link>
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
