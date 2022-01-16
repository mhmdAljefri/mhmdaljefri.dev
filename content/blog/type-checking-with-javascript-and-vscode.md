---
title: Type checking with only JavaScript and VS code
image: /images/blog/punaise-1399423.jpg
drfat: false
---

# Type checking with only JavaScript and VS code

Static type checkers like Flow and TypeScript identify certain types of problems before you even run your code. They can also improve developer workflow by adding features like auto-completion. For this reason, we recommend using Flow or TypeScript instead of PropTypes for larger code bases. [React Doc](https://reactjs.org/docs/static-type-checking.html)

TypeScript is Great it's give you a lot of features over JavaScript, but in some situations, it can be exhausting. it’s not that easy to migrate a team from JavaScript to TypeScript especially when they’re not expert enough on TypeScript. But can we get the benefits of TypeScript with only JavaScript? Yes, we can.

Here I will show you how to get some benefits from using Typescript with only JavaScript and VS code.

## How To Type Checking in JavaScript?

VSCode has already a built-in typescript feature, and this can be implemented on plain JavaScript File.

To check Whole file, just add `// @ts-check` on the top of the file

```js
// @ts-check

;(() => {
  let acceptOnlyNumber = 09666

  acceptOnlyNumber = "text" //Type 'string' is not assignable to type 'number'

  console.log(acceptOnlyNumber)
})()
```

You will find type error when you hover over acceptOnlyNumber variable. Also you can ignore type checking with adding // @ts-ignore before the line

```js
// @ts-check

;(() => {
  let acceptOnlyNumberWithoutCheck = 123

  // @ts-ignore
  acceptOnlyNumberWithoutCheck = "no erros"

  console.log(acceptOnlyNumberWithoutCheck)
})()
```

As we have seen in previous examples types are inferred from assignments. but we can define types too.

## How To define types?

We can define and use types with [JSDocs](https://jsdoc.app/) comments.

As it defined in JSDoc website.
JSDoc 3 is an API documentation generator for JavaScript, similar to Javadoc or phpDocumentor. You add documentation comments directly to your source code, right alongside the code itself. The JSDoc tool will scan your source code and generate an HTML documentation website for you.

Example of adding types

```js
;(() => {
  /** @type {number | string} */
  let acceptOnlyNumberOrString = 09666

  acceptOnlyNumberOrString = true // Type 'boolean' is not assignable to type 'string | number'
  acceptOnlyNumberOrString = "text" // Ok, string is assignable

  /** @type {{ id: number, name: string, fullName?: string }} */
  const user = { id: 1, name: "Mohammed" } // types works

  user.fullName = "Mohammed Aljefri"

  console.log(acceptOnlyNumberOrString)
  console.log(JSON.stringify(user))
})()
```

this comment /\*_ @type {number | string} _/ add union types to variable acceptOnlyNumberOrString now this variable will accept number or string only

### Defining types

Also we can define types and reuse it along the app using JSDoc typedef

Example of defining types

```js
// example with @typedef
;(() => {
  /**
   * A number, or a string
   * @typedef {(number|string)} NumberLike
   */

  /** @type {NumberLike} */
  let acceptOnlyNumberOrString = 09666

  /** @type {NumberLike} */
  let another = "Just a test for defined types"

  console.log("another", another)
  console.log("acceptOnlyNumberOrString", acceptOnlyNumberOrString)
})()
```

You can check JSDoc to learn many more feature about it and start write more cleaner and documented code.

## Enable type checking for all Javascript files

You can enable typechecking based on project by adding `jsconfig.json` or `tsconfig.json` file inside the root folder and add `checkJS: true` to project compiler options.

`jsconfig.json`:

```json
{
  "compilerOptions": {
    "checkJs": true
  },
  "exclude": ["node_modules", "**/node_modules/*"]
}
```

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true
  },
  "exclude": ["node_modules", "**/node_modules/*"]
}
```

## Conclusion

This is an easy way to enhance your workflow and detect issues inside your editor. you can use it to help your team understand Typescript, or check if Typescript or Flow are fit enough before migrating code bases. it will not check on complier time and no changes will effect your code and tests. you can say it's less cost type checking solution. but it's not replacement for Typescript or Flow.

## References

- [Javascript Type checking vscode](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript)
- [JSDoc Documentation](https://jsdoc.app/)
