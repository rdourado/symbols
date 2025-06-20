#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import inquirer from 'inquirer'
import { fileURLToPath } from 'url'

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'number',
      name: 'COLS',
      message: 'How many columns (COLS) should the grid have?',
      default: 16,
      validate: v => v > 0 || 'Must be a positive number'
    },
    {
      type: 'number',
      name: 'ROWS',
      message: 'How many rows (ROWS) should the grid have?',
      default: 8,
      validate: v => v > 0 || 'Must be a positive number'
    }
  ])

  const projectRoot = process.cwd()
  const gridPath = path.join(projectRoot, 'src/components/GridSelection.js')

  // If GridSelection.js does not exist, copy from template
  if (!fs.existsSync(gridPath)) {
    // __dirname replacement for ES modules
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const templatePath = path.join(__dirname, 'template', 'src', 'components', 'GridSelection.js')
    if (fs.existsSync(templatePath)) {
      fs.mkdirSync(path.dirname(gridPath), { recursive: true })
      fs.copyFileSync(templatePath, gridPath)
      console.log('Copied GridSelection.js from template.')
    } else {
      console.error('GridSelection.js not found in template directory.')
      process.exit(1)
    }
  }

  let content = fs.readFileSync(gridPath, 'utf8')
  content = content.replace(/\{\{COLS\}\}/g, answers.COLS)
  content = content.replace(/\{\{ROWS\}\}/g, answers.ROWS)
  fs.writeFileSync(gridPath, content)
  console.log(`\nGridSelection.js updated with COLS=${answers.COLS}, ROWS=${answers.ROWS}`)
}

main()
