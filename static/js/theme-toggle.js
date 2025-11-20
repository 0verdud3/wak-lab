const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

toggleBtn.addEventListener("click", () => {
  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    root.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

// Initial state
const saved = localStorage.getItem("theme");
root.classList.add(saved || "dark");
