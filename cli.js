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
  .description('Run ESLint with the specified options')
  .action(async (files, _options) => {
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

program.parse(process.argv)
