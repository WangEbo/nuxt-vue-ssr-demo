
export const getLocation = (cb)=> {
  if(!process.client){//需添加实在客户端的判断才能使用window
    return
  }
  let navigator = window.navigator || global.navigator;
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(cb);
  }else{
    alert("浏览器不支持地理定位。");
  }
}