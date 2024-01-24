# typescript_exercises

Typescript exercises from leetcode

## Setup

### Initialize your project:

Open a terminal and navigate to the directory where you want to create your project. Then, run the following command to initialize a new npm project:

```
npm init -y
```

This will generate a package.json file with default values.

### Install TypeScript:

```
npm install -g typescript@4.1.2

tsc --version
```

### Create a TypeScript configuration file:

Create a tsconfig.json file in your project's root directory. This file specifies the TypeScript compiler options. You can create it manually or use the following command to generate a basic configuration:

```
npx tsc --init
```

### Install ts-node

```
npm install --save-dev ts-node
```

### Install testing dependencies (if needed):

```
npm install --save-dev jest ts-jest @types/jest
```

### Update tsconfig.json for testing and for es6 (if needed):

```
{
  "compilerOptions": {
    "types": ["jest"]
    target: "es6"
  }
}
```

### Create a script to run and test your TypeScript file:

In your package.json file, add a script to run your TypeScript file using the ts-node package (which allows you to execute TypeScript files directly):

```
"scripts": {
  "start": "ts-node app.ts"
  "test": "jest --watchAll"
}
```

### Run your TypeScript file:

```
npm start
```

This will use ts-node to execute your TypeScript file.

### Run tests (if applicable):

```
npm test
```
