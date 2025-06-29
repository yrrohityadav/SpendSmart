// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { auth } from './firebase';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchExpenses();
    }
  }, [isLoggedIn]);

  const fetchExpenses = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const token = await user.getIdToken();

      const response = await fetch('http://localhost:5000/api/expenses', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (!Array.isArray(data)) {
        console.error('Unexpected response from API:', data);
        return;
      }

      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const user = auth.currentUser;
      const token = await user.getIdToken();

      await fetch(`http://localhost:5000/api/expenses/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchExpenses();
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const handleSubmit = async (expenseData) => {
    try {
      const user = auth.currentUser;
      const token = await user.getIdToken();

      const url = editingExpense
        ? `http://localhost:5000/api/expenses/${editingExpense._id}`
        : 'http://localhost:5000/api/expenses';

      const method = editingExpense ? 'PUT' : 'POST';

      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(expenseData),
      });

      fetchExpenses();
      setShowAddExpense(false);
      setEditingExpense(null);
    } catch (error) {
      console.error('Error submitting expense:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!isLoggedIn) {
    return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="App">
      <Navbar onLogout={handleLogout} />
      
      <Dashboard
        expenses={expenses}
        onAddExpense={() => {
          setEditingExpense(null);
          setShowAddExpense(true);
        }}
        onEditExpense={(expense) => {
          setEditingExpense(expense);
          setShowAddExpense(true);
        }}
        onDeleteExpense={handleDelete}
      />
      
      {showAddExpense && (
        <AddExpense
          expense={editingExpense}
          onSubmit={handleSubmit}
          onClose={() => {
            setShowAddExpense(false);
            setEditingExpense(null);
          }}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
