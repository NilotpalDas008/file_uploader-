# File Uploader

A professional Node.js file upload application built with Express and Multer, providing a simple and efficient way to handle file uploads with a clean web interface.

## 📋 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- 📤 Single and multiple file upload support
- 🔒 File type validation
- 📏 File size restrictions
- 🎨 Clean and responsive web interface
- ⚡ Fast and efficient file handling
- 📁 Organized file storage system
- 🛡️ Secure file upload handling with Multer

## 🚀 Technologies

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Multer** - Middleware for handling multipart/form-data
- **HTML/CSS** - Frontend interface

## 📁 Project Structure

```
file_uploader/
├── src/
│   ├── app.js                 # Application entry point
│   ├── config/
│   │   └── multerConfig.js    # Multer configuration
│   ├── controllers/
│   │   └── uploadController.js # Upload logic
│   ├── routes/
│   │   └── uploadRoutes.js    # API routes
│   └── public/
│       └── index.html         # Frontend interface
├── uploads/                   # Uploaded files directory
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd file_uploader
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create uploads directory** (if not exists)

   The `uploads/` directory will be created automatically when you run the application.

## 🎮 Usage

### Production Mode

Start the application in production mode:

```bash
npm start
```




The application will be available at `http://localhost:3000` (or your configured port).

## 📡 API Endpoints

### Upload File(s)

**Endpoint:** `POST /upload`

**Content-Type:** `multipart/form-data`

**Parameters:**
- `file` - Single file or multiple files to upload

**Response:**
```json
{
  "success": true,
  "message": "File(s) uploaded successfully",
  "files": [
    {
      "filename": "example.jpg",
      "path": "uploads/example.jpg",
      "size": 12345
    }
  ]
}
```

### Example cURL Request

```bash
curl -X POST http://localhost:3000/upload \
  -F "file=@/path/to/your/file.jpg"
```

## ⚙️ Configuration

### Multer Configuration

Configure file upload settings in [src/config/multerConfig.js](src/config/multerConfig.js):

- **Storage destination:** Set the directory where files will be stored
- **File naming:** Configure how uploaded files are named
- **File filters:** Set allowed file types
- **Size limits:** Set maximum file size



## 🛠️ Development

### Project Scripts

- `npm start` - Start the application
- `npm test` - Run tests (to be configured)

### Code Structure

- **app.js** - Main application setup, middleware configuration, and server initialization
- **uploadController.js** - Business logic for handling file uploads
- **uploadRoutes.js** - Route definitions for upload endpoints
- **multerConfig.js** - Multer middleware configuration
- **index.html** - Frontend upload interface

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.



## 📞 Support

For support, please open an issue in the repository or contact nd8851715@gmail.com.

---

**Made with ❤️ using Node.js and Express**
