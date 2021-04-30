import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{ 
  
  product = {
    productName: '',
    detail: '',
    model: '',
    price: parseFloat(''),
    stock: parseInt(''),
    description: '',
    storeAvailable: 1,
    deliveryAvailable: 1,
    image: ''

  }
  errorMessage: any;
  constructor(private http:HttpClient,private service: NotificationsService) { 
    
   
  }
  

  ngOnInit(): void {
  }

  createProduct(Message:any ,prod: NgForm){
    if(prod.value.storeAvailable === "true")
    {
      if(prod.value.deliveryAvailable === "true")
      {
        this.product.image= prod.value.image
        this.product.productName= prod.value.nameProduct
        this.product.detail= prod.value.detail
        this.product.model= prod.value.model
        this.product.price= prod.value.price
        this.product.stock= prod.value.stock
        this.product.description= prod.value.description
        this.product.storeAvailable= 1
        this.product.deliveryAvailable= 1
        
        this.http.post('http://localhost:8080/api/products',this.product)
          .subscribe({
            next: (data: any) => {
            this.product = data;
            console.log(this.product);
            this.service.success('Success',Message='producto agregado Correctamente', {
              position: ['botton','right'],
              timeout: 2000,
              animated: 'fade',
              showProgressBar: true
            });
            },
            error: error => {
                this.errorMessage = error.message;
                console.error('There was an error!', error.error.error);
                this.service.error('Error',Message='Algunos datos son Incorrectos, o estan con campos vacios', {
                  position: ['botton','right'],
                  timeout: 2000,
                  animated: 'fade',
                  showProgressBar: true
                });
            }})
        
          }
      else{
        this.product.image= prod.value.image
        this.product.productName= prod.value.nameProduct
        this.product.detail= prod.value.detail
        this.product.model= prod.value.model
        this.product.price= prod.value.price
        this.product.stock= prod.value.stock
        this.product.description= prod.value.description
        this.product.storeAvailable= 1
        this.product.deliveryAvailable= 1
        
        this.http.post('http://localhost:8080/api/products',this.product)
        .subscribe({
          next: (data: any) => {
          this.product = data;
          console.log(this.product);
          this.service.success('Success',Message='producto agregado Correctamente', {
            position: ['botton','right'],
            timeout: 2000,
            animated: 'fade',
            showProgressBar: true
          });
          },
          error: error => {
              this.errorMessage = error.message;
              console.error('There was an error!', error.error.error);
              this.service.error('Error',Message='Algunos datos son Incorrectos, o estan con campos vacios', {
                position: ['botton','right'],
                timeout: 2000,
                animated: 'fade',
                showProgressBar: true
              });
          }})
      }
    }
    else
    {
      if(prod.value.deliveryAvailable === "true")
      {
        this.product.image= prod.value.image
        this.product.productName= prod.value.nameProduct
        this.product.detail= prod.value.detail
        this.product.model= prod.value.model
        this.product.price= prod.value.price
        this.product.stock= prod.value.stock
        this.product.description= prod.value.description
        this.product.storeAvailable= 1
        this.product.deliveryAvailable= 1
        
        this.http.post('http://localhost:8080/api/products',this.product)
        .subscribe({
          next: (data: any) => {
          this.product = data;
          console.log(this.product);
          this.service.success('Success',Message='producto agregado Correctamente', {
            position: ['botton','right'],
            timeout: 2000,
            animated: 'fade',
            showProgressBar: true
          });
          },
          error: error => {
              this.errorMessage = error.message;
              console.error('There was an error!', error.error.error);
              this.service.error('Error',Message='Algunos datos son Incorrectos, o estan con campos vacios', {
                position: ['botton','right'],
                timeout: 2000,
                animated: 'fade',
                showProgressBar: true
              });
          }})
      }
      else{
        this.product.image= prod.value.image

        this.product.productName= prod.value.nameProduct

        this.product.detail= prod.value.detail
        this.product.model= prod.value.model
        this.product.price= prod.value.price
        this.product.stock= prod.value.stock
        this.product.description= prod.value.description
        this.product.storeAvailable= 1
        this.product.deliveryAvailable= 1
        
        this.http.post('http://localhost:8080/api/products',this.product)
        .subscribe({
          next: (data: any) => {
          this.product = data;
          console.log(this.product);
          this.service.success('Success',Message='producto agregado Correctamente', {
            position: ['botton','right'],
            timeout: 2000,
            animated: 'fade',
            showProgressBar: true
          });
          },
          error: error => {
              this.errorMessage = error.message;
              console.error('There was an error!', error.error.error);
              this.service.error('Error',Message='Algunos datos son Incorrectos, o estan con campos vacios', {
                position: ['botton','right'],
                timeout: 2000,
                animated: 'fade',
                showProgressBar: true
              });
          }})
      }
    }
  }

}
