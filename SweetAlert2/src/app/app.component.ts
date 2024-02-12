import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SweetAlert2';

  showConfirmationDialog(productoId: string, precioId: string) {
    const productoElement = document.getElementById(productoId);
    const producto = productoElement ? productoElement.textContent : '';
    const precioElement = document.getElementById(precioId);
    const precio = precioElement ? precioElement.textContent : '';

    Swal.fire({
      title: "¿Deseas agregar el producto al carrito?",
      text: `${producto} por ${precio}.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, agregar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Producto agregado al carro!",
          text: `Has comprado ${producto}.`,
          icon: "success"
        });
      }
    });
  }
}