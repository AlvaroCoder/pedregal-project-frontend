const containerImagen = document.getElementById("container-zoom-img")
const textoMostrarUbicacion = document.getElementById("mostrar-ubicacion");


containerImagen.addEventListener("mousemove",(event)=>{
    const rect = containerImagen.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    textoMostrarUbicacion.innerHTML = `X:${x} - Y:${y}`
})


