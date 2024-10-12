const fileInput = document.getElementById("file-input");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const keyInput = document.getElementById("key-input");
const outputMessage = document.getElementById("output-message");
const downloadLink = document.getElementById("download-link");

// Utility to convert ArrayBuffer to Hex string
function arrayBufferToHex(buffer) {
  const byteArray = new Uint8Array(buffer);
  return Array.prototype.map
    .call(byteArray, (byte) => ("00" + byte.toString(16)).slice(-2))
    .join("");
}

// Utility to convert Hex string to ArrayBuffer
function hexToArrayBuffer(hex) {
  let typedArray = new Uint8Array(
    hex.match(/[\da-f]{2}/gi).map((h) => parseInt(h, 16))
  );
  return typedArray.buffer;
}

// Function to encrypt the file
async function encryptFile(file, key) {
  const iv = crypto.getRandomValues(new Uint8Array(16));
  const algorithm = { name: "AES-GCM", iv: iv };

  // Read the file as ArrayBuffer
  const fileData = await file.arrayBuffer();

  // Import the key and encrypt the file
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key,
    "AES-GCM",
    false,
    ["encrypt"]
  );
  const encryptedData = await crypto.subtle.encrypt(
    algorithm,
    cryptoKey,
    fileData
  );

  // Prepare the file for download (IV + Encrypted Data)
  const blob = new Blob([iv, encryptedData], {
    type: "application/octet-stream",
  });
  const url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = file.name + ".enc";
  downloadLink.style.display = "block";
  outputMessage.textContent = "File encrypted successfully!";
}

// Function to decrypt the file
async function decryptFile(file, key) {
  const fileData = await file.arrayBuffer();

  const iv = new Uint8Array(fileData.slice(0, 16)); // First 16 bytes are the IV
  const encryptedData = fileData.slice(16); // The rest is the encrypted data
  const algorithm = { name: "AES-GCM", iv: iv };

  // Import the key and decrypt the file
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key,
    "AES-GCM",
    false,
    ["decrypt"]
  );
  try {
    const decryptedData = await crypto.subtle.decrypt(
      algorithm,
      cryptoKey,
      encryptedData
    );
    const blob = new Blob([decryptedData], {
      type: "application/octet-stream",
    });
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = "decrypted_" + file.name.replace(".enc", "");
    downloadLink.style.display = "block";
    outputMessage.textContent = "File decrypted successfully!";
  } catch (error) {
    outputMessage.textContent =
      "Decryption failed. Invalid key or corrupted file.";
  }
}

// Event listeners
encryptBtn.addEventListener("click", () => {
  const file = fileInput.files[0];
  const key = keyInput.value;

  if (!file || key.length !== 16) {
    outputMessage.textContent =
      "Please provide a valid file and a 16-character key.";
    return;
  }

  const encodedKey = new TextEncoder().encode(key); // Convert key to Uint8Array
  encryptFile(file, encodedKey);
});

decryptBtn.addEventListener("click", () => {
  const file = fileInput.files[0];
  const key = keyInput.value;

  if (!file || key.length !== 16 || !file.name.endsWith(".enc")) {
    outputMessage.textContent =
      "Please provide a valid encrypted file and a 16-character key.";
    return;
  }

  const encodedKey = new TextEncoder().encode(key); // Convert key to Uint8Array
  decryptFile(file, encodedKey);
});
