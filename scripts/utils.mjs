
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const statsPath = path.join(__dirname, "..", "stats.json");

export function loadStats() {
    return JSON.parse(fs.readFileSync(statsPath, 'utf-8'));
}

export function saveStats(data) {
    fs.writeFileSync(statsPath, JSON.stringify(data));
}

export function formatDate(date) {
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
