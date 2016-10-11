import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import Storage from '../Storage';

let _favorite = Storage.read('favoriteYelp') || [];

class FavoriteYelpStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'FAVORITE':
          let favorite = action.payload.business;
          _favorite.push(favorite)
          this.emit('CHANGE');
          break;
        case 'UNFAVORITE':
          let { business } = action.payload;
          let _name = business.name;
          let newFavoriteYelps = _favorite.filter(f => {
            return f.name !== _name;
          });
          _favorite = newFavoriteYelps;
          this.emit('CHANGE');
          break;
      }
    });

  this.on('CHANGE', () => {
    Storage.write('favoriteYelp', _favorite);
  });
}

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getFavoriteBusiness() {
    return _favorite;
  }
}

export default new FavoriteYelpStore();
