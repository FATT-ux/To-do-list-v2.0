const btn = document.getElementById('btn');
const OutputText = document.getElementById('output-text');
const BtnClear = document.getElementById('btn-clear');


const DateAndTime = new Date();
const date = DateAndTime.toLocaleDateString(); //получаем только дату

if(localStorage.getItem('OutputText')){ //eсли есть данные в localstorage то мы их загружаем это строка должна быть самой первой
    OutputText.innerHTML = localStorage.getItem('OutputText');
};


btn.addEventListener('click', function(event){
    event.preventDefault();
    const text = document.getElementById('text-input').value;
    if (text == '') return; //проверка чтобы не было пустого поля
    // += это хначит добавляет новый элемент не удаляя старый
    OutputText.innerHTML += `<li> <input type='checkbox' class='input-checkbox'> <span class="complete">${text}</span> <span class=date> ${date} </span> <img src="./images/crossed.png" alt=""  class="img-crossed"> </li>`;
    // очистка поля ввода
    document.getElementById('text-input').value = '';

    localStorage.setItem('OutputText', OutputText.innerHTML); //сохраняем в localstorage 
});

OutputText.addEventListener('click', function(event) {
    if (event.target.classList.contains('img-crossed')) {
        const li = event.target.closest('li');
        if (li) {
            li.remove();
        }
    }

    localStorage.setItem('OutputText', OutputText.innerHTML);
});


BtnClear.addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('output-text').innerHTML = '';

    localStorage.setItem('OutputText', OutputText.innerHTML);
});


//localstorage  пишем туда где есть взаимодействие с OutputText