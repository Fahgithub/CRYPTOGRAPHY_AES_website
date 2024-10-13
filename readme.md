# AES File Encryption & Decryption Web Tool

This project demonstrates how to implement Advanced Encryption Standard (AES) encryption and decryption directly in web browsers using modern JavaScript features. AES is a widely-used symmetric encryption algorithm that ensures the security and confidentiality of sensitive data by transforming readable information into an encrypted format. This web tool allows users to securely encrypt and decrypt files with a custom 16-character key.

## Table of Contents
- [AES File Encryption \& Decryption Web Tool](#aes-file-encryption--decryption-web-tool)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Overview](#overview)
    - [Key Features:](#key-features)
  - [Importance of Encryption](#importance-of-encryption)
  - [Technology Stack](#technology-stack)
    - [Frontend:](#frontend)
    - [Web API:](#web-api)
    - [Additional Libraries:](#additional-libraries)
    - [Web Crypto API:](#web-crypto-api)
    - [Conclusion](#conclusion)

## Introduction

This project showcases how modern encryption techniques, specifically AES, can be leveraged to securely encrypt and decrypt files in a web browser. Users can upload any file, apply encryption using a custom 16-character key (AES-128), and download the securely encrypted file. This ensures that sensitive data remains confidential and secure.

## Overview

AES (Advanced Encryption Standard) is a symmetric encryption algorithm that converts plain, readable data (plaintext) into unreadable data (ciphertext). This web tool provides users the ability to:
- Encrypt any file type using AES encryption with a 16-character key.
- Decrypt previously encrypted files using the same key.
- Perform all operations in the browser for enhanced security and privacy.

### Key Features:
- **Input flexibility**: Users can select and encrypt any file from their system.
- **Custom key entry**: The user must enter a 16-character encryption key.
- **Downloadable files**: Users can download the encrypted or decrypted files.
- **No server required**: All operations happen entirely within the user's browser using JavaScript.

AES encryption is used widely in secure communication (HTTPS), encrypted storage, and VPNs, making it a highly trusted encryption standard.

## Importance of Encryption

With the increasing need for data privacy, encryption has become an essential tool in safeguarding sensitive information. Whether it’s personal or corporate data, encryption ensures that unauthorized parties cannot access or misuse confidential information. AES, a widely adopted encryption algorithm, plays a crucial role in securing data transmissions in industries like healthcare, finance, and e-commerce.

## Technology Stack

The web tool uses the following technologies:

### Frontend:
- **HTML5**: Provides the basic structure of the web interface.
- **CSS3**: Styles the webpage, ensuring an aesthetically pleasing interface.
- **JavaScript (ES6)**: Handles encryption and decryption using the Web Crypto API.

### Web API:
- **Web Crypto API**: A built-in JavaScript API used for encryption and decryption on the client side.

### Additional Libraries:
- **Blob & URL APIs**: For managing file data and generating downloadable links.
- **TextEncoder & TextDecoder**: Used to convert strings into byte streams for AES encryption.

### Web Crypto API:
**The Web Crypto API** provides cryptographic operations like encryption, decryption, and key management directly in the browser. Key functions used in this project include:

- **crypto.subtle.encrypt:** Encrypts file data using the AES-GCM algorithm.
- **crypto.subtle.decrypt:** Decrypts previously encrypted data.
- **crypto.subtle.importKey:** Imports the user-supplied key for cryptographic operations.

### Conclusion
This AES File Encryption & Decryption web tool provides a user-friendly interface for secure file management. By allowing users to encrypt and decrypt files with a custom key, it offers a practical solution to safeguard sensitive information entirely within the browser. The Web Crypto API's native support ensures robust and efficient encryption, eliminating the need for external libraries or server-side operations.
