# OCR Image Text Extractor

A simple command-line tool that extracts text from images using Tesseract.js OCR engine.

## Features

- Extract text from various image formats
- Support for English language OCR
- Simple command-line interface
- Error handling for invalid files

## Prerequisites

Before using this tool, make sure you have:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository or download the script
2. Install dependencies:

```bash
npm install tesseract.js
```

## Usage

Run the script from the command line with an image file as an argument:

```bash
node ocr.js <image-file>
```

Examples:

```bash
node ocr.js images/cat-meme.jpeg
node ocr.js images/screenshot.png
node ocr.js images/book-text.png
```

## Output

The script will:
1. Show a "Processing image..." message while working
2. Display the extracted text under "Extracted Text:" header
3. Automatically terminate after completion

## Error Cases

The script will show error messages if:
- No image file is provided
- The specified file doesn't exist
- There's an error during OCR processing

## Dependencies

- [tesseract.js](https://github.com/naptha/tesseract.js): OCR engine for text extraction
- Node.js built-in `fs` module for file system operations

## License

Apache License 2.0

## Contributing

Feel free to submit issues and pull requests to improve the tool.