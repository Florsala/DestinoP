import { createContext,  useEffect,  useState } from "react";


const cartContext = createContext();


const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    

useEffect(() => {
    
}, [cart])


useEffect(() =>{
if (localStorage.getItem("Cart") !== null ){
    setCart(JSON.parse(localStorage.getItem("Cart")));
}}, []);


useEffect(() => {
  localStorage.setItem("Cart", JSON.stringify(cart));
}, [cart]);



 
function addItem (item) {
if(item) setCart ([...cart, item])
 
}




const addTotal = () => {
  
  return cart.reduce((quantity, value) =>{
    let precio = 0;
    
    value.quantity.forEach((i)=>{
      precio += i.precio * i.cantidad
  }) 
     return quantity + precio}, 0)
}



const removeItem = (item, index) => {

  const newList = cart.filter(
    e => e.item.id !== item.item.id
  )
  debugger
setCart(newList);
addTotal();
}

const clearCart = () => {

 
setCart([]);

}





const context = {
    cart: cart,
    total: cart.length,
    quantity: cart.quantity,
    addTotal: addTotal,
    addItem: addItem,
    removeItem: removeItem,
    clearCart:clearCart,
   
   
}




return (

<cartContext.Provider value={context}>
{children}
</cartContext.Provider>



)



}

export {CartProvider}

export default cartContext;