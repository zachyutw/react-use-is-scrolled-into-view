# react-use-is-scrolled-into-view

> React hook which Check virturel dom enters the user's view.

[![NPM](https://img.shields.io/npm/v/react-use-is-scrolled-into-view.svg)](https://www.npmjs.com/package/react-use-is-scrolled-into-view) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [Usage](#usage)
  - [`StoreContext`](#storecontext)
  - [`useMappedState(mapState)`](#usemappedstatemapstate)
  - [`useDispatch()`](#usedispatch)
- [Example](#example)
- [FAQ](#faq)
- [Related projects](#related-projects)
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
// Bootstrap your app
//
import {StoreContext} from 'redux-react-hook';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root'),
);
```

```jsx
//
// Individual components
//
import {useDispatch, useMappedState} from 'redux-react-hook';

export function DeleteButton({index}) {
  // Declare your memoized mapState function
  const mapState = useCallback(
    state => ({
      canDelete: state.todos[index].canDelete,
      name: state.todos[index].name,
    }),
    [index],
  );

  // Get data from and subscribe to the store
  const {canDelete, name} = useMappedState(mapState);

  // Create actions
  const dispatch = useDispatch();
  const deleteTodo = useCallback(
    () =>
      dispatch({
        type: 'delete todo',
        index,
      }),
    [index],
  );

  return (
    <button disabled={!canDelete} onClick={deleteTodo}>
      Delete {name}
    </button>
  );
}
```

## Usage

NOTE: React hooks require `react` and `react-dom` version `16.8.0` or higher.

## Related projects

## Thanks

Special thanks to @sawyerhood and @sophiebits for writing most of the initial implementation! This repo was setup with the help of the excellent [`create-react-library`](https://www.npmjs.com/package/create-react-library).

## Contributing


## License

MIT 