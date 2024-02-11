const myFormm = document.querySelector('#my-form');
const namee = document.querySelector('#name');
const emaill = document.querySelector('#email');
const msgg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// listen for a submit event on the form.
myFormm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    console.log(namee.value);

    if(namee.value === '' || emaill === '') {
        // alert('please enter name and email');
        msgg.classList.add('error');
        msgg.innerHTML='please enter all fields';

        setTimeout(() => msgg.remove(), 2000);
    }else {
        console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${namee.value} - ${emaill.value}`));

        userList.appendChild(li);

        //clear the fields
        namee.value='';
        emaill.value='';
        
    }
}