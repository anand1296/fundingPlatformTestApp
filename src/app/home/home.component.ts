import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  handshakeImg: String = '../assets/images/handshake.png';
  lineImg: String = '../assets/images/line.svg';
  covid: String = '../assets/images/covid.png';
  freelancer_feature_icon: String = '../assets/images/freelancer_feature_icon.png';
  get_paid_instantly: String = '../assets/images/get_paid_instantly.png';
  low_interest_rate: String = '../assets/images/low_interest_rate.png';
  secure_payments: String = '../assets/images/secure_payments.png';

  details = {
    income: {
      min: 10000,
      max: 300000,
      value: 150000
    },
    expense: {
      min: 1000,
      max: 100000,
      value: 50000
    },
    tenure: '6 Months',
    loans: true,
    emi: 15000
  }

  tenures = ['3 Months', '6 Months', '9 Months', '1 Year'];

  loan_amount = 100000;
  emi_amount = 15000;

  selected:String = '4';

  constructor() { }

  ngOnInit(): void {
 
  }

  cardSelected(cardNumber: String){
    this.selected = cardNumber;
  }

}
