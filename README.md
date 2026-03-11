# Students Management Dashboard

A full-stack Students Management Dashboard built with **React, NestJS, and PostgreSQL**.  
The application allows users to manage student records with full CRUD functionality, validations, and Excel export.

## Live Demo

Frontend:  
https://students-management-dashboard.vercel.app/

Backend: 
https://students-management-dashboard.onrender.com/students

---

## Features

- Add new students
- Edit existing student details
- Delete students with confirmation
- Form validation (required fields, valid email format)
- Loading states for better UX
- Download student data as Excel
- Responsive and minimalist UI
- REST API powered by NestJS
- PostgreSQL database integration

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- CSS Modules

### Backend
- NestJS
- TypeScript
- TypeORM

### Database
- PostgreSQL (Render)

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: Render PostgreSQL

---

## Project Structure

```
students-management-dashboard
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── hooks
│   │   ├── types
│   │   └── utils
│
├── backend
│   ├── src
│   │   ├── students
│   │   ├── app.module.ts
│   │   └── main.ts
```

---

## API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| GET | /students | Get all students |
| POST | /students | Create new student |
| PATCH | /students/:id | Update student |
| DELETE | /students/:id | Delete student |

---

## Running Locally

### Clone the repository

```
git clone https://github.com/muskanbegam/Students-Management-Dashboard.git
```

```
cd Students-Management-Dashboard
```

---

### Backend Setup

```
cd backend
npm install
npm run start:dev
```

Create a `.env` file:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=students_db
```

---

### Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## Screenshots

Add screenshots of the UI here if needed.

---

## Author

Muskan Begam

GitHub  
https://github.com/muskanbegam

---
