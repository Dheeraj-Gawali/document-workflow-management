import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DocumentItem, DocumentStatus } from '../../../core/models/document.model';
import { DocumentService } from '../../../core/services/document-service';
import { AuditTimelineComponent } from '../../../shared/components/audit-timeline-component/audit-timeline-component';

@Component({
	selector: 'app-document-details-component',
	standalone: true,
	imports: [CommonModule, RouterLink, AuditTimelineComponent],
	templateUrl: './document-details-component.html',
	styleUrl: './document-details-component.scss'
})
export class DocumentDetailsComponent implements OnInit {
	document?: DocumentItem;
	loading = false;
	message = '';

	constructor(
		private route: ActivatedRoute,
		private documentService: DocumentService
	) { }

	ngOnInit(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.loadDocument(id);
	}

	loadDocument(id: number): void {
		this.loading = true;

		this.documentService.getDocumentById(id).subscribe({
			next: document => {
				this.document = document;
				this.loading = false;

				if (!document) {
					this.message = 'Document not found.';
				}
			},
			error: () => {
				this.message = 'Unable to load document details.';
				this.loading = false;
			}
		});
	}

	approveDocument(): void {
		this.updateStatus('Approved');
	}

	rejectDocument(): void {
		this.updateStatus('Rejected');
	}

	submitForReview(): void {
		this.updateStatus('Submitted');
	}

	moveToManagerReview(): void {
		this.updateStatus('Manager Review');
	}

	private updateStatus(status: DocumentStatus): void {
		if (!this.document) {
			return;
		}

		this.documentService.changeStatus(this.document.id, status).subscribe({
			next: updatedDocument => {
				this.document = updatedDocument;
				this.message = `Document marked as ${status}.`;
			},
			error: () => {
				this.message = 'Unable to update document status.';
			}
		});
	}
}