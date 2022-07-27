const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');


btnCreate.addEventListener('click', () => {
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');


    list.insertAdjacentHTML(
        'beforeend',
        `<li>${input.value}<button onclick="this.parentElement.remove()">Remove</button></li>`
    )
    input.value = '';

});

btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container')

    if ( listContainer.style.display === 'none') {
        listContainer.style.display = 'block';
        btnToggle.textContent = 'Hide List';
    } else {
        listContainer.style.display = 'none';
        btnToggle.textContent = 'Show List';
    }
});




