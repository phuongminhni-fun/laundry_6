import {state} from './state.js';
const KEY='LAUNDRY_RUSH_GITHUB_V1';
export function load(){try{const d=JSON.parse(localStorage.getItem(KEY)||'{}');for(const k of ['coins','diamonds','unlockedChapter','chapterStars','chapterLevels','chapterLevelStars'])if(d[k]!==undefined)state[k]=d[k]}catch(e){console.warn('Save data reset:',e)}}
export function save(){try{localStorage.setItem(KEY,JSON.stringify({coins:state.coins,diamonds:state.diamonds,unlockedChapter:state.unlockedChapter,chapterStars:state.chapterStars,chapterLevels:state.chapterLevels,chapterLevelStars:state.chapterLevelStars}))}catch(e){console.warn('Cannot save progress',e)}}
