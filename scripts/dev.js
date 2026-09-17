import { spawn } from 'node:child_process';
import process from 'node:process';

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const children = [];

function start(label, args) {
  // On Windows, npm.cmd must be launched through the shell to avoid
  // `spawn EINVAL` with npm's command shim.
  const child = spawn(npm, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: { ...process.env },
    windowsHide: false
  });

  children.push({ label, child });
  child.on('error', (error) => {
    console.error(`[${label}] gagal dijalankan: ${error.message}`);
  });
  child.on('exit', (code, signal) => {
    if (code !== 0 && signal !== 'SIGTERM' && signal !== 'SIGINT') {
      console.error(`[${label}] berhenti dengan code=${code}, signal=${signal ?? '-'}.`);
    }
  });
}

console.log('\nBagas Arya Wijaya Portfolio - Development Mode');
console.log('Frontend: http://localhost:5173');
console.log('Backend : http://localhost:3001');
console.log('API     : http://localhost:3001/api/health\n');

start('frontend', ['--prefix', 'frontend', 'run', 'dev']);
start('backend', ['--prefix', 'backend', 'run', 'dev']);

function shutdown() {
  for (const { child } of children) {
    if (!child.killed) child.kill();
  }
}

process.on('SIGINT', () => { shutdown(); process.exit(0); });
process.on('SIGTERM', () => { shutdown(); process.exit(0); });
