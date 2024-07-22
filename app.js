setInterval(() => {
    let date = new Date().toLocaleString();
    let dateelement = document.getElementById('date');
    dateelement.innerHTML = date;
}, 1000);


let body = document.querySelector('body')
