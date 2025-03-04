import { Component, AfterViewInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { loadScript } from "@paypal/paypal-js";

@Component({
  selector: 'app-pay-ment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pay-ment.component.html',
  styleUrls: ['./pay-ment.component.css']
})
export class PayMentComponent implements AfterViewInit {
  paymentForm: FormGroup;

  constructor() {
    this.paymentForm = new FormGroup({
      cardName: new FormControl('', Validators.required),
      cardNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{16}$/)]),
      expiryDate: new FormControl('', Validators.required),
      cvv: new FormControl('', [Validators.required, Validators.pattern(/^\d{3}$/)])
    });
  }

  ngAfterViewInit() {
    this.loadPayPalButton();
  }

  async loadPayPalButton() {
    const paypal = await loadScript({ "client-id": "Af0qZmguP-1e8Q_VG22TyNQ44xHUMRuZFH9FGxeDEG3g4xYmrmGXRbUyI9gmoJOxJDBYGkek0FdK6NTA" } as any);

  
    if (!paypal) {
      console.error("PayPal SDK failed to load.");
      return;
    }
  
    
    if (paypal.Buttons) {
      paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE", 
            purchase_units: [{
              amount: {
                value: '10.00',
                currency_code: 'USD'
              }
            }]
          });
        },
        onApprove: (data, actions) => {
         
          if (actions.order) {
            return actions.order.capture().then(details => {
              alert('תשלום בוצע בהצלחה! מספר העסקה: ' + details.id);
            });
          } else {
            console.error("Order not found");
            return Promise.resolve(); 
          }
        }
      }).render('#paypal-button-container');
    }
    
  }
  

  onSubmit() {
    if (this.paymentForm.valid) {
      console.log('תשלום בכרטיס אשראי:', this.paymentForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
