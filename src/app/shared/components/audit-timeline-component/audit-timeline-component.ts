import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AuditLog } from '../../../core/models/document.model';

@Component({
  selector: 'app-audit-timeline-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audit-timeline-component.html',
  styleUrl: './audit-timeline-component.scss'
})
export class AuditTimelineComponent {
  @Input() logs: AuditLog[] = [];
}