const info = document.querySelector(".info");
const btn_info = document.querySelector(".btn-info");
const cls_info = document.querySelector(".close-info");

btn_info.addEventListener("click", openInfo);
cls_info.addEventListener("click", closeInfo);

function openInfo() {
  info.classList.remove("hidden");
  info.classList.add("grid");
}

function closeInfo() {
  info.classList.remove("grid");
  info.classList.add("hidden");
}

const element = document.querySelector(".element g");
const svg_camisetas =
  '<path d="M 157.205 7.54 L 127.836 0 C 127.836 0 119.651 15.56 100 15.56 C 80.349 15.56 72.164 0 72.164 0 L 42.795 7.54 L 0 48.95 L 21.343 84.62 L 42.795 73.77 L 42.795 200 L 157.205 200 L 157.205 73.77 L 178.657 84.62 L 200 48.95 L 157.205 7.54 Z" fill:"transparent"></path>';
const svg_sudaderas =
  '<path d="M 108.931 0.267 C 133.153 3.003 149.368 15.552 150.304 32.245 L 150.5 35.88 L 152.298 36.662 C 155.815 38.188 163.159 41.627 169.333 44.637 C 174.802 47.335 175.896 48.037 178.161 50.267 C 181.092 53.2 183.202 56.992 183.904 60.627 C 184.451 63.327 200 194.294 200 196.13 C 200 196.99 199.61 197.733 198.671 198.671 L 197.343 200 L 181.716 200 C 172.496 200 165.659 199.843 165.074 199.61 C 163.082 198.867 162.77 197.772 160.737 182.566 L 158.784 168.14 L 158.588 178.578 L 158.392 189.015 L 157.259 190.187 C 154.641 192.924 141.086 196.559 126.551 198.397 C 109.011 200.625 85.529 200.39 69.121 197.85 C 55.876 195.779 44.117 192.219 42.399 189.797 C 41.852 189.015 41.774 187.451 41.735 177.912 C 41.735 171.891 41.658 167.121 41.578 167.356 C 41.462 167.552 40.523 174.315 39.429 182.368 C 38.335 190.422 37.28 197.302 37.084 197.692 C 36.85 198.082 36.225 198.748 35.678 199.179 C 34.662 199.961 34.233 200 18.644 200 L 2.625 200 L 1.258 198.632 C -0.07 197.302 -0.109 197.147 0.087 195.193 C 2.393 174.199 16.183 60.825 16.613 59.261 C 17.591 55.9 19.387 52.849 22.005 50.231 C 24.154 48.041 25.248 47.416 33.178 43.506 C 38.023 41.12 43.689 38.461 45.797 37.563 L 49.664 35.921 L 49.78 32.833 C 50.405 16.765 64.666 4.567 87.09 0.814 C 91.547 0.071 104.321 -0.281 108.931 0.267 Z M 135.576 42.058 C 135.186 42.254 131.551 46.124 127.488 50.698 C 123.425 55.234 119.088 59.729 117.798 60.668 C 108.188 67.902 95.607 68.604 85.137 62.545 C 81.974 60.707 79.98 58.83 72.635 50.659 C 68.962 46.593 65.525 42.92 64.939 42.45 C 63.417 41.237 61.268 41.394 59.744 42.84 L 58.454 44.053 L 58.805 46.867 C 59.352 51.48 59.039 54.374 57.36 61.371 C 54.742 72.162 55.172 77.243 59.119 81.388 C 60.564 82.914 60.995 83.108 62.439 83.108 C 63.846 83.108 64.354 82.873 65.448 81.778 C 66.348 80.88 66.776 80.097 66.776 79.315 C 66.776 78.221 66.541 77.712 64.939 75.249 C 63.65 73.334 63.768 70.675 65.486 63.286 L 66.931 56.915 L 71.384 61.606 C 77.792 68.369 82.441 71.379 89.707 73.569 C 95.958 75.445 105.139 75.288 111.468 73.256 C 118.735 70.951 124.009 67.117 131.237 58.949 C 133.933 55.938 136.237 53.437 136.394 53.437 C 136.902 53.359 137.292 56.251 137.215 59.261 C 137.176 61.412 136.745 63.64 135.535 67.667 C 134.284 71.849 133.855 74.038 133.698 76.932 L 133.464 80.724 L 134.674 81.897 C 136.276 83.539 138.502 83.577 140.262 82.013 C 141.317 81.076 141.513 80.606 141.825 77.79 C 142.021 76.07 142.88 72.198 143.739 69.188 C 145.692 62.582 146.123 57.889 145.145 53.472 C 144.402 49.875 141.474 43.659 140.027 42.525 C 138.898 41.629 136.788 41.394 135.576 42.058 Z"  fill:"transparent"></path>';
const svg_mugs =
  '<path d="M 0 0 L 166.667 0 C 185.077 0 200 33.579 200 75 C 200 116.421 185.077 150 166.667 150 L 166.667 180 C 166.667 191.046 156.718 200 144.444 200 L 22.222 200 C 9.949 200 0 191.046 0 180 L 0 0 Z M 183.333 75 C 183.333 47.386 175.871 25 166.667 25 L 166.667 125 C 175.871 125 183.333 102.614 183.333 75 Z" fill:"transparent"></path>';
const svg_gorras =
  '<path d="M 198.503 137.407 C 198.503 137.407 202.973 201.326 98.897 199.963 C -2.006 198.638 1.676 139.152 1.9929999999999999 135.52 C 6.296 136.763 43.307 147.002 97.792 149.042 C 154.509 151.164 195.892 137.72 197.442 137.422 L 189.837 137.343 C 189.576 137.409 189.308 137.477 189.035 137.545 L 188.093 137.534 C 172.328 141.424 139.402 147.987 98.503 146.46 C 58.506 144.961 27.923000000000002 139.044 12.79 135.515 L 2.005 135.408 C 2.012 135.372 2.012 135.351 2.012 135.351 L 12.416 135.458 C 9.304 134.727 6.88 134.1 5.175 133.642 L 2.513 133.62 L 1.696 132.421 C 1.696 132.421 -18.598 17.453 81.213 9.627 C 81.836 9.577 82.46 9.528 83.084 9.486 C 84.119 5.843 87.579 0 99.089 0 C 110.83 0 114.329 5.928 115.37 9.464 C 186.958 15.399000000000001 205.767 64.372 198.571 135.427 L 197.002 135.413 C 195.668 135.789 193.276 136.469 189.946 137.315 L 198.503 137.407 Z" fill:"transparent"></path>';

const btn_camisetas_desktop = document.querySelector("#desktop .btn-camisetas");
const btn_sudaderas_desktop = document.querySelector("#desktop .btn-sudaderas");
const btn_mugs_desktop = document.querySelector("#desktop .btn-mugs");
const btn_gorras_desktop = document.querySelector("#desktop .btn-gorras");

btn_camisetas_desktop.addEventListener("click", pathCamisetas);
btn_sudaderas_desktop.addEventListener("click", pathSudaderas);
btn_mugs_desktop.addEventListener("click", pathMugs);
btn_gorras_desktop.addEventListener("click", pathGorras);

function pathCamisetas() {
  element.innerHTML = svg_camisetas;
  document.querySelector(".aside-content p").textContent = "Camisetas";
  document.querySelector(".element path").style.fill = "#fff";
}
function pathSudaderas() {
  element.innerHTML = svg_sudaderas;
  document.querySelector(".aside-content p").textContent = "Sudaderas";
  document.querySelector(".element path").style.fill = "#fff";
}
function pathMugs() {
  element.innerHTML = svg_mugs;
  document.querySelector(".aside-content p").textContent = "Mugs";
  document.querySelector(".element path").style.fill = "#fff";
}
function pathGorras() {
  element.innerHTML = svg_gorras;
  document.querySelector(".aside-content p").textContent = "Gorras";
  document.querySelector(".element path").style.fill = "#fff";
}

const colorpicker = document.querySelector("#colorpicker-aside");
const element_aside = document.querySelector(".element-aside");

colorpicker.addEventListener("input", changeColorPicker, false);
element_aside.addEventListener("click", openColorPicker);

function openColorPicker() {
  colorpicker.click();
}

function changeColorPicker(event) {
  document.querySelector(".element path").style.fill = event.target.value;
}

function getPrints() {
  const urlPrints = "https://630f8d20498924524a90c6a3.mockapi.io/prints";

  fetch(urlPrints)
    .then((response) => response.json())
    .then((data) => {
      renderPrints(data);
    })
    .catch((err) => console.error(err));
}

function renderPrints(prints) {
  const footer_content = document.querySelector(".footer-content");
  const listStart = document.createElement("li");
  const containerStart = document.createElement("div");
  const labelUpload = document.createElement("label");
  const uploadPrint = document.createElement("input");
  const plusUploadPrint = document.createElement("img");

  labelUpload.classList.add("upload-print");

  footer_content.appendChild(listStart);
  listStart.appendChild(containerStart);
  containerStart.appendChild(labelUpload);

  uploadPrint.type = "file";
  uploadPrint.name = "myImage";
  uploadPrint.accept = "image/*";

  plusUploadPrint.src =
    "https://images.emojiterra.com/twitter/v13.1/512px/2795.png";

  labelUpload.appendChild(uploadPrint);
  labelUpload.appendChild(plusUploadPrint);

  uploadPrint.addEventListener("input", (event) => {
    console.log(event.target);
    let print_aside = "";
    document.querySelector("#print-aside")
      ? (print_aside = document.querySelector("#print-aside"))
      : (print_aside = document.createElement("img"));

    print_aside.setAttribute("id", "print-aside");
    print_aside.src = URL.createObjectURL(event.target.files[0]);
    print_aside.setAttribute("alt", "print-aside");
    print_aside.setAttribute(
      "style",
      "transform: scale(0.5) translateX(0) translateY(0);"
    );

    element_aside.appendChild(print_aside);

    document.querySelector(".aside-content p").textContent = "myDesign";

    const sliders = document.querySelectorAll(".slider");
    sliders.forEach((slider) => {
      slider.classList.remove("hidden");
    });

    print_aside.onload = () => {
      URL.revokeObjectURL(print_aside.src); // free memory
    };
  });

  prints.forEach((print) => {
    const list = document.createElement("li");
    const containerPrint = document.createElement("div");
    const backgroundPrint = document.createElement("div");
    const imgPrint = document.createElement("img");

    backgroundPrint.classList.add("background-print");
    imgPrint.setAttribute("src", print.url);
    imgPrint.setAttribute("alt", print.name);

    footer_content.appendChild(list);
    list.appendChild(containerPrint);
    containerPrint.appendChild(backgroundPrint);
    containerPrint.appendChild(imgPrint);

    imgPrint.addEventListener("click", () => {
      printPrints(print);
    });
  });

  const listEnd = document.createElement("li");
  const containerEnd = document.createElement("div");

  footer_content.appendChild(listEnd);
  listEnd.appendChild(containerEnd);
}

getPrints();

function printPrints(print) {
  let print_aside = "";
  document.querySelector("#print-aside")
    ? (print_aside = document.querySelector("#print-aside"))
    : (print_aside = document.createElement("img"));

  print_aside.setAttribute("id", "print-aside");
  print_aside.setAttribute("src", print.url);
  print_aside.setAttribute("alt", "print-aside");
  print_aside.setAttribute(
    "style",
    "transform: scale(0.5) translateX(0) translateY(0);"
  );

  element_aside.appendChild(print_aside);

  document.querySelector(".aside-content p").textContent = print.name;

  const sliders = document.querySelectorAll(".slider");
  sliders.forEach((slider) => {
    slider.classList.remove("hidden");
  });
}

function getDesigns() {
  const urlDesigns = "https://630f8d20498924524a90c6a3.mockapi.io/designs";

  fetch(urlDesigns)
    .then((response) => response.json())
    .then((data) => {
      renderDesign(data);
    })
    .catch((err) => console.error(err));
}

function renderDesign(designs) {
  const cards_content = document.querySelector(".cards");

  const containerStart = document.createElement("div");
  const containerStartWidth = document.createElement("div");

  containerStart.appendChild(containerStartWidth);
  cards_content.appendChild(containerStart);

  designs.forEach((design) => {
    const card = document.createElement("div");
    const imgDesign = document.createElement("img");

    card.classList.add("card");
    imgDesign.setAttribute("src", design.url);
    imgDesign.setAttribute("alt", design.id);

    cards_content.appendChild(card);
    card.appendChild(imgDesign);
  });

  const containerEnd = document.createElement("div");
  const containerEndWidth = document.createElement("div");

  containerEnd.appendChild(containerEndWidth);
  cards_content.appendChild(containerEnd);
}

getDesigns();

const slider_size = document.querySelector("#slider-size");
const slider_position_x = document.querySelector("#slider-position-x");
const slider_position_y = document.querySelector("#slider-position-y");

slider_size.addEventListener("input", handleChangeSize);
slider_position_x.addEventListener("input", handleChangePositionX);
slider_position_y.addEventListener("input", handleChangePositionY);

function handleChangeSize(event) {
  const { value } = event.target;
  const transformR = document
    .querySelector("#print-aside")
    .style.transform.replace(
      /scale\([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)\)/,
      `scale(${value / 100})`
    );
  document.querySelector("#print-aside").style.transform = transformR;
}
function handleChangePositionX(event) {
  const { value } = event.target;
  const transformR = document
    .querySelector("#print-aside")
    .style.transform.replace(
      /translateX\([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)px\)/,
      `translateX(${value * 20 - 1000}px)`
    );
  document.querySelector("#print-aside").style.transform = transformR;
}
function handleChangePositionY(event) {
  const { value } = event.target;
  const transformR = document
    .querySelector("#print-aside")
    .style.transform.replace(
      /translateY\([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)px\)/,
      `translateY(${value * 20 - 1000}px)`
    );
  document.querySelector("#print-aside").style.transform = transformR;
}

// Animation Mobile
const icon_navbar = document.querySelector(".icon-navbar");
const icon_navbar_1 = document.querySelector(".icon-navbar div:nth-child(1)");
const icon_navbar_2 = document.querySelector(".icon-navbar div:nth-child(2)");
const icon_navbar_3 = document.querySelector(".icon-navbar div:nth-child(3)");

const dropdown_menu_mobile = document.querySelector(".dropdown-menu#mobile");

icon_navbar.addEventListener("click", () => {
  var valited = document.querySelector(".dropdown-menu#mobile");
  if (
    valited.classList.contains("hidden") ||
    valited.classList.contains("hidden-animate")
  ) {
    icon_navbar_1.animate([{ transform: "translateY(450%) rotate(-45deg)" }], {
      duration: 300,
      fill: "forwards",
    });
    icon_navbar_2.animate([{ transform: "translate(100px)" }], {
      duration: 300,
      fill: "forwards",
    });
    icon_navbar_3.animate([{ transform: "translateY(-450%) rotate(45deg)" }], {
      duration: 300,
      fill: "forwards",
    });

    dropdown_menu_mobile.classList.remove("hidden");
  } else {
    icon_navbar_1.animate([{ transform: "rotate(0) translate(0)" }], {
      duration: 300,
      fill: "forwards",
    });
    icon_navbar_2.animate([{ transform: "translate(0)" }], {
      duration: 300,
      fill: "forwards",
    });
    icon_navbar_3.animate([{ transform: "rotate(0) translate(0)" }], {
      duration: 300,
      fill: "forwards",
    });

    dropdown_menu_mobile.classList.add("hidden");
  }
});

const btn_camisetas_mobile = document.querySelector("#mobile .btn-camisetas");
const btn_sudaderas_mobile = document.querySelector("#mobile .btn-sudaderas");
const btn_mugs_mobile = document.querySelector("#mobile .btn-mugs");
const btn_gorras_mobile = document.querySelector("#mobile .btn-gorras");

btn_camisetas_mobile.addEventListener("click", pathCamisetas);
btn_sudaderas_mobile.addEventListener("click", pathSudaderas);
btn_mugs_mobile.addEventListener("click", pathMugs);
btn_gorras_mobile.addEventListener("click", pathGorras);