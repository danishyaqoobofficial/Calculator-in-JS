let loader = document.getElementById('loader');

window.addEventListener('load', async () => {
    loader.classList.add('!block');
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        let main_post_data = document.getElementById('main_post_data');
        let fragment = document.createDocumentFragment();

        data.forEach(post => {
            let newElement = document.createElement('div');
            newElement.classList.add('item');
            newElement.id = `post-${post.id}`;
            newElement.innerHTML = `
                <div class="flex items-center gap-[30px] px-[22px] py-[11px] border-t" draggable="true">
                    <p class="text-[14px] text-[#000]/40">${post.id}</p>
                    <p class="flex-1 text-center line-clamp-1 text-[14px] text-[#000]/40">${post.title}</p>
                </div>`;
            fragment.appendChild(newElement);
        });

        main_post_data.appendChild(fragment);

        let originalElement = null;
        let nextSibling = null;

        main_post_data.addEventListener('dragstart', (e) => {
            if (e.target.closest('.item')) {
                originalElement = e.target.closest('.item');
                originalElement.classList.add('dragging', 'origin');
                nextSibling = originalElement.nextSibling;
            }
        });

        main_post_data.addEventListener('dragend', (e) => {
            if (originalElement) {
                originalElement.classList.remove('dragging', 'origin');
                originalElement = null;
            }
        });

        main_post_data.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        main_post_data.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggingItem = main_post_data.querySelector('.dragging');
            const items = [...main_post_data.querySelectorAll('.item:not(.dragging)')];

            let nextSibling = items.find(sibling => {
                const rect = sibling.getBoundingClientRect();
                return e.clientY < rect.top + rect.height / 2;
            });

            if (draggingItem) {
                if (nextSibling) {
                    main_post_data.insertBefore(draggingItem, nextSibling);
                } else {
                    main_post_data.appendChild(draggingItem);
                }
            }
        });
    } catch (error) {
        console.log('error', error);
    } finally {
        loader.classList.remove('!block');
    }
});











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




let user_input = document.getElementById('user_input');
let user_btn = document.getElementById('user_btn');

user_btn.addEventListener('click', () =>{
    if (user_input.value === '') {
        user_input.classList.add('border-red-300');

    } else{
        user_input.classList.remove('border-red-300');
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: user_input.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
})




let put_btn = document.getElementById('put_btn');
let put_input_id = document.getElementById('put_input_id');
let put_input_title = document.getElementById('put_input_title');

put_btn.addEventListener('click', () =>{
    if (put_input_id.value === '' && put_input_title.value === '') {
        put_input_id.classList.add('!border-red-300');
        put_input_title.classList.add('!border-red-300');
    } else {
        put_input_id.classList.remove('!border-red-300');
        put_input_title.classList.remove('!border-red-300');

        fetch(`https://jsonplaceholder.typicode.com/posts/${put_input_id.value}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: put_input_title.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        }
})


