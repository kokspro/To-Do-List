const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');

btnCreate.addEventListener('click', () => {
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');

    list.insertAdjacentHTML(
        'beforeend',
        `<li>${input.value}</li>`
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

btnRemove.addEventListener('click', () => {
    const lastItem = document.querySelector('li:last-child');
    lastItem.remove();
});



