import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataBlog from "../data/dataBlog";

const BlogItem = () => {
  const [item, setItems] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

const fetchBlogItem = async () => {
 await fetch(`http://turismo.elemsoft.net/webapi/api/Blog/GetListByIdioma?id=1${id}`)
  .then(res => res.json())
  .then(
    (data) => {
      setLoading(true);
      setItems(data);
console.log(  [id]);


  })

};


useEffect(() =>{
  
  fetchBlogItem();
 
}, []);

/*   const [item, setItems] = useState({});

  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getItems = new Promise((resolve) => {
    setTimeout(() => {
      const data = id ? dataBlog.find((item) => item.id === id) : dataBlog;

      resolve(data);
    }, 2000);
  });
  console.log(item);

  useEffect(() => {
    getItems.then((res) => setItems(res)).finally(() => setLoading(false));
  }, [id]); */

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
