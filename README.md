# Tempered - ESLint and Prettier Configuration

**Tempered** is an ESLint and Prettier configuration package designed for JS/TS projects. It provides a strict, consistent, and optimized setup for linting and formatting your code.

## Features

- ✅ **Strict ESLint configuration** for consistency and best practices  
- 🎯 **Prettier integration** for automatic code formatting  
- 🧩 Plugin-based setup with community-adopted ESLint plugins  
- 📦 Handles import sorting, unused code cleanup, and more  
- ⚙️ Dual mode: use via CLI or as an extendable ESLint config  


## Installation

Install **Tempered** as a development dependency:

```bash
npm install --save-dev tempered
```
Note: For config extension, you must also install the required peer dependencies (see below).

## 🔧 Usage

### 🧱 Mode 1: CLI (key-in-hand)

Run directly via `npx` using the built-in commands:

```bash
npx tempered help
npx tempered eslint .
npx tempered eslint:light src/
npx tempered prettier --write .
```

### 🧩 Mode 2: ESLint config extension

Extend one of the Tempered configs in your `eslint.config.js`:

**Strict config (recommended):**

```js
import strict from '@foundry/tempered/configs/strict.config.js'

export default strict
```

OR 

**Light config (recommended):**

```js
import strict from '@foundry/tempered/configs/light.config.js'

export default strict
```

## Required peerDependencies
If you're using Tempered as a config extension (mode 2), make sure to install the following peer dependencies in your project:
```bash
npm install --save-dev \
eslint \
prettier \
@eslint/js \
typescript-eslint \
eslint-plugin-import \
eslint-plugin-prettier \
eslint-plugin-perfectionist \
eslint-plugin-simple-import-sort \
eslint-plugin-sonarjs \
eslint-plugin-unicorn \
eslint-plugin-unused-imports \
globals
```
Or install all at once via:

```bash
npm install --save-dev @foundry/tempered @eslint/js eslint prettier typescript-eslint eslint-plugin-import eslint-plugin-prettier eslint-plugin-perfectionist eslint-plugin-simple-import-sort eslint-plugin-sonarjs eslint-plugin-unicorn eslint-plugin-unused-imports globals
```
