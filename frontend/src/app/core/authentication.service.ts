import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    loggedIn = false;
    userData: any;
    userDataUpdated = new EventEmitter<any>();
    private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  registerUser(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post<any>(`${this.apiUrl}/api/v1/users/register`, userData);
  }

  loginUser(loginData: any): Observable<any> {
    console.log(loginData);
    return this.http.post<any>(`${this.apiUrl}/api/v1/users/login`, loginData);
  }

  setUserData(data: any) {
    console.log(data)
    this.userData = data;
    this.userDataUpdated.emit(data);
  }

  getUserData(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/v1/users/userdata`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).pipe(
      tap((userData) => {
        // console.log('User data received:', userData);
      }),
      catchError((error) => {
        console.error('Error fetching user data:', error);
        return of(null);
      })
    );
  }
  
  logout() {
    this.loggedIn = false;
    this.userData = null;
    this.userDataUpdated.emit(null);
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }

  updateSetting(userData: any){
    return this.http.put<any>(`${this.apiUrl}/api/v1/users/update`, userData);
  }

}
