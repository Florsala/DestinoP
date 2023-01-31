import React, { useState } from 'react'

//import pinguinos from "../../assets/pinguinos.jpg";
//import harberton from "../../assets/harberton.jpg";
//import videoP from "../assets/video-p.mp4";


/*  const imagenes = [
  {
    path: pinguinos,
  },
  {
    path: harberton,
  },
  {
    path: pinguinos,
  },
  {
    path: pinguinos,
  },
  {
    path: pinguinos,
  },
  {
    path: pinguinos,
  },
  {
    path: pinguinos,
  },
  {
    path: pinguinos,
  },
] */

/* const videos = [
   {path: videoP}
 ] */
 



const ItemDetailGrid = ({item}) => {


    const [selectedImg, setSelectedImg] = useState(item.imagenes[0].path)

    const [model, setModel] = useState(false);
    const [picImage, setPicImage] = useState("");
    const [click, setClick] = useState(false)
  
    const getImg = (img) => {
      setPicImage(img);
      setModel(true);
    };

    const handleClick = (e) =>{
console.log(e); 
//setModel(true);
setClick(!click)
    }

  return (

    <div className="container-md container-grid-img" >
            <img src={selectedImg} alt="selected"
            className={click ? 'container-grid-img_first open' : 'container-grid-img_first' }
            onClick={handleClick} 
            />
           {/*  {videos.map((video, index) => (
              <video
              key={index}
                src={video.path}
                width="500"
                height="400"
                controls="controls"
                autoPlay={true}
              ></video>
            ))}  */}
            {item.imagenes.map((img, index) => (
              <img key={index} src={img.path} alt="" 
              onClick={()=> setSelectedImg(img.path)}
              />
            ))}
            
          </div>
  )
}

export default ItemDetailGrid