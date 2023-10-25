import cryptoJS from "crypto-js";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { log } from "console";

// const getHash = (content) => {
//   var hash = cryptoJS.SHA3(content, { outputLength: 256 });

//   return hash;
// };

let hashes = [];

const arr = fs.readdirSync(path.join(process.cwd(), "files"));

const getHash = (content) => {
  const hash = crypto.createHash("sha3-256").update(content).digest("hex");

  return hash;
};

for (let i of arr) {
  const readContent = fs.readFileSync(path.join(process.cwd(), "files", i));

  const hash = getHash(readContent);

  hashes.push(hash);
}

hashes.sort();
let stringggg = hashes.join("");
stringggg += "latipovusmonkhon2236@gmail.com";
log(getHash(stringggg));
