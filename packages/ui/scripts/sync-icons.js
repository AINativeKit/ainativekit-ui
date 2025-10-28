#!/usr/bin/env node

/**
 * Sync Icons Script
 * Copies SVG icons from src/tokens/icons to public/icons for Storybook serving
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../src/tokens/icons');
const publicDir = path.join(__dirname, '../public/icons');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy all SVG files from source to public
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else if (entry.name.endsWith('.svg')) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('🔄 Syncing icons from src/tokens/icons to public/icons...');
copyDirectory(sourceDir, publicDir);
console.log('✅ Icons synced successfully!');
