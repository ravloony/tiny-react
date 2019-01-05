let logger = {
  log: () => {},
  debug: () => {},
  error: () => {},
  group: () => {},
  groupEnd: () => {}
}

/// #if process.env.NODE_ENV !== 'production'
  console.log('Looks like we are in development mode!');
  logger = console;
/// #endif

function forward(target) {
  return (...args) => {
    logger[target](...args);
  };
}

export let log = forward('log');
export let debug = forward('debug');
export let error = forward('error');
export let group = forward('group');
export let groupEnd = forward('groupEnd');

