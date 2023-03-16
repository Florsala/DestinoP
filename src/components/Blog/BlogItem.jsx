import React, { useContext, useEffect, useState } from "react";
import DocumentMeta from "react-document-meta";
import { useParams } from "react-router-dom";
import cartContext from "../../context/CartContext";
import { getBlog } from "../../helpers/getBlog";

const BlogItem = () => {
  const [item, setItems] = useState([]);
  const { id } = useParams();
  const { environment } = useContext(cartContext);
  const [meta, setMeta] = useState('')
  useEffect(() => {
    getBlog().then((b) => {
      const itemToShow = b.filter((blog) => blog.id === +id)[0]
      setItems(itemToShow)
      setMeta({
        title: itemToShow.seoTitle,
        description: itemToShow.seoDescription,
        meta: {
          charset: 'utf-8',
          name: {
            keywords: itemToShow.seoKeyword
          }
        }
      })
    })


  }, [id])









  return (<>
    <DocumentMeta {...meta} />
    <div
      className="container"
      style={{
        gap: "1.5rem",
        marginTop: "8rem",
        textAlign: "left",
        marginBottom: " 5rem",
        width: "50rem",
      }}
    >
      <h1>{item.titulo}</h1>
      <p className="blog-i-text" dangerouslySetInnerHTML={{ __html: item.texto }}></p>

      <div style={{ width: "100%", objectFit: "cover" }}>
        <img style={{ width: "100%" }} src={`${environment}${item.imagen}`} alt="" />
      </div>
    </div>
  </>
  );
};


export default BlogItem;
