// https://souporserious.com/bundling-typescript-with-esbuild-for-npm/
const { build } = require('esbuild');
const path = require('path');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { clean } = require('esbuild-plugin-clean');
const { replace } = require('esbuild-plugin-replace');
const pkg = require(path.join(process.cwd(), './package.json'));
const bfs = require('@jswork/banner-defaults');

// import packages
require('@jswork/next-nice-comments');

const shared = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  platform: 'node',
  sourcemap: true,
  target: 'node14',
  banner: {
    js: nx.niceComments(bfs(pkg), 'js'),
  },
  plugins: [
    clean({
      patterns: ['./dist/*'],
    }),
    nodeExternalsPlugin(),
    replace({
      'export default ': 'export = ',
      '__VERSION__': pkg.version,
    }),
  ],
};

// build cjs + esm
build({ ...shared, outfile: 'dist/index.cjs.js' });
build({ ...shared, outfile: 'dist/index.esm.js', format: 'esm' });
