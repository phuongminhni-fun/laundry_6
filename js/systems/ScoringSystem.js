export function scoreOrder(order,combo){const base=100,correct=order.wrongOmo?0:50,tip=order.customer.patience>70?50:0,comboBonus=combo>=5?100:combo>=3?50:combo>=2?20:0;return base+correct+tip+comboBonus}
export function starsFor(score,targets){return score>=targets[2]?3:score>=targets[1]?2:score>=targets[0]?1:0}
