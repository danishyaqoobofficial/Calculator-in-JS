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
    "Dunia pur"
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