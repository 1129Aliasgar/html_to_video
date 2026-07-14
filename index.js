const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
    const browser = await chromium.launch({
        headless: true
    });

    const page = await browser.newPage({
        viewport: {
            width: 1920,
            height: 1080
        }
    });

    // Create frames folder if it doesn't exist
    const framesDir = path.join(__dirname, 'frames');
    if (!fs.existsSync(framesDir)) {
        fs.mkdirSync(framesDir);
    }

    await page.goto('your-file-path');

    // Wait for page to fully load
    await page.waitForLoadState('networkidle');

    const fps = 30;
    const duration = 5;
    const totalFrames = fps * duration;
    
    const start = Date.now();
    
    for (let i = 0; i < totalFrames; i++) {
        const targetTime = start + i * (1000 / fps);
    
        const now = Date.now();
        if (targetTime > now) {
            await page.waitForTimeout(targetTime - now);
        }
    
        await page.screenshot({
            path: `frames/frame_${String(i).padStart(4, '0')}.png`
        });
    }

    await browser.close();

    console.log(`Saved ${totalFrames} frames.`);
})();