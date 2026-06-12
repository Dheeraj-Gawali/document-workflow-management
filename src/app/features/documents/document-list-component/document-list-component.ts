import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DocumentItem, DocumentStatus } from '../../../core/models/document.model';
import { DocumentService } from '../../../core/services/document-service';

@Component({
	selector: 'app-document-list-component',
	standalone: true,
	imports: [CommonModule, FormsModule, RouterLink],
	templateUrl: './document-list-component.html',
	styleUrl: './document-list-component.scss'
})
export class DocumentListComponent implements OnInit {
	documents: DocumentItem[] = [];
	filteredDocuments: DocumentItem[] = [];
	pagedDocuments: DocumentItem[] = [];

	searchText = '';
	selectedStatus = '';
	sortColumn: 'title' | 'createdDate' = 'createdDate';
	sortDirection: 'asc' | 'desc' = 'desc';

	currentPage = 1;
	pageSize = 5;
	totalRecords = 0;

	selectedIds: number[] = [];
	message = '';
	loading = false;

	statuses: DocumentStatus[] = [
		'Draft',
		'Submitted',
		'Manager Review',
		'Approved',
		'Rejected'
	];

	constructor(private documentService: DocumentService) { }

	ngOnInit(): void {
		this.loadDocuments();
	}

	loadDocuments(): void {
		this.loading = true;

		this.documentService.getDocuments().subscribe({
			next: documents => {
				this.documents = documents;
				this.applyFilters();
				this.loading = false;
			},
			error: () => {
				this.message = 'Something went wrong while loading documents.';
				this.loading = false;
			}
		});
	}

	applyFilters(): void {
		let result = [...this.documents];

		if (this.searchText.trim()) {
			const search = this.searchText.toLowerCase();

			result = result.filter(document =>
				document.title.toLowerCase().includes(search)
			);
		}

		if (this.selectedStatus) {
			result = result.filter(document => document.status === this.selectedStatus);
		}

		result.sort((a, b) => {
			const firstValue = a[this.sortColumn].toLowerCase();
			const secondValue = b[this.sortColumn].toLowerCase();

			if (firstValue < secondValue) {
				return this.sortDirection === 'asc' ? -1 : 1;
			}

			if (firstValue > secondValue) {
				return this.sortDirection === 'asc' ? 1 : -1;
			}

			return 0;
		});

		this.filteredDocuments = result;
		this.totalRecords = result.length;
		this.currentPage = 1;
		this.updatePagedDocuments();
	}

	updatePagedDocuments(): void {
		const startIndex = (this.currentPage - 1) * this.pageSize;
		const endIndex = startIndex + this.pageSize;

		this.pagedDocuments = this.filteredDocuments.slice(startIndex, endIndex);
	}

	changeSort(column: 'title' | 'createdDate'): void {
		if (this.sortColumn === column) {
			this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			this.sortColumn = column;
			this.sortDirection = 'asc';
		}

		this.applyFilters();
	}

	nextPage(): void {
		if (this.currentPage < this.totalPages) {
			this.currentPage++;
			this.updatePagedDocuments();
		}
	}

	previousPage(): void {
		if (this.currentPage > 1) {
			this.currentPage--;
			this.updatePagedDocuments();
		}
	}

	toggleSelection(id: number): void {
		if (this.selectedIds.includes(id)) {
			this.selectedIds = this.selectedIds.filter(selectedId => selectedId !== id);
		} else {
			this.selectedIds.push(id);
		}
	}

	toggleSelectAll(event: Event): void {
		const checked = (event.target as HTMLInputElement).checked;

		if (checked) {
			const pageIds = this.pagedDocuments.map(document => document.id);
			this.selectedIds = Array.from(new Set([...this.selectedIds, ...pageIds]));
		} else {
			const pageIds = this.pagedDocuments.map(document => document.id);
			this.selectedIds = this.selectedIds.filter(id => !pageIds.includes(id));
		}
	}

	isSelected(id: number): boolean {
		return this.selectedIds.includes(id);
	}

	isAllSelected(): boolean {
		return this.pagedDocuments.length > 0 &&
			this.pagedDocuments.every(document => this.selectedIds.includes(document.id));
	}

	bulkApprove(): void {
		this.bulkUpdate('Approved');
	}

	bulkReject(): void {
		this.bulkUpdate('Rejected');
	}

	private bulkUpdate(status: DocumentStatus): void {
		if (!this.selectedIds.length) {
			this.message = 'Please select at least one document.';
			return;
		}

		this.documentService.bulkUpdateStatus(this.selectedIds, status).subscribe({
			next: result => {
				this.message = `${result.success} document(s) updated, ${result.failed} failed.`;
				this.selectedIds = [];
				this.loadDocuments();
			},
			error: () => {
				this.message = 'Bulk operation failed.';
			}
		});
	}

	get totalPages(): number {
		return Math.ceil(this.totalRecords / this.pageSize);
	}
}