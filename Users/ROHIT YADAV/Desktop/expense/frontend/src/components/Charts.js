// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar, Pie } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Charts = ({ expenses }) => {
//   // Weekly spending data
//   const getWeeklyData = () => {
//     const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//     const weeklySpending = new Array(7).fill(0);
    
//     const today = new Date();
//     const currentWeekStart = new Date(today.setDate(today.getDate() - today.getDay() + 1));
    
//     expenses.forEach(expense => {
//       const expenseDate = new Date(expense.date);
//       const diffTime = expenseDate.getTime() - currentWeekStart.getTime();
//       const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
//       if (diffDays >= 0 && diffDays < 7) {
//         weeklySpending[diffDays] += expense.amount;
//       }
//     });

//     return {
//       labels: weekdays,
//       datasets: [
//         {
//           data: weeklySpending,
//           backgroundColor: 'rgba(54, 162, 235, 0.8)',
//           borderColor: 'rgba(54, 162, 235, 1)',
//           borderWidth: 1,
//         },
//       ],
//     };
//   };

//   // Category spending data
//   const getCategoryData = () => {
//     const categoryTotals = {};
    
//     expenses.forEach(expense => {
//       categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
//     });

//     const colors = [
//       '#FF6384',
//       '#36A2EB',
//       '#FFCE56',
//       '#4BC0C0',
//       '#9966FF',
//       '#FF9F40'
//     ];

//     return {
//       labels: Object.keys(categoryTotals),
//       datasets: [
//         {
//           data: Object.values(categoryTotals),
//           backgroundColor: colors,
//           borderWidth: 2,
//         },
//       ],
//     };
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: '#f0f0f0',
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//   };

//   const pieOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'right',
//       },
//     },
//   };

//   return (
//     <div className="charts-container">
//       <div className="chart-section">
//         <h3>Weekly Spending Trend</h3>
//         <div className="chart-wrapper">
//           <Bar data={getWeeklyData()} options={chartOptions} />
//         </div>
//       </div>
      
//       <div className="chart-section">
//         <h3>Spending by Category</h3>
//         <div className="chart-wrapper">
//           <Pie data={getCategoryData()} options={pieOptions} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Charts;

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Charts = ({ expenses }) => {
  // Weekly spending data
  const getWeeklyData = () => {
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weeklySpending = new Array(7).fill(0);

    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
    const currentWeekStart = new Date(today);
    currentWeekStart.setDate(today.getDate() + mondayOffset);
    currentWeekStart.setHours(0, 0, 0, 0);

    expenses.forEach((expense) => {
      const expenseDate = new Date(expense.date);
      expenseDate.setHours(0, 0, 0, 0);

      const diffTime = expenseDate.getTime() - currentWeekStart.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays >= 0 && diffDays < 7) {
        weeklySpending[diffDays] += expense.amount;
      }
    });

    return {
      labels: weekdays,
      datasets: [
        {
          label: 'Daily Spending',
          data: weeklySpending,
          backgroundColor: (ctx) => {
            const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(54, 162, 235, 0.8)');
            gradient.addColorStop(1, 'rgba(54, 162, 235, 0.2)');
            return gradient;
          },
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          borderRadius: 6,
          borderSkipped: false,
        },
      ],
    };
  };

  // Category spending data
  const getCategoryData = () => {
    const categoryTotals = {};

    expenses.forEach((expense) => {
      categoryTotals[expense.category] =
        (categoryTotals[expense.category] || 0) + expense.amount;
    });

    const colors = [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#4BC0C0',
      '#9966FF',
      '#FF9F40',
    ];

    return {
      labels: Object.keys(categoryTotals),
      datasets: [
        {
          data: Object.values(categoryTotals),
          backgroundColor: colors,
          borderWidth: 2,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            return `${context.parsed.y.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false,
        },
        ticks: {
          callback: function (value) {
            return '₹' + value.toFixed(0); // Added missing return
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div className="charts-container">
      <div className="chart-section">
        <h3>Weekly Spending Trend</h3>
        <div className="chart-wrapper">
          <Bar data={getWeeklyData()} options={chartOptions} />
        </div>
      </div>

      <div className="chart-section">
        <h3>Spending by Category</h3>
        <div className="chart-wrapper">
          <Pie data={getCategoryData()} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
