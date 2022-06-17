import {navbar} from '..//component/navbar.js';
document.getElementById('navbar').innerHTML =navbar();

import {footter} from '..//component/footter.js';
document.getElementById('footer').innerHTML =footter();







let data2 =[
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/VITCMOIST_360x.jpg?v=1655302755",
    name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin  ",
    price:699 ,
    
  },
  
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN_540x.jpg?v=1655303963",
    name: "Cica + Niacinamide Face Sunscreen SPF 50 PA+++",
    price:810 ,
    
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20_VITC_360x.jpg?v=1655379925",
    name: "20% Vitamin C Serum with Blood Orange  ",
    price:532 ,
    
  },

  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cicacleanser_360x.jpg?v=1655310819",
    name: "Cica & Green Tea Face Wash With Salicylicly ",
    price:299 ,
    
   },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_e423c2c9-3a60-4a5e-9bc0-b0526b7f3c01_360x.jpg?v=1655302612",
    name: "Retinol & Ceramide Age Defense Night Cream  ",
    price: 662,
    
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/prbox_360x.jpg?v=1655304058",
    name: "Big Birthday Special Skincare Kit ",
    price: 1999,
    
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_360x.jpg?v=1655302709",
    name: "72 HR Hydrating Probiotic Gel Moisturizer For Face  ",
    price:596 ,
    
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICANIGHTGEL_3_360x.jpg?v=1655379818",
    name: "CICA Niacinamide Night Gel With Green Tea ",
    price:506 ,
    
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASK_360x.jpg?v=1655311025",
    name: "Vitamin C Lip Mask With Vitamin E, Shea Butter ",
    price: 356,
    
  },  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/NIACINAMIDE_6ffa90b5-94d9-4ecc-bff1-c4c113fe47b5_360x.jpg?v=1655311005",
    name: "10% Niacinamide Face Serum With Zinc ",
    price: 499,
    
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-GreenClayListing_1_360x.jpg?v=1649655908",
    name: "Salicylic & French Green Clay Face Mask ",
    price: 487,
    
  },

  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard2-6_360x.jpg?v=1648088650",
    name: " Pineapple & Vitamin C Face Sleep Mask",
    price: 647,
    
  },

  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/VITCMOIST_360x.jpg?v=1655302755",
    name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin  ",
    price:699 ,
    
  },
  
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN_540x.jpg?v=1655303963",
    name: "Cica + Niacinamide Face Sunscreen SPF 50 PA+++",
    price:810 ,
    
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20_VITC_360x.jpg?v=1655379925",
    name: "20% Vitamin C Serum with Blood Orange  ",
    price:532 ,
    
  },

  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cicacleanser_360x.jpg?v=1655310819",
    name: "Cica & Green Tea Face Wash With Salicylicly ",
    price:299 ,
    
   },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_e423c2c9-3a60-4a5e-9bc0-b0526b7f3c01_360x.jpg?v=1655302612",
    name: "Retinol & Ceramide Age Defense Night Cream  ",
    price: 662,
    
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/prbox_360x.jpg?v=1655304058",
    name: "Big Birthday Special Skincare Kit ",
    price: 1999,
    
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_360x.jpg?v=1655302709",
    name: "72 HR Hydrating Probiotic Gel Moisturizer For Face  ",
    price:596 ,
    
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICANIGHTGEL_3_360x.jpg?v=1655379818",
    name: "CICA Niacinamide Night Gel With Green Tea ",
    price:506 ,
    
  },
 
]

var cartData = JSON.parse(localStorage.getItem("cart")) || [];
data2.map(function (elem) {
  var box = document.createElement("div");

  var img = document.createElement("img");
  img.src = elem.image_url;
  img.setAttribute("id","immy")


  var name = document.createElement("p");
  name.textContent = elem.name;

  var price = document.createElement("p");
  price.innerText = elem.price;

  var btn = document.createElement("button");
  btn.innerText = "Add to Cart";
  btn.addEventListener("click", function () {
    addToCart(elem);
  });

  box.append(img, name, price, btn);

  document.querySelector("#p2js").append(box);
});

function addToCart(elem) {
  console.log(elem);
  cartData.push(elem);
  localStorage.setItem("cart", JSON.stringify(cartData));
  alert("Item sucessfully added to cart");

  
}