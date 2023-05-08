import { Injectable } from '@angular/core';      
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';      
import { Observable, map, take } from 'rxjs';      
import { AuthService } from '../services/auth.service';
@Injectable({      
   providedIn: 'root'      
})      
export class AuthGuard implements CanActivate {      
   constructor(private router: Router,private _service:AuthService) { }      
   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this._service.isLoggedIn.pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        })
      );
    }

}    