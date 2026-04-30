
const crypto = require("crypto");
// key and IV
const key = crypto.pseudoRandomBytes(32);
const iv = crypto.randomBytes(16);

console.log("Symmetric Key (hex):", key.toString("hex"));
console.log("IV (hex):", iv.toString("hex"));
//
const message = "This is encryption test!";
console.log("Original message:, message");
const cipher = crypto.createCipheriv("aes-256-cbc", key,iv);
let encrypted = cipher.update(message, "utf8", "hex");
encrypted += cipher.final("hex");

console.log("Encrypted message:", encrypted);

//Decrypt
const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");

console.log("Decrypted message:", decrypted);


