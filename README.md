## Supabase Authentication with Vite + React

A simple authentication system using Supabase, Vite, and React. Users can sign up, log in, and access a protected dashboard. If not authenticated, they are redirected to the login page.

### 🚀 Features

User authentication with Supabase

Protected routes (only logged-in users can access the dashboard)

Redirects users to login if not authenticated

Session persistence (users stay logged in after refresh)

Optimized state management using React Context

### 📦 Tech Stack

- React
- Vite
- Supabase
- React Router

### 🛠 Installation

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/your-repo.git
cd your-repo

### 2️⃣ Install Dependencies

pnpm install  # or npm install / yarn install

### 3️⃣ Set Up Supabase

Create a free Supabase account.

Create a new project.

Get your API keys from Project Settings > API.

Create a .env.local file and add:

VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key

### 4️⃣ Run the Project

pnpm dev  # or npm run dev / yarn dev

### 🚦 Usage

Sign Up with an email and password.

Log In to access the dashboard.

Log Out to return to the login page.

Protected Routes ensure only authenticated users can access /dashboard.

### 📂 Project Structure

```
📦 src
 ┣ 📂 components     # Reusable UI components
 ┣ 📂 context        # Authentication context (AuthProvider)
 ┣ 📂 pages          # Login, Signup, and Dashboard pages
 ┣ 📜 App.jsx        # Main app with routes
 ┣ 📜 supabaseClient.js  # Supabase setup
```

### 🔥 Deployment

You can deploy this project to Vercel, Netlify, or GitHub Pages. Just make sure to set the Supabase environment variables in the deployment settings.

### 🤝 Contributing

Feel free to fork this repo and make improvements! Pull requests are welcome. 🚀

### 📜 License

MIT License

