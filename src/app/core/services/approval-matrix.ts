import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { APPROVAL_MATRIX } from '../mock/approval-matrix.mock';
import { ApprovalNode } from '../models/approval-node.model';

@Injectable({
	providedIn: 'root'
})
export class ApprovalMatrixService {
	private storageKey = 'approvalMatrix';

	constructor() {
		const savedMatrix = localStorage.getItem(this.storageKey);

		if (!savedMatrix) {
			localStorage.setItem(this.storageKey, JSON.stringify(APPROVAL_MATRIX));
		}
	}

	getMatrix(): Observable<ApprovalNode> {
		return of(this.readMatrix()).pipe(delay(300));
	}

	saveMatrix(matrix: ApprovalNode): Observable<ApprovalNode> {
		localStorage.setItem(this.storageKey, JSON.stringify(matrix));
		return of(matrix).pipe(delay(300));
	}

	private readMatrix(): ApprovalNode {
		const matrix = localStorage.getItem(this.storageKey);
		return matrix ? JSON.parse(matrix) : APPROVAL_MATRIX;
	}
}