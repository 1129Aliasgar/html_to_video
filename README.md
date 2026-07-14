# HTML to Video

Convert an HTML page into a video by capturing high-quality frames with Playwright and combining them into a video using FFmpeg.

## Features

- Capture HTML pages at a fixed frame rate
- Configurable video duration
- Full HD (1920×1080) screenshots
- Headless browser automation using Playwright
- PNG frame sequence output
- Easy to convert frames into MP4 with FFmpeg

---

## Prerequisites

- Node.js (v18 or later recommended)
- npm or pnpm
- FFmpeg (for generating the final video)

Verify FFmpeg installation:

```bash
ffmpeg -version
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/html_to_video.git
cd html_to_video
```

Install dependencies:

```bash
npm install
```

or

```bash
pnpm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Project Structure

```
html_to_video/
│
├── index.js              # Main script
├── package.json
├── frames/               # Generated PNG frames
└── README.md
```

---

## Usage

### 1. Update the HTML path

Replace:

```javascript
await page.goto('your-file-path');
```

with one of the following:

Local HTML:

```javascript
await page.goto('file:///C:/Users/YourName/Desktop/index.html');
```

or a hosted webpage:

```javascript
await page.goto('https://example.com');
```

---

### 2. Configure video settings

```javascript
const fps = 30;
const duration = 5;
```

Example:

- FPS: 30
- Duration: 5 seconds
- Total Frames: 150

---

### 3. Run the script

```bash
node index.js
```

The script will generate PNG images inside the `frames/` directory.

Example:

```
frames/
├── frame_0000.png
├── frame_0001.png
├── frame_0002.png
...
└── frame_0149.png
```

---

## Convert Frames to Video

Use FFmpeg to convert the generated frames into an MP4 video:

```bash
ffmpeg -framerate 30 -i frames/frame_%04d.png -c:v libx264 -pix_fmt yuv420p output.mp4
```

This creates:

```
output.mp4
```

---

## Configuration

### Browser

```javascript
const browser = await chromium.launch({
    headless: true
});
```

To see the browser while rendering:

```javascript
headless: false
```

---

### Viewport

```javascript
viewport: {
    width: 1920,
    height: 1080
}
```

Modify these values to render at different resolutions.

Examples:

- 1280 × 720 (HD)
- 1920 × 1080 (Full HD)
- 2560 × 1440 (2K)
- 3840 × 2160 (4K)

---

## How It Works

1. Launches a Chromium browser using Playwright.
2. Opens the specified HTML page.
3. Waits until the page is fully loaded.
4. Captures screenshots at the specified FPS.
5. Saves each frame as a PNG image.
6. Uses FFmpeg to combine the frames into a video.

---

## Example Output

```
Saved 150 frames.
```

Generated files:

```
frames/
output.mp4
```

---

## Customization

You can easily customize:

- Video duration
- Frame rate (FPS)
- Browser viewport
- Output directory
- HTML source (local file or URL)
- Screenshot quality
- Browser mode (headless/headed)

---

## Future Improvements

- Direct MP4 export without intermediate frames
- Transparent background support
- Audio support
- Progress bar
- CLI arguments
- Batch rendering
- GIF export
- WebM export

---

## Dependencies

- Playwright
- Node.js
- FFmpeg (optional, for video generation)

---

## License

This project is licensed under the MIT License.

---

## Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## Author

Made with ❤️ using Node.js and Playwright.