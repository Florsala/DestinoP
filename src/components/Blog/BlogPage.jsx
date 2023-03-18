import React, { useContext, useEffect } from 'react';
import DocumentMeta from 'react-document-meta';
import cartContext from '../../context/CartContext';
import { getSeo } from '../../helpers/getSeo';
import Blog from './Blog';
import BlogCards from './BlogCards';

const BlogPage = () => {
  const [meta, setMeta] = React.useState('')
  const { idioma } = useContext(cartContext);
  useEffect(() => {
    if (idioma) {
      getSeo(idioma.id, 'Blog').then((response) => {
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
    }
  }, [idioma])
  return (
    <>
      <DocumentMeta {...meta} />
      <Blog />

      <BlogCards />




    </>
  )
}

export default BlogPage