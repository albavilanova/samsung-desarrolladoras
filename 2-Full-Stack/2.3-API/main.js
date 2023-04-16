async function showVideo() {
    
    if (window.File && window.FileReader && window.FileList) {
        
        // show loading gif, wait 2 seconds and hide
        var loading_gif = document.getElementById('loader')
        loading_gif.style.display = "block";
        await new Promise(resolve => setTimeout(resolve, 2000));
        loading_gif.style.display = "none";
        
        // hide select button
        var select_button = document.getElementById('select-button');
        select_button.style.display = "none";

        // show video
        var file = document.getElementById("file").files[0]
        var video = document.getElementById("video");
        video.setAttribute("src", URL.createObjectURL(file));
        video.style.display = "block";

        // show controls
        var controls = document.getElementById("custom-controls");
        controls.style.display = "block";

    } else {

        alert('No se puede cargar el vídeo ya que este navegador no da soporte a la API File.');
    
    }
}
