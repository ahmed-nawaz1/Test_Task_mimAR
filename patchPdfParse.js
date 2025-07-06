import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const pdfParse = require('pdf-parse');

// 🩹 Remove the test property if it exists
if (pdfParse.test) {
  console.log('🩹 Patching pdf-parse to remove test references...');
  delete pdfParse.test;
}

export default pdfParse;
