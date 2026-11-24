// A news-image entry (Node 22, standard library only): the front page for
// Tuesday 24 November 2026 lives in entry.png beside this file, and this
// program copies it to the output directory, then proves the copy is whole.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

const bytes = readFileSync(source);
const sha256 = (b: Buffer) => createHash('sha256').update(b).digest('hex');

// A JPEG starts with SOI (FF D8) and ends with EOI (FF D9); refuse to ship
// a file whose markers are not intact.
if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) {
  throw new Error('entry.png is not a JPEG: missing SOI marker');
}
if (bytes[bytes.length - 2] !== 0xff || bytes[bytes.length - 1] !== 0xd9) {
  throw new Error('entry.png is not a whole JPEG: missing EOI marker');
}

// The gate refuses images over 1 MiB; fail here instead of shipping one.
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB gate`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);

// Prove the written bytes match the source exactly before exiting.
const written = readFileSync(target);
if (!written.equals(bytes)) {
  throw new Error('written entry.png does not match the source byte for byte');
}
if (sha256(written) !== sha256(bytes)) {
  throw new Error('written entry.png hash does not match the source');
}
console.log(`wrote ${target} (${written.length} bytes, sha256 ${sha256(written)})`);
