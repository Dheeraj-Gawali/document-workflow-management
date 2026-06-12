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
    },
    {
        id: 5,
        documentNumber: 'DOC-1005',
        title: 'Vendor Onboarding Process',
        department: 'Procurement',
        status: 'Rejected',
        createdBy: 'Emma Johnson',
        createdDate: '2026-05-18',
        updatedDate: '2026-06-06',
        effectiveDate: '2026-06-25',
        description: 'Standard process for onboarding new vendors.',
        priority: 'Medium',
        attachments: [
            {
                id: 5,
                fileName: 'vendor-onboarding.pdf',
                size: 1400000,
                type: 'application/pdf',
                uploadedAt: '2026-05-18'
            }
        ],
        auditLogs: [
            {
                id: 1,
                user: 'Emma Johnson',
                action: 'Document created',
                date: '2026-05-18 09:00 AM'
            },
            {
                id: 2,
                user: 'Procurement Head',
                action: 'Document rejected',
                date: '2026-06-06 02:15 PM'
            }
        ]
    },
    {
        id: 6,
        documentNumber: 'DOC-1006',
        title: 'Recruitment Workflow',
        department: 'HR',
        status: 'Approved',
        createdBy: 'David Clark',
        createdDate: '2026-05-15',
        updatedDate: '2026-06-04',
        effectiveDate: '2026-06-16',
        description: 'Workflow for recruitment approvals.',
        priority: 'High',
        attachments: [
            {
                id: 6,
                fileName: 'recruitment-workflow.docx',
                size: 860000,
                type: 'application/docx',
                uploadedAt: '2026-05-15'
            }
        ],
        auditLogs: [
            {
                id: 1,
                user: 'David Clark',
                action: 'Document created',
                date: '2026-05-15 10:20 AM'
            },
            {
                id: 2,
                user: 'HR Director',
                action: 'Document approved',
                date: '2026-06-04 11:40 AM'
            }
        ]
    },
    {
        id: 7,
        documentNumber: 'DOC-1007',
        title: 'Travel Expense Policy',
        department: 'Finance',
        status: 'Draft',
        createdBy: 'Sophia Lee',
        createdDate: '2026-06-02',
        updatedDate: '2026-06-02',
        effectiveDate: '2026-06-28',
        description: 'Policy governing employee travel expenses.',
        priority: 'Low',
        attachments: [
            {
                id: 7,
                fileName: 'travel-expense-policy.pdf',
                size: 1100000,
                type: 'application/pdf',
                uploadedAt: '2026-06-02'
            }
        ],
        auditLogs: [
            {
                id: 1,
                user: 'Sophia Lee',
                action: 'Document created',
                date: '2026-06-02 09:45 AM'
            }
        ]
    },
    {
        id: 8,
        documentNumber: 'DOC-1008',
        title: 'Business Continuity Plan',
        department: 'Operations',
        status: 'Submitted',
        createdBy: 'Robert King',
        createdDate: '2026-05-29',
        updatedDate: '2026-06-07',
        effectiveDate: '2026-06-30',
        description: 'Plan for maintaining operations during disruptions.',
        priority: 'High',
        attachments: [
            {
                id: 8,
                fileName: 'business-continuity-plan.pdf',
                size: 2500000,
                type: 'application/pdf',
                uploadedAt: '2026-05-29'
            }
        ],
        auditLogs: [
            {
                id: 1,
                user: 'Robert King',
                action: 'Document created',
                date: '2026-05-29 08:30 AM'
            },
            {
                id: 2,
                user: 'Robert King',
                action: 'Document submitted',
                date: '2026-06-07 10:10 AM'
            }
        ]
    },
    {
        id: 9,
        documentNumber: 'DOC-1009',
        title: 'Cybersecurity Incident Response',
        department: 'IT',
        status: 'Manager Review',
        createdBy: 'James Miller',
        createdDate: '2026-05-30',
        updatedDate: '2026-06-08',
        effectiveDate: '2026-06-27',
        description: 'Procedure for handling cybersecurity incidents.',
        priority: 'High',
        attachments: [
            {
                id: 9,
                fileName: 'incident-response.pdf',
                size: 1800000,
                type: 'application/pdf',
                uploadedAt: '2026-05-30'
            }
        ],
        auditLogs: [
            {
                id: 1,
                user: 'James Miller',
                action: 'Document created',
                date: '2026-05-30 01:15 PM'
            },
            {
                id: 2,
                user: 'IT Manager',
                action: 'Moved to manager review',
                date: '2026-06-08 03:20 PM'
            }
        ]
    },
    {
        id: 10,
        documentNumber: 'DOC-1010',
        title: 'Asset Management Policy',
        department: 'Operations',
        status: 'Approved',
        createdBy: 'Olivia Davis',
        createdDate: '2026-05-17',
        updatedDate: '2026-06-01',
        effectiveDate: '2026-06-14',
        description: 'Policy for managing organizational assets.',
        priority: 'Medium',
        attachments: [
            {
                id: 10,
                fileName: 'asset-management.pdf',
                size: 1000000,
                type: 'application/pdf',
                uploadedAt: '2026-05-17'
            }
        ],
        auditLogs: [
            {
                id: 1,
                user: 'Olivia Davis',
                action: 'Document created',
                date: '2026-05-17 11:30 AM'
            },
            {
                id: 2,
                user: 'Operations Director',
                action: 'Document approved',
                date: '2026-06-01 04:45 PM'
            }
        ]
    },
    {
        id: 11,
        documentNumber: 'DOC-1011',
        title: 'Employee Code of Conduct',
        department: 'HR',
        status: 'Rejected',
        createdBy: 'Daniel White',
        createdDate: '2026-05-21',
        updatedDate: '2026-06-05',
        effectiveDate: '2026-06-24',
        description: 'Code of conduct applicable to all employees.',
        priority: 'High',
        attachments: [
            {
                id: 11,
                fileName: 'employee-conduct.pdf',
                size: 900000,
                type: 'application/pdf',
                uploadedAt: '2026-05-21'
            }
        ],
        auditLogs: [
            {
                id: 1,
                user: 'Daniel White',
                action: 'Document created',
                date: '2026-05-21 02:00 PM'
            },
            {
                id: 2,
                user: 'HR Manager',
                action: 'Document rejected',
                date: '2026-06-05 12:30 PM'
            }
        ]
    },
    {
        id: 12,
        documentNumber: 'DOC-1012',
        title: 'Data Retention Policy',
        department: 'IT',
        status: 'Draft',
        createdBy: 'Emily Taylor',
        createdDate: '2026-06-03',
        updatedDate: '2026-06-03',
        effectiveDate: '2026-07-01',
        description: 'Policy defining data retention and archival procedures.',
        priority: 'Medium',
        attachments: [
            {
                id: 12,
                fileName: 'data-retention-policy.pdf',
                size: 1300000,
                type: 'application/pdf',
                uploadedAt: '2026-06-03'
            }
        ],
        auditLogs: [
            {
                id: 1,
                user: 'Emily Taylor',
                action: 'Document created',
                date: '2026-06-03 09:10 AM'
            }
        ]
    }
];