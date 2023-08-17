import siteMetadata from '@/data/siteMetadata'
import ListLayoutDyn from '@/layouts/ListLayoutDyn'
import { PageSEO } from '@/components/SEO'
import { useEffect, useState } from 'react'
import { getCategory } from 'pages/api/serverClient'
import { useRouter } from 'next/router'

export const POSTS_PER_PAGE = 10

export default function CategoryPage() {

const router = useRouter(); 
const { category } = router.query; 


  const[data, setData] = useState([]);

  useEffect(() => {
    getCategory(`category/${category}`).then(data => {
        //console.log('Fetched data:', data);
        setData(data.data);
    })
  },[category])

  const initialDisplayPosts = data.slice(0, POSTS_PER_PAGE);

    const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(data.length / POSTS_PER_PAGE),
    categories: category
  }

 
  
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayoutDyn
        posts={data}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Category Posts'}
      />
    </>
  )
}