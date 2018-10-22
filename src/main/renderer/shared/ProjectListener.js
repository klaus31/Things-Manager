export class ProjectListener {

    constructor() {
        this.funcs = {};
    }

    on(eventName, func) {
        this.funcs[eventName] = this.funcs[eventName] || [];
        this.funcs[eventName].push(func);
    }

    fire(eventName, data) {
        if(!this.funcs[eventName]) throw 'noone is listening to ' + eventName;
        this.funcs[eventName].forEach(func => func(data));
    }
}

const singleton = new ProjectListener();
export {singleton as projectListener};