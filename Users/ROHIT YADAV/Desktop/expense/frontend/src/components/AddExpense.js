// import React, { useState, useEffect } from 'react';
// import '../styles/AddExpense.css';

// const AddExpense = ({ expense, onSubmit, onClose }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     amount: '',
//     category: '',
//     date: new Date().toISOString().split('T')[0],
//     description: ''
//   });

//   const categories = [
//     'Food & Dining',
//     'Transportation',
//     'Shopping',
//     'Entertainment',
//     'Bills & Utilities',
//     'Healthcare',
//     'Travel',
//     'Education',
//     'Others'
//   ];

//   useEffect(() => {
//     if (expense) {
//       setFormData({
//         title: expense.title,
//         amount: expense.amount.toString(),
//         category: expense.category,
//         date: new Date(expense.date).toISOString().split('T')[0],
//         description: expense.description || ''
//       });
//     }
//   }, [expense]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({
//       ...formData,
//       amount: parseFloat(formData.amount)
//     });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2>{expense ? 'Edit Expense' : 'Add New Expense'}</h2>
//           <button className="close-btn" onClick={onClose}>×</button>
//         </div>
        
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Expense Title</label>
//             <input
//               type="text"
//               name="title"
//               placeholder="e.g., Lunch at restaurant"
//               value={formData.title}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Amount ($)</label>
//             <input
//               type="number"
//               step="0.01"
//               name="amount"
//               placeholder="0.00"
//               value={formData.amount}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Category</label>
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select a category</option>
//               {categories.map(category => (
//                 <option key={category} value={category}>{category}</option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Date</label>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Description (Optional)</label>
//             <textarea
//               name="description"
//               placeholder="Additional notes..."
//               value={formData.description}
//               onChange={handleChange}
//               rows="3"
//             />
//           </div>

//           <div className="form-actions">
//             <button type="button" className="cancel-btn" onClick={onClose}>
//               Cancel
//             </button>
//             <button type="submit" className="submit-btn">
//               {expense ? 'Update Expense' : 'Add Expense'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddExpense;


import React, { useState, useEffect } from 'react';
import '../styles/AddExpense.css';

const AddExpense = ({ expense, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  const categories = [
    'Food & Dining',
    'Transportation',
    'Shopping',
    'Entertainment',
    'Bills & Utilities',
    'Healthcare',
    'Travel',
    'Education',
    'Others'
  ];

  useEffect(() => {
    if (expense) {
      setFormData({
        title: expense.title,
        amount: expense.amount.toString(),
        category: expense.category,
        date: new Date(expense.date).toISOString().split('T')[0],
        description: expense.description || ''
      });
    }
  }, [expense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      amount: parseFloat(formData.amount)
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{expense ? 'Edit Expense' : 'Add New Expense'}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Expense Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g., Lunch at restaurant"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Amount ($)</label>
            <input
              type="number"
              step="0.01"
              name="amount"
              placeholder="0.00"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description (Optional)</label>
            <textarea
              name="description"
              placeholder="Additional notes..."
              value={formData.description}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              {expense ? 'Update Expense' : 'Add Expense'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;