# html-docx-js-typescript

[![NPM version][npm-image]][npm-url]

> Rewrite [html-docx-js](https://www.npmjs.com/package/html-docx-js) with Typescript.

Convert HTML documents to docx format.

## Installing

```
npm install html-docx-js-typescript-papersize-thenn --save-dev
```

## Usage

Support node.js and browser enviroment, including vue/react/angular.

#### Vue.js usage demo:

```js
import { asBlob } from 'html-docx-js-typescript-papersize-thenn'
// if you want to save the docx file, you need import 'file-saver'
import { saveAs } from 'file-saver'

const htmlString = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>`

export default {
  methods: {
    saveDocx() {
      asBlob(htmlString).then(data => {
        saveAs(data, 'file.docx') // save as docx file
      }) // asBlob() return Promise<Blob|Buffer>
    },
  },
}
```

And you can set options including margins and orientation.

```js
const data = await asBlob(htmlString, { orientation: 'landscape', margins: { top: 100 } })
```

#### literal type widen issue

If you use this package in a Typescript file and declare the options to an independent `Object` like:
``` js
import { asBlob } from 'html-docx-js-typescript-papersize-thenn'
const opt = {
  margin: {
    top: 100
  },
  orientation: 'landscape' // type error: because typescript automatically widen this type to 'string' but not 'Orient' - 'string literal type',
  paperWidth: 11905.511, //paper size word * 1440 ( width A4 = 11905.511 )
  paperHeight: 16837.795 //paper size word * 1440 ( height A4 = 16837.795 )
}
await asBlob(html, opt)
```
You can use `as const` to avoid type widening.
``` js
const opt = {
  margin: {
    top: 100
  },
  orientation: 'landscape' as const
}
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/html-docx-js-typescript
[npm-url]: https://npmjs.com/package/html-docx-js-typescript
