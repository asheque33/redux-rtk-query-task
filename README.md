# 🧠 Clin Tech

A modern, scalable, and interactive dashboard application built using **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Redux** and **RTK Query**.

> Includes route protection, authentication, and a clean, animated UI with reusable components.

---

## 🚀 Features

- ⚛️ Built with React + Vite + TypeScript
- 🎨 TailwindCSS for modern styling
- 🔐 Protected Routes with custom route guard
- 🔁 Redux Toolkit for state management
- 📱 Fully Responsive Layout
- 🌙 Smooth animations and modern SVG effects

---

## 🗺️ Routing Overview

This app uses `react-router-dom` v7 with `createBrowserRouter`.

### 📂 Public Routes

| Path                | Component              | Description                  |
|---------------------|------------------------|------------------------------|
| `/home`             | `App`                  | Public landing page          |
| `/signUp`           | `Signup`               | User registration            |
| `/login`            | `SignIn`               | User login                   |
| `/verificationCode` | `VerificationCode`     | OTP or email verification    |

---

### 🔐 Protected Routes (`<ProtectedRoute>`)

Wrapped inside `DashboardLayout` and only accessible after authentication.

| Path                 | Component             | Description                  |
|----------------------|------------------------|------------------------------|
| `/`                  | `DashboardHome`       | Dashboard homepage           |
| `/manageSubscription` | `ManageSubscription` | Manage billing/subscription  |
| `/users`            | `Users`               | User management              |
| `/editProfile`      | `EditProfile`         | Profile edit page            |
| `/helpAndSupport`   | `HelpSupportPage`     | Help & support               |
| `/faq`              | `FAQWithToggle`       | Frequently Asked Questions   |

#### 📌 Route Tree Structure:
/
├── home → Public
├── signUp → Public
├── login → Public
├── verificationCode → Public
└── ProtectedRoute
└── / → DashboardHome
├── manageSubscription → ManageSubscription
├── users → Users
├── editProfile → EditProfile
├── helpAndSupport → HelpSupportPage
└── faq → FAQWithToggle


---

## 🧱 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **React Router DOM**
- **Redux**
- **RTK Query**
- **TailwindCSS**
- **ESLint + Prettier** (with TypeScript support)

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/asheque33/redux-rtk-query-task.git
cd redux-rtk-query-task

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

📜 License
This project is licensed under the MIT License.

👨‍💻 Author
Developed by Ashequr Rahman


