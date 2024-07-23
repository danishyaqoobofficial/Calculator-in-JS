setInterval(() => {
    let date = new Date().toLocaleString();
    let dateelement = document.getElementById('date');
    dateelement.innerHTML = date;
}, 1000);


let body = document.body;

if (window.location.href.includes('/index.html')) { 
    body.style.background = 'white'
}else{
    console.log('llll');
}
