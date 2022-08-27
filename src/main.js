const info = document.querySelector('.info');
const btn_info_desktop = document.querySelector('#desktop .btn-info');
const cls_info = document.querySelector('.close-info');

btn_info_desktop.addEventListener('click', openInfo);
cls_info.addEventListener('click', closeInfo);

function openInfo() {
  info.classList.remove('hidden');
  info.classList.add('grid');
}

function closeInfo() {
  info.classList.remove('grid');
  info.classList.add('hidden');
}

const element = document.querySelector('.element g');
const svg_camisetas = '<path d="M 157.205 7.54 L 127.836 0 C 127.836 0 119.651 15.56 100 15.56 C 80.349 15.56 72.164 0 72.164 0 L 42.795 7.54 L 0 48.95 L 21.343 84.62 L 42.795 73.77 L 42.795 200 L 157.205 200 L 157.205 73.77 L 178.657 84.62 L 200 48.95 L 157.205 7.54 Z" fill:"transparent"></path>';
const svg_cuadros = '<path d="M 0 12 L 200 12 L 200 200 L 0 200 L 0 12 M 110 10 C 110 15.523 105.523 20 100 20 C 94.477 20 90 15.523 90 10 C 90 4.477 94.477 0 100 0 C 105.523 0 110 4.477 110 10 Z" fill:"transparent"></path>';
const svg_pocillos = '<path d="M 0 0 L 166.667 0 C 185.077 0 200 33.579 200 75 C 200 116.421 185.077 150 166.667 150 L 166.667 180 C 166.667 191.046 156.718 200 144.444 200 L 22.222 200 C 9.949 200 0 191.046 0 180 L 0 0 Z M 183.333 75 C 183.333 47.386 175.871 25 166.667 25 L 166.667 125 C 175.871 125 183.333 102.614 183.333 75 Z" fill:"transparent"></path>';

const btn_camisetas_desktop = document.querySelector('#desktop .btn-camisetas');
const btn_cuadros_desktop = document.querySelector('#desktop .btn-cuadros');
const btn_pocillos_desktop = document.querySelector('#desktop .btn-pocillos');

btn_camisetas_desktop.addEventListener('click', pathCamisetas);
btn_cuadros_desktop.addEventListener('click', pathCuadros);
btn_pocillos_desktop.addEventListener('click', pathPocillos);

function pathCamisetas() {
  element.innerHTML = svg_camisetas;
  document.querySelector('.aside-content p').textContent = 'Camisetas';
  document.querySelector('.element path').style.fill = '#fff';
}
function pathCuadros() {
  element.innerHTML = svg_cuadros;
  document.querySelector('.aside-content p').textContent = 'Cuadros';
  document.querySelector('.element path').style.fill = '#fff';
}
function pathPocillos() {
  element.innerHTML = svg_pocillos;
  document.querySelector('.aside-content p').textContent = 'Pocillos';
  document.querySelector('.element path').style.fill = '#fff';
}

const colorpicker = document.querySelector('#colorpicker-aside');
const element_aside = document.querySelector('.element-aside');

colorpicker.addEventListener('input', changeColorPicker, false);
element_aside.addEventListener('click', openColorPicker);

function openColorPicker() {
  colorpicker.click();
}

function changeColorPicker(event) {
  document.querySelector('.element path').style.fill = event.target.value;
}

function getDesigns () {
  const urlDesigns = "../designs.json";
  
  fetch(urlDesigns)
    .then((response) => response.json())
    .then((data) => {
      renderDesigns(data);
    })
    .catch((err) => console.error(err));
}

function renderDesigns (designs) {
  const footer_content = document.querySelector('.footer-content');
  const listStart = document.createElement('li');
  const containerStart = document.createElement('div');

  footer_content.appendChild(listStart);
  listStart.appendChild(containerStart);

  designs.forEach((design)=> {
    const list = document.createElement('li');
    const containerDesign = document.createElement('div');
    const backgroundDesign = document.createElement('div');
    const imgDesign = document.createElement('img');

    backgroundDesign.classList.add('background-print');
    imgDesign.setAttribute(
      'src',
      design.url
    );
    imgDesign.setAttribute(
      'id',
      design.id
    );
    
    footer_content.appendChild(list);
    list.appendChild(containerDesign);
    containerDesign.appendChild(backgroundDesign);
    containerDesign.appendChild(imgDesign);

    imgDesign.addEventListener('click', () => {printDesigns(design);});
  });

  const listEnd = document.createElement('li');
  const containerEnd = document.createElement('div');

  footer_content.appendChild(listEnd);
  listEnd.appendChild(containerEnd);
}

getDesigns();

function printDesigns (design) {
  let print_aside = '';
  document.querySelector('#print-aside')
    ? print_aside = document.querySelector('#print-aside')
    : print_aside = document.createElement('img');

  print_aside.setAttribute('id', 'print-aside');
  print_aside.setAttribute('src', design.url);
  print_aside.setAttribute('alt', 'print-aside');
  print_aside.setAttribute('style', 'transform: scale(0.5) translateX(0) translateY(0);');

  element_aside.appendChild(print_aside);

  document.querySelector('.aside-content p').textContent = design.name;
  
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => {
    slider.classList.remove('hidden');
  });
}

const slider_size = document.querySelector('#slider-size');
const slider_position_x = document.querySelector('#slider-position-x');
const slider_position_y = document.querySelector('#slider-position-y');

slider_size.addEventListener('input', handleChangeSize);
slider_position_x.addEventListener('input', handleChangePositionX);
slider_position_y.addEventListener('input', handleChangePositionY);

function handleChangeSize(event) {
  const {value} = event.target;
  const transformR = document.querySelector('#print-aside').style.transform.replace(/scale\([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)\)/,`scale(${value/100})`);
  document.querySelector('#print-aside').style.transform = transformR;
}
function handleChangePositionX(event) {
  const {value} = event.target;
  const transformR = document.querySelector('#print-aside').style.transform.replace(/translateX\([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)px\)/,`translateX(${value*20-1000}px)`);
  document.querySelector('#print-aside').style.transform = transformR;
}
function handleChangePositionY(event) {
  const {value} = event.target;
  const transformR = document.querySelector('#print-aside').style.transform.replace(/translateY\([+-]?([0-9]+\.?[0-9]*|\.[0-9]+)px\)/,`translateY(${value*20-1000}px)`);
  document.querySelector('#print-aside').style.transform = transformR;
}

// Animation Mobile
const icon_navbar = document.querySelector('.icon-navbar');
const icon_navbar_1 = document.querySelector('.icon-navbar div:nth-child(1)');
const icon_navbar_2 = document.querySelector('.icon-navbar div:nth-child(2)');
const icon_navbar_3 = document.querySelector('.icon-navbar div:nth-child(3)');

const dropdown_menu_mobile = document.querySelector('.dropdown-menu#mobile');

icon_navbar.addEventListener('click', () => {
  var valited = document.querySelector('.dropdown-menu#mobile');
  if (valited.classList.contains('hidden') || valited.classList.contains('hidden-animate')) {
    icon_navbar_1.animate([
      { transform: 'rotate(-45deg) translate(-10px, 10px)' }
    ], { duration: 300, fill: 'forwards' }
    );
    icon_navbar_2.animate([
      { transform: 'translate(100px)' }
    ], { duration: 300, fill: 'forwards' }
    );
    icon_navbar_3.animate([
      { transform: 'rotate(45deg) translate(-10px, -9px)' }
    ], { duration: 300, fill: 'forwards' }
    );
    
    dropdown_menu_mobile.classList.remove('hidden');
  } else {
    icon_navbar_1.animate([
      { transform: 'rotate(0) translate(0)' }
    ], { duration: 300, fill: 'forwards' }
    );
    icon_navbar_2.animate([
      { transform: 'translate(0)' }
    ], { duration: 300, fill: 'forwards' }
    );
    icon_navbar_3.animate([
      { transform: 'rotate(0) translate(0)' }
    ], { duration: 300, fill: 'forwards' }
    );
    
    dropdown_menu_mobile.classList.add('hidden');
  }
});

const btn_camisetas_mobile = document.querySelector('#mobile .btn-camisetas');
const btn_cuadros_mobile = document.querySelector('#mobile .btn-cuadros');
const btn_pocillos_mobile = document.querySelector('#mobile .btn-pocillos');

btn_camisetas_mobile.addEventListener('click', pathCamisetas);
btn_cuadros_mobile.addEventListener('click', pathCuadros);
btn_pocillos_mobile.addEventListener('click', pathPocillos);

const btn_info_mobile = document.querySelector('#mobile .btn-info');

btn_info_mobile.addEventListener('click', openInfo);