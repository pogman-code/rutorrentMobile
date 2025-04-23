import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-var': 'error',
    },
    languageOptions: {
      globals: {
        $: 'readonly',
        $type: 'readonly',
        dStatus: 'readonly',
        dxSTable: 'readonly',
        injectScript: 'readonly',
        iv: 'readonly',
        jQuery: 'readonly',
        mobile: 'writeable',
        plugin: 'readonly',
        rTorrentStub: 'readonly',
        rXMLRPCCommand: 'readonly',
        theConverter: 'readonly',
        theFormatter: 'readonly',
        thePlugins: 'readonly',
        theUILang: 'readonly',
        theURLs: 'readonly',
        theWebUI: 'readonly',
      },
    },
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.browser } },
]);
