let delete_btn = document.getElementById('delete_btn');
let delete_input = document.getElementById('delete_input');

delete_btn.addEventListener('click', () => {
    if (delete_input.value === '') {
        delete_input.classList.add('border-red-300');
    } else {
        delete_input.classList.remove('border-red-300');
        fetch(`https://jsonplaceholder.typicode.com/posts/${delete_input.value}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                let postElement = document.getElementById(`post-${delete_input.value}`);
                if (postElement) {
                    postElement.remove();
                }
            } else {
                console.error('Delete failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});

let loader = document.getElementById('loader');

window.addEventListener('load', async () => {
    loader.classList.add('!block');
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        data.map((post) => {
            let main_post_data = document.getElementById('main_post_data');
            let newElement = document.createElement('div');
            newElement.id = `post-${post.id}`;
            let element = `<div class="flex items-center gap-[30px] px-[22px] py-[11px] border-t">
                <p class="text-[14px] text-[#000]/40">${post.id}</p>
                <p class="flex-1 text-center line-clamp-1 text-[14px] text-[#000]/40">${post.title}</p>
            </div>`;
            newElement.innerHTML = element;
            main_post_data.appendChild(newElement);
        });
    } catch (error) {
        console.log('error', error);
    } finally {
        loader.classList.remove('!block');
    }
});