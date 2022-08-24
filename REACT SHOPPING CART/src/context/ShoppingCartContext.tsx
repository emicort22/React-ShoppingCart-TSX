import { createContext, ReactNode, useContext, useState } from "react";
import {ShoopingCart }from "../components/ShoopingCart"
 
type ShoopingCartProviderProps ={
   children: ReactNode
}
type CartItem= {
   id:number
   quantity: number
}
type ShoopingCartContext={
openCart:()=> void
closeCart:()=>void
 
   getItemQuantity:(id:number)=>number
   increaseCarQuantity:(id:number)=>void
   decreaseCarQuantity:(id:number)=> void
   removeFromCart:(id:number)=>void
   cartQuantity:number
cartItems:CartItem[]
}
const ShoopingCartContext= createContext({} as ShoopingCartContext)
 
 
 
export function useShoopingCart(){
   return useContext(ShoopingCartContext)
}
 
export function ShoopingCartProvider({children}:
   ShoopingCartProviderProps){
       const [isOpen, setIsOpen]= useState(false)
const [cartItems, setCartItems]= useState<CartItem[]>([])
 
 
const cartQuantity =cartItems.reduce(
   (quantity, item)=>item.quantity + quantity, 0
)
const openCart=()=>setIsOpen(true)
const closeCart=()=>setIsOpen(false)
 
 
function getItemQuantity(id:number){
   return cartItems.find(item=>item.id===id)?.quantity || 0
}
function increaseCarQuantity (id:number){
   setCartItems(currItems=>{
       if (currItems.find(item=>item.id===id)==null){
           return [...currItems,{id,quantity:1}]
       } else{
           return currItems.map(item=> {
               if (item.id===id){
                   return {...item, quantity:item.quantity +1}
               } else{
                   return item
               }
           })
       }
   })
}
 
function decreaseCarQuantity (id:number){
   setCartItems(currItems=>{
       if (currItems.find(item=>item.id===id)?.quantity===1){
           return currItems.filter(item=>item.id !==id)
       } else{
           return currItems.map(item=> {
               if (item.id===id){
                   return {...item, quantity:item.quantity -1}
               } else{
                   return item
               }
           })
       }
   })
}
function removeFromCart(id:number){
   setCartItems(currItems=>{
       return currItems.filter(item=>item.id !==id)
   })
}
 
   return (
       <ShoopingCartContext.Provider value={{getItemQuantity,
       increaseCarQuantity,
        decreaseCarQuantity,
         removeFromCart, cartItems, cartQuantity,
         openCart,
         closeCart}}>
       {children}
       <ShoopingCart />
       </ShoopingCartContext.Provider>
   )
 
}

