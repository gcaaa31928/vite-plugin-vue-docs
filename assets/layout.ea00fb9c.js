import{c as a,F as t,f as e,o as n,a as s,t as o,w as c,b as d,r,k as l}from"./vendor.0823f3cd.js";const v={name:"CustomNav",props:{navs:Array}},i={class:"van-doc-nav",style:{top:"64px",bottom:"0"}},u={class:"van-doc-nav__title"};v.render=function(l,v,p,h,_,m){const f=r("router-link");return n(),a("div",i,[(n(!0),a(t,null,e(p.navs,((r,v)=>(n(),a("div",{class:"van-doc-nav__group",key:v},[s("div",u,o(r.title),1),(n(!0),a(t,null,e(r.data,(t=>(n(),a("div",{class:"van-doc-nav__item",key:t.path},[s(f,{class:{active:t.path===l.$route.path},to:t.path},{default:c((()=>[d(o(t.name),1)])),_:2},1032,["class","to"])])))),128))])))),128))])};const p={props:{header:Object}},h={class:"van-doc-header"},_={class:"van-doc-row"},m={class:"van-doc-header__top"},f=l('<ul class="van-doc-header__top-nav"><li class="van-doc-header__top-nav-item"><a class="van-doc-header__link" target="_blank" href="https://github.com/meetqy/vite-plugin-vue-docs"><img src="https://b.yzcdn.cn/vant/logo/github.svg" alt=""></a><a class="van-doc-header__link"> 更新日志 </a></li></ul>',1);p.render=function(t,e,d,l,v,i){const u=r("router-link");return n(),a("div",h,[s("div",_,[s("div",m,[s(u,{class:"van-doc-header__logo",to:"/docs"},{default:c((()=>[s("span",null,o(d.header.title),1)])),_:1}),f])])])};const b={components:{CustomNav:v,CustomHeader:p},props:{content:{type:Object,default:()=>{}},header:{type:Object,default:()=>{}}},data:()=>({nav:[]})},g={class:"van-doc"},k={class:"van-doc-container van-doc-row"},y={class:"van-doc-content van-doc-content--common"};b.render=function(t,e,o,c,d,l){const v=r("custom-header"),i=r("custom-nav"),u=r("router-view");return n(),a("div",g,[s(v,{header:o.header},null,8,["header"]),s(i,{navs:o.content.nav},null,8,["navs"]),s("div",k,[s("div",y,[s(u)])])])};export default b;