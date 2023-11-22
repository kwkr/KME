import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatDate, loadStats, saveStats } from './utils.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const backupPath = path.join(__dirname, "..", "backup");
const exercisePath = path.join(__dirname, "..", "today", 'index.ts');

try {
    execSync("npm test", { stdio: 'inherit' });
} catch (error) {
}
const tmpPath = path.join(__dirname, "..", "tmp.json");
const testRunData = JSON.parse(fs.readFileSync(tmpPath, 'utf-8'));
if (testRunData.numFailedTestSuites > 0) {
    // tests failed
} else if (testRunData.numPassedTestSuites > 0) {
    // tests passed
    const statsData = loadStats();
    const now = new Date();
    if (statsData.current) {
        const exerciseName = statsData.current.name;
        statsData.current.end = now.toISOString();

        const key = formatDate(now);
        if (!statsData.history) {
            statsData.history = {};
        }
        if (!statsData.history[key]) {
            statsData.history[key] = [];
        }
        statsData.history[key].push(statsData.current);

        if (!fs.existsSync(backupPath)) {
            fs.mkdirSync(backupPath)
        }
        fs.copyFileSync(exercisePath, `${backupPath}/${exerciseName}-${now.getTime()}.ts`);
        delete statsData.current;
        saveStats(statsData);
    }
}

fs.rmSync(tmpPath);
