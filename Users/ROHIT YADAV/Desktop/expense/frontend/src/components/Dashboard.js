import React from 'react';
import Charts from './Charts';
import ExpenseList from './ExpenseList';
import '../styles/Dashboard.css';

const Dashboard = ({ expenses, onAddExpense, onEditExpense, onDeleteExpense }) => {
  // Calculate statistics
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const thisMonthExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
  });
  
  const thisMonthTotal = thisMonthExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const thisMonthTransactions = thisMonthExpenses.length;
  
  const currentDate = new Date();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const avgDaily = thisMonthTotal / daysInMonth;

  return (
    <div className="dashboard">
      {/* Header Cards */}
      <div className="stats-cards">
        <div className="stat-card blue">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>Total Expenses</h3>
            <p className="stat-amount">${totalExpenses.toFixed(2)}</p>
            <span className="stat-label">All time spending</span>
          </div>
        </div>
        
        <div className="stat-card green">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h3>This Month</h3>
            <p className="stat-amount">${thisMonthTotal.toFixed(2)}</p>
            <span className="stat-label">{thisMonthTransactions} transactions</span>
          </div>
        </div>
        
        <div className="stat-card purple">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>Avg. Daily</h3>
            <p className="stat-amount">${avgDaily.toFixed(2)}</p>
            <span className="stat-label">Current month</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <Charts expenses={expenses} />

      {/* Recent Expenses */}
      <ExpenseList 
        expenses={expenses}
        onAddExpense={onAddExpense}
        onEditExpense={onEditExpense}
        onDeleteExpense={onDeleteExpense}
      />
    </div>
  );
};

export default Dashboard;