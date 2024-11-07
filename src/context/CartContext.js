import { createContext,  useEffect,  useState } from "react";


const cartContext = createContext();

const urlEnvironment = 'https://destinopatagonia.com'
//const urlEnvironment = 'https://turismo.elemsoft.net'
const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    const [environment, setEnvironment] =useState('')
    const [idioma, setIdioma] =useState('')
    

useEffect(() => {
    
}, [cart,environment])


useEffect(() =>{
if (localStorage.getItem("Cart") !== null ){
    setCart(JSON.parse(localStorage.getItem("Cart")));}
if (localStorage.getItem("Environment") !== null ){
      setEnvironment(JSON.parse(localStorage.getItem("Environment")));
}}, []);


useEffect(() => {
  localStorage.setItem("Cart", JSON.stringify(cart));
  localStorage.setItem("Environment", JSON.stringify(urlEnvironment));
}, [cart, environment]);



function addItem (item) {
if(item) setCart ([...cart, item])
 
}




const addTotal = () => {
  
  return cart.reduce((quantity, value) =>{
    let precio = 0;
    
    value.quantity.forEach((i)=>{
      precio += +i.precio.toString().replace(/,/g,'') * i.cantidad
  }) 
     return quantity + precio}, 0)
}



const removeItem = (item, index) => {

  const newList = cart.filter(
    e => e.item.id !== item.item.id
  )
setCart(newList);
addTotal();
}

const clearCart = () => {

 
setCart([]);

}

const setIdiomaObject = (idioma)=>{
     setIdioma(idioma)
     localStorage.setItem("Idioma", JSON.stringify(idioma));
}
const getIdiomaSeccion = (seccion)=> {
 
  if(idioma) return idioma.etiquetas.filter((e)=>e.seccion.trim() === seccion)
  return []
}


const context = {
    cart: cart,
    total: cart.length,
    quantity: cart.quantity,
    addTotal: addTotal,
    addItem: addItem,
    removeItem: removeItem,
    clearCart:clearCart,
    environment,
    setIdiomaObject,
    idioma,
    getIdiomaSeccion
   
   
}




return (

<cartContext.Provider value={context}>
{children}
</cartContext.Provider>



)



}

export {CartProvider}

export default cartContext;