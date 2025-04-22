# Auth-X : Complete Authentication System

Auth-X is a **MERN stack** authentication boilerplate that includes **email verification** and **password reset** features. It provides a solid foundation for authentication in web applications with modern UI components using **ShadCN**.

Demo Link : [**Live**](https://auth-x-xoo5.onrender.com)

## 🚀 Features

- User **Signup & Login**
- **JWT-based Authentication**
- **Email Verification** (via **Nodemailer & Mailtrap**)
- **Password Reset** (Forgot & Reset Password Flow)
- **Protected Routes**
- **Zustand** for state management
- **ShadCN UI** for modern design

---

## 🛠️ Tech Stack

### **Frontend**

- **React** (with **Vite** for fast development)
- **Zustand** (for global state management)
- **ShadCN UI** (for pre-built UI components)
- **Axios** (for API requests)

### **Backend**

- **Node.js** & **Express.js**
- **MongoDB** (with Mongoose for ORM)
- **Nodemailer** (for email services)
- **Mailtrap** (for trapping emails in development)
- **JWT** (for authentication tokens)
- **dotenv** (for environment variables)

---

## 🏗️ Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/your-username/Auth-X.git
cd Auth-X
```

### **2️⃣ Backend Setup**

```sh
cd backend
npm install
```

#### **Configure Environment Variables**

Create a `.env` file inside the `backend` folder and add:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
NODE_ENV = development
```

#### **Run Backend Server**

```sh
npm run dev
```

---

### **3️⃣ Frontend Setup**

```sh
cd ../frontend
npm install
```

#### **Configure Frontend Environment Variables**

Create a `.env` file inside the `frontend` folder:

```env
VITE_MODE=development
```

#### **Run Frontend Server**

```sh
npm run dev
```

## 📌 API Routes

### **Auth Routes (`/api/v1/users`)

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| POST   | `/signup`         | Register new user        |
| POST   | `/login`          | Authenticate user        |
| POST   | `/verifyemail`    | Verify email             |
| POST   | `/forgotpassword` | Send password reset link |
| POST   | `/resetpassword`  | Reset user password      |
| GET    | `/checkauth`      | Validate authentication  |
| GET    | `/logout`         | Logout User              |

---

## ✨ Contributing

Feel free to contribute by opening a **Pull Request** or **Issue**!

---

## 🛡️ License

💡 Have suggestions or found a bug? Open a pull request or create an issue — contributions are always welcome!

---

## 📬 Contact

**Email** : parmarharshit441@gmail.com

[**LinkedIn**](https://www.linkedin.com/in/harshit-parmar-47253b282)

---

Happy Coding! 🚀
