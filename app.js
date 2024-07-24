let date = document.getElementById('date');
setInterval(() => {
    date.innerHTML = new Date().toLocaleString();
}, 1000);

// 
// 
// 

const data = [
    "John Doe",
    "Anna Smith",
    "Peter Johnson",
    "Mary Brown",
    "Michael Davis",
    "Jennifer Wilson",
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