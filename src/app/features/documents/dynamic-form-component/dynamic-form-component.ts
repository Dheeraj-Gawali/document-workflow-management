import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators
} from '@angular/forms';
import { RouterLink } from '@angular/router';

type DynamicFieldType = 'text' | 'date' | 'select' | 'textarea';

interface DynamicField {
	key: string;
	type: DynamicFieldType;
	label: string;
	required?: boolean;
	options?: string[];
}

@Component({
	selector: 'app-dynamic-form-component',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, RouterLink],
	templateUrl: './dynamic-form-component.html',
	styleUrl: './dynamic-form-component.scss'
})
export class DynamicFormComponent implements OnInit {
	fields: DynamicField[] = [
		{
			key: 'policyName',
			type: 'text',
			label: 'Policy Name',
			required: true
		},
		{
			key: 'reviewDate',
			type: 'date',
			label: 'Review Date'
		},
		{
			key: 'department',
			type: 'select',
			label: 'Department',
			required: true,
			options: ['HR', 'Finance', 'Operations']
		},
		{
			key: 'remarks',
			type: 'textarea',
			label: 'Remarks'
		}
	];
	dynamicForm: FormGroup | any;
	submittedValue = '';

	constructor(private fb: FormBuilder) {
		this.dynamicForm = this.fb.group({});
	}

	ngOnInit(): void {
		this.buildForm();
	}

	buildForm(): void {
		this.fields.forEach(field => {
			const validators = field.required ? [Validators.required] : [];

			this.dynamicForm.addControl(
				field.key,
				new FormControl('', validators)
			);
		});
	}

	submitForm(): void {
		this.submittedValue = '';

		if (this.dynamicForm.invalid) {
			this.dynamicForm.markAllAsTouched();
			return;
		}

		this.submittedValue = JSON.stringify(this.dynamicForm.value, null, 2);
	}

	getControl(field: DynamicField) {
		return this.dynamicForm.get(field.key);
	}
}