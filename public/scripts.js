const title = document.querySelector('h1');
const button = document.querySelector('button');
const changeText = () => {
  title.innerText = 'Francy'
}
button.addEventListener('click', changeText)
