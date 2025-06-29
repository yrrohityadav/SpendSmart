// import React, { useState } from 'react';
// import '../styles/ExpenseList.css';

// const ExpenseList = ({ expenses, onAddExpense, onEditExpense, onDeleteExpense }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('All categories');

//   const categories = ['All categories', ...new Set(expenses.map(expense => expense.category))];

//   const filteredExpenses = expenses.filter(expense => {
//     const matchesSearch = expense.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = categoryFilter === 'All categories' || expense.category === categoryFilter;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="expense-list-container">
//       <div className="expense-list-header">
//         <h2>Recent Expenses</h2>
//         <button className="add-expense-btn" onClick={onAddExpense}>
//           + Add Expense
//         </button>
//       </div>

//       <div className="expense-filters">
//         <div className="search-box">
//           <input
//             type="text"
//             placeholder="Search expenses..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <select
//           className="category-filter"
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//         >
//           {categories.map(category => (
//             <option key={category} value={category}>{category}</option>
//           ))}
//         </select>
//       </div>

//       <div className="expense-list">
//         {filteredExpenses.length === 0 ? (
//           <div className="no-expenses">
//             <p>No expenses found</p>
//           </div>
//         ) : (
//           filteredExpenses.map(expense => (
//             <div key={expense._id} className="expense-item">
//               <div className="expense-info">
//                 <h4>{expense.title}</h4>
//                 <p className="expense-category">{expense.category}</p>
//                 {expense.description && (
//                   <p className="expense-description">{expense.description}</p>
//                 )}
//                 <p className="expense-date">
//                   {new Date(expense.date).toLocaleDateString()}
//                 </p>
//               </div>
//               <div className="expense-actions">
//                 <span className="expense-amount">${expense.amount.toFixed(2)}</span>
//                 <div className="action-buttons">
//                   <button 
//                     className="edit-btn"
//                     onClick={() => onEditExpense(expense)}
//                   >
//                     ✏️
//                   </button>
//                   <button 
//                     className="delete-btn"
//                     onClick={() => onDeleteExpense(expense._id)}
//                   >
//                     🗑️
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExpenseList;


import React, { useState } from 'react';
import '../styles/ExpenseList.css';

const ExpenseList = ({ expenses, onAddExpense, onEditExpense, onDeleteExpense }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All categories');

  const categories = ['All categories', ...new Set(expenses.map(expense => expense.category))];

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All categories' || expense.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="expense-list-container">
      <div className="expense-list-header">
        <h2>Recent Expenses</h2>
        <button className="add-expense-btn" onClick={onAddExpense}>
          + Add Expense
        </button>
      </div>

      <div className="expense-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search expenses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="category-filter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="expense-list">
        {filteredExpenses.length === 0 ? (
          <div className="no-expenses">
            <p>No expenses found</p>
          </div>
        ) : (
          filteredExpenses.map(expense => (
            <div key={expense._id} className="expense-item">
              <div className="expense-info">
                <h4>{expense.title}</h4>
                <p className="expense-category">{expense.category}</p>
                {expense.description && (
                  <p className="expense-description">{expense.description}</p>
                )}
                <p className="expense-date">
                  {new Date(expense.date).toLocaleDateString()}
                </p>
              </div>
              <div className="expense-actions">
                <span className="expense-amount">${expense.amount.toFixed(2)}</span>
                <div className="action-buttons">
                  <button 
                    className="edit-btn"
                    onClick={() => onEditExpense(expense)}
                  >
                    ✏️
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => onDeleteExpense(expense._id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExpenseList;