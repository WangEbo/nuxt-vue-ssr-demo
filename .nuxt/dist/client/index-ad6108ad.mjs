import{S as m,a as g}from"./swiper.min-df252611.mjs";import{_ as b,e as t,r,a as o,d as s,p as w,w as i,F as d,q as v,o as n,b as f,c as h,n as S}from"./bootstrap-6dc04aae.mjs";const j={components:{Swiper:m,SwiperSlide:g},setup(){let e=t([]),a=t([]);return setTimeout(()=>{e.value=[{url:"/assets/imgs/bed/bed (1).jpg"},{url:"/assets/imgs/bed/bed (2).jpg"},{url:"/assets/imgs/bed/bed (3).jpg"}],a.value=[{url:"/assets/imgs/bed/bed (1).jpg"},{url:"/assets/imgs/bed/bed (2).jpg"},{url:"/assets/imgs/bed/bed (3).jpg"}]},500),{bannerList:e,newGoodsList:a}}},k=s("header",null," \u4E3B\u9875 ",-1),x={class:"main-content"},y={class:"banner"},C=v(" \u5434\u5706\u5706\u662F\u4E2A\u732A, \u662F\u738B\u535A\u4E66\u552F\u4E00\u7684\u732A "),B=s("div",{class:"new-good-preview"},null,-1);function L(e,a,$,l,N,V){const p=r("swiper-slide"),c=r("swiper");return n(),o(d,null,[k,s("div",x,[s("div",y,[w(c,{modules:e.modules,navigation:"",scrollbar:{draggable:!0},onSwiper:e.onSwiper,onSlideChange:e.onSlideChange},{default:i(()=>[(n(!0),o(d,null,f(l.bannerList,(u,_)=>(n(),h(p,{key:_},{default:i(()=>[s("div",{class:"banner-item",style:S({backgroundImage:`url('${u.url}')`})},null,4)]),_:2},1024))),128))]),_:1},8,["modules","onSwiper","onSlideChange"]),C]),B])],64)}var q=b(j,[["render",L]]);export{q as default};
