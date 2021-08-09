import { Inject, Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Departments, Items } from "../interfaces/interfaces";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiUrl: "http://localhost:3000/api";

  async getProducts() {
    // now returns an Observable of Config
    let res;
    await this.http
      .get<Items>(`${environment.apiUrl}/Items`)
      .toPromise()
      .then((resp) => {
        // Success
        res = resp;
        console.log(resp);
      });
    return res;
  }

  async getDepartments() {
    // now returns an Observable of Config
    let res;
    await this.http
      .get<Departments>(`${environment.apiUrl}/Departments`)
      .toPromise()
      .then((resp) => {
        // Success
        res = resp;
        console.log(resp);
      });
    return res;
  }

  async getCatogaries(departmentId) {
    // now returns an Observable of Config
    let res;
    await this.http
      .get<Departments>(`${environment.apiUrl}/Departments`)
      .toPromise()
      .then((resp) => {
        // Success
        res = resp;
        console.log(resp);
      });
    return res;
  }

  async getCategories() {
    // now returns an Observable of Config
    let res;
    await this.http
      .get<Items>(`${environment.apiUrl}/Items`)
      .toPromise()
      .then((resp) => {
        // Success
        res = resp;
        console.log(resp);
      });
    return res;
  }
}
