import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const localStorageKey = 'videoplayer-current-time';
const savedTime = localStorage.getItem(localStorageKey);

const saveCurrentTime = () => {
  player.getCurrentTime().then(time => {
    localStorage.setItem(localStorageKey, time);
  });
};

if (savedTime) {
  player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(saveCurrentTime, 1000));
