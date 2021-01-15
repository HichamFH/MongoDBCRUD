import { element } from 'protractor';
import { Product } from './../Shared/Model/product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../Shared/Service/product.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductAddComponent } from './product-add/product-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service : ProductService , private dialog : MatDialog , private toastr: ToastrService) { }


  products : Product[];
  ELEMENT_DATA: Product[];
  displayedColumns: string[] = [
    "libelle",
    "price",
    "qte",
    "action"
  ];

  productData : Product = {
    id : '',
    libelle : '' ,
    price : 0,
    qte : 0
  }

  /*
    * Is Update Property
  */
 isUpdate : boolean = false;

  datasource = new MatTableDataSource<Product>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;



  ngOnInit(): void {

    this.getAllData();
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;




  }
  getAllData() {
    this.service.getAll().subscribe(
      (res: any) => {
        this.products = res;


        this.datasource.data = this.products as Product[];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /**
   *  Create Function
   *
   */

  addProduct(form) {
    this.service.create(form.value).subscribe(
      res => {
          this.products.push(res as Product);
          this.datasource.data = this.products as Product[];
          this.toastr.success("Product Added Succes","New Product");
        },
      err => {
        console.log("Error");
      }
    )
  }

  /**
   *
   *  Filter (Recherche)
   *
   */
  applyFilter(filterValue: string) {

    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  /**
   *
   *    Delete Product
   *
   */


  deleteProduct(el) {

      this.service.delete(el.id).subscribe(
        res => {
         this.products.splice(this.products.indexOf(el) , 1);
         this.datasource.data = this.products;
         this.toastr.info("Product Deleted !!" , "Delete Product")

        },
        err => {
          console.log(err)
        }

      )
  }

  /**
   *
   *    Reset Form Data
   *
   */

  resetInfo(form? : NgForm) {
    form.resetForm();
    this.productData = {
      id : '',
      libelle : '' ,
      price : 0,
      qte : 0
    }
  }

  /**
   *
   *    Edit =>
   *
   */

  editData(p: Product) {
    this.productData = Object.assign({}, p);
    console.log(this.productData);
    this.isUpdate = true;
  }

  /**
   *
   *
   *
   */


  updateRecord(form : NgForm){
    this.service.put(form.value.id , form.value).subscribe(
      res => {
        let id = form.value.id;
        this.products.forEach(function(pro){
          if(pro.id === id) {
            pro.libelle = form.value.libelle
            pro.price = form.value.price
          }
        });
        this.datasource.data = this.products as Product[];
        this.resetInfo(form);
        this.isUpdate = false;
        this.toastr.info("Product Updated !!" , "Update Product")

      },
      err => {
        console.log(err)
      }
    )
  }



  }




