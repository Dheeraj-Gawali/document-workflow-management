import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApprovalNode } from '../../../core/models/approval-node.model';

@Component({
	selector: 'app-approval-tree-component',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './approval-tree-component.html',
	styleUrl: './approval-tree-component.scss'
})
export class ApprovalTreeComponent {
	@Input({ required: true }) node!: ApprovalNode;

	@Output() changed = new EventEmitter<void>();
	@Output() remove = new EventEmitter<number>();

	editing = false;

	toggleExpand(): void {
		this.node.expanded = !this.node.expanded;
		this.changed.emit();
	}

	addChild(): void {
		this.node.children.push({
			id: Date.now(),
			name: 'New Approver',
			role: 'Reviewer',
			expanded: true,
			children: []
		});

		this.node.expanded = true;
		this.changed.emit();
	}

	removeNode(): void {
		this.remove.emit(this.node.id);
	}

	saveEdit(): void {
		this.editing = false;
		this.changed.emit();
	}

	removeChild(id: number): void {
		this.node.children = this.node.children.filter(child => child.id !== id);
		this.changed.emit();
	}
}