import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApprovalNode } from '../../../core/models/approval-node.model';
import { ApprovalMatrixService } from '../../../core/services/approval-matrix';
import { ApprovalTreeComponent } from '../approval-tree-component/approval-tree-component';

@Component({
	selector: 'app-approval-matrix-component',
	standalone: true,
	imports: [CommonModule, RouterLink, ApprovalTreeComponent],
	templateUrl: './approval-matrix-component.html',
	styleUrl: './approval-matrix-component.scss'
})
export class ApprovalMatrixComponent implements OnInit {
	matrix?: ApprovalNode;
	loading = false;
	message = '';

	constructor(private approvalMatrixService: ApprovalMatrixService) { }

	ngOnInit(): void {
		this.loadMatrix();
	}

	loadMatrix(): void {
		this.loading = true;

		this.approvalMatrixService.getMatrix().subscribe({
			next: matrix => {
				this.matrix = matrix;
				this.loading = false;
			},
			error: () => {
				this.message = 'Unable to load approval matrix.';
				this.loading = false;
			}
		});
	}

	saveMatrix(): void {
		if (!this.matrix) {
			return;
		}

		this.approvalMatrixService.saveMatrix(this.matrix).subscribe({
			next: () => {
				this.message = 'Approval matrix saved successfully.';
			},
			error: () => {
				this.message = 'Unable to save approval matrix.';
			}
		});
	}

	removeRootNode(): void {
		this.message = 'Root approver cannot be removed.';
	}

	markAsChanged(): void {
		this.message = 'You have unsaved approval matrix changes.';
	}
}