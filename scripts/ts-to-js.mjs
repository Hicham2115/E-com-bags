import { transformSync } from "@babel/core";
import { readFileSync, writeFileSync, unlinkSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";

const ROOT = decodeURIComponent(new URL("..", import.meta.url).pathname);
const IGNORE = ["node_modules", ".next", "scripts", "dist"];

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    if (IGNORE.includes(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

const tsFiles = walk(ROOT).filter(f => f.endsWith(".ts") || f.endsWith(".tsx"));
console.log(`Converting ${tsFiles.length} files...\n`);

let ok = 0, fail = 0;

for (const file of tsFiles) {
  const isTsx = file.endsWith(".tsx");
  const outFile = file.replace(/\.tsx$/, ".jsx").replace(/\.ts$/, ".js");

  try {
    const code = readFileSync(file, "utf8");

    const result = transformSync(code, {
      filename: file,
      presets: [
        ["@babel/preset-typescript", { allExtensions: true, isTSX: isTsx }],
        ...(isTsx ? [["@babel/preset-react", { runtime: "automatic" }]] : []),
      ],
      retainLines: true,
      generatorOpts: { retainLines: true },
      // preserve "use client" / "use server" directives
      parserOpts: { plugins: ["jsx"] },
    });

    writeFileSync(outFile, result.code, "utf8");
    if (outFile !== file) unlinkSync(file);

    const rel = file.replace(ROOT, "");
    console.log(`✓  ${rel}`);
    ok++;
  } catch (err) {
    console.error(`✗  ${file.replace(ROOT, "")}: ${err.message.split("\n")[0]}`);
    fail++;
  }
}

console.log(`\nDone — ${ok} converted, ${fail} failed.`);
