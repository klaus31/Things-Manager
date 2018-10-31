class EscapeActionStack {
  constructor() {
    this._stack = [];
  }

  push(action) {
    this._stack.push(action);
  }

  executeUpper() {
    let upper = this._stack.pop();
    if (upper) upper();
  }

  pop() {
    this._stack.pop();
  }
}

export let escapeActionStack = new EscapeActionStack();