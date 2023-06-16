import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private userEmail!: string;
  private userData!: string;
  private ApiUrl = 'http://localhost:9000/api/users';
  private CarUrl = 'http://localhost:9000/api/cars';

  helper = new JwtHelperService();
  isUserLogged$ = new BehaviorSubject<string | null>(this.getToken());

  constructor(private http: HttpClient, private router: Router) {
    this.readToken();
  }

  private getAuthHeaders(): HttpHeaders {
    const authToken = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${authToken}` });
    return headers;
  }

  login(formData: any): void {
    const loginUrl = `${this.ApiUrl}/login`;

    this.http.post(loginUrl, formData).subscribe(
      (response: any) => {
        this.saveToken(response.token);
        this.router.navigate(['']);
        this.isUserLogged$.next(response.token);
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

  readToken(): any {
    const token = this.getToken();

    if (token) {
      const { userName, email, id } = this.helper.decodeToken(token);

      return { userName, email, id };
    }
    return null;
  }

  create(formData: any): void {
    console.log(formData, 'THIS IS FORMDATA');

    const createUrl = `${this.ApiUrl}`;

    this.http.post(createUrl, formData).subscribe(
      (response: any) => {
        this.router.navigate(['/auth/ingresar']);
        Swal.fire('Felicitaciones', 'Registro exitoso', 'success');
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

  getUser() {
    const getUrl = `${this.ApiUrl}/get`;
    return this.http.get(getUrl, { headers: this.getAuthHeaders() });
  }

  updateUser(body: any) {
    const updateUrl = `${this.ApiUrl}/update`;
    const fromData = body;
    return this.http.put(updateUrl, fromData, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteUser() {
    const getUrl = `${this.ApiUrl}/delete`;
    return this.http.delete(getUrl, { headers: this.getAuthHeaders() });
  }

  contactFromUser(formData: any) {
    const getUrl = `${this.ApiUrl}/contact`;
    return this.http.post(getUrl, formData);
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
