# Versich-Market

An official repo for VersiMarket's frontend


## Tech Stack

- Website
    - React
    - Tailwindcss

- APIs
    - Axios
    - Fetch

- State Management
    - Redux

## Quick Start

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

<br>

**Cloning the Repository**

```bash
git clone https://github.com/Versich/Versi-Market.git
cd Versi-Market
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Rename the '.env.example' to '.env' and change the following environment values with your own

```conf
NODE_ENV=development
REACT_APP_API_URL="Your API url here! like -> http://127.0.0.1:5500"
REACT_APP_API_GOOGLE_OAUTH2_URL="${REACT_APP_API_URL}/path/to/google-auth/"
REACT_APP_CLIENT_URL="Your Client url here! like -> http://127.0.0.1:3000"
```

Replace the placeholder values with your actual credentials.

**Running the Project**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.