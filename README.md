# Node.js QR Code Generator

This Node.js application generates QR codes for any given URL or text input. It uses an interactive command-line interface to allow users to specify the size, format, and output directory of the QR code, making it highly customizable and easy to use.

## Features

- **Generate QR codes** from any text or URL.
- **Customizable output** with options for size and format (PNG, SVG, EPS).
- **Interactive CLI** for ease of use and flexibility.
- **Output directory selection** to save QR codes wherever you prefer.

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your system. If not, you can download and install them from [Node.js official website](https://nodejs.org/).

## Installation

To get started with the QR Code Generator, clone the repository and install the dependencies:

```bash
git clone https://github.com/mohith174/qr-code-generator.git
cd qr-code-generator
npm install inquirer qr fs path
```

## Usage

```node index.js```

## Example
Here’s an example:

```node index.js```

```
Type in your URL or text: https://example.com
Select the output format: PNG
Enter the size for your QR code: 5
Enter the output directory: ./output
```



