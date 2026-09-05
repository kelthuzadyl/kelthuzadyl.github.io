import { spawn } from 'node:child_process';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// VS Code's Electron shell can set this variable, which prevents Astro from
// completing its startup scan. Remove it before launching the real CLI.
delete process.env.ELECTRON_RUN_AS_NODE;

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const astroCli = path.join(projectRoot, 'node_modules', 'astro', 'astro.js');
const child = spawn(process.execPath, [astroCli, ...process.argv.slice(2)], {
  cwd: projectRoot,
  env: process.env,
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 1);
  }
});

child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});
