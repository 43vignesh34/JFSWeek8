import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
  @Input() transactionType: string = 'Expense';
  transactions: any[] = []; // Initialize an array to store submitted data
  id: number = 1;
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  transactionForm = this.formBuilder.group({
    desc: '',
    amt: ''
  });

  onSubmit(): void {
    console.warn('Your expense has been submitted', this.transactionForm.value);
    // Add the submitted data to the array
    this.transactions.push({
      id: this.id++,
      description: this.transactionForm.value.desc,
      amount: this.transactionForm.value.amt,
    });
    this.change.emit(this.transactions);
    this.transactionForm.reset();
  }

  onDeleteTransaction(deletedTransaction: any) {
    // Handle the delete action here using the deletedTransaction data.
    const index = this.transactions.indexOf(deletedTransaction);
    if (index !== -1) {
      this.transactions.splice(index, 1);
    }
    this.change.emit(this.transactions);
  }
  
  
    
}
