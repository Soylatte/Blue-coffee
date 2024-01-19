import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import nodeResolve from '@rollup/plugin-node-resolve';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  plugins: [react(),nodeResolve()],

})
