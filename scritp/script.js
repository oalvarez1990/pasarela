// (function () {
//   var updateButton = document.getElementById("updateDetails");
//   var cancelButton = document.getElementById("cancel");
//   var compra_modal = document.getElementById("btn");

  // Update button opens a modal dialog
  // updateButton.addEventListener("click", function () {
  //   console.log('Bien')
  //   compra_modal.showModal();
  //   console.log('aquiiiiiiiiiiiii')
  // });

  // Form cancel button closes the dialog box
//   cancelButton.addEventListener("click", function () {
//     compra_modal.close();
//   });
// })();

// constructor para agregar los productos 
class productos{
  constructor(imagen, UID, Referencia, Nombre, Categoria, Subcategoria){
    this.imagen = imagen;
    this.UID = UID;
    this.Referencia = Referencia;
    this.Nombre = Nombre;
    this.Categoria = Categoria;
    this.Subcategoria = Subcategoria;
  }
}
class Interfaz_usuario{
  // agregar un producto a la lista de compras
  agregar_producto_lista(producto){
    const lista_compras = document.getElementById('lista_compras');
    const elemento = document.createElement('tr');
    elemento.innerHTML = `
      <td>
        <img src="img/${producto.imagen}" width="100">
      </td>
      <td>${producto.UID}</td>
      <td>${producto.Referencia}</td>
      <td>${producto.Nombre}</td>
      <td>${producto.Categoria}</td>
      <td>${producto.Subcategoria}</td>
      <td><a href="#" class="borrar-producto">X</a></td>
    `;
    lista_compras.appendChild(elemento);
  }
  // mostrar un mensaje de error
  mostrar_mensaje(mensaje, tipo){
    const div = document.createElement('div');
    if(tipo === 'error'){
      div.classList.add('mensaje', 'error');
    }else{
      div.classList.add('mensaje', 'correcto');
    }
    div.innerHTML = `${mensaje}`;
    // insertar en el DOM
    const contenedor = document.querySelector('.contenedor');
    const formulario = document.querySelector('#compra_modal');
    contenedor.insertBefore(div, formulario);
    // quitar el mensaje de error
    setTimeout(function(){
      document.querySelector('.mensaje').remove();
    }, 3000);
  }
  // eliminar un producto de la lista de compras
  eliminar_producto_lista(elemento){
    if(elemento.classList.contains('borrar-producto')){
      elemento.parentElement.parentElement.remove();
    }
  }
  // vaciar la lista de compras
  vaciar_lista(){
    const lista_compras = document.getElementById('lista_compras');
    // forma lenta
    // lista_compras.innerHTML = '';
    // forma rapida
    while(lista_compras.firstChild){
      lista_compras.removeChild(lista_compras.firstChild);
    }
  }
}
// DOM events
const compra_modal = document.getElementById('compra_modal');
console.log('Escuchando');
compra_modal.addEventListener('submit', function(e){
console.log('Escuchando')
  e.preventDefault();
  // leer los datos del formulario
  const imagen = document.getElementById('imagen').value;
  const UID = document.getElementById('UID').value;
  const Referencia = document.getElementById('Referencia').value;
  const Nombre = document.getElementById('Nombre').value;
  const Categoria = document.getElementById('Categoria').value;
  const Subcategoria = document.getElementById('Subcategoria').value;
  // crear un objeto producto
  const producto = new productos(imagen, UID, Referencia, Nombre, Categoria, Subcategoria);
  // crear un objeto interfaz
  const interfaz = new Interfaz_usuario();
  // validar los campos del formulario
  if(imagen === '' || UID === '' || Referencia === '' || Nombre === '' || Categoria === '' || Subcategoria === ''){
    // mostrar un mensaje de error
    interfaz.mostrar_mensaje('Error: Debe llenar todos los campos', 'error');
  }else{
    // agregar un producto a la lista de compras
    interfaz.agregar_producto_lista(producto);
    // mostrar un mensaje de producto agregado
    interfaz.mostrar_mensaje('Producto agregado', 'correcto');
    // limpiar los campos del formulario
    interfaz.limpiar_campos();
  }
}
);