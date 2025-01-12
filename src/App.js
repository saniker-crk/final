import React, { useState } from 'react';
import Nav from './comp/nav';
import {BrowserRouter} from 'react-router-dom';
import Rout from './comp/rout';
import Footer from './comp/footer';
import Homeproduct from './comp/home_product';

const App = () => {
  //add to cart
  const [cart, setCart] = useState([])
  //Shop page
  const [shop,setShop] = useState(Homeproduct)
  
    //shop search filter
    const [search,setSearch] = useState('')

  //shop category filter

  const Filter = (x) =>
  {
    const catefilter = Homeproduct.filter((product) =>
    {
      return product.cat ===  x
    })
  
  setShop(catefilter)
  }


  //allcatefilter
  const allcatefilter = () =>
  {
    setShop(Homeproduct)
  }
  
  //shop search filter

  const searchlenght = (search || []).length === 0
  const searchproduct = () =>{
  if(searchlenght)
  {
    alert("please search something ")
    setShop(Homeproduct)
  }
  else
  {
      
        const searchfilter = Homeproduct.filter((x) =>
        {
          return x.cat === search
        })
        setShop(searchfilter)
      

  }
}
  
//add to  cart

const addtocart =(product) =>
{
  const exist = cart.find((x) =>{
    return  x.id === product.id
  })
  if(exist)
  {
    alert('tis product is already added in cart ')
  }
  else
  {
    setCart([...cart, {...product, qty:1}])
    alert('Added to cart')
  }
  
}

console.log(cart)
  
  return (
    <>
      <BrowserRouter>
      <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
      <Rout cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
