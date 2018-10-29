import {Photo} from "../shared/data/model/Photo";
import {APP} from './../config/begin-config.js';

class PhotoAddedEventHandler {

  constructor() {
  }

  addToProject(photoAddedEvent) {
    let thing = APP.project.getThingFromUuid(photoAddedEvent.uuid);
    if (thing && photoAddedEvent.filePath) {
      thing.photos.push(new Photo(photoAddedEvent.filePath, photoAddedEvent.internFileName));
    }
  }
}

const singleton = new PhotoAddedEventHandler();
export {singleton as photoAddedEventHandler};
