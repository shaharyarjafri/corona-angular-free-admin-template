import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api/api.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  products;
  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  async getDepartments() {
    debugger
    const data = await this.api.getDepartments();
    this.products = data;
  }

  async getCatogaries(departmentId) {
    debugger
    const data = await this.api.getCatogaries(departmentId);
    this.products = data;
  }
}
