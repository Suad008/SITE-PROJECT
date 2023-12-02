const img1 = document.getElementById("img-1");
const img3 = document.getElementById("img-3");
const img5 = document.getElementById("img-5");

img1.addEventListener("mouseover", function () {
  img1.src = "images/2.jpeg";
});
img1.addEventListener("mouseout", function () {
  img1.src = "images/1.webp";
});
img3.addEventListener("mouseover", function () {
  img3.src = "images/4.webp";
});
img3.addEventListener("mouseout", function () {
  img3.src = "images/3.jpeg";
});
img5.addEventListener("mouseover", function () {
  img5.src = "images/6.jpeg";
});
img5.addEventListener("mouseout", function () {
  img5.src = "images/5.jpeg";
});
