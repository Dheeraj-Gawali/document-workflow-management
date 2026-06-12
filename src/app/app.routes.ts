import { Routes } from '@angular/router';
import { pendingChangesGuard } from './core/guards/pending-changes-guard-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'documents',
        pathMatch: 'full'
    },
    {
        path: 'documents',
        loadComponent: () =>
            import('./features/documents/document-list-component/document-list-component')
                .then(m => m.DocumentListComponent)
    },
    {
        path: 'documents/create',
        loadComponent: () =>
            import('./features/documents/document-form-component/document-form-component')
                .then(m => m.DocumentFormComponent),
        canDeactivate: [pendingChangesGuard]
    },
    {
        path: 'documents/:id',
        loadComponent: () =>
            import('./features/documents/document-details-component/document-details-component')
                .then(m => m.DocumentDetailsComponent)
    },
    {
        path: 'documents/:id/edit',
        loadComponent: () =>
            import('./features/documents/document-form-component/document-form-component')
                .then(m => m.DocumentFormComponent),
        canDeactivate: [pendingChangesGuard]
    },
    {
        path: 'approval-matrix',
        loadComponent: () =>
            import('./features/approval-matrix/approval-matrix-component/approval-matrix-component')
                .then(m => m.ApprovalMatrixComponent)
    },
    {
        path: 'dynamic-form',
        loadComponent: () =>
            import('./features/documents/dynamic-form-component/dynamic-form-component')
                .then(m => m.DynamicFormComponent)
    }
];