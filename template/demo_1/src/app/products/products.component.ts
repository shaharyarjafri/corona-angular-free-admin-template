import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { SharedHelpersService } from "../api/api-helper.service";
import { ApiService } from "../api/api.service";
import { Items } from "../interfaces/interfaces";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Items[];
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(
    public apiService: SharedHelpersService,
    public api: ApiService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getProducts();
  }

  async getProducts() {
    const data = await this.api.getProducts();
    this.products = data;
    this.dtTrigger.next();
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
