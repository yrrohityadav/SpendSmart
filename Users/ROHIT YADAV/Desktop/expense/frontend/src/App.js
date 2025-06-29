import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/expenses');
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAddExpense = () => {
    setEditingExpense(null);
    setShowAddExpense(true);
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
    setShowAddExpense(true);
  };

  const handleCloseModal = () => {
    setShowAddExpense(false);
    setEditingExpense(null);
  };

  const handleExpenseSubmit = async (expenseData) => {
    try {
      const url = editingExpense 
        ? `http://localhost:5000/api/expenses/${editingExpense._id}`
        : 'http://localhost:5000/api/expenses';
      
      const method = editingExpense ? 'PUT' : 'POST';
      
      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
      });
      
      fetchExpenses();
      handleCloseModal();
    } catch (error) {
      console.error('Error saving expense:', error);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/expenses/${id}`, {
        method: 'DELETE',
      });
      fetchExpenses();
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  return (
    <div className="App">
      <Dashboard 
        expenses={expenses}
        onAddExpense={handleAddExpense}
        onEditExpense={handleEditExpense}
        onDeleteExpense={handleDeleteExpense}
      />
      {showAddExpense && (
        <AddExpense
          expense={editingExpense}
          onSubmit={handleExpenseSubmit}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;