#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

/** Helper that allows us to require (statically) a js file as a string */
const requireAsString = function(path) {
  const fileName = require.resolve(path)
  return fs.readFileSync(fileName, 'utf8')
}

// Base files
const packageJsonFile = requireAsString('./files/package.json')
const clientJsFile = requireAsString('./files/client.js')
const adminClientJsFile = requireAsString('./files/admin-client.js')
const adminClientHtmlFile = requireAsString('./files/src/admin-client.html')
const adminClientCssFile = requireAsString('./files/src/admin-client.css')
const serverJsFile = requireAsString('./files/server.js')
const eslintrcJsonFile = requireAsString('./files/.eslintrc.json')
const postcssrcFile = requireAsString('./files/.postcssrc')
const babelrcFile = requireAsString('./files/.babelrc')
const gitignoreFile = requireAsString('./files/gitignore')
// Stages
const stage1ClientFile = requireAsString('./files/src/stages/stage1/client.js')
const stage1ServerFile = requireAsString('./files/src/stages/stage1/server.js')
const stage1HtmlFile = requireAsString('./files/src/stages/stage1/stage1.html')
const stage1CssFile = requireAsString('./files/src/stages/stage1/stage1.css')

// First we get a name for the game (directory)
const gameName = process.argv[2]

// User didn't provide a name
if (!gameName) {
  console.log('You have to provide a name for the game.')
  console.log('Example: create-monsterr-game my-game')
  process.exit(-1)
}

// A file/dir already exists with the provided name
if (fs.existsSync(gameName)) {
  console.log('A file or directory already exists by that name.')
  process.exit(-1)
}

/** SCRIPT */

// => Create directories
fs.mkdirSync(gameName)
fs.mkdirSync(path.join(gameName, 'assets'))
fs.mkdirSync(path.join(gameName, 'src'))
fs.mkdirSync(path.join(gameName, 'src', 'stages'))
fs.mkdirSync(path.join(gameName, 'src', 'stages', 'stage1'))

// => Create package.json & install dependencies
packageJsonFile.name = gameName
fs.writeFileSync(path.join(gameName, 'package.json'), packageJsonFile)
child_process.execSync('npm install', {
  cwd: gameName,
  stdio: [0, 1, 2]
})

// => Create config files
fs.writeFileSync(path.join(gameName, '.eslintrc.json'), eslintrcJsonFile)
fs.writeFileSync(path.join(gameName, '.gitignore'), gitignoreFile)
fs.writeFileSync(path.join(gameName, '.babelrc'), babelrcFile)
fs.writeFileSync(path.join(gameName, '.postcssrc'), postcssrcFile)

// => Create sample files
fs.writeFileSync(path.join(gameName, 'client.js'), clientJsFile)
fs.writeFileSync(path.join(gameName, 'admin-client.js'), adminClientJsFile)
fs.writeFileSync(
  path.join(gameName, 'src', 'admin-client.html'),
  adminClientHtmlFile
)
fs.writeFileSync(
  path.join(gameName, 'src', 'admin-client.css'),
  adminClientCssFile
)
fs.writeFileSync(path.join(gameName, 'server.js'), serverJsFile)
fs.writeFileSync(
  path.join(gameName, 'src', 'stages', 'stage1', 'client.js'),
  stage1ClientFile
)
fs.writeFileSync(
  path.join(gameName, 'src', 'stages', 'stage1', 'server.js'),
  stage1ServerFile
)
fs.writeFileSync(
  path.join(gameName, 'src', 'stages', 'stage1', 'stage1.html'),
  stage1HtmlFile
)
fs.writeFileSync(
  path.join(gameName, 'src', 'stages', 'stage1', 'stage1.css'),
  stage1CssFile
)
