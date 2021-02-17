import sucrase from '@rollup/plugin-sucrase';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';

/** @type {import('rollup').RollupOptions} */
export const rollupOptions = {
    input: 'src/index.jsx',
    output: {
        format: 'iife',
        dir: 'bundle/dist',
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        postcss(),
        resolve({
            extensions: ['.js', '.ts', '.jsx', '.tsx'],
            browser: true
        }),
        sucrase({
            exclude: ['node_modules/**'],
            transforms: ['typescript', 'jsx']
        }),
        copy({
            targets: [
                {
                    src: 'public/*',
                    dest: 'bundle'
                }
            ]
        }),
        commonjs(),
    ]
};

export default rollupOptions;