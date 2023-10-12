const card = document.querySelector(".card");
const btnPrimary = document.querySelector(".btn-primary");
const headTitle = document.querySelector(".header");
const cardTitle = document.querySelector(".card-title");
const bodyInformation = document.querySelector(".information");
const closeButton=document.querySelector(".btn-close")
headTitle.style.color = "black";
card.style.width = "40%";

headTitle.innerHTML =
  ".header" + `<span class="badge text-bg-secondary">4</span>`;



let changecard = function () {
  headTitle.style.color="White"
    card.style.backgroundColor = "red"
    cardTitle.style.color = "white"
    btnPrimary.style.backgroundColor = "black"
  btnPrimary.style.color = "blue"
  bodyInformation.textContent = "lorem";
  bodyInformation.style.color="White"
};
btnPrimary.addEventListener("click", changecard);




const removeChanging=function () {
  headTitle.style.color = "black";
  card.style.backgroundColor = "white"
  cardTitle.style.color = "#262626"
  bodyInformation.style.color = "#262626"
  bodyInformation.textContent = "  Some quick example text to build on the card title and make up the"
  btnPrimary.style.backgroundColor = "rgb(92, 92, 223)"
  btnPrimary.style.color="#fff"
  card.style.width = "40%";
}
closeButton.addEventListener("click",removeChanging)






