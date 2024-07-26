let date = document.getElementById('date');
setInterval(() => {
    date.innerHTML = new Date().toLocaleString();
}, 1000);






let loader = document.getElementById('loader');

window.addEventListener('load', async () =>{
    loader.classList.add('!block');
    try {
        const res = await fetch('https://backend.karaydaar.com/property/get_homepage_properties/')
        const data = await res.json();
        console.log(data.data);
    } catch (error) {
        console.log('error');
    } finally{
        loader.classList.remove('!block');
    }
})