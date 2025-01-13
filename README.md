# Netflix Clone

Netflix-clone built using React + Vite for the frontend and Firebase for the backend.

## Features

- User authentication (Sign up, Login, Logout)
- Browse movie and TV show listings
- Dynamic categories like Trending, Popular, Top Rated
- Responsive design for mobile, tablet, and desktop

## Tech Stack

- **Frontend:** React, Vite, CSS 
- **Backend:** Firebase Authentication, Firebase Firestore

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or above)
- [Firebase CLI](https://firebase.google.com/docs/cli)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/usman-29/netflix-clone.git
   cd netflix-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a Firebase project and configure Firebase:

   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Set up Firebase Authentication (Email/Password)
   - Create a Firestore database
   - Copy your Firebase config object

4. Add Firebase configuration:

   Create a `.env` file in the root directory and add your Firebase credentials:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   The app will run at [http://localhost:3000](http://localhost:5173).

---


## Contributions

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

### Acknowledgments

- Inspired by Netflix's UI/UX design
- Built with Firebase and React
