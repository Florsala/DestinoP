import React, { useContext } from 'react';
import Header from './Header';
import Section from "../Section";
import { useEffect } from 'react';
import { getSeo } from '../../helpers/getSeo';
import DocumentMeta from 'react-document-meta';
import cartContext from '../../context/CartContext';


const Home = () => {
  const [meta, setMeta] = React.useState('')
  const { idioma } = useContext(cartContext);
  useEffect(() => {
    if (idioma) {
      getSeo(idioma.id, 'Inicio').then((response) => {
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