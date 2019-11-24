import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pagar() {
    let timerInterval
    Swal.fire({
      title: 'Procesando pago',
      timer: 3000,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      Swal.fire(
        'Éxito',
        'Se ha realizado el pago y su reserva, en unos minutos recibirá un correo de confirmación',
        'success'
      );
    })
  }

  private  verificar() {

  }

  public agregarTarjeta() {
    let nCard, dateCard, cvv;
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Número de tarjeta',
        text: 'Ingrese los 16 digitos de su tarjeta de débito o crédito',
        input: 'text',
        inputPlaceholder: 'Ej. 0000 1111 2222 3333',
        inputValue: nCard,
        inputValidator: (inputValue) => {
          if (!inputValue) {
            return 'Ingrese un número válido'
          } else {
            if (inputValue.length != 16)
              return 'El número de tarjeta debe tener 16 digitos';
          }
        }
      },
      {
        title: 'Vigencia',
        text: 'Ingrese la vigencia de su tarjeta',
        input: 'text',
        inputPlaceholder: 'Ej. 02/19',
        inputValue: dateCard
      },
      {
        title: 'Código de seguridad',
        text: 'Ingrese los 3 digitos del reverso de su tarjeta',
        input: 'text',
        inputPlaceholder: 'Ej. 037',
        inputValue: cvv
      }
    ]).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'All done!',
          html:
            'Your answers: <pre><code>' +
            JSON.stringify(result.value) +
            '</code></pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }

}
