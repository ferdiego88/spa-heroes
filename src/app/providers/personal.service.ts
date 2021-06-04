import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }

   getPersonaPorDni(dni: string){
     const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZlcmRpZWdvODhAZ21haWwuY29tIn0.t5JCHUGQ89bIbONcOdaHgjISvUAsnNd_2KE_ZH2FbZw'
    const url = `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=${token}`
    return this.http.get(url);
  }
}
