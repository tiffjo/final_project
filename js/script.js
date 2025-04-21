function downloadFile(){
    alert("Download started!");
}


//if want to change image on clicking on image (i want to change black and white image to a different image w color)

// let imgElement = document.getElementById("myImage");

// let isImageOne = true; // State variable

// imgElement.onclick = function() {
//     if (isImageOne) {
//     imgElement.src = "image2.jpg";
//     } else {
//     imgElement.src = "image1.jpg";
//     }
//     isImageOne = !isImageOne; // Toggle state
// };


//delete unused code above this line ^^ 

function showWelcome() {
    const name = document.getElementById('name-input').value;
    if (name.trim() !== "") {
        document.getElementById('intro-screen').style.display = 'none';
        document.getElementById('greeting').textContent = `Hi ${name}, welcome to my website!`;
        document.getElementById('welcome-message').style.display = 'block';
        document.getElementById('main-section').style.display = 'block'; // Show main content
    }
}

// const lightbox= document.createElement('div')
// lightbox.id = 'lightbox'
// document.body.appendChild(lightbox)


// const images = document.querySelectorAll('img')
// images.forEach(image => {
//     image.addEventListener('click', e=> {
//         lightbox.classList.add('active')
//         const img = document.createElement('img')
//         img.src = image.src
//         while (lightbox.firstChild){
//             lightbox.removeChild(lightbox.firstChild)
//         }
//         lightbox.appendChild(img)
//     }) // every click on image, run this funtion
// })

// lightbox.addEventListener('click', e => {
//     if (e.target != e.currentTarget) return //if we click on smth that's not the lightbox, we want to return
//     lightbox.classList.remove('active')

// })

// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//         lightbox.classList.remove('active');
//     }
// });

// Create the lightbox overlay
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// Add click listeners to all images in the grid
const images = document.querySelectorAll('.grid img');
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

// Clicking the background closes the lightbox
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});

// ESC key closes lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
    }
});
