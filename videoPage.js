import { videoLibrary } from "./videoLibrary.js";

var id = Number(localStorage.getItem("videoId")) - 1;

var chanelName = videoLibrary[Number(id)].chanelName;
var chanelPhoto = videoLibrary[Number(id)].chanelPhoto;
var videoName = videoLibrary[Number(id)].videoName;
var videoPhoto = videoLibrary[Number(id)].videoPhoto;
var date = videoLibrary[Number(id)].date;
var videoType = videoLibrary[Number(id)].videoType;
var videoTime = videoLibrary[Number(id)].videoTime;
var videoLink = videoLibrary[Number(id)].videoLink;
var viewCount = videoLibrary[Number(id)].viewCount;



document.querySelector(".currentVideo").innerHTML = videoLink; 
document.querySelector(".videoHeaderText").innerHTML = videoName; 
document.querySelector(".chanelPhoto").innerHTML = `<img src="${chanelPhoto}">`;
document.querySelector(".chanelNameText").innerHTML = chanelName;

document.title = videoName;
