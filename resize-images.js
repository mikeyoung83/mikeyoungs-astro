import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const TARGET_DIR = './src/content';
const MAX_WIDTH = 1200;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

async function resizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    try {
      const image = sharp(filePath);
      const metadata = await image.metadata();
      
      if (metadata.width && metadata.width > MAX_WIDTH) {
        console.log(`Resizing: ${filePath} (Width: ${metadata.width}px -> ${MAX_WIDTH}px)`);
        
        // Read buffer first to avoid locking issues on some OS when overwriting in-place
        const buffer = await image
          .resize({ width: MAX_WIDTH, withoutEnlargement: true })
          .toBuffer();
          
        fs.writeFileSync(filePath, buffer);
        console.log(`Successfully optimized: ${filePath}`);
      } else {
        console.log(`Skipping: ${filePath} (Width: ${metadata.width || 'unknown'}px is under limit)`);
      }
    } catch (err) {
      console.error(`Error processing ${filePath}:`, err);
    }
  }
}

async function main() {
  console.log(`Scanning directory: ${TARGET_DIR}`);
  const files = [];
  walkDir(TARGET_DIR, (filePath) => {
    files.push(filePath);
  });
  
  for (const file of files) {
    await resizeImage(file);
  }
  console.log('Image optimization finished!');
}

main().catch(console.error);
