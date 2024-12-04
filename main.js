let projects = {
    data:[
        {
        projetcName:"jacket joker",
        category:"Jackets",
        price:"300",
        img:"images/jacket-2.png",
    },
    {
        projetcName:"jacket joker",
        category:"Jackets",
        price:"300",
        img:"images/jacket-3.png",
    },
    {
        projetcName:"jacket joker",
        category:"Jackets",
        price:"300",
        img:"images/jacket-4.jpeg",
    },
    {
        projetcName:"jacket joker",
        category:"Jackets",
        price:"300",
        img:"images/jacket-5.jpeg",
    },
    {
        projetcName:"hoddie joker",
        category:"Hoddie",
        price:"400",
        img:"images/hoddie-1.png",
    },
    {
        projetcName:"hoddie joker",
        category:"Hoddie",
        price:"400",
        img:"images/hoddie-2.png",
    },
    {
        projetcName:"hoddie joker",
        category:"Hoddie",
        price:"400",
        img:"images/hoddie-3.png",
    },  
    {
        projetcName:"hoddie joker",
        category:"Hoddie",
        price:"400",
        img:"images/hoddie-4.png",
    },
    {
        projetcName:"panits joker",
        category:"Pants",
        price:"400",
        img:"images/paints-2.png",
    },
    {
        projetcName:"panits joker",
        category:"Pants",
        price:"400",
        img:"images/paints-4.jpeg",
    },
    {
        projetcName:"panits joker",
        category:"Pants",
        price:"400",
        img:"images/paits-1.png",
    },
    {
        projetcName:"panits joker",
        category:"Pants",
        price:"400",
        img:"images/panits-3.png",
    },
    {
        projetcName:"bags joker",
        category:"Bags",
        price:"500",
        img:"images/bags-1.jpeg",
    },
    {
        projetcName:"bags joker",
        category:"Bags",
        price:"500",
        img:"images/bags-2.jpeg",
    },
    {
        projetcName:"bags joker",
        category:"Bags",
        price:"500",
        img:"images/bags-3.jpeg",
    },
    {
        projetcName:"smartwatch joker",
        category:"Wristwatch",
        price:"500",
        img:"images/clock-1.jpeg",
    },
    {
        projetcName:"smartwatch joker",
        category:"Wristwatch",
        price:"500",
        img:"images/clock-2.jpeg",
    },
    {
        projetcName:"smartwatch joker",
        category:"Wristwatch",
        price:"500",
        img:"images/clock-3.jpeg",
    },
    {
        projetcName:"smartwatch joker",
        category:"Wristwatch",
        price:"500",
        img:"images/clock-4.jpeg",
    },
],
};

for(let i of projects.data){
    let card = document.createElement("div");
    card.classList.add("card",i.category,"hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    let image = document.createElement("img");
    image.setAttribute("src",i.img);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h3");
    name.classList.add("product-name".toUpperCase());

    let price = document.createElement("h3");
    price.classList.add("price");
    price.style.color = "green";
    price.innerText = "$" + i.price;
    name.innerText = i.projetcName;

    card.append(container);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    container.appendChild(name);
    container.appendChild(price);
    document.querySelector(".projects").appendChild(card);
}

function showData(value){
    let buttons = document.querySelectorAll(".btn-value");
    buttons.forEach((button) =>{
        if(value == button.innerText ){
            button.classList.add("active");
            button.style.color = "#fff";
        }
        else{
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) =>{
        if(value === "All"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}

window.onload = ()=>{
    showData("all");
} 