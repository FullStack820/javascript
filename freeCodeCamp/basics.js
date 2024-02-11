// do it in firefox console, write javascript to modify images on the page.

our_image=document.querySelector('img')

our_image.setAttribute('srcset', 'https://nationalzoo.si.edu/sites/default/files/animals/norwayrat-001-reverse.jpg')

function changeImage(url) {
    document.querySelector('img').setAttribute('srcset', url);
}

// changing body color on a webpage by using click events.

const htmlBody = document.querySelector('body');

const randomClickFunction = function () {
    const colors = ["#002942","#fef4f4","#f7f4f9","red","blue","green","yellow","orange","purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    htmlBody.style.backgroundColor = randomColor;
    console.log('The user clicked and set the color to '+ randomColor);
}

randomClickFunction();

// or set this and click your way on the body of the website.
htmlBody.onclick = randomClickFunction 