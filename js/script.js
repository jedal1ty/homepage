{
    const welcome = () => {
        console.log("Witam wszystkich, którzy ty zaglądają 🤩");
    };
    
    const toggleBackground = () => {
        const container = document.querySelector(".container");
        container.classList.toggle("removeBackground");
        removeBackgroundbutton.innerText = container.classList.contains("removeBackground") ? "Przywróć tło strony" : "Usuń tło strony";
    };
    
    const togglePhoto = () => {
        const photo = document.querySelector(".photo");
        photo.classList.toggle("hidden");
        removePhotobutton.innerText = photo.classList.contains("hidden") ? "Przywróć zdjęcie" : "Usuń zdjęcie";
    };
    
    welcome();
    
    const removeBackgroundbutton = document.querySelector(".removeBackground");
    const removePhotobutton = document.querySelector(".removePhoto");
        
    removeBackgroundbutton.addEventListener("click", toggleBackground);
    removePhotobutton.addEventListener("click", togglePhoto );
    
}