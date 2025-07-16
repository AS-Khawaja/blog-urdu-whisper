
# 📝 Blog Summarizer & Urdu Translator 🌐🇵🇰

This project is a **full-stack web app** that:
- 📄 Fetches any public blog post by URL
- ✂️ Generates a concise **AI-powered summary**
- 🌍 Automatically translates the summary to **Urdu**
- 🗃️ Saves the blog and summary data in **MongoDB** and **Supabase**

---

## 🚀 Tech Stack

- **Frontend:** React.js + Vite + TailwindCSS + ShadCN UI
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (via Mongoose)
- **Cloud Storage:** Supabase
- **Web Scraping:** Cheerio
- **Translation:** Google Translate API (or mocked for development)

---

## 📂 Project Structure

\`\`\`
Nexium_A2/
 ├── backend/
 │   ├── server.js
 │   ├── config/
 │   │   ├── db.js
 │   │   ├── supabase.js
 │   ├── controllers/
 │   │   ├── summarise.controller.js
 │   ├── models/
 │   │   ├── blog.model.js
 │   ├── routes/
 │   │   ├── summarise.route.js
 │   ├── package.json
 │   └── .env
 ├── frontend/
 │   ├── src/
 │   │   ├── pages/Index.tsx
 │   │   ├── components/
 │   │   ├── ...
 │   ├── vite.config.js
 │   ├── package.json
 │   └── .env
\`\`\`

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo

\`\`\`bash
git clone https://github.com/your-username/nexium_a2.git
cd Nexium_A2
\`\`\`

---

### 2️⃣ Install Backend Dependencies

\`\`\`bash
cd backend
npm install
\`\`\`

---

### 3️⃣ Install Frontend Dependencies

\`\`\`bash
cd ../frontend
npm install
\`\`\`

---

### 4️⃣ Configure Environment Variables

#### 👉 **Backend: \`backend/.env\`**

\`\`\`env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_KEY=YOUR_SUPABASE_API_KEY
NODE_ENV=development
\`\`\`

---

### 5️⃣ Run the Backend Server

\`\`\`bash
# From /backend
npm run dev
\`\`\`

---

### 6️⃣ Run the Frontend (Vite)

\`\`\`bash
# From /frontend
npm run dev
\`\`\`

---

### ✅ Access the app

Open [http://localhost:8080](http://localhost:8080) and start summarizing blogs!

---

## 🔑 Features

- 📎 Paste any **public blog URL**
- 🤖 Scrapes full text and generates summary
- 🌐 Translates to Urdu (mock or API)
- ☁️ Saves to Supabase and MongoDB
- ⚡ Beautiful UI with ShadCN + TailwindCSS
- 🔒 CORS enabled for local development

---

## 📌 API Endpoint

**POST** \`/api/summarise\`

**Body:**
\`\`\`json
{
  "url": "https://your-blog-url.com"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "summary_en": "...",
  "summary_ur": "..."
}
\`\`\`

---

## ⚡ Local Development Tips

✅ Use [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test your API.  
✅ Ensure **CORS** is enabled for React + Express to talk cross-origin.  
✅ Use **nodemon** for backend hot-reloading.  
✅ Use \`.env\` files to keep secrets safe.

---

## 🧑‍💻 Authors

- **Your Name**
- **Your GitHub:** [@your-username](https://github.com/your-username)

---

## 📜 License

MIT License — free to use, modify & share.

---

**Happy Summarizing & Translating! ✨**
