import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const localizedOutputs = [
  ["de", "de"],
  ["fr", "fr"],
  ["es", "es"],
  ["pt-br", "pt-BR"],
  ["ru", "ru"],
  ["ja", "ja"],
  ["ko", "ko"],
  ["uk", "uk"],
];

async function getHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? getHtmlFiles(target) : target.endsWith(".html") ? [target] : [];
  }));
  return files.flat();
}

let localizedCount = 0;
for (const [directory, htmlLang] of localizedOutputs) {
  const htmlFiles = await getHtmlFiles(path.join(process.cwd(), "out", directory));
  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    const localized = html.replace('<html lang="en"', `<html lang="${htmlLang}"`);
    if (localized === html) throw new Error(`Expected English root language in ${file}`);
    await writeFile(file, localized);
    localizedCount += 1;
  }
}

console.log(`Localized ${localizedCount} non-English HTML files.`);
