const crypto = require("crypto");

// Fonction pour générer une chaîne aléatoire de longueur donnée
function generateRandomString(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") // convertir en format hexadécimal
    .slice(0, length); // réduire à la longueur spécifiée
}

// Modifier ces valeurs par la longueur souhaitée pour chaque clé
const keyLength = 16;

// Générer des valeurs aléatoires
const appKeys = `${generateRandomString(keyLength)},${generateRandomString(
  keyLength
)}`;
const apiTokenSalt = generateRandomString(keyLength);
const adminJwtSecret = generateRandomString(keyLength);
const jwtSecret = generateRandomString(keyLength);
const transferTokenSalt = generateRandomString(keyLength);

// Afficher les valeurs générées
console.log(`APP_KEYS="${appKeys}"`);
console.log(`API_TOKEN_SALT=${apiTokenSalt}`);
console.log(`ADMIN_JWT_SECRET=${adminJwtSecret}`);
console.log(`JWT_SECRET=${jwtSecret}`);
console.log(`TRANSFER_TOKEN_SALT=${transferTokenSalt}`);
