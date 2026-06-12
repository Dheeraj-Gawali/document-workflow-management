export interface ApprovalNode {
    id: number;
    name: string;
    role: string;
    expanded: boolean;
    children: ApprovalNode[];
}