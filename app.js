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











window.addEventListener('load', async () =>{
    try {
        const res = await fetch('https://backend.karaydaar.com/property/get_homepage_properties/');
        const data = await res.json();
        console.log(data.data);
    } catch (error) {
        console.log('error');
    }
})