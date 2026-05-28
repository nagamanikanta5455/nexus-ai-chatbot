# Nexus AI Chatbot 🚀

A premium, full-stack, 100% free offline AI assistant workspace built with Node.js and Express, connecting a highly tactile user interface directly to a local Llama 3 engine via Ollama. It features zero-latency document analysis through an isolated PDF context extraction pipeline and an automatic system-level hardware configuration bypass.

---

## 📸 Interface Preview

![Nexus AI Chatbot Interface](./screenshot.png?v=2)
*Modern dark mode console featuring tactile action items, real-time system state monitoring, and a premium fluid theme toggle.*

---

## ✨ Key Features

* **100% Free & Local:** Run industry-grade large language models completely offline on your own machine. No API subscription tokens, zero pricing metrics, and absolute data privacy.
* **Tactile Workspace UI:** Premium dark-mode layout built with glassmorphism panels, interactive neon-gradient control triggers, micro-interaction click scaling, and a smooth light/dark sliding pill switch.
* **Context Extractor:** Drop software documentation or complex data sheets directly into the sidebar panel to parse text strings dynamically via an isolated PDF pipeline.
* **Zero-Crash Pipeline:** Built-in permanent environment layer constraints that seamlessly isolate hardware conflicts and drop inference processing cleanly to host CPUs without manual execution scripts.

---

## 🛠️ System Architecture & Startup

The underlying backend establishes automated data exchange pipes directly to the background Ollama daemon endpoint mapped locally at port `11434`.

### Prerequisites
Ensure Ollama is running natively in your Windows System Tray. The architecture maps system variables globally to enforce CPU safety bounds:
* `CUDA_VISIBLE_DEVICES = -1`
* `OLLAMA_NUM_PARALLEL = 1`

### Execution Path
Launch your environment locally in two rapid steps:

1. **Boot Core Gateways:** Run the Express network infrastructure.
   ```bash
   node index.js
Launch Client UI: Navigate to your project root folder and load the client app layout inside Google Chrome:

Plaintext
chat.html
🧪 Tech Stack Breakdown
Frontend User Console: Core HTML5, Semantic CSS3 Layouts, FontAwesome Icons, Native Vanilla JS Native Fetch Socket Pipelines.

Backend Interface: Node.js Environment, Express Network Routing Engine, Cross-Origin Resource Sharing Layer (cors).

Data Ingestion: Multer Multipart Form-Data Stream Engine, Local pdf-parse-fixed Text Aggregation Processors.

Core Inference Engine: Ollama API Infrastructure Layer hosting localized weights for Llama 3.


---

### ⚡ Step 2: Add your Project Screenshot

1. Take a screenshot of your beautiful upgraded browser window (`chat.html`).
2. Crop it cleanly and save the image directly inside your `GEN-AI` project folder.
3. Rename the image file exactly to: **`screenshot.png`**

---

### ⚡ Step 3: Push it Fresh to GitHub

Open your terminal and run these commands to clear out any old files and push the spotless project structure to your repo:

```powershell
# Stage the new README and screenshot file
git add .

# Lock in the clean layout commit
git commit -m "docs: deploy premium README documentation with interface snapshot placeholder"

# Push the fresh history live
git push origin main