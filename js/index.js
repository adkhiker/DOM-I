const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM IS AWESOME",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Start here
let nav = document.querySelectorAll("a");
let cta = document.getElementById("cta-img");
let h1 = document.querySelector("h1");
let button = document.querySelector("button");
let midImage = document.getElementById("middle-img");
let txtcontent = document.querySelectorAll("p");
let h4 = document.querySelectorAll("h4");

cta.setAttribute("src", siteContent["cta"]["img-src"]);
midImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let navArray = Array.from(nav);
navArray[0].textContent = siteContent["nav"]["nav-item-1"];
navArray[1].textContent = siteContent["nav"]["nav-item-2"];
navArray[2].textContent = siteContent["nav"]["nav-item-3"];
navArray[3].textContent = siteContent["nav"]["nav-item-4"];
navArray[4].textContent = siteContent["nav"]["nav-item-5"];
navArray[5].textContent = siteContent["nav"]["nav-item-6"];

/* var mySelection = document.querySelector("h1");
mySelection = "test"; */

document.getElementsByTagName("h1");
h1.textContent = siteContent["cta"]["h1"];
h1.style.width = "72%";
h1.style.marginRight = "44px";
h1.innerHTML = "DOM" + "<br />" + "IS" + "<br />" + "AWESOME";
h1.style.textAlign = "center";
button.textContent = siteContent["cta"]["button"];
button.style.marginLeft = "-10px";

let h4Array = Array.from(h4);
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent["contact"]["contact-h4"];

let txtArray = Array.from(txtcontent);
txtArray[0].textContent = siteContent["main-content"]["features-content"];
txtArray[1].textContent = siteContent["main-content"]["about-content"];
txtArray[2].textContent = siteContent["main-content"]["services-content"];
txtArray[3].textContent = siteContent["main-content"]["product-content"];
txtArray[4].textContent = siteContent["main-content"]["vision-content"];
txtArray[5].textContent = siteContent["contact"]["address"];
txtArray[6].textContent = siteContent["contact"]["phone"];
txtArray[7].textContent = siteContent["contact"]["email"];
txtArray[8].textContent = siteContent["footer"]["copyright"];

navArray.forEach(function(navitem) {
  navitem.style.color = "green";
});

function newContent() {
  let newLink1 = document.createElement("a");
  newLink1.setAttribute("href", "#");
  let newLink2 = document.createElement("a");
  newLink2.setAttribute("href", "#");
  let newLink1txt = document.createTextNode("More");
  let newLink2txt = document.createTextNode("Home");
  newLink1.appendChild(newLink1txt);
  newLink2.appendChild(newLink2txt);
  let addlink = document.querySelector("nav");
  addlink.appendChild(newLink1).style.color = "green";
  addlink.prepend(newLink2);
  newLink2.style.color = "green";
}
newContent();
