import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

let _infos = [];

class YelpStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECIEVE_ALL_INFOS':
          _infos = action.payload.infos;
          this.emit('CHANGE');
          break;

      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAllInfos() {
    return _infos;
  }
}

export default new YelpStore();
