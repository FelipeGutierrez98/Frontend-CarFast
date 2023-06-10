import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//para ser peticiones http importamos el modulo que viene algular por defecto 
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  

  constructor(private http:HttpClient) {}//aceder a todo lo que hay en HttpClient

  prepareHeaders(){
    return{
     headers: new HttpHeaders({ //headers(postman) se piden para hacer todas las peticiones http
      'content-Type': 'application/json',
     })
    }
  }

  getCars(){
    //vamos a conectarmos con lo que tenemos en el backend
    return this.http.get('http://localhost:9000/api/cars',this.prepareHeaders())
     //rxjs(maneja la reactividad(que cuando pase algo el mismo se actualice y se ejecute) )
  }
  getCar(id:string){
    return this.http.get(`http://localhost:9000/api/cars/${id}`,this.prepareHeaders())

  }
}
