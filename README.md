# my-simple-canvas

### Usage

<img src="https://user-images.githubusercontent.com/51523573/125589962-488c4ca8-3f83-45a0-acc2-c6021d2b48e5.gif">

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
$ yarn add react-simple-modal
```

#### with npm

```js
$ npm install react-simple-modal
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
| `width`  | `number` | `500`   | HTML `<canvas>` Width Attribute  |
| `height` | `number` | `600`   | HTML `<canvas>` Height Attribute |

### SimpleToolbar

| Name           | Type                 | Default                                                                         | Description                                    |
| -------------- | -------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------- |
| `useThickness` | `boolean`            | `true`                                                                          | Whether to Use Thickness Option in the Toolbar |
| `minTickness`  | `number`             | `1`                                                                             | Minimum Thickness That Can Be Set              |
| `maxTickness`  | `number`             | `5`                                                                             | Maximum Thickness That Can Be Set              |
| `useColor`     | `boolean`            | `true`                                                                          | Whether to Use Color Palette in the Toolbar    |
| `colors`       | `string or string[]` | `["#f03434", "#f9690e", "#ffff7e", "#29f1c3", "#22a7f0", "#9f5afd", "#8c14fc"]` | Colors of Palette                              |
