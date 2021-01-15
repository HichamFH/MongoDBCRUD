import { ProductService } from './Home/Shared/Service/product.service';
import { ProductDetailsComponent } from './Home/product/product-details/product-details.component';
import { ProductListComponent } from './Home/product/product-list/product-list.component';
import { ProductAddComponent } from './Home/product/product-add/product-add.component';
import { ProductUpdateComponent } from './Home/product/product-update/product-update.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Home/footer/footer.component';
import { HeaderComponent } from './Home/header/header.component';
import { ProductComponent } from './Home/product/product.component';
import { StatsComponent } from './Home/stats/stats.component';
import { CardComponent } from './Home/stats/card-zone/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ProductDetailsComponent,
    StatsComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],

  bootstrap: [AppComponent],

})
export class AppModule { }
