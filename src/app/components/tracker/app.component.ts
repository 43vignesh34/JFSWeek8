import { Component } from '@angular/core';

interface transaction{
  id: number,
    description: string,
    amount: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  totalIncome: number = 0;
  totalExpenses: number = 0;
  avilableBalance: number = 0;

  computeTotalIncome(transactions: transaction[]): void{
    this.totalIncome = transactions.reduce(
      (total, transaction) => total + parseFloat(transaction.amount),
      0
    );
  }
  
  computeTotalExpenses(transactions: transaction[]): void {
    this.totalExpenses = transactions.reduce(
      (total, transaction) => total + parseFloat(transaction.amount),
      0
    );
  }
  
  computeAvailableBalance(transactions: any): void {
    this.avilableBalance = this.totalIncome - this.totalExpenses;
  }

  onIncomeChange(transactions: any) {
    this.computeTotalIncome(transactions);
     this.computeAvailableBalance(transactions);
  }

  onExpenseChange(transactions: any) {
    this.computeTotalExpenses(transactions);
    this.computeAvailableBalance(transactions);
  }
}



