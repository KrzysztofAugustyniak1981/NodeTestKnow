import { showSystemInfo } from './systemInfo.js';
import { parseUrl } from './urlParser.js';
import { generateHash } from './passwordHasher.js';
import { eventHandler } from './eventHandler.js';

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


