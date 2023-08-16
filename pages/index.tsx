import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import {getBlogs, getNames, postLogin} from "./api/serverClient";
import {useEffect, useState} from "react";

const MAX_DISPLAY = 6

export default function Home() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  
  useEffect(() => {
    getBlogs().then(data => {
      if (!data) return;
      console.log('data', data)
      setData(data.data);
      setData2(data.data2);
    })
  }, [])

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div>
          {/* <h1 className="flex justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="flex justify-center text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p> */}
        </div>
        <ul className="grid grid-cols-3 gap-4">
          {!data.length && 'No posts found.'}
          {data.slice(0, MAX_DISPLAY).map((post, index) => {
            const { created, title, summary} = post;
            const tagsArray = data2[index]|| [];
            return (
                <article>
                  <div key={index}>
                    <div className=''>
                    <img className='h-auto max-w-md' src="https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
                    </div>
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={created}>{formatDate(created, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <span className="text-gray-900 dark:text-gray-100">{title}</span>
                          </h2>
                          <div className="flex flex-wrap">
                            {tagsArray.map((tag, tagIndex) => (
                              <Tag key={tagIndex} text={tag.name} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                      <span className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                       Read more &rarr;
                      </span>
                      </div>
                    </div>
                  </div>
                </article>
            )
          })}
        </ul>
      </div>
      {data.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
