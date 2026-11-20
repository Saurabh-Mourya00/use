# Project setup

This project contains a Django backend and a React frontend built with Vite.

## Backend

In PowerShell, from the project root:

```powershell
cd backend
.\venv\Scripts\Activate.ps1
python manage.py migrate
python manage.py runserver
```

The Django project is in `backend/config`. Install its dependencies with
`python -m pip install -r requirements.txt` after activating the virtual
environment. The health endpoint is available at
`http://127.0.0.1:8000/api/health/`.

For deployments, set a private `DJANGO_SECRET_KEY` environment variable.
The built-in fallback key is only for local development.

## Frontend

In a separate PowerShell terminal, from the project root:

```powershell
cd frontend
npm install
npm run dev
```

Vite proxies `/api` requests to Django at `http://127.0.0.1:8000`. Keep both
servers running; the frontend displays whether its Django health check succeeds.
