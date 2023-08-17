import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex-column items-center justify-between py-">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-center ">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className='flex justify-center pt-8 pb-6 ' >
        <img className='w-30 h-10 max-w-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Digg-new.svg/1200px-Digg-new.svg.png'></img>
      </div>
      <hr></hr>
      <div className="flex items-center text-base leading-5 justify-center py-4 ml-9 ">
        <div className="hidden sm:flex space-x-2">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-extrabold text-gray-900 dark:text-gray-100 sm:p-4"
            >
              <div className="flex items-center">
                  {link.title === 'Login' ? <FaUser/> : link.title}
              </div>
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
