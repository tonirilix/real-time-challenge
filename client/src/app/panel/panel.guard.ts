import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class PanelGuard implements CanActivate {
    constructor(public authService: AuthService, public router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        debugger;
        if (this.authService.isLoggedIn()) { return true; }
        this.router.navigate(['/signin']);
        return true;
    }
}
