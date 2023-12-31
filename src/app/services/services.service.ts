import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private userEmail!: string;
  private userData!: string;
  private ApiUrl = 'http://localhost:9000/api/users';
  private CarUrl = 'http://localhost:9000/api/cars'

  constructor(private http: HttpClient, private router: Router) {}

  login(formData: any): void {
    const loginUrl = `${this.ApiUrl}/login`;

    this.http.post(loginUrl, formData).subscribe(
      (response: any) => {
        console.log(response, 'THIS IS THE RESPONSE');
        this.saveToken(response.token);
        this.router.navigate(['']);
        // this.authToken = response.accessToken;
        // this.saveToken(response.token);
        // this.userEmail = formData.email;
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.log('Error: ', error.error.message);
          } else {
            console.error(
              `codigo de error ${error.status}` + `mensaje: ${error.error}`
            );
          }
        }
      }
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  create(formData: any): void {
  
    console.log(formData, 'THIS IS FORMDATA');

    const createUrl = `${this.ApiUrl}`;

    this.http.post(createUrl, formData).subscribe(
      (response: any) => {
        console.log('Registro exitoso. ', response);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

  updateInventado() {
    return {
      userName: 'tester',
      lastname: 'uno',
      cellphone: '1234',
      email: 'tester@uno.com',
      password: '123',
    };
  }

  getUser(email:string | null) {
    const getUrl = `${this.ApiUrl}/${email}`;
    return this.http.get(getUrl);
  }

  updateUser(body: any) {
    const updateUrl = `${this.ApiUrl}${body._id}`;
    const fromData = body;
    console.log('usuario actualizado', fromData, updateUrl);
    this.http.put(updateUrl, fromData).subscribe(
      (response: any) => {
        console.log('usuario actualizado. ', response);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }
  private getAuthHeaders(): HttpHeaders {
    const authToken = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${authToken}` });
    return headers;
  }
  //-----------------------------------------------------------//

  createCar(formData: any): void {
    const createUrl = `${this.CarUrl}`;
    this.http.post(createUrl, formData).subscribe(
      (response: any) => {
        console.log('Registro de carro exitoso. ', response);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
    /* this.http.post(loginUrl, formDataCar, {headers:this.getAuthHeaders()})
    .subscribe(
      (response:any) => {
        // this.authToken = response.accessToken;
        localStorage.setItem("token", response.token)
        console.log("response: ", response);
        this.userEmail = formData.email; //no seria con el id
      },
      (error) => {
        if(error instanceof HttpErrorResponse){
          if(error.error instanceof ErrorEvent){
            console.log("Error: ", error.error.message);
          }
        else {
          console.error(`codigo de error ${error.status}` + `mensaje: ${error.error}`)
        }
        }
      }
    ) */
  }

  updateCar(body: any) {
    const updateUrl = `${this.ApiUrl}/update/cars/${body._id}`;
    const formDataCar = body;
    console.log('carro actualizado', formDataCar, updateUrl);
    this.http.put(updateUrl, formDataCar).subscribe(
      (response: any) => {
        console.log('carro actualizado. ', response);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }
}
