# Business-ECard

## Introduction
A React website to generate e-card for a user

<hr>

##  Backend-API
**Hosted**: https://business-ecard.onrender.com/

### API Structure
- POST `/api/signup`
- POST `/api/signin`
- POST `/api/card`
- GET `/api/card/:cardId`

<hr>

## Frontend-ReactAPP
**Hosted**: https://business-ecard.vercel.app/

<hr>

## Installation-Local

### Clone Repository
```bash
    git clone git@github.com:starvader13/Business-ECard.git
    cd Business-ECard
```

### Set up environment variables
- A `.env.example` file is included in the `backend` directory of the project as a template.
- Copy this `.env.example` file to a new file named `.env` and update it with your actual configuration values.
```bash
   cp .env.example .env
```

### Backend Service
```bash
    cd backend
    npx nodemon index.js
```

### Frontend Service
```bash
    cd frontend
    npm run dev
```