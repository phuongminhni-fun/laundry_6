const types=[{type:'mud',name:'Bùn đất / dầu mỡ',omo:'blue',label:'OMO Xanh',detail:'Đánh bay vết bẩn cứng đầu'},{type:'color',name:'Quần áo màu / đồ thể thao',omo:'pink',label:'OMO Hồng',detail:'Giữ màu & ngát hương'}];
export function createOrder(customer){const req=types[Math.floor(Math.random()*types.length)];return {...req,id:customer.id,customer,createdAt:Date.now(),wrongOmo:false}}
