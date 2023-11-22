import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadStats, saveStats } from './utils.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exercisesPath = path.join(__dirname, "..", "exercises");
const todayPath = path.join(__dirname, "..", "today");

const statsData = loadStats();

clearToday();
const allElements = fs.readdirSync(exercisesPath);

const randomExercise = allElements[Math.floor(Math.random() * allElements.length)];
const now = new Date();
statsData.current = {
    start: now.toISOString(),
    name: randomExercise
};

saveStats(statsData);

fs.copyFileSync(`${exercisesPath}/${randomExercise}/index.ts`, `${todayPath}/index.ts`);
fs.copyFileSync(`${exercisesPath}/${randomExercise}/index.spec.ts`, `${todayPath}/index.spec.ts`);


function clearToday() {
    const allElements = fs.readdirSync(todayPath);
    for (const item of allElements) {
        if (item.startsWith('.')) {
            continue;
        }
        fs.rmSync(`${todayPath}/${item}`);
    }
}