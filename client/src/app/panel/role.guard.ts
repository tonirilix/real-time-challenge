import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(public authService: AuthService, public router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        debugger
        const user = this.authService.UserData;
        const expectedRole = 'Admin';

        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/signin']);
            return false;
        } else if (user.role !== expectedRole) {
            this.router.navigate(['/panel/emitter']);
            return false;
        }
        return true;
    }
}
