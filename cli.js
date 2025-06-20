#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { replaceInFile as replace } from 'replace-in-file';
import { fileURLToPath } from 'url';

// 1. Prompt user for COLS & ROWS
const answers = await inquirer.prompt([
  {
    type: 'number',
    name: 'COLS',
    message: 'Number of columns:',
    default: 16,
  },
  {
    type: 'number',
    name: 'ROWS',
    message: 'Number of rows:',
    default: 8,
  },
]);

// 2. Copy template files to target directory
const targetDir = process.argv[2] || 'my-grid-component';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templateDir = path.join(__dirname, 'template');

await fs.mkdir(targetDir, { recursive: true });
await fs.cp(templateDir, targetDir, { recursive: true });

// 3. Replace placeholders in GridSelection.js
const gridFile = path.join(targetDir, 'src/components/GridSelection.js');

await replace({
  files: gridFile,
  from: /<%= COLS %>/g,
  to: answers.COLS,
});

await replace({
  files: gridFile,
  from: /<%= ROWS %>/g,
  to: answers.ROWS,
});

console.log(chalk.green(`✅ Project created in ./${targetDir}!`));
console.log(chalk.blue(`  cd ${targetDir} && npm install && npm start`));
