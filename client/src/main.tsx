import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom CSS classes for font families
const style = document.createElement('style');
style.textContent = `
  :root {
    --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
    --font-heading: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  }
  
  .font-heading {
    font-family: var(--font-heading);
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
