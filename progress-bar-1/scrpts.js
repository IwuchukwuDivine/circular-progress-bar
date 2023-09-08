
let numbers = document.querySelectorAll('.number');
  
numbers.forEach((number) => {
  let startValue = 0;
  let endValue = parseInt(number.getAttribute("data-number"));
  console.log(endValue);
  let counter = setInterval(() => {
    startValue ++;
    number.innerHTML = startValue + "%";
    if (startValue === endValue) {
      clearInterval(counter);
    } 
  }, 20);
});