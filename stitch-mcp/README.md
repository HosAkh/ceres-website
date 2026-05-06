# Google Stitch MCP Server

This is the Google Stitch MCP server used by GitHub Copilot to generate and redesign UI pages for the Ceres website.

## Setup

1. Install dependencies:
   ```bash
   cd stitch-mcp
   npm install
   ```

2. Get a Stitch API key from [Google AI Studio](https://aistudio.google.com/)

3. Add to your VS Code `mcp.json` (`~/Library/Application Support/Code/User/mcp.json` on macOS):
   ```json
   {
     "servers": {
       "google-stitch": {
         "type": "stdio",
         "command": "/path/to/node",
         "args": ["/path/to/this/repo/stitch-mcp/server.js"],
         "env": {
           "STITCH_API_KEY": "YOUR_API_KEY_HERE"
         }
       }
     }
   }
   ```

4. Find your node path with: `which node`

## What it does

When active, Copilot can call Stitch to:
- Generate full HTML page designs from text prompts
- Produce hospital/clinical-grade imagery specific to your vertical
- Return downloadable HTML + screenshot URLs

Stitch is invoked automatically when you ask Copilot to "redesign" or "use Stitch" on any page.
