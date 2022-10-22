import HikeController from './hikeController.js';

const getController = new HikeController('hikes');
window.addEventListener('load', () => {
  getController.showHikeList();
});