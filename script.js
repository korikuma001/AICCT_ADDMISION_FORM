// for list icons

document.querySelectorAll('.fake-select').forEach(select => {
    const head = select.querySelector('.fake-select__head');
    const value= select.querySelector('.fake-select__value');
    const items = select.querySelectorAll('.fake-select__list li');
    head.addEventListener('click', e =>{
        e.stopPropagation();
        document.querySelectorAll('.fake-select').forEach(s =>
            s.classList.remove('open')
        );
        select.classList.toggle('open');
    });
    items.forEach(item =>{
        item.addEventListener('click', e =>{
            e.stopPropagation();
            value.textContent = item.textContent;
            select.dataset.value = item.dataset.vallue;
            select.classList.remove('open');
        });
    });
});

document.addEventListener('click', () =>{
    document.querySelectorAll('.fake-select').forEach(s => 
        s.classList.remove('open'));
});

// list bar js finised
