const kotlinCompiler = require('@jetbrains/kotlinc-js-api');
 
kotlinCompiler
  .compile({
    output: './build/app.js',
    sources: [__dirname + '/src'],
    sourceMaps: true,
    moduleKind: 'commonjs',
    libraries: [
      'node_modules/kotlin/kotlin.meta.js',
    ]
  })
  .then(() => console.log('Compilation successful\n'));