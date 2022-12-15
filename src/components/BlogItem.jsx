import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataBlog from "../data/dataBlog";


const BlogItem = () => {
  const [item, setItems] = useState({});

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
  }, [id]);

  return (
    <div className='container' style={{marginTop:'8rem', textAlign: 'left'}} >

      <h1>{item.title}</h1>
      <p>{item.text}</p>

    <div >
      <img style={{maxWidth:'31.25rem'}} src={item.img} alt="" />
    </div>




    </div>
  )
}

export default BlogItem