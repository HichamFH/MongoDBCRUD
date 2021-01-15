import { Component, OnInit } from '@angular/core';
import { Stats } from '../Shared/Model/stats.model.ts';
import { StatsService } from '../Shared/Service/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private service : StatsService) { }


  numberProduct : number;
  numberProductS : number;
  totalPriceQte : number;

  ngOnInit(): void {

    /**
     * Number Product
     */
      this.service.getProductNumber().subscribe(
        res => {
          this.numberProduct = res
          console.log(res)
          console.log(this.numberProduct)
        },
        err => {
          console.log(err)
        }
      )

      /**
       * Number Product => Product Where Price Greather Than 100
       */
        this.service.getProductNumberS().subscribe(
          res => {
            this.numberProductS = res
          },
          err => {
            console.log(err)
          }

        )

        /**
       * Total Price * Qte In Stocke
       */
      this.service.totalPriceQte().subscribe(
        res => {
          this.totalPriceQte = res
        },
        err => {
          console.log(err)
        }

      )


  }

  /**
   *
   *    Product Count => Number Of Product IN BD
   *
   */



}
