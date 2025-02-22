import { Product } from "../model/product.model";
import { ProductsComponent } from "../products/products.component";
import { FormControl,FormGroup,ReactiveFormsModule } from "@angular/forms";
import { Component,inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'new-component',
    standalone:true,
    imports:[CommonModule,ReactiveFormsModule],
    template:`
    <article>
    <p>Information</p>
    <section>
    <h2>{{product?.name}}</h2>
    <h2>{{product?.description}}</h2>
    <h2>{{product?.rating}}</h2>
    <h2>{{product?.link}}</h2>
    </section>`
})
export class NewComponent{
    route:ActivatedRoute=inject(ActivatedRoute);
  productComponent=inject(ProductsComponent);
  product: Product | undefined;
  applyForm=new FormGroup({
    firstName:new FormControl(''),
      lastName:new FormControl(''),
      email:new FormControl('')
    
  });
}
