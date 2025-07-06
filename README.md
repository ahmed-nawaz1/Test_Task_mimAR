# Mimar MERN Backend - Internship Task Submission

This is a MERN stack backend built for file upload, Cloudinary storage, and Gemini AI summarization.  

It includes:  
- REST APIs for user authentication & file uploads  
- Integration with Cloudinary for secure file storage  
- PDF text extraction using `pdf-parse`  
- Summarization of extracted text using Google Gemini API  
- Simple visualization frontend  
- Postman Collection & Live Demo  

---

## Features
- Upload PDF/image files
- Store files securely on Cloudinary
- Extract text from PDF using `pdf-parse`
- Summarize text content using Gemini API (Google Generative AI)
- Clean REST API with JWT authentication
- Simple HTML frontend for summary visualization
- Public deployment over Vercel

---

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Cloudinary API
- Gemini API (gemini-1.5-pro-002)
- pdf-parse
- Axios
- Vercel (Deployment)

---

## Important Note
Google Gemini API **does not directly support external URLs or raw file uploads**.  
This app works around the limitation by:  
- Downloading the file from Cloudinary  
- Extracting its text using `pdf-parse`  
- Sending the plain text content to Gemini API for summarization  

This approach ensures reliable and accurate summarization.

---

## Submission Links

| Resource               | URL                                                                                          |
|------------------------|----------------------------------------------------------------------------------------------|
| Public GitHub Repo     | [View on GitHub](https://github.com/Incredible01/Test_Task_mimAR.git)                        |
| Postman Collection     | [View & Import](https://www.postman.com/rishtay-walay/workspace/mimar-test/collection/33451178-ed70a60a-15dc-4cd9-bd7e-91bd0dd939f9?action=share&creator=33451178&active-environment=33451178-650623ee-9adb-449d-9437-d0016466bac8) |
| Vercel Deployment      | [Live App](https://test-task-mim-ar.vercel.app/)                                              |
| Demo Video             | [View on Google Drive](https://drive.google.com/drive/folders/1cbnVsGdfy2pIambMHjybx4RVUo6ZLYBh) |

---

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Cloudinary account
- Gemini API Key (from Google AI Studio)

---

### Clone Repository
```bash
git clone https://github.com/Incredible01/Test_Task_mimAR.git
cd Test_Task_mimAR
