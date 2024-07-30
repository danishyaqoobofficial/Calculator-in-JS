let loader = document.getElementById('loader')
window.addEventListener('load', async () => {
    loader.classList.add('!block');
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        console.log(data);
        data.map((post) => {
            let deletebtn = document.getElementById('delete');
            let main_post_data = document.getElementById('main_post_data');
            let newElement = document.createElement('div');
            let element = `<div class="flex items-center gap-[30px] px-[22px] py-[11px] border-t relative group">
                <p class="text-[14px] text-[#000]/40">${post.id}</p>
                <p class="flex-1 text-center line-clamp-1 text-[14px] text-[#000]/40">${post.title}</p>
                <div class="absolute hidden group-hover:block h-full top-0 bottom-0 right-0">
                    <div class="flex items-center gap-[4px] h-full ">
                        <span class="flex items-center justify-center h-full w-full bg-[#000]/20 cursor-pointer rounded-[6px] px-[12px] " id="edit">
                            <i class="fa-solid fa-edit text-[#000] "></i>
                        </span>
                        <span class="flex items-center justify-center h-full w-full bg-[#FF0000]/20 cursor-pointer rounded-[6px] px-[12px] " id="delete">
                            <i class="fa-solid fa-trash text-[#FF0000] "></i>
                        </span>
                    </div>
                </div>
            </div>`
            console.log(post);
            newElement.innerHTML = element
            main_post_data.appendChild(newElement);
        })
    } catch (error) {
        console.log('error', error);
    }finally{
        loader.classList.remove('!block')
    }
});