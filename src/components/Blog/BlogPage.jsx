import React, { useEffect } from 'react';
import DocumentMeta from 'react-document-meta';
import { getSeo } from '../../helpers/getSeo';
import Blog from './Blog';
import BlogCards from './BlogCards';

const BlogPage = () => {
  const [meta, setMeta] = React.useState('')
  useEffect(() => {
    getSeo(1, 'Blog').then((response) => {
      setMeta({
        title: response.data.seoTitle,
        description: response.data.seoDescripcion,
        meta: {
          charset: 'utf-8',
          name: {
            keywords: response.data.seoKeywords
          }
        }
      })
    })

  }, [])
  return (
    <>
      <DocumentMeta {...meta} />
      <Blog />

      <BlogCards />




    </>
  )
}

export default BlogPage