





const contenidoTienda = document.getElementById("contenidoTienda");
const comprasCarrito = document.getElementById("comprasCarrito");
const modalContainer = document.getElementById("modal-container");




let carrito =JSON.parse(localStorage.getItem("carrito")) || [];

const getProductos = async () =>{
    const response = await fetch("../js/data.json");
    const data = await response.json();
    
data.forEach((productos)=>{

    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src = "${productos.img}"/>  
    <h3 class="nombre" >${productos.nombre}</h3> 
    <p class="precio" >$${productos.precio}</p>

    `;
    

    contenidoTienda.appendChild(content);

    let agregar = document.createElement("button");
    agregar.innerText = "Agregar"
    agregar.className = "agregar"


    content.appendChild(agregar);

    agregar.addEventListener("click", ()=>{

        const repeat = carrito.some((repeatProductos)=>repeatProductos.id === productos.id);
        if (repeat){
            carrito.map((prod)=>{
                if(prod.id === productos.id){
                    prod.cantidad++; 
                }
            })
        }else{
            carrito.push({
            id : productos.id,
            img: productos.img,
            nombre: productos.nombre,
            precio: productos.precio,
            cantidad: productos.cantidad,
            });
            console.log(carrito);
            guardado();

        }


    });
});

};
getProductos();



    



    





const guardado = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));

}

    







