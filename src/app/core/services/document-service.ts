import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { DocumentItem, DocumentStatus } from '../models/document.model';
import { MOCK_DOCUMENTS } from '../mock/mock';

@Injectable({
	providedIn: 'root'
})
export class DocumentService {
	private storageKey = 'documents';

	constructor() {
		const savedDocuments = localStorage.getItem(this.storageKey);

		if (!savedDocuments) {
			localStorage.setItem(this.storageKey, JSON.stringify(MOCK_DOCUMENTS));
		}
	}

	getDocuments(): Observable<DocumentItem[]> {
		return of(this.readDocuments()).pipe(delay(400));
	}

	getDocumentById(id: number): Observable<DocumentItem | undefined> {
		const document = this.readDocuments().find(item => item.id === id);
		return of(document).pipe(delay(300));
	}

	createDocument(payload: Omit<DocumentItem, 'id' | 'documentNumber' | 'createdDate' | 'updatedDate' | 'auditLogs'>): Observable<DocumentItem> {
		const documents = this.readDocuments();

		const newDocument: DocumentItem = {
			...payload,
			id: Date.now(),
			documentNumber: this.generateDocumentNumber(documents.length + 1),
			status: 'Draft',
			createdDate: this.today(),
			updatedDate: this.today(),
			auditLogs: [
				{
					id: 1,
					user: payload.createdBy,
					action: 'Document created',
					date: new Date().toLocaleString()
				}
			]
		};

		documents.unshift(newDocument);
		this.saveDocuments(documents);

		return of(newDocument).pipe(delay(400));
	}

	updateDocument(id: number, payload: Partial<DocumentItem>): Observable<DocumentItem> {
		const documents = this.readDocuments();
		const index = documents.findIndex(item => item.id === id);

		if (index === -1) {
			return throwError(() => new Error('Document not found'));
		}

		if (documents[index].status !== 'Draft') {
			return throwError(() => new Error('Only draft documents can be edited'));
		}

		documents[index] = {
			...documents[index],
			...payload,
			updatedDate: this.today()
		};

		this.saveDocuments(documents);

		return of(documents[index]).pipe(delay(400));
	}

	changeStatus(id: number, status: DocumentStatus): Observable<DocumentItem> {
		const documents = this.readDocuments();
		const index = documents.findIndex(item => item.id === id);

		if (index === -1) {
			return throwError(() => new Error('Document not found'));
		}

		documents[index] = {
			...documents[index],
			status,
			updatedDate: this.today(),
			auditLogs: [
				...documents[index].auditLogs,
				{
					id: documents[index].auditLogs.length + 1,
					user: 'Current User',
					action: `Document ${status}`,
					date: new Date().toLocaleString()
				}
			]
		};

		this.saveDocuments(documents);

		return of(documents[index]).pipe(delay(300));
	}

	bulkUpdateStatus(ids: number[], status: DocumentStatus): Observable<{ success: number; failed: number }> {
		const documents = this.readDocuments();
		let success = 0;
		let failed = 0;

		const updatedDocuments = documents.map(document => {
			if (!ids.includes(document.id)) {
				return document;
			}

			if (document.status === 'Approved' || document.status === 'Rejected') {
				failed++;
				return document;
			}

			success++;

			return {
				...document,
				status,
				updatedDate: this.today(),
				auditLogs: [
					...document.auditLogs,
					{
						id: document.auditLogs.length + 1,
						user: 'Current User',
						action: `Bulk ${status}`,
						date: new Date().toLocaleString()
					}
				]
			};
		});

		this.saveDocuments(updatedDocuments);

		return of({ success, failed }).pipe(delay(500));
	}

	private readDocuments(): DocumentItem[] {
		const documents = localStorage.getItem(this.storageKey);
		return documents ? JSON.parse(documents) : [];
	}

	private saveDocuments(documents: DocumentItem[]): void {
		localStorage.setItem(this.storageKey, JSON.stringify(documents));
	}

	private generateDocumentNumber(count: number): string {
		return `DOC-${1000 + count}`;
	}

	private today(): string {
		return new Date().toISOString().split('T')[0];
	}
}