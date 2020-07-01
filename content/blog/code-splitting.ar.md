---
title: تقسيم الكود Code Splitting سهل جداً باستخدام Reactjs؟
image: /images/blog/wood-splitting.jpg
mediumURL: https://medium.com/@algfry12/how-much-easy-code-splitting-is-on-reactjs-d94c30e9bec2
drfat: true
---

يعتبر Reactjs هيكل قوي في برمجة الواجهات, والي تجعل من برمجة وتطوير الواقع اقل تعب ومجهود وتهئي لك الضروف لبناء تطبيق PWA والكثير من الميزات التي توفرها لك Reactjs مع Create React App او Nextjs او Gatsbyjs. وبما ان Reactjs تعبتر مكتبة مبنية بالجافاسكربت فهي تستخدم bundling او ادوات التحزيم
تقسيم الحزم او الكود (Code Splitting) مش عملية خاصة بمكتبة Reactjs تقدر تنفذها باي اطار جافاسربت او مكتبة او حتى بيور جافاسكربت. باستخدم اي اداة تحزيم مثل Webpack او Parceljs.

**دائما حطها ببالك لا تخلي الحزم تكبر لانه بتاخر تحميل الموقع**

![full train](../../src/images/blog/bundle.jpeg)

Why does we need code splitting and how much it’s important. If you want make your application thin and much more faster in run time we will need code splitting and how much your application speed and bundle size important code splitting is. JavaScript frameworks are really faster and make web development great than before. But there are new challenges on the right hand and more powerful in front-end on the other. Bundle size is challenge it’s really challenge imagine your application is train because it was created on JavaScript framework train is fast and every time we get new features we add new wagon and this wagon may have many travelers this happen many times on development and your very fast train becoming slow. Yeah very very slow. In this situation we need to solve this problem the problem of hug bundle. And the solution is splitting it. Let us try code splitting.

## Tasks = () =>

- Implement Code splitting in react 16.6 and newer versions.
- Implement Code splitting using [react-loadable](https://github.com/jamiebuilds/react-loadable) package.
- Create custom code splitting function.
- What’s behind code splitting.

## Requirements = basics of =>

- Webpack
- Reactjs

## React 16.6.0

is released on (October 23, 2018) with great feature. once of them is lazy HOC.

The `React.lazy` function lets you render a dynamic import as a regular component.

```jsx
const OtherComponent = React.lazy(() => import("./OtherComponent"))

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  )
}
```

React.lazy take a function as argument that call a dynamic import using of import() syntax. And get a default export of OtherComponent file and assign it to constant.

The dynamic import() syntax is a ECMAScript (JavaScript) proposal not currently part of the language standard. It is expected to be accepted in the near future.¹

With the example above we splitting code of OtherComponent and load it once used in our app. webpack bundling the application code as bundle.js and every time we import another component in run time it load it as chunck.js.

![](../../src/images/blog/1_bctcHqrGWjAZCjKZzZjZYg.png)

Some times loading chunk module of OtherComponent take time so to get better UX use loading indicator or any text tell user that our component is loading and let him or her waiting.

as React.lazy function call function return promise from import() React 16.6.0 give us a component that handle fallback of import() this component is React.Suspense

```jsx
const OtherComponent = React.lazy(() => import("./OtherComponent"))

function MyComponent() {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </React.Suspense>
    </div>
  )
}
```

Suspense _fallback_ is props accept component and Suspense component can contain many lazy component.

```jsx
const OtherComponent = React.lazy(() => import("./OtherComponent"))
const AnotherComponent = React.lazy(() => import("./AnotherComponent"))

function MyComponent() {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </React.Suspense>
    </div>
  )
}
```

Also loading lazy module may fail for example (for example, due to network failure) so it’s better to Wrap it with error boundaries. this is out our tasks.

we can import React.Suspense and React.lazy as import { lazy, Suspense } from 'react'; to use it directly instead of React.\* . ^\_^

## react-loadable package

react-loadable is HOC using for code splitting and server side rendering and many magic. react-loadable is better if we want to implement code splitting on server side rendering application and get the benefit of Search engine optimization.

```jsx
import React from "react"
import Loadable from "react-loadable"
import Loading from "./my-loading-component"

const LoadableComponent = Loadable({
  loader: () => import("./my-component"),
  loading: Loading,
})

export default class App extends React.Component {
  render() {
    return <LoadableComponent />
  }
}
```

## Create custom function

It’s better if you implement the existing things in your way this will allow you to understanding what is going behind and improving programming scales. This doesn’t mean you shouldn’t use any packages. Open-source community is great and increase the productivity of many Start-ups and this isn’t main topic here. and you can skip it to the next section.

We can use codeSplittingHoc()
like we did with React.lazy .

```jsx
import codeSplittingHoc from './file_of_codeSplittingHoc';
const ComponentName = codeSplittingHoc(() => import('./component_file')
function App() {
    return <ComponentName />;
}
```

## What’s behind

The better understanding of code splitting and how it done may help you avoid one of the main issue on network the waterfall issue. But before goes and this issue we have to answer one question => In which level should we implement code splitting?

We have to main levels

- Component base level.
- Route level.

_Component base level_ is implemented before. that component load component module once we need code.

_Route level_ is somehow similar load module if route matched and this is quit and save way for code splitting but sometimes we need code splitting on Component base level to get more power of code splitting.

_Waterfall Issue_ look bundle.js and code splitting chunk image above you will say bundle.js and to chunk.js files and this raise waterfall issue. in brief waterfall is loading many module one by one and to solve this we use webpack or parclejs and with misunderstanding of code splitting we got the same.

## References =>

- [React Docs](https://reactjs.org/docs/code-splitting.html#import)
