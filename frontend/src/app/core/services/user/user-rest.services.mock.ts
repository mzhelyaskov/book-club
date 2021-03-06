import {Inject, Injectable} from '@angular/core';
import {UserModel} from '@@user/models/user.model';
import {Observable, of} from 'rxjs/index';
import {UserRestService} from '@@user/services/user-rest.service';

@Injectable({providedIn: 'root'})
export class UserRestServicesMock implements UserRestService {

  constructor(@Inject('api') private api: string) {}

  getCurrentUser$(): Observable<UserModel> {
    return of({
      id: 'd7acedf2ed2d4bdb',
      username: 'vasya',
      password: 'angular'
    });
  }
}
