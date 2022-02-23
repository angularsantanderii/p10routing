import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeAuthService } from './fake-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccesoRolesGuard implements CanActivate {
  
  constructor(private fakeAuthService: FakeAuthService,
              private router: Router) {}

  canActivate() {
    if(this.fakeAuthService.hasVentasAccess()) {
      return true;
    } else {
      this.router.navigate(['/acceso-no-autorizado'])
      return false;
    }
  }
  
}
