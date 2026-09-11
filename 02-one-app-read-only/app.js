#!/usr/bin/env node

// ============================================================================
// One App — Read Only
//
// This is a DEMONSTRATION app showing read-only patterns.
// The sample data below represents what a real Google Drive connection would
// return. In production, this data would come from:
// - Google Drive API (requires OAuth setup)
// - Claude's Google Drive MCP connector (used through Claude)
//
// This app demonstrates the READ-ONLY PATTERN - how to structure an
// application so it can only READ, SEARCH, and DISPLAY data without
// any ability to modify, delete, or upload files.
// ============================================================================

const SAMPLE_DRIVE_FILES = [
  {
    id: 'doc_001',
    name: 'Project Ideas.docx',
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    size: 45000,
    modifiedTime: '2026-09-10T14:30:00Z',
    webViewLink: 'https://docs.google.com/document/d/doc_001/edit'
  },
  {
    id: 'sheet_001',
    name: 'Budget 2026.xlsx',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    size: 28000,
    modifiedTime: '2026-09-08T09:15:00Z',
    webViewLink: 'https://docs.google.com/spreadsheets/d/sheet_001/edit'
  },
  {
    id: 'pdf_001',
    name: 'Research Paper.pdf',
    mimeType: 'application/pdf',
    size: 892000,
    modifiedTime: '2026-09-05T16:45:00Z',
    webViewLink: 'https://drive.google.com/file/d/pdf_001/view'
  },
  {
    id: 'folder_001',
    name: 'Project Files',
    mimeType: 'application/vnd.google-apps.folder',
    size: 0,
    modifiedTime: '2026-09-01T10:00:00Z',
    webViewLink: 'https://drive.google.com/drive/folders/folder_001'
  },
  {
    id: 'sheet_002',
    name: 'Meeting Notes.xlsx',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    size: 18000,
    modifiedTime: '2026-08-28T11:30:00Z',
    webViewLink: 'https://docs.google.com/spreadsheets/d/sheet_002/edit'
  }
];

function getCommand() {
  return process.argv[2] || 'help';
}

function getSearchQuery() {
  return process.argv.slice(3).join(' ');
}

function formatFileSize(bytes) {
  if (bytes === 0) return '(folder)';
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function getFileType(mimeType) {
  if (mimeType.includes('folder')) return 'Folder';
  if (mimeType.includes('wordprocessing')) return 'Word';
  if (mimeType.includes('spreadsheet')) return 'Sheet';
  if (mimeType.includes('presentation')) return 'Slide';
  if (mimeType.includes('pdf')) return 'PDF';
  return mimeType.split('/')[1].toUpperCase().slice(0, 13);
}

function listFiles() {
  console.log('\n📁 Sample File List (Demonstrating Read-Only Access)\n');
  console.log('Sample data representing what Google Drive would return:\n');
  console.log('File Name                      | Type          | Size      | Modified');
  console.log('-'.repeat(80));

  SAMPLE_DRIVE_FILES.forEach(file => {
    const type = getFileType(file.mimeType);
    const size = formatFileSize(file.size);
    const date = formatDate(file.modifiedTime);
    console.log(`${file.name.padEnd(30)} | ${type.padEnd(13)} | ${size.padEnd(9)} | ${date}`);
  });

  console.log('-'.repeat(80));
  console.log(`\nTotal files shown: ${SAMPLE_DRIVE_FILES.length}`);
  console.log('Status: ✅ This app is read-only (no write/delete/modify operations possible)\n');
}

function searchFiles(query) {
  if (!query || query.trim() === '') {
    console.log('⚠️  Please provide a search query.\n');
    showHelp();
    return;
  }

  const lowerQuery = query.toLowerCase();
  const results = SAMPLE_DRIVE_FILES.filter(file =>
    file.name.toLowerCase().includes(lowerQuery)
  );

  console.log(`\n🔍 Search Results for: "${query}"\n`);
  console.log('Searching sample data (representing Google Drive files):\n');

  if (results.length === 0) {
    console.log('No files found matching your search.\n');
    return;
  }

  console.log('File Name                      | Type          | Modified');
  console.log('-'.repeat(70));

  results.forEach(file => {
    const type = getFileType(file.mimeType);
    const date = formatDate(file.modifiedTime);
    console.log(`${file.name.padEnd(30)} | ${type.padEnd(13)} | ${date}`);
  });

  console.log('-'.repeat(70));
  console.log(`\nMatches found: ${results.length} out of ${SAMPLE_DRIVE_FILES.length} total`);
  console.log('Status: ✅ This app is read-only (no write/delete/modify operations possible)\n');
}

function showFileDetails(query) {
  if (!query || query.trim() === '') {
    console.log('⚠️  Please provide a file name.\n');
    return;
  }

  const lowerQuery = query.toLowerCase();
  const file = SAMPLE_DRIVE_FILES.find(f =>
    f.name.toLowerCase().includes(lowerQuery)
  );

  if (!file) {
    console.log(`No file found matching: "${query}"\n`);
    return;
  }

  console.log(`\n📄 File Details (Sample Data)\n`);
  console.log(`Name:          ${file.name}`);
  console.log(`ID:            ${file.id}`);
  console.log(`Type:          ${file.mimeType}`);
  console.log(`Size:          ${formatFileSize(file.size)}`);
  console.log(`Modified:      ${formatDate(file.modifiedTime)}`);
  console.log(`View Link:     ${file.webViewLink}`);
  console.log('\nStatus: ✅ This app is read-only (no write/delete/modify operations possible)\n');
}

function showHelp() {
  console.log(`
One App — Read Only
===================
A beginner-friendly app demonstrating READ-ONLY patterns.

PURPOSE:
  Teaches how to build applications that can read and search data
  without any ability to modify, delete, or upload files.

USAGE:
  node app.js [command] [options]

COMMANDS:
  list                  Display sample files (shows structure, not real data)
  search <query>        Search sample data by name
  details <name>        Show details about a sample file
  help                  Show this help message

EXAMPLES:
  node app.js list
  node app.js search "document"
  node app.js details "Project Ideas"

WHAT THIS APP DEMONSTRATES:
  ✅ How to structure a read-only application
  ✅ Safe patterns: list, search, view (never modify/delete)
  ✅ Clear design that prevents accidental data loss
  ✅ How read-only constraints work in code

REAL GOOGLE DRIVE INTEGRATION:
  This demo uses sample data. Real Google Drive access happens through:
  - Google Drive API (requires OAuth setup)
  - Claude's Google Drive connector (via /google-drive-search, etc.)

IMPORTANT - THIS APP IS READ-ONLY:
  No code in this app can:
  - Create files ❌
  - Upload files ❌
  - Modify files ❌
  - Delete files ❌
  - Change permissions ❌
`);
}

function main() {
  const command = getCommand();

  switch (command) {
    case 'list':
      listFiles();
      break;
    case 'search':
      searchFiles(getSearchQuery());
      break;
    case 'details':
      showFileDetails(getSearchQuery());
      break;
    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;
    default:
      console.log(`Unknown command: "${command}"`);
      showHelp();
  }
}

main();
