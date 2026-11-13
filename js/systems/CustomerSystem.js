import {CONFIG} from '../config.js';import {state} from '../state.js';
const pool=['grandma','office','student','vip'];let nextId=1;
export function spawnCustomer(){if(state.customers.length>=CONFIG.maxCustomers)return null;const vip=state.currentChapter>1&&Math.random()<.25;const key=vip?'vip':pool[Math.floor(Math.random()*3)];const c={id:nextId++,key,name:({grandma:'Cô Mai',office:'Chị Linh',student:'Bạn An',vip:'Khách VIP'})[key],vip,patience:100,maxPatience:100};state.customers.push(c);return c}
export function tickCustomers(dt){const cfg=CONFIG.chapters[state.currentChapter-1];for(let i=state.customers.length-1;i>=0;i--){const c=state.customers[i];c.patience-=100/(cfg.patience*(c.vip?0.75:1))*dt;if(c.patience<=0){state.customers.splice(i,1);state.missed++}}}
