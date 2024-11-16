#!/usr/bin/env node

const { createWorker } = require('tesseract.js');
const fs = require('fs');

// Check if a file path is provided
if (process.argv.length !== 3) {
    console.error('Usage: node script.js <image-file>');
    process.exit(1);
}

const imagePath = process.argv[2];

// Check if file exists
if (!fs.existsSync(imagePath)) {
    console.error(`Error: File '${imagePath}' does not exist`);
    process.exit(1);
}

async function recognizeText() {
    // Initialize worker
    const worker = await createWorker();

    try {
        // Initialize worker with English language
        await worker.loadLanguage('eng');
        await worker.initialize('eng');

        console.log('Processing image...');
        
        // Perform OCR
        const { data: { text } } = await worker.recognize(imagePath);
        
        // Output results
        console.log('\nExtracted Text:');
        console.log('---------------');
        console.log(text);

    } catch (error) {
        console.error('Error processing image:', error);
    } finally {
        // Always terminate the worker
        await worker.terminate();
    }
}

recognizeText();