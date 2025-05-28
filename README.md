# EcommercePage

A fully responsive ecommerce website built with **React**, **TypeScript**, **Tailwind CSS** on the frontend, and **Node.js**, **Express**, **MongoDB**, and **dotenv** on the backend. This project demonstrates a clean MVC backend structure and reusable, mobile-friendly React components connected through a REST API.

---

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS  
- **Backend:** Node.js, Express, MongoDB, Mongoose  
- **Config:** dotenv for environment variables  
- **Version Control:** Git & GitHub

---

## Project Structure

### Frontend (`/client`)

- **Common Components:**  
  - `Navbar.tsx` — reusable navbar with conditional rendering  
  - `Footer.tsx` — site footer  

- **Homepage Components:**  
  - `Hero.tsx` — hero section with introductory content  
  - `HeroVideo.tsx` — responsive video section  
  - `DescriptionFTA.tsx` — features, terms & agreements  
  - `MediaGrid.tsx` — interactive media grid with hover text changes  
  - `ProductDetail.tsx` — toggleable product details  
  - `InfoPage.tsx` — info and FAQ section  
  - `Review.tsx` — reviews with clickable images to show specific feedback  

- **FinalOrder Page:**  
  - Includes `Navbar` and `Footer` components  
  - Order summary and address form  

---

### Backend (`/server`)

- **MVC Folder Structure:**  
  - `models/` — MongoDB schemas (Address model)  
  - `controllers/` — business logic (addressController)  
  - `routes/` — API endpoints (addressRoutes)  
  - `config/` — database connection setup with dotenv  

- **Features:**  
  - REST API to add and manage addresses  
  - MongoDB persistence  
  - Environment variables via `.env`

---

## Features

- Mobile-first and desktop-friendly design with Tailwind CSS  
- Reusable components with conditional rendering for flexibility  
- Interactive media grid with text overlays on hover  
- Toggle product detail visibility  
- Clickable review images to display relevant reviews  
- Address form connected to backend API with MongoDB storage  

---

## Getting Started

### Prerequisites

- Node.js (v16+)  
- MongoDB (local or cloud)  
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ecommercepage.git
cd ecommercepage
