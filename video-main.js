import { videoLibrary } from "./videoLibrary.js"

for(var i = 0; i < videoLibrary.length; i++){
    document.querySelector(".video-box").innerHTML += `
            <div class="video">
                <div class="videoMiniPhoto">
                    <a href="videoPage.html" target="_blank" onclick="bas(${videoLibrary[Number(i)].id})">
                        <img src="${videoLibrary[Number(i)].videoPhoto}"
                            alt="">
                        <div class="viewCount">
                            <p>${videoLibrary[i].videoTime}</p>
                        </div>
                    </a>
                </div>
                <div class="video-content">
                    <div class="chanel-photo">
                        <a href="${videoLibrary[i].date}">
                            <img src="${videoLibrary[i].chanelPhoto}"
                                title="${videoLibrary[i].chanelName}">
                        </a>
                    </div>
                    <a href="videoPage.html" onclick="bas(${videoLibrary[Number(i)].id})">
                        <div class="video-info">
                            <h2 title="${videoLibrary[i].videoName}">${videoLibrary[i].videoName}</h2>
                            <div class="video-content-info">
                                <div class="chanel-name">
                                    <p title="${videoLibrary[i].chanelName}">${videoLibrary[i].chanelName}</p>
                                </div>
                                <div class="videos-info">
                                    <p class="video-count">${videoLibrary[i].viewCount} görüntüleme</p>
                                    <span>•</span>
                                    <p class="video-date">${videoLibrary[i].date}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
`;
}
