export const STEPS=['wash','dry','fold','deliver'];export const STEP_LABEL={wash:'Giặt',dry:'Sấy',fold:'Gấp',deliver:'Giao khách'};
export function durationFor(step,order,boost=false){if(boost)return 0.7;if(step==='wash')return order.wrongOmo?5:3;if(step==='dry')return 2.5;if(step==='fold')return 2;return 0}
