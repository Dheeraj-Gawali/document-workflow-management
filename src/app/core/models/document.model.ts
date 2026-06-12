export type DocumentStatus =
    | 'Draft'
    | 'Submitted'
    | 'Manager Review'
    | 'Approved'
    | 'Rejected';

export type DocumentPriority = 'Low' | 'Medium' | 'High';

export interface DocumentAttachment {
    id: number;
    fileName: string;
    size: number;
    type: string;
    uploadedAt: string;
}

export interface AuditLog {
    id: number;
    user: string;
    action: string;
    date: string;
    comment?: string;
}

export interface DocumentItem {
    id: number;
    documentNumber: string;
    title: string;
    department: string;
    status: DocumentStatus;
    createdBy: string;
    createdDate: string;
    updatedDate: string;
    effectiveDate: string;
    description: string;
    priority: DocumentPriority;
    attachments: DocumentAttachment[];
    auditLogs: AuditLog[];
}