import axios from 'axios';
// import qs from 'qs';
// axios.default.baseURL='http://127.0.0.1:3000';两个相等
let req=axios.create({
    baseURL:'http://192.168.2.109:3000',
    timeout:10000 //ms一般为8-12毫秒
})

export function getSeller(){
    return req.get('/api/seller')
}

export function getGoods(){
    return req.get('/api/goods')
}