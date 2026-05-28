# Aura - Local AI Workspace

A professional, dark-mode AI chat interface powered by **Gemma 2** and **Ollama**. Features include code syntax highlighting, chat history, and local PDF analysis.

![App Screenshot](screenshot.png)

## Features
* **Local AI:** Runs completely offline using Ollama.
* **PDF Analyzer:** Upload PDFs to summarize and extract insights locally.
* **Code Highlighting:** Beautiful syntax highlighting for code blocks.
* **Dark Mode:** Aesthetic UI inspired by modern IDEs.
* **Privacy Focused:** No data leaves your machine.

## Prerequisites
1.  **Node.js** (v18 or higher)
2.  **Ollama** (Running locally)

## Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/nagamanikanta5455/aura-local-ai.git](https://github.com/nagamanikanta5455/aura-local-ai.git)
    cd aura-local-ai
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Ensure Ollama is running**
    Make sure you have the Gemma 2 model pulled:
    ```bash
    ollama run gemma2
    ```

4.  **Start the server**
    ```bash
    node index.js
    ```

5.  **Open the App**
    Open your browser and go to `http://localhost:3000` (or open `chat.html` directly).

## Project Structure
* `index.js` - The backend server connecting to Ollama.
* `chat.html` - The frontend interface.
* `package.json` - Project dependencies.

---
**Built by K Naga Manikanta** 