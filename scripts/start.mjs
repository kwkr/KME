import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadStats, saveStats } from './utils.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exercisesPath = path.join(__dirname, "..", "exercises");
const todayPath = path.join(__dirname, "..", "today");

const statsData = loadStats();

const pickFilter = process.argv[2];

clearToday();
const allElements = fs.readdirSync(exercisesPath);
let exercise;
if (pickFilter) {
    exercise = allElements.find(i => i.includes(pickFilter));
}

if (!exercise) {
    exercise = allElements[Math.floor(Math.random() * allElements.length)];

}
console.log('Your exercise is:', exercise)

const now = new Date();
statsData.current = {
    start: now.toISOString(),
    name: exercise
};

saveStats(statsData);

fs.copyFileSync(`${exercisesPath}/${exercise}/index.ts`, `${todayPath}/index.ts`);
fs.copyFileSync(`${exercisesPath}/${exercise}/index.spec.ts`, `${todayPath}/index.spec.ts`);


function clearToday() {
    const allElements = fs.readdirSync(todayPath);
    for (const item of allElements) {
        if (item.startsWith('.')) {
            continue;
        }
        fs.rmSync(`${todayPath}/${item}`);
    }
}