# Knights Challenge - SPA

This project is a Single Page Application (SPA) developed using Vue.js 3, JavaScript, Babel, Docker containerization, and Spectre.css.

## Prerequisites

Before running the application, ensure you have the following installed:
- Node.js
- Docker

## Technologies Used
- Vue.js 3
- JavaScript
- Babel
- Docker
- Spectre.css

## Getting Started

Follow these steps to set up and run the `knightsfrontend` application:

### 1. Clone the Repository

```bash
git clone https://github.com/seu-usuario/knightsfrontend.git
cd knightsfrontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Compiles and hot-reloads for development
```bash
npm run serve
```

### 4. Compiles and minifies for production
```bash
npm run build
```

### 5. Running on Docker container
```bash
docker build -t knightsfrontend .
docker run -p 8080:8080 knightsfrontend
```

### Contributing

Contributions are welcome! Fork the repository and submit a pull request.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
