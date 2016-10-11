import AppDispatcher from '../AppDispatcher';

const ServerAction = {
  recieveAllInfos(infos) {
    AppDispatcher.dispatch({
      type: 'RECIEVE_ALL_INFOS',
      payload: { infos }
    })
  },
  
}

export default ServerAction;
