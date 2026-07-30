import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    // Generates dist/stats.html after build for bundle analysis
    visualizer({ filename: 'dist/stats.html', gzipSize: true })
  ]
});
