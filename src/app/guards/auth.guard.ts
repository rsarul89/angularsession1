import { Injectable, OnDestroy } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Auth } from '../auth';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, OnDestroy {
  private user: Auth;
  subscription: Subscription;
  constructor(public router: Router, public authService: AuthService) {
    this.subscription = authService.LoggedInUser().subscribe(user => {
      this.user = user;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.user == null) {
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    return true;
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('checking child route access');
    return true;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
