import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogItem = () => {
  const [item, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    
    const getBlogItem = async () => {
const data = await fetch(`http://destinopatagonia.elemsoft.net/webapi/api/Blog/GetListByIdioma?id=1${id}`)
const blogItem = await data.json() 

      setItems(blogItem);
console.log(blogItem);


  }
    getBlogItem()
  
    
  }, [id])
  








  return (
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
      <p className="blog-i-text">{item.texto}</p>

      <div style={{ width: "100%", objectFit: "cover" }}>
        <img style={{ width: "100%" }} src={item.imagen} alt="" />
      </div>
    </div>
  );
};


export default BlogItem;
