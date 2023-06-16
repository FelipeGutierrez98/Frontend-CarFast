import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

export const loggedGuard: CanActivateFn = () => {
  const service = inject(ServicesService);
  const router = inject(Router);

  if (!service.getToken()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
