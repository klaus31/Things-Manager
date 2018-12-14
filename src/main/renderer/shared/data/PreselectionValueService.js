import {APP} from './../../config/begin-config.js';

class PreselectionValueService {

  constructor() {
    this._cache = {};
  }

  valueOf(uuid) {
    if (!this._cache[uuid]) {
      APP.project.categories.forEach(category => category.preselections.forEach(preselection => preselection.options.forEach(option => this._cache[option.uuid] = option.value)));
    }
    return this._cache[uuid];
  }

  findFirstOf(type) {
    let uuid = type.startsWith('preselection') ? type.substr('preselection-'.length) : type;
    APP.project.categories.forEach(category => category.preselections.forEach(preselection => {
      if (preselection.uuid === uuid) {
        return preselection.options[0].uuid;}
    }));
    return null;
  }
}

export let preselectionValueService = new PreselectionValueService();