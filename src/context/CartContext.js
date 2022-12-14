import { createContext,  useEffect,  useState } from "react";


const cartContext = createContext();


const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    

useEffect(() => {
    console.log('products', cart);
    
}, [cart])


useEffect(() =>{
if (localStorage.getItem("Cart") !== null ){
    setCart(JSON.parse(localStorage.getItem("Cart")));
}}, []);


useEffect(() => {
  localStorage.setItem("Cart", JSON.stringify(cart));
}, [cart]);



 
function addItem (item) {
   let itemsList = [...cart]
    
  
  if(itemsList.some(e => e.item.id === item.item.id)){
    itemsList.find(e => e.item.id === item.item.id)    
     .quantity += item.quantity 
    setCart(itemsList) 


    
  } else{
    setCart ([...cart, item])
  }
}




const addTotal = () => {

  return cart.reduce((quantity, value) => (quantity + (value.quantity*value.item.price)), 0)
}



const removeItem = (item) => {

  const newList = cart.filter(
    e => e.item.id !== item.item.id
  )
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