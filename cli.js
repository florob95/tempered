#!/usr/bin/env node

import { Command } from 'commander'
import { execa } from 'execa'
import path from 'node:path'

const program = new Command()

program
  .command('help')
  .description('Display available commands help')
  .action(() => {
    console.log(`
      Available commands:
      - help : Display help for available commands
      - eslint [options] : Run ESLint with the provided options
      - eslint:light [options] : Run ESLint with the provided options on the light conf
      - prettier [options] : Run prettier with the provided options
    `)
  })

program
  .command('eslint <files...>')
  .allowUnknownOption()
  .description('Run ESLint in strict version with the specified options')
  .action(async (files) => {
    try {
      const eslintArguments = [...files]

      const { stderr, stdout } = await execa(
        path.resolve(
          process.cwd(),
          'node_modules',
          'tempered',
          'node_modules',
          '.bin',
          process.platform === 'win32' ? 'eslint.cmd' : 'eslint',
        ),
        [
          '--config',
          './node_modules/tempered/configs/strict.config.js',
          ...eslintArguments,
        ],
      )
      console.log(stdout)

      if (stderr) {
        console.error(stderr)
      }
    } catch (error) {
      console.error('Error running ESLint:', error)
    }
  })

program
  .command('eslint:light <files...>')
  .allowUnknownOption()
  .description('Run ESLint in light version with the specified options')
  .action(async (files) => {
    try {
      const eslintArguments = [...files]

      const { stderr, stdout } = await execa(
        path.resolve(
          process.cwd(),
          'node_modules',
          'tempered',
          'node_modules',
          '.bin',
          process.platform === 'win32' ? 'eslint.cmd' : 'eslint',
        ),
        [
          '--config',
          './node_modules/tempered/configs/light.config.js',
          ...eslintArguments,
        ],
      )
      console.log(stdout)

      if (stderr) {
        console.error(stderr)
      }
    } catch (error) {
      console.error('Error running ESLint:', error)
    }
  })

program
  .command('prettier <files...>')
  .allowUnknownOption()
  .description('Run Prettier with the specified options')
  .action(async (files) => {
    try {
      const prettierArguments = [...files]

      const { stderr, stdout } = await execa(
        path.resolve(
          process.cwd(),
          'node_modules',
          'tempered',
          'node_modules',
          '.bin',
          process.platform === 'win32' ? 'prettier.cmd' : 'prettier',
        ),
        ['--config', './node_modules/tempered/.prettierrc', ...prettierArguments],
      )
      console.log(stdout)

      if (stderr) {
        console.error(stderr)
      }
    } catch (error) {
      console.error('Error running Prettier:', error)
    }
  })

program.parse(process.argv)
