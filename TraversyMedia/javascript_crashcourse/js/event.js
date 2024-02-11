console.log('hey!');

btun = document.querySelector('.btn');

// mouseover, mouseout are other events you can play with.
btun.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    console.log(e.target);

    document.querySelector('#my-form').style.background='pink';
    document.querySelector('body').classList.add('bg-dark');

    ul.lastElementChild.innerHTML='<h1>JS interactivity</h1>';

});