
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserLogin } from '../models/userLogin.model';

@Injectable({
    providedIn: 'root'
  })
export class PaginationService {
    
    public beersIndexStart: number = 0;
    public beersIndexEnd: number = 6;

    constructor() { }

}