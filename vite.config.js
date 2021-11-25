import zip from 'rollup-plugin-zip'
import copy from 'rollup-plugin-copy2'
import { defineConfig } from 'vite'

module.exports = defineConfig({
    build: {
        rollupOptions: {
            plugins: [
                zip({
                    file: '../dist-zipped/project.zip'
                }),
            ],

        }
    }
})

