import { StitchProxy } from "@google/stitch-sdk";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// STITCH_API_KEY must be set in environment or VS Code mcp.json
const proxy = new StitchProxy({ apiKey: process.env.STITCH_API_KEY });
const transport = new StdioServerTransport();
await proxy.start(transport);
