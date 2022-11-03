import HikeModel from './hikeModel.js';
import HikeView from './hikeView.js';


export default class HikeController {
  constructor(parentId) {
    //get the element with id same as "parentId"
    this.parentElement = document.getElementById(parentId);
    //call HikeModel Class and assign it as this.hikeModel
    this.hikeModel = new HikeModel();
    //call HikesView Class and assign it as this.hikeView
    this.hikeView = new HikeView(parentId);
  }
  //This method will render the data from the hikelist array
  showHikeList() {
    //call getAllHikes method from HikeModel Class
    const hikeList = this.hikeModel.getAllHikes();
    //call renderHikeList method from HikeView Class, parameters are the parentID = "hikes", and hikeList which is the
    // array of the data for hikes
    this.hikeView.renderHikeList(this.parentElement, hikeList);
    //call addHikeListener
    this.addHikeListener();
  }
  
  addHikeListener() {
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}