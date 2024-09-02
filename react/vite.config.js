import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
/** @type {import('vite').UserConfig} */
// https://vitejs.dev/{config/
const env = { ...process.env,...process.cwd() };

export default defineConfig({
        plugins: [react()],
        server: {

            proxy: {
                '/api': {
                    target: 'http://localhost:12382/api/',
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                },
                '/local': {
                    target: 'http://localhost:3000/',
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                },
                '/paleo/api': {
                    target: 'https://paleobiodb.org/data1.2/',
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },
        define: {
            __APP_ENV__: JSON.stringify(env)
        },
    })
