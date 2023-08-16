import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import shell from 'rollup-plugin-shell';
import fs from 'fs';

import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
      },
      {
        file: packageJson.module,
        format: 'esm',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      terser(),
    ],
  },
  // {
  //   input: './dist/esm/index.d.ts',
  //   output: './dist/esm/styles.d.ts',
  //   plugins: [
  //     shell({
  //       commands: ['echo "" > ./dist/esm/styles.d.ts'],
  //     }),
  //   ],
  // },
  // {
  //   input: 'dist/esm/index.d.ts',
  //   output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  //   plugins: [
  //     dts(),
  //   ],
  // },
];
