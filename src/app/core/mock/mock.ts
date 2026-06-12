import { DocumentItem } from '../models/document.model';

export const MOCK_DOCUMENTS: DocumentItem[] = [
    {
        id: 1,
        documentNumber: 'DOC-1001',
        title: 'Employee Leave Policy',
        department: 'HR',
        status: 'Draft',
        createdBy: 'Dheeru',
        createdDate: '2026-06-01',
        updatedDate: '2026-06-04',
        effectiveDate: '2026-06-20',
        description: 'Leave policy document for employees.',
        priority: 'High',
        attachments: [
            {
                id: 1,
                fileName: 'leave-policy.pdf',
                size: 1200000,
                type: 'application/pdf',
                uploadedAt: '2026-06-01'
            }
        ],
        auditLogs: [
            {
                id: 1,
                user: 'Dheeru',
                action: 'Document created',
                date: '2026-06-01 10:15 AM'
            }
        ]
    },
    {
        id: 2,
        documentNumber: 'DOC-1002',
        title: 'Finance Approval Guidelines',
        department: 'Finance',
        status: 'Submitted',
        createdBy: 'John Smith',
        createdDate: '2026-05-28',
        updatedDate: '2026-06-02',
        effectiveDate: '2026-06-18',
        description: 'Guidelines for finance approval process.',
        priority: 'Medium',
        attachments: [
            {
                id: 2,
                fileName: 'finance-guidelines.docx',
                size: 950000,
                type: 'application/docx',
                uploadedAt: '2026-05-28'
            }
        ],
        auditLogs: [
            {
                id: 1,
                user: 'John Smith',
                action: 'Document created',
                date: '2026-05-28 09:30 AM'
            },
            {
                id: 2,
                user: 'John Smith',
                action: 'Document submitted',
                date: '2026-06-02 12:20 PM'
            }
        ]
    },
    {
        id: 3,
        documentNumber: 'DOC-1003',
        title: 'Operations Safety Checklist',
        department: 'Operations',
        status: 'Manager Review',
        createdBy: 'Sarah Wilson',
        createdDate: '2026-05-25',
        updatedDate: '2026-06-03',
        effectiveDate: '2026-06-22',
        description: 'Safety checklist used by operations team.',
        priority: 'High',
        attachments: [
            {
                id: 3,
                fileName: 'safety-checklist.xlsx',
                size: 700000,
                type: 'application/xlsx',
                uploadedAt: '2026-05-25'
            }
        ],
        auditLogs: [
            {
                id: 1,
                user: 'Sarah Wilson',
                action: 'Document created',
                date: '2026-05-25 11:00 AM'
            },
            {
                id: 2,
                user: 'Manager',
                action: 'Moved to manager review',
                date: '2026-06-03 03:45 PM'
            }
        ]
    },
    {
        id: 4,
        documentNumber: 'DOC-1004',
        title: 'IT Security Policy',
        department: 'IT',
        status: 'Approved',
        createdBy: 'Michael Brown',
        createdDate: '2026-05-20',
        updatedDate: '2026-06-05',
        effectiveDate: '2026-06-15',
        description: 'Security rules and access policy for IT systems.',
        priority: 'High',
        attachments: [
            {
                id: 4,
                fileName: 'it-security-policy.pdf',
                size: 2100000,
                type: 'application/pdf',
                uploadedAt: '2026-05-20'
            }
        ],
        auditLogs: [
            {
                id: 1,
                user: 'Michael Brown',
                action: 'Document created',
                date: '2026-05-20 10:10 AM'
            },
            {
                id: 2,
                user: 'Admin',
                action: 'Document approved',
                date: '2026-06-05 04:00 PM'
            }
        ]
    }
];