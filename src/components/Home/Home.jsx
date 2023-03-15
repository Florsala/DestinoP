import React from 'react';
import Header from './Header';
import Section from "../Section";
import { useEffect } from 'react';
import { getSeo } from '../../helpers/getSeo';
import DocumentMeta from 'react-document-meta';


const Home = () => {
  const [meta, setMeta] = React.useState('')
  useEffect(() => {
    getSeo(1, 'Inicio').then((response) => {
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

  return (<>
    <DocumentMeta {...meta} />
    <div>


      <Header />

      <Section />

    </div>
  </>

  )
}

export default Home