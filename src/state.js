let state_ = {};

let reducers_ = [];

export function initializeState(state, reducers) {
  state_ = state;
}

function setState(newState) {
  state_ = newState;
}

function dispatch(action) {
  for (let reducer of reducers) {
    _state = reducer(state, action);
  }
}

export function combineReducers(reducers) {
  return (state, action) => {
    const nextState = { ...state };
    for (const [key, value] of Object.entries(reducers)) {
      nextState[key] = value(state[key], action);
    }
    return nextState;
  }
}

export function connect(map = state => state) {
  return (component) => {
    return props => {
      const props_ = { ...props, ...map(state_, props), dispatch: dispatch };
      return component(props_);
    }
  }
}
