import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatDate, loadStats, saveStats } from './utils.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const statsPath = path.join(__dirname, "..", "stats.json");

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
    statsData.current.end = now.toISOString();
    const key = formatDate(now);
    if (!statsData.history) {
        statsData.history = {};
    }
    if (!statsData.history[key]) {
        statsData.history[key] = [];
    }
    statsData.history[key].push(statsData.current);
    delete statsData.current;
    saveStats(statsData);
}

fs.rmSync(tmpPath);
