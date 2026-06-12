import { ApprovalNode } from '../models/approval-node.model';

export const APPROVAL_MATRIX: ApprovalNode = {
    id: 1,
    name: 'Robert King',
    role: 'CEO',
    expanded: true,
    children: [
        {
            id: 2,
            name: 'Sarah Wilson',
            role: 'Finance Manager',
            expanded: true,
            children: [
                {
                    id: 4,
                    name: 'John Smith',
                    role: 'Finance Reviewer',
                    expanded: true,
                    children: []
                }
            ]
        },
        {
            id: 3,
            name: 'Michael Brown',
            role: 'Operations Manager',
            expanded: true,
            children: [
                {
                    id: 5,
                    name: 'Emily Davis',
                    role: 'Operations Reviewer',
                    expanded: true,
                    children: []
                }
            ]
        }
    ]
};