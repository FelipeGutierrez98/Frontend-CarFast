import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

export const authGuard: CanActivateFn = () => {
  const service = inject(ServicesService);
  const router = inject(Router);

  if (service.getToken()) {
    return true;
  } else {
    router.navigate(['/auth/cliente-no-registrado']);
    return false;
  }
};
