{
    const welcome = () => {
        console.log("Witam wszystkich, którzy ty zaglądają 🤩");
    }
    
    const toggleBackground = () => {
        container.classList.toggle("removeBackground");
        removeBackgroundbutton.innerText = container.classList.contains("removeBackground") ? "Przywróć tło strony" : "Usuń tło strony";
    }
    
    const togglePhoto = () => {
        photo.classList.toggle("hidden");
        removePhotobutton.innerText = photo.classList.contains("hidden") ? "Przywróć zdjęcie" : "Usuń zdjęcie";
    }
    
    welcome();
    
    const removeBackgroundbutton = document.querySelector(".removeBackground");
    const container = document.querySelector(".container");
    const removePhotobutton = document.querySelector(".removePhoto");
    const photo = document.querySelector(".photo");
    
    removeBackgroundbutton.addEventListener("click", toggleBackground);
    removePhotobutton.addEventListener("click", togglePhoto );
    
}