import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import Product from '../../Product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'

declare var jQuery:any;


@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {
  addProduct:FormGroup;
  editProduct:FormGroup;
 
  product_data:any;
  colorList =[];
  sizeList = [];
  selectedColor = [];
  selectedSize = [];
  selectedsavedColor = [];
  selectedsavedSize = [];
  settingSize = {};
  settingColor = {};
  

  Products: Product[]
  

  name: string = " ";
  description: string= "";
  size: any="";
  color: any="";
  varient: any="";
  id: string = "";
  loaded: boolean = false;

  constructor(private frmbuilder:FormBuilder,private product: ProductService, private router: Router) { 
    this.createForm();
    this.updateForm();
      
    
    
   
  }

  createForm() {
    this.addProduct = this.frmbuilder.group({
      name: ['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],
      price: ['',[Validators.required]],
      size: ['',[Validators.required]],
      description: ['', Validators.required ],
      color: ['', Validators.required ],
      
    });
  }
  updateForm() {
    this.editProduct = this.frmbuilder.group({
     name: ['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],
      price: ['', Validators.required ],
      size: ['', Validators.required ],
      description: ['', Validators.required ],
      color: ['', Validators.required ],
      id: ['', Validators.required ]
    });
  }





  AddProduct(addProduct: NgForm) {

    console.log(addProduct.value);
     this.product.addProduct(addProduct.value);
    alert('Product data added successfully');
    jQuery('#myModalHorizontal').modal('hide');
    this.ngOnInit();
  }


  UpdateProduct(updateProduct: NgForm) {

    this.product.updateProduct(updateProduct.value);
    alert('Product data updated successfully');
    jQuery('#myModalHorizontalEdit').modal('hide');
    this.ngOnInit();
  }





  ngOnInit() {
    this.product.productList()
    .subscribe((data: any) => {
     this.Products = data.response.data.result;
    
  });

  this.colorList = [
    { "id": 1, "itemName": "Blue" },
    { "id": 2, "itemName": "Black" },
    { "id": 3, "itemName": "White" },
    { "id": 4, "itemName": "Orange" },
    { "id": 5, "itemName": "Green" }
   
    
];

this.settingColor = {
    text: "Select color",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: "myclass custom-class"
};
  this.sizeList = [
    { "id": 1, "itemName": "small" },
    { "id": 2, "itemName": "medium" },
    { "id": 3, "itemName": "large" },
    { "id": 4, "itemName": "extralarge" }
    
];

this.settingSize = {
    text: "Select size",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: "myclass custom-class"
};
          


  }
  onSizeSelect(size: any) {
    console.log(size);
    console.log(this.selectedSize);
}
OnSizeDeSelect(size: any) {
    console.log(size);
    console.log(this.selectedSize);
}
onSizeSelectAll(size: any) {
    console.log(size);
}
onSizeDeSelectAll(size: any) {
    console.log(size);
}


onColorSelect(color: any) {
  console.log(color);
  console.log(this.selectedColor);
}
OnColorDeSelect(color: any) {
  console.log(color);
  console.log(this.selectedColor);
}
onColorSelectAll(color: any) {
  console.log(color);
}
onColorDeSelectAll(color: any) {
  console.log(color);
}


  deleteProduct(id) {
    this.product.deleteProduct(id);
    this.ngOnInit();
  }


viewProduct(id) {

    this.product.viewProduct(id)
    .subscribe((data: any) => {
         
   
      this.editProduct.patchValue({
        name: data.response.data.result[0].productId.name, 
        price: data.response.data.result[0].productId.price, 
        description: data.response.data.result[0].productId.description,
        id: data.response.data.result[0].productId._id
      });

      this.selectedsavedSize=data.response.data.result[0].size;
      this.selectedsavedColor=data.response.data.result[0].color;
     
     this.loaded = true;
    jQuery('#myModalHorizontalEdit').modal('show');
  });

}

}