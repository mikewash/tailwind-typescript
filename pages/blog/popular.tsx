import siteMetadata from '@/data/siteMetadata'
import ListLayoutDyn from '@/layouts/ListLayoutDyn'
import { PageSEO } from '@/components/SEO'
import { useEffect, useState } from 'react'
import {getRequest} from 'pages/api/serverClient'

export const POSTS_PER_PAGE = 10

export default function BlogPage() {

  const[data, setData] = useState([]);

  useEffect(() => {
      getRequest('blog/popular').then(data => {
        console.log('Fetched data:', data);
        setData(data.data);
    })
  },[])

  const initialDisplayPosts = data.slice(0, POSTS_PER_PAGE);

    const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(data.length / POSTS_PER_PAGE),
  }
  
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayoutDyn
        posts={data}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Popular Posts"
      />
    </>
  )
}