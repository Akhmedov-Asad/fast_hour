        let input = document.querySelector('#input');
        let = btn = document.querySelector('.btn');
        
        
        
        let = items1 = document.querySelector('.items1');
        let = items2 = document.querySelector('.items2');
        let = items3 = document.querySelector('.items3');
        let = items4 = document.querySelector('.items4');




   btn.addEventListener("click", () => {
    const timeGenerator = (input.value / 3.6).toFixed(2);
    items1.innerHTML = timeGenerator;
});
    btn.addEventListener('click', () => {
    const timeGenerator = (input.value / 20.1).toFixed(2);
    items2.innerHTML = timeGenerator; 
});
         btn.addEventListener('click', () => {
    const timeGenerator = (input.value / 70).toFixed(2);
    items3.innerHTML = timeGenerator;
});
      btn.addEventListener('click', () => {
    const timeGenerator = (input.value / 800).toFixed(2);
    items4.innerHTML = timeGenerator;
});