import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { useEffect, useState } from 'react'
import { getRequest } from 'pages/api/serverClient'
import { useRouter } from 'next/router'
import PostLayout from '@/layouts/PostLayout'
import PostSimple from '@/layouts/PostSimple'


export default function singleBlogPage() {

const router = useRouter(); 
const { category } = router.query; 
const { blog } = router.query; 



  const[data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    getRequest(`category/${category}/${blog}`).then(data => {
        console.log('Fetched data:', data);
        setData(data.data);
        setData2(data.data2);
    })
  },[category, blog])
  return (
     <>
    <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
    {data.map((blog) => (
      <PostSimple key={blog.id} post={blog} tags={data2}>
    
      </PostSimple>
    ))}
  </>
  )
}