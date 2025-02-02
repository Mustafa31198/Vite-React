import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Meal } from '../../imeal';

@Injectable({
  providedIn: 'root'
})
export class MailsService {
  getinfo() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }  


  getAllMeals():Observable<Category>{
    return this.httpClient.get<Category>(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
  }
  getMealsByCategory(categoryId:string):Observable<Category>{
    return this.httpClient.get<Category>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`)
  }
  getDetails(id:string):Observable<Meal>{
    return this.httpClient.get<Meal>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }

}
