# my-simple-canvas

### Usage

You’ll need to install React to use `SimpleToolbar`.

If you only use `SimpleCanvas`, React is not necessary.

### Contents

- [Install](#install)
- [Demo](#demo)
- [Examples](#examples)
- [Props](#props)
- [Configuration](#configuration)

## Install

#### with yarn

```js
$ yarn add react-simple-modal-provider
```

#### with npm

```js
$ npm install react-simple-modal-provider
```

## Examples

```js
import React from "react";
import { SimpleToolbar, SimpleCanvas } from "./src";

export default function App() {
  return (
    <>
      <SimpleToolbar />
      <SimpleCanvas />
    </>
  );
}
```

## Props

### SimpleCanvas

| Name     | Type     | Default | Description                      |
| -------- | -------- | ------- | -------------------------------- |
| `width`  | `number` | `500`   | HTML `<canvas>` width Attribute  |
| `height` | `number` | `600`   | HTML `<canvas>` height Attribute |

### SimpleToolbar

| Name           | Type                 | Default                                                                         | Description                                          |
| -------------- | -------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `useThickness` | `boolean`            | `true`                                                                          | Whether to use thickness range input in the toolbar. |
| `minTickness`  | `number`             | `1`                                                                             | Minimum thickness that can be set                    |
| `maxTickness`  | `number`             | `5`                                                                             | Maximum thickness that can be set                    |
| `useColor`     | `boolean`            | `true`                                                                          | Whether to use color palette in the toolbar.         |
| `colors`       | `string or string[]` | `["#f03434", "#f9690e", "#ffff7e", "#29f1c3", "#22a7f0", "#9f5afd", "#8c14fc"]` | Colors of palette                                    |
