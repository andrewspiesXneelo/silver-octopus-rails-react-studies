import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), '');

  if (command === 'serve') {
    return {
      define: {
        // must use JSON.stringify else system with throw server Error 500 and not load env.mjs - sooooo fucking stupid
        ENV: JSON.stringify(env.VITE_ENV),
        API_URL: JSON.stringify(env.VITE_API_URL),
      },
      plugins: [react()],
      server: {
        port: parseInt(env.VITE_APP_PORT),
      }
    }
  } else {
    return {
      define: {
        ENV: JSON.stringify(env.VITE_ENV),
        API_URL: JSON.stringify(env.VITE_API_URL),
      },
      plugins: [react()],
      server: {
        port: parseInt(env.VITE_APP_PORT),
      }
    }
  }
})
