import { CanDeactivateFn } from '@angular/router';

export interface CanLeavePage {
  hasUnsavedChanges: () => boolean;
}

export const pendingChangesGuard: CanDeactivateFn<CanLeavePage> = component => {
  if (component.hasUnsavedChanges && component.hasUnsavedChanges()) {
    return confirm('You have unsaved changes. Are you sure you want to leave this page?');
  }

  return true;
};