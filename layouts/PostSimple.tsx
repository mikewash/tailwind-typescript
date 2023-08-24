import { useState, ReactNode } from 'react' 
import { Comments } from 'pliny/comments'
import { formatDate } from 'pliny/utils/formatDate'
import React from 'react';
//import { CoreContent } from 'pliny/utils/contentlayer'
//import type { Blog } from 'contentlayer/generated'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface Blog {
  id: number
  title: string
  content: string
  authorid: number
  created: string
}

interface LayoutProps {
  post: Blog
  children: ReactNode
  tags: any[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

 function TagsList({ tags }) {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="px-2 py-1 m-1 text-sm bg-gray-200 rounded-md dark:bg-gray-800"
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

export default function PostLayout({ post, next, prev, children, tags }: LayoutProps) {
  const [loadComments, setLoadComments] = useState(false)

  const { id, title, content, authorid, created } = post

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={created}>{formatDate(created, siteMetadata.locale)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                  <div key={tag.name} className="mr-2 mb-2">
                    {tag.name}
                    </div>
                    ))}
                    </div>
                  </div>
                </div>
              </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{content}</div>
            </div>
            {siteMetadata.comments && (
              <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300" id="comment">
                {!loadComments && (
                  <button onClick={() => setLoadComments(true)}>Load Comments</button>
                )}
                {loadComments && <Comments commentsConfig={siteMetadata.comments} />}
              </div>
            )}
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${prev.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Previous post: ${prev.title}`}
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${next.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Next post: ${next.title}`}
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
