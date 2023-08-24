import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayoutDyn from '@/layouts/ListLayoutDyn'
//import { allCoreContent, sortedBlogPost } from 'pliny/utils/contentlayer'
import { POSTS_PER_PAGE } from '..'
// import { InferGetStaticPropsType } from 'next'
// import { allBlogs } from 'contentlayer/generated'
import data from '..'
// import type { Blog } from 'contentlayer/generated'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { getCategory } from 'pages/api/serverClient'


export default function PostPage() {

const router = useRouter(); 
const { category } = router.query; 
const { page } = router.query; 


  const[data, setData] = useState([]);

  useEffect(() => {
    getCategory(`category/${category}/page/${page}`).then(data => {
        //console.log('Fetched data:', data);
        setData(data.data);
    })
  },[category, page])



  const pageNumber = parseInt(page as string)
  const initialDisplayPosts = data.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(data.length / POSTS_PER_PAGE),
  }



  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListLayoutDyn
        posts={data}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Category Posts'}
      />
    </>
  )
}