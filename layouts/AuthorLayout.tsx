import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <div className="grid grid-rows grid-flow-col gap-24">
          <div>
          <Image
              src={'/static/images/about-pic.png'} 
              alt="avatar"
              width={192}
              height={192}
              className="h-60 w-60 rounded-full"
            />
          </div>
          <div>
            <p className="text-xl font-normal text-gray-900 dark:text-white">
            Hi! Welcome to our blog website. This website was created by a group of MLT fellows. We're all individuals that are pursuing a career in software engineering and with an interest in web development. We've spent several weeks working together to put this website together in order to get some experience with web development. We hope you love it!
            </p>
          </div>
        </div>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-5">{children}</div>
        </div>
      </div>
    </>
  )
}
