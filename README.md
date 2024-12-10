# Campus Event Management Hub (Acity Pulse)

## Overview

Acity Pulse is a comprehensive web application designed to streamline event planning and coordination on campus. It provides a centralized platform for students and administrators to manage events, handle RSVPs, and stay updated on campus activities through an intuitive calendar interface.

## Links

### Repositories
- Backend: [Acity-Pulse-Backend](https://github.com/F8NIRBJ057/Acity-Pulse-Backend)

### Deployment
- Frontend: [Acity Pulse Web App](https://acity-pulse.vercel.app/)
- Backend API: [Acity Pulse API](https://acity-pulse.onrender.com)


## Key Features

- **User Authentication**: Secure login and registration system with role-based access control
- **Event Management**: Create, view, and manage campus events with detailed information
- **RSVP System**: Seamless event registration with automatic seat management
- **Interactive Calendar**: Visual calendar interface showing all upcoming events
- **Preference-Based Events**: Users can set event preferences during registration
- **Responsive Design**: Mobile-friendly interface for access on any device

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- React Router for navigation
- React Big Calendar for event visualization
- React Select for multi-select inputs
- React Toastify for notifications
- Axios for API communication

### Backend
- Node.js with Express
- PostgreSQL database
- bcryptjs for password hashing
- CORS for cross-origin resource sharing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn package manager

### Installation

1. Clone both repositories:

   ```bash
   git clone https://github.com/F8NIRBJ057/Acity-Pulse-Frontend.git
   git clone https://github.com/F8NIRBJ057/Acity-Pulse-Backend.git
   ```

2. Frontend Setup:

   ```bash
   cd Acity-Pulse-Frontend
   npm install
   ```

3. Backend Setup:

   ```bash
   cd Acity-Pulse-Backend
   npm install
   ```

4. Environment Configuration:

   Create a `.env` file in the backend directory:

   ```
   PORT=3000
   DATABASE_URL=your_postgresql_connection_string
   ```

5. Start the Development Servers:

   Backend:

   ```bash
   npm start
   ```

   Frontend:

   ```bash
   npm run dev
   ```

## Admin Details

- **Email**: Arnold@example.com
- **Password**: test

## Project Structure

### Frontend Architecture
- `/src/components`: Reusable UI components
- `/src/pages`: Main application pages
- `/src/middleware`: API configuration and utilities
- `/src/assets`: Static assets and images

### Backend Architecture
- `/controllers`: Business logic handlers
- `/routes`: API endpoint definitions
- `/config`: Database and server configuration
- `/middleware`: Authentication and validation middleware

## API Endpoints

### Authentication
- `POST /api/auth/register`: User registration
- `POST /api/auth/login`: User login

### Events
- `GET /api/events/allevents`: Fetch all events
- `POST /api/events/createevent`: Create new event
- `POST /api/events/confirmrsvp`: RSVP for an event

## Features in Detail

### Event Creation
Administrators can create events with:
- Event name and description
- Date and time
- Location
- Capacity management
- Event type categorization

### User Registration
Users can register with:
- Name and email
- Password
- Event preferences selection
- Automatic role assignment

### Calendar Integration
- Interactive calendar view
- Event visualization
- Date navigation
- Event details on hover

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [Frontend](https://github.com/F8NIRBJ057/Acity-Pulse-Frontend)

For questions and feedback: [maureen.amago@acity.edu.gh]
