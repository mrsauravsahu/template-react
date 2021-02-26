const esbuild = require('esbuild');

console.log('starting esbuild build...');

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outfile: 'esbuild-bundle/dist/index.js',
    minify: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    define: {
      'process.env.NODE_ENV': '"production"',
    },
  })
  .then(() => { console.log('done'); })
  .catch(console.error);
