const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


const products = [
    {
        id: 1,
        title: "Air Force",
        price:1119,
        colors: [
            {
            code: "yellow",
            img: "./img/airforce_shoe1.png",
        },
        {
            code: "blue",
            img: "./img/airforceeblue.png",
        },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price:2219,
        colors: [
            {
            code: "red",
            img: "./img/jordan1.png",
        },
        {
            code: "blue",
            img: "./img/jordanBlue.png",
        },
        ],
    },

    {
        id: 3,
        title: "BLAZER",
        price:3119,
        colors: [
            {
            code: "whitesmoke",
            img: "./img/blazer_shoes1.png",
        },
        {
            code: "blue",
            img: "./img/blazerBlue.png",
        },
        ],
    },

    {
        id: 4,
        title: "CRATER",
        price:5619,
        colors: [
            {
            code: "black",
            img: "./img/crater1.png",
        },
        {
            code: "blue",
            img: "./img/craterBlue.png",
        },
        ],
    },

 {
        id: 5,
        title: "HIPPIE",
        price:7119,
        colors: [
            {
            code: "grey",
            img: "./img/hippie_shoe1.png",
        },
        {
            code: "blue",
            img: "./img/hippieBlue.png",
        },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        console.log("you clicked!"+ index);
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //change the choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //assigning new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    });
});


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src= choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor= "white"
            size.style.color= "black" 
        })
        size.style.backgroundColor= "black"
        size.style.color= "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});

close.addEventListener("click",()=>{
    payment.style.display="none"
});