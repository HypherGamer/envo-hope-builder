#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("\n========================================================");
console.log("🔍 ENVO PEACE FOUNDATION — DUMMY CONTENT AUDIT REPORT");
console.log("   (Notice: this is an owner notice; build will NOT fail)");
console.log("========================================================\n");

const contentDir = path.join(rootDir, "src", "content");
let totalDummyItems = 0;

if (fs.existsSync(contentDir)) {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".ts"));

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split("\n");

    const fileDummyOccurrences = [];
    let currentBlockName = "";

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const titleMatch = line.match(/(?:title|name|slug|id|label):\s*["']([^"']+)["']/);
      if (titleMatch) {
        currentBlockName = titleMatch[1];
      }

      if (line.includes("dummy: true") || line.includes("dummy?: boolean")) {
        if (!line.includes("dummy?: boolean")) {
          totalDummyItems++;
          fileDummyOccurrences.push({
            line: i + 1,
            block: currentBlockName || "Item",
          });
        }
      }
    }

    if (fileDummyOccurrences.length > 0) {
      console.log(`📁 src/content/${file} (${fileDummyOccurrences.length} invented items):`);
      for (const occ of fileDummyOccurrences) {
        console.log(`   - Line ${occ.line}: ${occ.block}`);
      }
      console.log("");
    }
  }
}

console.log("--------------------------------------------------------");
console.log(`Summary: ${totalDummyItems} invented items tagged with 'dummy: true'.`);
console.log("Owner reminder: Replace these items with verified photos,");
console.log("official CAC registration numbers, and field records when ready.");
console.log("========================================================\n");

// Never fail the build
process.exit(0);
