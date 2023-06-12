import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private userEmail!: string;
  private userData!: string;
  private ApiUrl = 'http://localhost:9000/api/users';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): void {
    const loginUrl = `${this.ApiUrl}/login`;
    const formData = {
      email: email,
      password: password,
    };
    this.http
      .post(loginUrl, formData, { headers: this.getAuthHeaders() })
      .subscribe(
        (response: any) => {
          // this.authToken = response.accessToken;
          this.saveToken(response.token);
          this.userEmail = formData.email;
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

  getUser() {
    const getUrl = `${this.ApiUrl}/${this.userEmail}`;
    return this.http.get(getUrl);
  }

  updateUser(body: any) {
    const updateUrl = `${this.ApiUrl}/update/${body._id}`;
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

  createCar(
    marca: string,
    modelo: string,
    precio: string,
    age: string,
    kilometraje: number,
    transmision: string,
    ciudad: string
  ): void {
    const createUrl = `${this.ApiUrl}/create/cars`;
    const formDataCar = {
      marca: marca,
      modelo: modelo,
      precio: precio,
      age: age,
      kilometraje: kilometraje,
      transmision: transmision,
      ciudad: ciudad,
    };
    this.http.post(createUrl, formDataCar).subscribe(
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
