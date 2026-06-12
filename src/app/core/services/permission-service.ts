import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private permissions = ['create', 'edit', 'approve', 'reject', 'view'];

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }

  getPermissions(): string[] {
    return this.permissions;
  }
}