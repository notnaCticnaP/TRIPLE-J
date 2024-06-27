const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Hanzo",
    price: "Assasin",
    colors: [
      {
        code: "black",
        img: "hanzoskills.jpg",
      },
      {
        code: "darkblue",
        img: "hanzobuild.jpg",
      },
      {
        code: "darkblue",
        img: "hanzocounter.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Fredrinn",
    price: "Tank",
    colors: [
      {
        code: "lightgray",
        img: "fredskills.jpg",
      },
      {
        code: "green",
        img: "fredbuild.jpg",
      },
      {
        code: "black",
        img: "fredcounter.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Beatrix",
    price: "marksman",
    colors: [
      {
        code: "lightgray",
        img: "beaskills.jpg",
      },
      {
        code: "green",
        img: "beabuild.jpg",
      },
      {
        code: "darkblue",
        img: "beatrixcounter.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Balmond",
    price: 129,
    colors: [
      {
        code: "Fighter",
        img: "balmondskills.jpg",
      },
      {
        code: "lightgray",
        img: "balmondbuild.jpg",
      },
      {
        code: "green",
        img: "balmondcounter.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Vale",
    price: "Mage",
    colors: [
      {
        code: "gray",
        img: "valeskills.jpg",
      },
      {
        code: "darkblue",
        img: "valebuild.jpg",
      },
      {
        code: "green",
        img: "valecounter.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
