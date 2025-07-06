# Mimar MERN Backend

This is a MERN stack backend for file upload, Cloudinary storage, and Gemini AI summarization.  

- Upload PDFs/images  
- Store in Cloudinary  
- Summarize content using Gemini API (Google Generative AI)  
- View summaries in a simple visualization page  

---

## Features
- Upload PDF/image files
- Uploads stored securely on Cloudinary
- Extract text from PDF using `pdf-parse`
- Summarizes text content using Gemini API
- Clean REST API with JWT authentication
- Simple HTML frontend for summary visualization

---

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Cloudinary API
- Gemini API (gemini-1.5-pro-002)
- pdf-parse
- Axios

---

## Important Note
Gemini API does not directly support external URLs or raw file uploads.  
To work around this:
- We download the PDF file from Cloudinary
- Extract its text using `pdf-parse`
- Send the plain text content to Gemini for summarization  

This approach ensures accurate summaries without relying on external link support.

---

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB
- Cloudinary Account
- Gemini API Key (from Google AI Studio)

---

### Clone Repository
```bash
git clone https://github.com/your-username/mimar-mern-backend.git
cd mimar-mern-backend
