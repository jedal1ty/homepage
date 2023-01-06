console.log("Witam wszystkich, którzy ty zaglądają 🤩");

let removeBackgroundbutton = document.querySelector(".removeBackground");
let container = document.querySelector(".container");
let removePhotobutton = document.querySelector(".removePhoto");
let photo = document.querySelector(".photo");

removeBackgroundbutton.addEventListener("click", () => {
    container.classList.toggle("removeBackground");

    removeBackgroundbutton.innerText = container.classList.contains("removeBackground") ? "Przywróć tło strony" : "Usuń tło strony";
});


removePhotobutton.addEventListener("click", () => {
    photo.classList.toggle("hidden");
    
    removePhotobutton.innerText = photo.classList.contains("hidden") ? "Przywróć zdjęcie" : "Usuń zdjęcie";  
});
