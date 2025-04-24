#!/usr/bin/env node

import { Command } from 'commander'
import { execa } from 'execa'

const program = new Command()

program
  .command('help')
  .description('Display available commands help')
  .action(() => {
    console.log(`
      Available commands:
      - help : Display help for available commands
      - eslint [options] : Run ESLint with the provided options
    `)
  })

program
  .command('eslint <files...>')
  .allowUnknownOption()
  .description('Run ESLint in strict version with the specified options')
  .action(async (files) => {
    try {
      const eslintArguments = [...files]

      const { stderr, stdout } = await execa('npx', [
        'eslint',
        ...eslintArguments,
      ])
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

      const { stderr, stdout } = await execa('npx', [
        'eslint',
        '--config',
        './configs/light.config.js',
        ...eslintArguments,
      ])
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

      const { stderr, stdout } = await execa('npx', [
        'prettier',
        ...prettierArguments,
      ])
      console.log(stdout)

      if (stderr) {
        console.error(stderr)
      }
    } catch (error) {
      console.error('Error running Prettier:', error)
    }
  })

program.parse(process.argv)
