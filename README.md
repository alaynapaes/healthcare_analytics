# Healthcare Analytics Dashboard

## Overview

This project is a full-stack healthcare analytics system designed to track and analyze medication adherence. It provides RESTful APIs for computing adherence metrics and a frontend dashboard for data visualization.

The system demonstrates end-to-end data processing from database storage to analytical reporting and visualization.

---

## Features

- Record medication adherence logs  
- Calculate overall adherence percentage  
- Compute adherence by user  
- Generate daily adherence trends  
- Interactive dashboard with graphical visualization  
- Relational database design with foreign key constraints  

---

## Tech Stack

### Backend
- Node.js  
- Express.js  
- MySQL  

### Frontend
- HTML  
- Chart.js  

### Database
- Relational schema with foreign keys  
- Aggregation queries using SQL  

---

## Database Schema

### Main Tables
- users  
- medications  
- adherence_logs  

The `adherence_logs` table references `users` and `medications` using foreign keys to maintain referential integrity.

---

## API Endpoints

### GET /analytics/overall
Returns overall medication adherence percentage.

### GET /analytics/by-user
Returns adherence percentage grouped by user.

### GET /analytics/daily
Returns daily adherence trend.

### POST /analytics/log
Creates a new adherence log entry.

---

## Installation

### 1. Clone the repository

### 2. Install backend dependencies
```bash
npm install
```

### 3. Configure environment variables in `.env` file
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=healthcare_analytics
```

### 4. Start the server
```bash
node server.js
```

### 5. Run Frontend
Open `frontend/index.html` using Live Server.

---

## Future Improvements

- User authentication  
- Role-based access control  
- Deployment to cloud (AWS / Render)  
- Real-time analytics  
- Advanced filtering and reporting  
- Machine learning-based adherence prediction  

---

## Learning Outcomes

This project demonstrates:

- REST API development  
- SQL aggregation and analytics queries  
- Relational database modeling  
- Data visualization  
- End-to-end analytics workflow  
