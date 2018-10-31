import {projectListener} from "../shared/ProjectListener.js";

document.onkeydown = checkKey;

function checkKey(e) {
  switch (e.key) {
    case 'Escape':
      projectListener.fire('key-event-esc');
      break;
  }
}