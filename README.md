# 📚 Book Finder App

A simple React app to search and explore books using the **Open Library API**.  
Built for an internship assignment.

---

## ✨ Features

- Search books by title
- Display random history books on homepage
- Responsive UI with Tailwind CSS
- Loading spinners
- Error handling (no results, API issues)

---

## 🛠️ Tech Stack

- React (JavaScript, functional components)
- Hooks: `useState`, `useEffect`, `useContext`
- Tailwind CSS
- Open Library API
- React Spinners

---

## 📂 Project Structure

```
src/
├── App.jsx
├── context/
│   └── BookContext.js      # Context API setup
├── components/
│   ├── SearchBar.jsx       # Search input field
│   └── BookList.jsx        # Grid of books
└── index.js
```

---

## 🚀 Getting Started

1. **Clone the repository**
	```bash
	git clone https://github.com/your-username/book-finder.git
	cd book-finder
	```
2. **Install dependencies**
	```bash
	npm install
	```
3. **Run the app**
	```bash
	npm start
	```
	The app will run at [http://localhost:3000](http://localhost:3000)

---


## 🙋‍♂️ User Persona

**Alex**  
- College student  
- Wants an easy way to find and explore books  
- Can search by title and browse history books by default

---

## 💡 Future Improvements

- Add pagination for results
- Add "favorites" feature (local storage)
- More categories (science, fiction, etc.)

---

## 🏆 Credits

- [Open Library API](https://openlibrary.org/developers/api)
- Built with React + Tailwind CSS