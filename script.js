const desertCart=document.getElementById("desert")
const btn=document.getElementById("btn")
const cart=document.getElementById("cart")
const head=document.getElementById("heading")
const products = [
  {
    id: 1,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
  {
    id: 2,
    name: "French Macaroon",
    price: 3.99,
    category: "Macaroon",
  },
  {
    id: 3,
    name: "Pumpkin Cupcake",
    price: 3.99,
    category: "Cupcake",
  },
  {
    id: 4,
    name: "Chocolate Cupcake",
    price: 5.99,
    category: "Cupcake",
  },
  {
    id: 5,
    name: "Chocolate Pretzels (4 Pack)",
    price: 10.99,
    category: "Pretzel",
  },
  {
    id: 6,
    name: "Strawberry Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 7,
    name: "Chocolate Macaroons (4 Pack)",
    price: 9.99,
    category: "Macaroon",
  },
  {
    id: 8,
    name: "Strawberry Pretzel",
    price: 4.99,
    category: "Pretzel",
  }
];

products.forEach((product,index)=>{
    const {name,id,price,category}=product
    desertCart.innerHTML += `<div class="desert-style"><h2>${name}</h2>
    <h3>${price}</h3>
    <h3>${category}</h3>
    <button id="btn" data-index="${index}">addTocart</button>
    </div>`
})
let sum=0
let total=0;
let allCart=[]
desertCart.addEventListener("click",(e)=>{
    
    if(e.target.tagName ==='BUTTON'){
        const productIndex=parseInt(e.target.dataset.index)
        const{name,id,price,category}=products[productIndex]
        head.style.display="block"


        const findItem=allCart.find(item=>item.id===id)
        if(findItem){
          findItem.quantity++
          total+=price
        }
        else{
          allCart.push({name,id,price,quantity:1})
          total+=price
        }
       let cartItemHTML=''
        allCart.forEach(item=>{
          cartItemHTML += `<div class="cart-style"><h4>${item.quantity} ${item.name}</h4>
          <h5>${item.price}</h5>
          <h5>totalPrice:${((item.price*item.quantity)).toFixed(2)}</h5>
      </div>`

        })
        
        cart.innerHTML=cartItemHTML

    }
})

function clearCart(){
  cart.innerHTML=""
  head.style.display="none"
}