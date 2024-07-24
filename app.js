let date = document.getElementById('date');
setInterval(() => {
    date.innerHTML = new Date().toLocaleString();
}, 1000);

// 
// 
// 

const data = [
    "Lahore",
    "Multan",
    "Karachi",
    "Hafizabad",
    "Islamabad",
    "Faisalabad",
    "Gujranwala",
    "Dunia poor"
];

const dropdownInput = document.getElementById('dropdownInput');
const dropdownMenu = document.getElementById('dropdownMenu');

function renderDropdownItems(filteredData) {
    dropdownMenu.innerHTML = '';
    filteredData.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('py-2', 'px-4', 'cursor-pointer', 'hover:bg-gray-200');
        div.textContent = item;
        div.addEventListener('click', () => {
            dropdownInput.value = item;
        });
        dropdownMenu.appendChild(div);
    });
}

renderDropdownItems(data);

dropdownInput.addEventListener('input', () => {
    const searchTerm = dropdownInput.value.toLowerCase();
    const filteredData = data.filter(item => item.toLowerCase().includes(searchTerm));
    renderDropdownItems(filteredData);
});



// 
// 
// 

let answerDiv = document.querySelector('#answer');
let input = document.querySelector('#input');

function num(e) {
    input.value = input.value + e.innerHTML;
}

function calc() {
    ans = eval(input.value);
    answerDiv.innerHTML = `Answer = ${ans}`;
}

function ACbtn() {
    input.value = '';
}

// 
// 
// 

let loader = document.querySelector('#loader');

window.addEventListener('load', () =>{
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 400);
})

// 
// 
// 

let saveBtn = document.querySelector('#btnLoader');
let value = true;

saveBtn.addEventListener('click', () =>{
    if (value === true) {
        saveBtn.innerHTML = `<div class="secondLoader"></div>`
        setTimeout(() => {
            saveBtn.innerHTML = 'Saved'
        }, 600);
        value = false;
    }else{

    }
})

//
//
//

window.addEventListener('load', async () =>{
    try {
        const res = await fetch('https://backend.karaydaar.com/utility/get_societies/');
        const data = await res.json()
        console.log(`name = ${data.data[0].name}`);
        console.log(`id = ${data.data[0].id}`);
    } catch (error) {
        console.log('error');
    }
})

// 
// 
// 



let rotate_box = document.getElementById('rotate_box');
let input_btn = document.getElementById('input-btn');
let inputNumber = document.getElementById('number');
let Error = document.getElementById('error');


input_btn.addEventListener('click' , () =>{
    if (inputNumber.value === '') {
        inputNumber.classList.add('!border-[#FF0000]');
    }else if (inputNumber.value > 360) {
        Error.innerHTML = 'Your value is too long'
    }else if (inputNumber.value === '' || inputNumber.value < 361) {
        rotate_box.classList.add(`rotate-[${inputNumber.value/2}deg]`);
        inputNumber.classList.remove('!border-[#FF0000]');
        Error.innerHTML = ''
    }
})