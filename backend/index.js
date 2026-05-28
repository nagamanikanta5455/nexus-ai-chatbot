const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdfParse = require("pdf-parse-fixed");

const app = express();
app.use(express.json());
app.use(cors());

// Configure multer to store file in memory
const upload = multer({ storage: multer.memoryStorage() });

// --- CONFIGURATION ---
const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";
const MODEL_NAME = "llama3.2:1b"; // <--- UPDATED to match your 1.2GB download
// ---------------------

app.get('/', (req, res) => {
    res.send("Gen AI Server is Running");
});

// --- NEW HEALTH CHECK ROUTE ---
// The frontend pings this to turn the dot green
app.get('/api/health', (req, res) => {
    res.json({ status: 'alive' });
});
// ------------------------------

app.post('/query', async (req, res) => {
    console.log("Received Query:", req.body);

    try {
        const response = await fetch(OLLAMA_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: MODEL_NAME,
                prompt: `You are an expert software developer.
                 Answer the question as best as you can. Provide short and concise answers.
                 Question: ${req.body.query}`,
                stream: false,
                options: { num_ctx: 4000 }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Ollama API Error:", response.status, errorText);
            return res.status(500).send({ error: `Ollama Error: ${errorText}` });
        }

        const data = await response.json();
        console.log("Ollama Response Success");
        res.send({ data: data.response });

    } catch (error) {
        console.error("Server Connection Error:", error);
        res.status(500).send({ error: "Failed to connect to Ollama. Is the app running?" });
    }
});

app.post('/parse-pdf', upload.single('pdf'), async (req, res) => {
    try {
        console.log("Processing PDF...");

        if (!req.file) {
            return res.status(400).send({ error: "No PDF file uploaded" });
        }

        // 1. Parse the PDF
        const pdfData = await pdfParse(req.file.buffer);
        const pdfText = pdfData.text;

        console.log(`PDF Parsed. Text length: ${pdfText.length}`);

        // 2. Send to Ollama
        const response = await fetch(OLLAMA_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: MODEL_NAME,
                prompt: `You are an expert data extractor who excels at analyzing PDFs.
                 Extract all relevant information from the following text:
                 
                 ${pdfText.substring(0, 10000)}  // Limiting text size for speed
                 
                 Format the output as bullet points. Keep it concise.`,
                stream: false,
                options: { num_ctx: 4000 }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Ollama API Error (PDF):", errorText);
            return res.status(500).send({ error: `Ollama Error: ${errorText}` });
        }

        const data = await response.json();
        console.log("PDF Analysis Success");
        res.send({ data: data.response });

    } catch (error) {
        console.error("PDF Processing Error:", error);
        res.status(500).send({ error: "Failed to process PDF" });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
    console.log(`Targeting Ollama Model: ${MODEL_NAME}`);
});