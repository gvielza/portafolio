// const image = document.querySelector('.animated-image img');

// document.addEventListener('mousemove', (event) => {
//   const x = event.clientX / window.innerWidth - 0.5;
//   const y = event.clientY / window.innerHeight - 0.5;
  
//   image.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
// });


function je(){
    alert("je")
}
const image = document.querySelector('#myImage');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;
  
  image.style.transform = `scale(${x * 2}, ${y * 2})`;
});
