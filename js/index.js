const btnPlusAll = document.querySelectorAll(".qty-plus");
const btnMinusAll = document.querySelectorAll(".qty-minus");

btnPlusAll.forEach((btn) => {
  btn.addEventListener("click", increaseQuantity);
});
btnMinusAll.forEach((btn) => {
  btn.addEventListener("click", decreaseQuantity);
});

let totalDisplay = document.querySelector("#total_display");
let addBtn = document.querySelector("#add_button");
addBtn.addEventListener("click", addProduct);

function loadEvents() {
  let btnPlusAll = document.querySelectorAll(".qty-plus");
  let btnMinusAll = document.querySelectorAll(".qty-minus");

  btnPlusAll.forEach((btn) => {
    btn.addEventListener("click", increaseQuantity);
  });
  btnMinusAll.forEach((btn) => {
    btn.addEventListener("click", decreaseQuantity);
  });
}
function increaseQuantity() {
  this.previousElementSibling.value++;

  subTotalUp(this);
}

function decreaseQuantity() {
  // let qty = document.querySelector('.qty');

  let qty = this.nextElementSibling;
  if (qty.value > 0) {
    qty.value = parseInt(qty.value) - 1;
  }
  subTotalDown(this);
}

function subTotalUp(elt) {
  let price = parseInt(elt.parentElement.nextElementSibling.innerHTML);
  let qty = parseInt(elt.previousElementSibling.value);
  elt.parentElement.nextElementSibling.nextElementSibling.innerHTML =
    parseInt(qty) * price;
  total();
}

function subTotalDown(elt) {
  let price = parseInt(elt.parentElement.nextElementSibling.innerHTML);
  let qty = parseInt(elt.nextElementSibling.value);
  elt.parentElement.nextElementSibling.nextElementSibling.innerHTML =
    parseInt(qty) * price;
  total();
}

function total() {
  totalDisplay.innerHTML = "1000";
}
