import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { NewsletterForm } from 'pliny/ui/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { getBlogWithTags } from 'server/models'
import {getBlogs, getNames, postLogin} from "./api/serverClient";
import {useEffect, useState} from "react";

const MAX_DISPLAY = 6

// export const getStaticProps = async () => {
//   const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
//   const posts = allCoreContent(sortedPosts)

//   return { props: { posts } }
// }

// export async function getServerSideProps() {
//   const posts = await getBlogWithTags(); 
//   return { props: {posts}};
// }

// export default function Home({ posts }: InferGetStaticPropsType<typeof getServerSideProps>)


export default function Home() {



  const [data, setData] = useState<>([])
  
  useEffect(() => {
    getBlogs().then(data => {
      console.log(data);
      setData(data.data);
    })
  }, [])

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="flex justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="flex justify-center text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-4">
          {!data.length && 'No posts found.'}
          {data.slice(0, MAX_DISPLAY).map((post) => {
            const { created, title, overview, tags } = post
            return (
                <article>
                  <div>
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
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {overview}
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
      {siteMetadata.newsletter.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
