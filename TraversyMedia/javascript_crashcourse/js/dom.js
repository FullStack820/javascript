console.log(window);

console.log(document.getElementById('my-form'));
// just works like .jquery
console.log(document.querySelector('.container'));
// even though it has multiple elements, it is only going to select the first one.
console.log(document.querySelector('h1'));

// multiple element selectors - you can run arraymethods on this
// like foreach, filter, map etc.,
console.log(document.querySelectorAll('.item'));

const items=document.querySelectorAll('.item')
// iterating items through forEach
items.forEach(function(item) {
    console.log(`forEach item -> innerHTML = ${item.innerHTML}; innerText = ${item.innerText}`);
});

// simpler way
items.forEach(item => console.log(item.innerText));

const ul = document.querySelector('.items');
// ul.lastElementChild.remove();

ul.firstElementChild.textContent="Hello";
ul.children[1].innerText="Sai!";
// adding HTML dynamically as follows -
ul.lastElementChild.innerHTML='<h1>pavan</h1>';

const btn = document.querySelector('.btn');
// manipulate stuff dynamically.
btn.style.background='red';