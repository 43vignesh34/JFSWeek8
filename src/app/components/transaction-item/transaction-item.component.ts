import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})

export class TransactionItemComponent {
  @Input() transaction: any;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  deleteTransaction() {
    console.log("This row will be deleted.");
    this.delete.emit(this.transaction);
  }
}
