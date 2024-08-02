# Uptime Analytics API

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sairamdasari7/ApiDevelopmentApp.git
   cd uptime-analytics-api

2. Install dependencies:
    ```bash
    npm install
    
3. Setup environment variables in a .env file:
    ```bash
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/uptimeAnalytics
    JWT_SECRET=your_secret_key
 
4. Run the data generation script:
    ```bash
    node src/utils/generateData.js

5. Start the server:
    ```bash
    npm start
    
## API Endpoints
 - GET /api/uptime: Fetch uptime data
 - GET /api/analytics: Fetch analytical data
 - GET /api/report: Fetch combined report data

## Testing
  Run tests using Jest:
    ```bash
    npm test
