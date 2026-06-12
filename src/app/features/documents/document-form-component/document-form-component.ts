import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	ValidationErrors,
	Validators
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DocumentAttachment, DocumentItem } from '../../../core/models/document.model';
import { DocumentService } from '../../../core/services/document-service';

@Component({
	selector: 'app-document-form-component',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, RouterLink],
	templateUrl: './document-form-component.html',
	styleUrl: './document-form-component.scss'
})
export class DocumentFormComponent implements OnInit {
	documentForm: FormGroup | any;
	attachments: DocumentAttachment[] = [];
	documentId?: number;
	editMode = false;
	loading = false;
	submitted = false;
	message = '';

	departments = ['HR', 'Finance', 'Operations', 'IT'];
	priorities = ['Low', 'Medium', 'High'];

	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private documentService: DocumentService
	) {		
		this.documentForm = this.fb.group({
			title: ['', [Validators.required, Validators.minLength(5)]],
			department: ['', Validators.required],
			effectiveDate: ['', [Validators.required, this.futureDateValidator]],
			description: ['', Validators.required],
			priority: ['Medium', Validators.required],
			createdBy: ['Veeru', Validators.required]
		});
	 }

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');

		if (id) {
			this.documentId = Number(id);
			this.editMode = true;
			this.loadDocument(this.documentId);
		}
	}

	loadDocument(id: number): void {
		this.loading = true;

		this.documentService.getDocumentById(id).subscribe({
			next: document => {
				if (!document) {
					this.message = 'Document not found.';
					this.loading = false;
					return;
				}

				if (document.status !== 'Draft') {
					this.message = 'Only draft documents can be edited.';
					this.documentForm.disable();
					this.loading = false;
					return;
				}

				this.patchForm(document);
				this.attachments = document.attachments;
				this.loading = false;
			},
			error: () => {
				this.message = 'Unable to load document details.';
				this.loading = false;
			}
		});
	}

	patchForm(document: DocumentItem): void {
		this.documentForm.patchValue({
			title: document.title,
			department: document.department,
			effectiveDate: document.effectiveDate,
			description: document.description,
			priority: document.priority,
			createdBy: document.createdBy
		});

		this.documentForm.markAsPristine();
	}

	onFileChange(event: Event): void {
		const input = event.target as HTMLInputElement;
		const files = input.files;

		if (!files) {
			return;
		}

		Array.from(files).forEach(file => {
			const maxFileSize = 5 * 1024 * 1024;

			if (file.size > maxFileSize) {
				this.message = `${file.name} is larger than 5 MB.`;
				return;
			}

			this.attachments.push({
				id: Date.now() + Math.floor(Math.random() * 1000),
				fileName: file.name,
				size: file.size,
				type: file.type || 'Unknown',
				uploadedAt: new Date().toISOString().split('T')[0]
			});
		});

		this.documentForm.markAsDirty();
		input.value = '';
	}

	removeAttachment(id: number): void {
		this.attachments = this.attachments.filter(file => file.id !== id);
		this.documentForm.markAsDirty();
	}

	saveDocument(): void {
		this.submitted = true;
		this.message = '';

		if (this.documentForm.invalid || this.attachments.length === 0) {
			this.documentForm.markAllAsTouched();
			return;
		}

		const formValue = this.documentForm.getRawValue();

		const payload = {
			title: formValue.title || '',
			department: formValue.department || '',
			effectiveDate: formValue.effectiveDate || '',
			description: formValue.description || '',
			priority: formValue.priority as 'Low' | 'Medium' | 'High',
			createdBy: formValue.createdBy || 'Veeru',
			status: 'Draft' as const,
			attachments: this.attachments
		};

		this.loading = true;

		if (this.editMode && this.documentId) {
			this.documentService.updateDocument(this.documentId, payload).subscribe({
				next: () => {
					this.documentForm.markAsPristine();
					this.router.navigate(['/documents']);
				},
				error: error => {
					this.message = error.message || 'Unable to update document.';
					this.loading = false;
				}
			});

			return;
		}

		this.documentService.createDocument(payload).subscribe({
			next: () => {
				this.documentForm.markAsPristine();
				this.router.navigate(['/documents']);
			},
			error: () => {
				this.message = 'Unable to create document.';
				this.loading = false;
			}
		});
	}

	hasUnsavedChanges(): boolean {
		return this.documentForm.dirty;
	}

	private futureDateValidator(control: AbstractControl): ValidationErrors | null {
		if (!control.value) {
			return null;
		}

		const selectedDate = new Date(control.value);
		const today = new Date();

		today.setHours(0, 0, 0, 0);

		return selectedDate < today ? { pastDate: true } : null;
	}
}