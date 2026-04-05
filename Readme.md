# Agriculture Awareness Programs for Farmers

## 📌 Project Overview
This project is a digital initiative designed to bridge the communication gap between farmers and agriculture officers. It serves as the **SYBCA Community Project (CA-271)** and focuses on key agricultural topics including Plantation, Soil Protection, Organic Farming, and Agro-Logistics. 

The primary problem this system addresses is the lack of real-time access for farmers to modern farming techniques, guidelines for transitioning to organic farming, and profitable marketing channels.

## 🎯 Objectives
* To promote soil protection, biodiversity, and organic farming practices.
* To securely connect farmers with expert agriculture officers for real-time advice.

## 🚀 Scope
The platform is built to manage schedules for awareness programs, distribute crop promotion guidelines, and provide basic logistics tracking for local farmers' agro-products.

## 🏢 Partner Organization
This project was conceptualized in association with the **Godavari Krishi Vikas Foundation**. 
The organization's core activities include:
* Conducting local field visits.
* Testing soil quality.
* Distributing organic seeds to farmers.
* Organizing educational farmer seminars.

## 👥 System Actors
The system is designed around three primary user roles:
1. **Farmer:** Can view upcoming awareness programs and daily crop prices.
2. **Agriculture Officer:** Can schedule new seminars and upload soil protection guidelines.
3. **Admin:** Oversees platform logistics and overall system management.

## 🛠️ Technology Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (for dynamic scrolling, mobile navigation, and scroll-triggered animations).
* **UI Design:** Responsive CSS Grid and Flexbox architecture.
* **Database Design (Conceptual):** Relational Database mapping with SQL.

## 🗄️ Database Schema Design
The system's backend data architecture revolves around the following core tables:
* `tbl_farmers`: Stores farmer profiles `(ID, Name, Location, Contact)`.
* `tbl_programs`: Stores awareness seminar schedules `(Prog_ID, Title, Date, Officer_ID)`.
* `tbl_logistics`: Tracks agro-product shipments `(Log_ID, Crop_Name, Quantity, Destination)`.

*Sample SQL Query implementation:*
`SELECT Title, Date FROM tbl_programs WHERE Date > CURRENT_DATE;`

## 📊 Methodology 
The foundational research and data collection for this system were conducted using:
* **Surveys:** Distributing questionnaires to local farmers to understand current crop-related issues.
* **Interviews:** Having direct discussions with agriculture officers regarding modern best practices.
* **Observation:** Analyzing the existing, manual methods used for the agricultural supply chain and sales.

## 💻 Installation & Setup
To run the front-end prototype of this project locally:
1. Clone or download the repository.
2. Ensure `index.html`, `style.css`, and `script.js` are in the same directory.
3. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari). No local server is required for the static frontend.

## 🔮 Future Scope
Digitizing this connection improves the adoption of sustainable farming. Future enhancements planned for this platform include:
* Integrating IoT (Internet of Things) devices for live soil moisture tracking directly on the farmer's dashboard.
* Developing and adding a dedicated e-commerce module to facilitate direct-to-consumer sales for farmers.

## 🎓 Academic Credits
* **Submitted By:** Anuj Mishra.
* **Department:** Department of Computer Application.
* **College:** K.K. Wagh Arts, Commerce, Science and Computer Science College, Nashik.