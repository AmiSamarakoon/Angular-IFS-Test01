import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainingSession } from './training-session';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  private baseURL ="http://localhost:8080/api/v1/trainingSessions";

  constructor(private httpClient:HttpClient) { }

  getTrainingSessionList():Observable<TrainingSession[]>{
    return this.httpClient.get<TrainingSession[]>(`${this.baseURL}`)
  }

  createTrainingSession(trainingSession:TrainingSession):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, trainingSession);
  }

  getTrainingSessionById(id:number):Observable<TrainingSession>{
    return this.httpClient.get<TrainingSession>(`${this.baseURL}/${id}`);
  }

  updateTrainingSession(id:number, trainingSession: TrainingSession):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,trainingSession);
  }
  deleteTrainingSession(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
