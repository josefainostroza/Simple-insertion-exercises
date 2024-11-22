// # Ejercicios

// ## Inserción de elementos en el DOM

// - Usando este HTML, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de con cuantos item empiece la lista

// ```html
// <button>Añadir Elementos</button>
// <ul>
//   <li>Item 1</li>
// </ul>
// ```

const buttonElement = document.getElementById('button');
const containerElement = document.getElementById('container');

let count = 2;
const createItems = () => {
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${count}`;
  count++;

  containerElement.append(newItem);
};
buttonElement.addEventListener('click', createItems);

// - Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. Si elijes un 3, al hacer click en el botón se generará un h3 con el texto "soy un h3", si elijes un 5 un h5 con el texto "soy un h5" y así para todos.

const buttonLabelElement = document.getElementById('buttonLabel');
const containerLeabel = document.getElementById('container');
const rangeElement = document.getElementById('range');
const labelElement = document.getElementById('containerLeabel');

const headerGenerator = () => {};

const changeSlider = () => {
  labelElement.textContent = ``;
};

rangeElement.addEventListener('input', changeSlider);
