import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';
    
    return {
      server: {
        port: 5000,
        host: '0.0.0.0',
        allowedHosts: true
      },
      preview: {
        port: 5000,
        host: '0.0.0.0',
        allowedHosts: true
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || '')
      },
      build: {
        outDir: 'dist',
        sourcemap: false,
        minify: isProduction ? 'esbuild' : false,
        target: 'es2015',
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
          output: {
            manualChunks: undefined,
            assetFileNames: 'assets/[name].[hash][extname]',
            chunkFileNames: 'assets/[name].[hash].js',
            entryFileNames: 'assets/[name].[hash].js'
          }
        }
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
