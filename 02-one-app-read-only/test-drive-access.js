#!/usr/bin/env node

import fs from 'fs';

console.log('\n' + '='.repeat(80));
console.log('PROJECT 2: One App — Read Only | Test Suite');
console.log('='.repeat(80) + '\n');

const appCode = fs.readFileSync('./app.js', 'utf8');

const tests = [
  {
    name: 'No write() operations to files',
    check: () => !appCode.includes('fs.write'),
    severity: 'CRITICAL'
  },
  {
    name: 'No unlink() or delete operations',
    check: () => !appCode.includes('fs.unlink') && !appCode.includes('fs.rm'),
    severity: 'CRITICAL'
  },
  {
    name: 'No rename() operations',
    check: () => !appCode.includes('fs.rename'),
    severity: 'CRITICAL'
  },
  {
    name: 'No mkdir() to create directories',
    check: () => !appCode.includes('fs.mkdir'),
    severity: 'CRITICAL'
  },
  {
    name: 'No append() operations',
    check: () => !appCode.includes('fs.append'),
    severity: 'CRITICAL'
  },
  {
    name: 'Only fs.readFile() or fs.read operations',
    check: () => appCode.includes('fs.read') || !appCode.includes('fs.'),
    severity: 'HIGH'
  },
  {
    name: 'No destructive API calls (delete, remove, trash)',
    check: () => !appCode.includes('.delete()') && !appCode.includes('.remove()') && !appCode.includes('.trash()'),
    severity: 'CRITICAL'
  },
  {
    name: 'No create/upload operations',
    check: () => {
      // Check for function calls that would create/upload, but allow the word "create" in documentation
      const hasUploadCall = /\bupload\s*\(/.test(appCode);
      const hasCreateFileCall = /\b(createFile|createDir|create)\s*\(/.test(appCode);
      return !hasUploadCall && !hasCreateFileCall;
    },
    severity: 'CRITICAL'
  },
  {
    name: 'Help command available',
    check: () => appCode.includes('showHelp()') && appCode.includes("case 'help'"),
    severity: 'HIGH'
  },
  {
    name: 'List command available',
    check: () => appCode.includes("case 'list'") && appCode.includes('listFiles()'),
    severity: 'HIGH'
  },
  {
    name: 'Search command available',
    check: () => appCode.includes("case 'search'") && appCode.includes('searchFiles'),
    severity: 'HIGH'
  },
  {
    name: 'Clear indication of read-only status',
    check: () => appCode.includes('Read-only') || appCode.includes('read-only'),
    severity: 'MEDIUM'
  }
];

let passCount = 0;
let failCount = 0;

console.log('TEST RESULTS:\n');

tests.forEach((test, index) => {
  const result = test.check();
  const icon = result ? '✅' : '❌';
  const status = result ? 'PASS' : 'FAIL';

  console.log(`${index + 1}. [${status}] ${test.name}`);
  console.log(`   Severity: ${test.severity}`);

  if (result) {
    passCount++;
  } else {
    failCount++;
  }
  console.log();
});

console.log('='.repeat(80));
console.log(`SUMMARY: ${passCount} passed, ${failCount} failed\n`);

if (failCount === 0) {
  console.log('✅ ALL TESTS PASSED - Read-only constraints verified!\n');
  process.exit(0);
} else {
  console.log('❌ SOME TESTS FAILED - Review code for potential write operations\n');
  process.exit(1);
}
