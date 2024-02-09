
const mostrarCarrito = ()=>{



    modalContainer.innerHTML = "";
    modalContainer.style.display ="flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML =  `
        <h1 class= "modal-header-title">Carrito</h1> 

    `;

    modalContainer.appendChild(modalHeader);

    const modalButton = document.createElement("h1")
    modalButton.innerText = "✖";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", ()=>{
        modalContainer.style.display= "none";

    });

    modalHeader.appendChild(modalButton);
        

    
  






    carrito.forEach((productos)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src= "${productos.img}" />
            <h3>${productos.nombre}</h3>
            <p>$${productos.precio}</p>
            <span class="restar" > ➖ </span>

            <p>Cantidad: ${productos.cantidad}</p>

            <span class="sumar" > ➕ </span>
            <p>Total: ${productos.cantidad * productos.precio}</p>
            <span class="eliminar-producto">✖</span>

        `;

        modalContainer.appendChild(carritoContent);


        let restar = carritoContent.querySelector(".restar")
        restar.addEventListener("click",()=>{
           
           if (productos.cantidad !==1){
                productos.cantidad --;
            }
            mostrarCarrito();
            guardado();
        });

        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click",()=>{
           
           
            productos.cantidad ++;
            mostrarCarrito();
            guardado();
        });




        let eliminar = carritoContent .querySelector(".eliminar-producto");
        eliminar.addEventListener("click", ()=>{
            eliminarProducto(productos.id);
        });

        //let eliminar = document.createElement("span");
        //eliminar.innerText = "✖";
        //eliminar.className = "eliminar-producto"
        //carritoContent.appendChild(eliminar);

        // eliminar.addEventListener("click", eliminarProducto);

    });
  

    const total = carrito.reduce((acumulador,el)=> acumulador + el.precio * el.cantidad, 0);

    const compraTotal = document.createElement("div");
    compraTotal.className = "compra-total";
    compraTotal.innerHTML = `Total a Pagar: $${total}`;
    modalContainer.appendChild(compraTotal);



};

comprasCarrito.addEventListener("click", mostrarCarrito);
    


const eliminarProducto = (id) =>{

    const eliminarId = carrito.find((elemento)=> elemento.id === id)

    carrito = carrito.filter((carritoId)=>{
        return carritoId !== eliminarId;
    });

    mostrarCarrito();
    guardado();

};