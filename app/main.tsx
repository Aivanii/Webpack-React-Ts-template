import React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<h1> test </h1>);
} else {
    console.error("Element with id 'root' not found");
}
