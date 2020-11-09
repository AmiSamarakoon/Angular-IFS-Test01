import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainer } from './trainer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseURL ="http://localhost:8080/api/v1/trainers";


  constructor(private httpClient: HttpClient) { }

  getTrainerList():Observable<Trainer[]>{
    return this.httpClient.get<Trainer[]>(`${this.baseURL}`)
  }

  addTrainer(trainer:Trainer):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, trainer);
  }

  getTrainerById(id:number):Observable<Trainer>{
    return this.httpClient.get<Trainer>(`${this.baseURL}/${id}`);
  }

  updateTrainer(id:number, trainer:Trainer):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,trainer);
  }
  deleteTrainer(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
