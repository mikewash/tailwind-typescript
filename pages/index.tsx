import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import {getRequest} from "./api/serverClient";
import {useEffect, useState} from "react";

const MAX_DISPLAY = 30

export default function Home() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [mainArticle, setMainArticle] = useState([]);

  useEffect(() => {
    getRequest().then(data => {
      if (!data) return;
      const results = data.data;
      console.log('results', results)
      setMainArticle(results.slice(0, 1))
      setData(results.slice(1));
      setData2(data.data2);
    })
  }, [])

  const basePath = `/category/newest`

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <ul className="flex flex-wrap">
          {!mainArticle.length && 'No posts found.'}
          {mainArticle.map((post, index) => {
            const { created, title, summary, thumbnail} = post;
            const tagsArray = data2[index]|| [];
            const encodedTitle = title.replace(/ /g, '_');
            const currentImage = thumbnail ? thumbnail : 'https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
            return (
                <article>
                  <div key={index}>
                  <div className="flex mb-4">
                    <div>
                      <div className='pr-14'>
                      <img className='w-full h-full' src={currentImage} />
                      </div>
                    </div>
                    <div className="w-2/5">
                      <div className="space-y-5 xl:col-span-3">
                        <div>
                          <div>
                            <h2 className="text-3xl font-bold leading-8 tracking-tight">
                              <Link href={`/${basePath}/${encodedTitle}`} className="hover:text-primary-600">
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                          {tagsArray.length > 0 ? (
                            tagsArray.map((tag, tagIndex) => (
                            <Tag key={tagIndex} text={tag.name} />
                            ))
                            ): (
                            <div className="px-4 py-2.5"></div>
                            )}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </article>
            )
          })}
        </ul>
        <ul className="grid grid-cols-3 gap-4">
          {!data.length && 'No posts found.'}

          {data.map((post, index) => {
            const { created, title, summary, thumbnail} = post;
            const tagsArray = data2[index]|| [];
            const encodedTitle = title.replace(/ /g, '_');
            const currentImage = thumbnail ? thumbnail : 'https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
            return (
                <article>
                  <div key={index}>
                    <div className=''>
                    <img className='h-auto' src={currentImage} />
                    </div>
                    <dl>
                      <dt className="sr-only">Published on</dt>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <span className="text-gray-900 dark:text-gray-100">
                            <Link href={`/${basePath}/${encodedTitle}`} className="hover:text-primary-600">
                              {title}
                            </Link>
                          </span>
                          </h2>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
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
