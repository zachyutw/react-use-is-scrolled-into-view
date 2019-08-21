# react-use-is-scrolled-into-view

> React hook which Check virturel dom enters the user's view.

[![NPM](https://img.shields.io/npm/v/react-use-is-scrolled-into-view.svg)](https://www.npmjs.com/package/react-use-is-scrolled-into-view) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [Usage](#usage)
  - [`Individual components`](#inview)
- [FAQ](#faq)
- [Thanks](#thanks)
- [Contributing](#contributing)
- [License](#license)

## Install

```bash
# Yarn
yarn add react-use-is-scrolled-into-view

# NPM
npm install --save react-use-is-scrolled-into-view
```

## Quick Start

```jsx
//
// Individual components
//
import {useRef} from 'react';
import useIsScrolledIntoView from 'react-use-is-scrolled-into-view';
const Example = () => {
    const ref = useRef(null);
    const isIntoView = useIsScrolledIntoView(ref);
    return (
        <div ref={ref}  data-inview={isIntoView}>
         
        </div>
    );
};
```

## Usage

NOTE: React hooks require `react` and `react-dom` version `16.8.0` or higher.

## Related projects

## Thanks
This repo was setup with the help of the excellent [`create-react-library`](https://www.npmjs.com/package/create-react-library) and [`redux-react-hook`](https://github.com/facebookincubator/redux-react-hook/blob/master/README.md).

## Contributing
Zach Yu zachyu.tw@gmail.com

## License

MIT 