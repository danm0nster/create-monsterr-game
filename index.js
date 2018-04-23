#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

/** Helper that allows us to require (statically) a js file as a string */
const requireAsString = function (path) {
  const fileName = require.resolve(path)
  return fs.readFileSync(fileName, 'utf8')
}

const packageJsonFile = requireAsString('./files/package.json')
const clientJsFile = requireAsString('./files/client.js')
const serverJsFile = requireAsString('./files/server.js')
const eslintrcJsonFile = requireAsString('./files/.eslintrc.json')
const gitignoreFile = requireAsString('./files/gitignore')

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

// => Create directory
fs.mkdirSync(gameName)

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

// => Create sample files & folders
fs.writeFileSync(path.join(gameName, 'client.js'), clientJsFile)
fs.writeFileSync(path.join(gameName, 'server.js'), serverJsFile)
fs.mkdirSync(path.join(gameName, 'assets'))
fs.mkdirSync(path.join(gameName, 'src'))