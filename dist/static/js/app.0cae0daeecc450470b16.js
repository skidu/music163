webpackJsonp([0],[,,,,function(t,s,a){"use strict";var i=(a(2),a(97)),e=a.n(i),n=a(3),o=(a.n(n),"http://zwh.s1.natapp.cc");s.a={get:function(t,s,i){e.a.get(o+t,{params:i}).then(function(t){var i=t.data;200==i.code?s(i):a.i(n.Toast)({message:i,position:"bottom",duration:3e3})}).catch(function(t){console.log("e:"+t)})},post:function(t,s,i){e.a.post(o+t,i).then(function(t){var i=t.data;200==i.code?s(i):a.i(n.Toast)({message:i,position:"bottom",duration:3e3})}).catch(function(t){console.log("e:"+t)})}}},function(t,s,a){"use strict";var i=a(2),e=a(79),n=a(62),o=(a.n(n),a(33)),c=a.n(o),r=a(34),l=a.n(r),u=a(39),f=a.n(u),v=a(41),m=a.n(v),d=a(42),M=a.n(d),g=a(43),p=a.n(g),_=a(40),N=a.n(_),h=a(36),D=a.n(h),I=a(37),j=a.n(I),z=a(35),y=a.n(z),C=a(38),T=a.n(C),b=a(32),x=a.n(b);i.default.use(e.a),s.a=new e.a({routes:[{path:"/",name:"musicstart",component:c.a},{path:"/bottomnav",component:l.a,children:[{path:"/",component:f.a,children:[{path:"/",name:"personaRecommen",component:m.a},{path:"rank",component:M.a},{path:"songlist",component:p.a},{path:"anchorStation",component:N.a}]},{path:"mymusic",component:D.a},{path:"friends",component:y.a},{path:"myzone",component:j.a},{path:"songlistinfo/:id",component:T.a}]},{path:"/musicinfo/:id",name:"musicinfo",component:x.a}]})},,function(t,s){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk1NTk1OTg1MTk3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI5NjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg4OS44ODEwMTggMjUzLjQ2MTY4OWMtMC4zNjg0MDUtMTguNjgyNTAxLTE1LjU5OTkxOS0zMy43MDg3MjktMzQuMzgzNDc0LTMzLjcwODcyOS0xOC43ODI1MzIgMC0zNC4wMTQwNDUgMTUuMDI3MjUyLTM0LjM4MzQ3NCAzMy43MDg3MjlsLTAuMDE3Mzk3IDAgMCA2NDIuMDkxODk0IDY4Ljc5OTY5NSAwTDg4OS44OTYzNjggMjUzLjQ2MTY4OSA4ODkuODgxMDE4IDI1My40NjE2ODl6TTE2Ny41MTM5MDIgNDQ5LjA3MTc4NWMtMTguNzgyNTMyIDAtMzQuMDE1MDY4IDE1LjAyNzI1Mi0zNC4zODI0NSAzMy43MDk3NTNsLTAuMDE3Mzk3IDAgMCA0MTIuNzczMDY4IDY4Ljc5NzY0OCAwTDIwMS45MTE3MDIgNDgyLjc4MTUzOGwtMC4wMTczOTcgMEMyMDEuNTI1OSA0NjQuMDk5MDM3IDE4Ni4yOTY0MzMgNDQ5LjA3MTc4NSAxNjcuNTEzOTAyIDQ0OS4wNzE3ODV6TTM5Ni44NDExIDEyOC4wMjU4MzhjLTE4Ljc4MjUzMiAwLTM0LjAxNDA0NSAxNS4wMjYyMjgtMzQuMzgyNDUgMzMuNzA3NzA2bC0wLjAxNzM5NyAwIDAgNzMzLjgyMDAzOCA2OC43OTc2NDggMEw0MzEuMjM4OTAxIDE2MS43MzQ1NjhsLTAuMDE3Mzk3IDBDNDMwLjg1NDEyMiAxNDMuMDUyMDY3IDQxNS42MjQ2NTUgMTI4LjAyNTgzOCAzOTYuODQxMSAxMjguMDI1ODM4ek02MjYuMTcwMzQ1IDMzNC40MTIzNzJjLTE4Ljc4MjUzMiAwLTM0LjAxNTA2OCAxNS4wMjYyMjgtMzQuMzg0NDk3IDMzLjcwODcyOWwtMC4wMTczOTcgMCAwIDUyNy40MzI0ODEgNjguODAwNzE4IDAgMC01MjcuNDMyNDgxLTAuMDE3Mzk3IDBDNjYwLjE4NTQxNCAzNDkuNDM4NjAxIDY0NC45NTE4NTQgMzM0LjQxMjM3MiA2MjYuMTcwMzQ1IDMzNC40MTIzNzJ6IiBwLWlkPSIyOTY2IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+"},,,,,,,function(t,s,a){a(71);var i=a(0)(a(81),a(54),null,null);t.exports=i.exports},function(t,s){},function(t,s){},function(t,s,a){"use strict";var i=a(2),e=a(78);i.default.use(e.a),s.a=new e.a.Store({state:{count:1,findMusicStatus:3},mutations:{Count:function(t,s){t.count=s},findMusicStatus:function(t){t.findMusicStatus=1}},actions:{setCount:function(t,s){(0,t.commit)("Count",s)}},getters:{getCount:function(t){return t.count}}})},,,function(t,s,a){t.exports=a.p+"static/img/djfs1.df785b2.png"},function(t,s,a){t.exports=a.p+"static/img/djfs2.3f26994.png"},function(t,s,a){t.exports=a.p+"static/img/djfs3.60fe222.jpg"},function(t,s){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk0NzMzODE2MTAxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkxMzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzNC40MjIxMzQgNzA3LjkyNTI3NSA0MTcuMTY1MDk4IDcwNy45MjUyNzVjLTIxLjIwMzkyOCAwLTM4LjM5MzQyNS0xNy4xODk0OTgtMzguMzkzNDI1LTM4LjM5MzQyNUwzNzguNzcxNjczIDM1NC40NjgxNTFjMC0yMS4yMDM5MjggMTcuMTg5NDk4LTM4LjM5MzQyNSAzOC4zOTM0MjUtMzguMzkzNDI1bDE3LjI1NzAzNiAwYzIxLjIwMzkyOCAwIDM4LjM5MzQyNSAxNy4xODk0OTggMzguMzkzNDI1IDM4LjM5MzQyNUw0NzIuODE1NTU5IDY2OS41MzE4NDlDNDcyLjgxNTU1OSA2OTAuNzM1Nzc3IDQ1NS42MjYwNjIgNzA3LjkyNTI3NSA0MzQuNDIyMTM0IDcwNy45MjUyNzV6IiBwLWlkPSI5MTM3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTYwNi44MzU5MjUgNzA3LjkyNTI3NWwtMTcuMjU3MDM2IDBjLTIxLjIwMzkyOCAwLTM4LjM5MzQyNS0xNy4xODk0OTgtMzguMzkzNDI1LTM4LjM5MzQyNUw1NTEuMTg1NDY0IDM1NC40NjgxNTFjMC0yMS4yMDM5MjggMTcuMTg5NDk4LTM4LjM5MzQyNSAzOC4zOTM0MjUtMzguMzkzNDI1bDE3LjI1NzAzNiAwYzIxLjIwMzkyOCAwIDM4LjM5MzQyNSAxNy4xODk0OTggMzguMzkzNDI1IDM4LjM5MzQyNUw2NDUuMjI5MzUxIDY2OS41MzE4NDlDNjQ1LjIyOTM1MSA2OTAuNzM1Nzc3IDYyOC4wMzk4NTMgNzA3LjkyNTI3NSA2MDYuODM1OTI1IDcwNy45MjUyNzV6IiBwLWlkPSI5MTM4IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTUxMiA5NS43NDc2OTFjMjI5LjUyMjQ2NCAwIDQxNi4yNTIzMDkgMTg2LjcyOTg0NSA0MTYuMjUyMzA5IDQxNi4yNTIzMDlTNzQxLjUyMjQ2NCA5MjguMjUxMjg2IDUxMiA5MjguMjUxMjg2IDk1Ljc0NzY5MSA3NDEuNTIyNDY0IDk1Ljc0NzY5MSA1MTIgMjgyLjQ3NzUzNiA5NS43NDc2OTEgNTEyIDk1Ljc0NzY5MU01MTIgNjUuMjkwMDA1Yy0yNDYuNzEwOTM4IDAtNDQ2LjcwODk3MSAxOTkuOTk5MDU3LTQ0Ni43MDg5NzEgNDQ2LjcwODk3MSAwIDI0Ni43MTA5MzggMTk5Ljk5OTA1NyA0NDYuNzA4OTcxIDQ0Ni43MDg5NzEgNDQ2LjcwODk3MVM5NTguNzA4OTcxIDc1OC43MTA5MzggOTU4LjcwODk3MSA1MTJDOTU4LjcwODk3MSAyNjUuMjg5MDYyIDc1OC43MTA5MzggNjUuMjkwMDA1IDUxMiA2NS4yOTAwMDVMNTEyIDY1LjI5MDAwNXoiIHAtaWQ9IjkxMzkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4="},function(t,s){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk0NzMxMTAxMTQ1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI3MzgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ1MC4yMjg1NzEgNjkyLjExNDI4NmwyMjcuNzE0Mjg2LTE0Mi44NTcxNDNjNi40LTUuMTQyODU3IDYuNDU3MTQzLTE0Ljg1NzE0MyAwLjE3MTQyOS0yMC4wNTcxNDNMNDUxLjIgMzgzLjM3MTQyOWMtOC40LTYuOTcxNDI5LTIxLjE0Mjg1Ny0xLjAyODU3MS0yMS4yIDkuODg1NzE0bDAgMjg4LjY4NTcxNEM0MjkuODg1NzE0IDY5Mi44IDQ0MS43MTQyODYgNjk4LjkxNDI4NiA0NTAuMjI4NTcxIDY5Mi4xMTQyODZMNDUwLjIyODU3MSA2OTIuMTE0Mjg2eiIgcC1pZD0iMjczOSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIuNTg1MTQzIDEwNy4zNzM3MTRjMjI1Ljg2NTE0MyAwIDQwOS42IDE4My43MzQ4NTcgNDA5LjYgNDA5LjZzLTE4My43MzQ4NTcgNDA5LjYtNDA5LjYgNDA5LjYtNDA5LjYtMTgzLjczNDg1Ny00MDkuNi00MDkuNlMyODYuNzIgMTA3LjM3MzcxNCA1MTIuNTg1MTQzIDEwNy4zNzM3MTRNNTEyLjU4NTE0MyA3OC4xMTY1NzFjLTI0Mi4yNDkxNDMgMC00MzguODU3MTQzIDE5Ni42MDgtNDM4Ljg1NzE0MyA0MzguODU3MTQzczE5Ni42MDggNDM4Ljg1NzE0MyA0MzguODU3MTQzIDQzOC44NTcxNDMgNDM4Ljg1NzE0My0xOTYuNjA4IDQzOC44NTcxNDMtNDM4Ljg1NzE0M1M3NTQuODM0Mjg2IDc4LjExNjU3MSA1MTIuNTg1MTQzIDc4LjExNjU3MUw1MTIuNTg1MTQzIDc4LjExNjU3MXoiIHAtaWQ9IjI3NDAiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4="},function(t,s,a){t.exports=a.p+"static/img/music163start.212c1b3.jpg"},function(t,s,a){t.exports=a.p+"static/img/songlistbanner.2c2ffd4.png"},,,,,,function(t,s,a){a(76);var i=a(0)(a(82),a(59),"data-v-d07d88e6",null);t.exports=i.exports},function(t,s,a){a(75);var i=a(0)(a(83),a(58),"data-v-ca9a98da",null);t.exports=i.exports},function(t,s,a){a(63);var i=a(0)(a(84),a(46),"data-v-079f485c",null);t.exports=i.exports},function(t,s,a){a(69);var i=a(0)(a(85),a(52),"data-v-2544c04c",null);t.exports=i.exports},function(t,s,a){a(72);var i=a(0)(a(86),a(55),"data-v-765b9ea0",null);t.exports=i.exports},function(t,s,a){a(70);var i=a(0)(a(87),a(53),"data-v-34f9491e",null);t.exports=i.exports},function(t,s,a){a(65);var i=a(0)(a(88),a(48),null,null);t.exports=i.exports},function(t,s,a){a(66);var i=a(0)(a(89),a(49),"data-v-1b97aba3",null);t.exports=i.exports},function(t,s,a){a(77);var i=a(0)(a(90),a(60),"data-v-f73c42f0",null);t.exports=i.exports},function(t,s,a){a(68);var i=a(0)(a(91),a(51),"data-v-24fde106",null);t.exports=i.exports},function(t,s,a){a(74);var i=a(0)(a(92),a(57),"data-v-92828a1a",null);t.exports=i.exports},function(t,s,a){a(73);var i=a(0)(a(93),a(56),"data-v-78a8120c",null);t.exports=i.exports},function(t,s,a){a(64);var i=a(0)(a(94),a(47),"data-v-0d5fca0f",null);t.exports=i.exports},function(t,s,a){a(67);var i=a(0)(a(95),a(50),null,null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"bottomnav"}},[a("router-view"),t._v(" "),a("div",{staticClass:"bottomNav"},[a("router-link",{attrs:{to:"/bottomnav/"}},[a("i",{staticClass:"iconfont icon-wangyiyunyinlezizhi"}),t._v("发现音乐")]),t._v(" "),a("router-link",{attrs:{to:"/bottomnav/mymusic"}},[a("i",{staticClass:"iconfont icon-music"}),t._v("我的音乐")]),t._v(" "),a("router-link",{attrs:{to:"/bottomnav/friends"}},[a("i",{staticClass:"iconfont icon-friend"}),t._v("朋友")]),t._v(" "),a("router-link",{attrs:{to:"/bottomnav/myzone"}},[a("i",{staticClass:"iconfont icon-user"}),t._v("我的")])],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"infoDescontent"},[a("div",{staticClass:"tophalf"},[a("div",{staticClass:"close"},[a("i",{staticClass:"mui-icon mui-icon-closeempty",on:{click:function(s){t.closepopup()}}})]),t._v(" "),a("div",{staticClass:"picbox"},[a("img",{attrs:{src:t._f("coverSize")(t.infodesdata.cover),alt:"歌单封面"}})]),t._v(" "),a("p",{staticClass:"songlistTitle"},[t._v(t._s(t.infodesdata.title))])]),t._v(" "),a("div",{staticClass:"bottomhalf"},[a("div",{staticClass:"des"},[a("span",{staticClass:"desinfo",domProps:{innerHTML:t._s(t.desc)}}),t._v(" "),a("span",{staticClass:"tags"},[t._v("标签：\n                "),t._l(t.infodesdata.tags,function(s){return a("em",[t._v(t._s(s))])})],2)]),t._v(" "),a("div",{staticClass:"saveCover"},[a("a",{attrs:{href:t._f("coverDownload")(t.infodesdata.cover),download:t._f("coverDownload")(t.infodesdata.cover)}},[t._v("保存封面")])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"coverbg"},[a("mt-header",{attrs:{fixed:"",title:t.headerTitle}},[a("mt-button",{attrs:{icon:"back"},on:{click:function(s){t.goBack()}},slot:"left"}),t._v(" "),a("mt-button",{attrs:{icon:"more"},slot:"right"})],1),t._v(" "),a("div",{staticClass:"songlistinfo"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"search"}),t._v(" "),a("div",{staticClass:"middleinfo",on:{click:function(s){t.showInfoPopup()}}},[a("div",{staticClass:"imgbox"},[a("img",{attrs:{src:t.infoData.cover,alt:"歌单封面"}})]),t._v(" "),a("div",{staticClass:"info"},[a("p",{staticClass:"listname"},[t._v(t._s(t.infoData.title))]),t._v(" "),a("p",{staticClass:"owner"},[a("img",{attrs:{src:t.infoData.ownerPic}}),t._v(t._s(t.infoData.owner)+"\n          "),a("i",{staticClass:"fa fa-angle-right"})])])]),t._v(" "),a("div",{staticClass:"buttonarea"},[a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-calendar-plus-o"}),t._v(t._s(t.infoData.collection_count))]),t._v(" "),a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-comment"}),t._v(t._s(t.infoData.comment_count))]),t._v(" "),a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-share-square-o"}),t._v(t._s(t.infoData.share_count))]),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"songlist",class:{stickUp:t.isStickUp}},[a("div",{staticClass:"playAll"},[a("i",{staticClass:"fa fa-play-circle-o fa-fw playIcon"}),t._v(" 播放全部\n      "),a("em",[t._v("（共"+t._s(t.songNum)+"首）")]),t._v(" "),t._m(1)]),t._v(" "),a("transition-group",{attrs:{name:"slide"}},t._l(t.songlist,function(s,i){return a("mt-cell-swipe",{key:s.id,attrs:{to:"/musicinfo/"+s.id,title:i+1+" "+s.name,label:s.artists[0].name+"-"+s.album.name,right:[{content:"删除",style:{background:"#ce3d3a",color:"#fff"},handler:function(){return t.deleteSonglistItem(s.id)}}]}},[a("i",{staticClass:"fa fa-ellipsis-h",on:{click:function(a){t.showsheet(s)}}})])}))],1),t._v(" "),a("mt-popup",{staticClass:"songlistInfoPopup",attrs:{"pop-transition":"popup-fade"},model:{value:t.songlistInfoVisible,callback:function(s){t.songlistInfoVisible=s},expression:"songlistInfoVisible"}},[a("infodes",{attrs:{infodesdata:t.infoData},on:{closepopup:t.closePopupfn}})],1),t._v(" "),a("mt-popup",{staticClass:"songlistItemPopup",attrs:{position:"bottom"},model:{value:t.songlistItemVisible,callback:function(s){t.songlistItemVisible=s},expression:"songlistItemVisible"}},[a("songmenu",{attrs:{"song-menu-data":t.songMenuPropData,songname:t.headerTitle}})],1)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-cloud-download"}),t._v("下载")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",[a("i",{staticClass:"mui-icon mui-icon-list chooseMore"}),t._v("多选")])}]}},function(t,s,a){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"homepage"},[i("mt-header",{attrs:{title:""}},[i("mt-button",{slot:"right"},[i("img",{staticClass:"frequency",attrs:{src:a(7)}})])],1),t._v(" "),i("div",{staticClass:"mui-contents"},[i("div",{staticClass:"tagnav"},t._l(t.tagnav,function(s,a){return i("span",{class:{on:t.flag==a},on:{click:function(s){t.switchs(a)}}},[t._v(t._s(s)+" ")])})),t._v(" "),i("mt-tab-container",{attrs:{swipeable:!1},model:{value:t.tabActive,callback:function(s){t.tabActive=s},expression:"tabActive"}},[i("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"songmenu"},[a("div",{staticClass:"songmenu-title"},[t._v("\n        歌曲："+t._s(t.songMenuData.name)+"\n    ")]),t._v(" "),a("div",{staticClass:"menulist"},[a("mt-cell",{attrs:{title:"下一首播放"}},[a("i",{staticClass:"fa fa-play-circle-o fz20",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"收藏到歌单"}},[a("i",{staticClass:"fa fa-calendar-plus-o fa-fw",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"下载"}},[a("i",{staticClass:"fa fa-cloud-download fa-fw",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"评论（874）"}},[a("i",{staticClass:"fa fa-comment fa-fw",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"歌手："+t.songMenuData.artistsName}},[a("i",{staticClass:"fa fa-user-o fa-fw",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"专辑："+t.songMenuData.albumName}},[a("i",{staticClass:"fa fa-eercast fa-fw",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"查看MV"}},[a("i",{staticClass:"fa fa-youtube-play fa-fw",slot:"icon"})])],1)])},staticRenderFns:[]}},function(t,s,a){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("mt-tab-container-item",{attrs:{id:"tab-container1","data-class":"tab-container-1"}},[i("mt-swipe",{style:{height:t.bannerHeight+"px"},attrs:{auto:3e3,prevent:!0,defaultIndex:0}},t._l(t.bannerlist,function(t,s){return i("mt-swipe-item",{key:s},[i("a",{attrs:{href:t.url}},[i("img",{attrs:{src:t.picUrl}})])])})),t._v(" "),i("div",{staticClass:"iconNav"},[i("div",{staticClass:"icon-li"},[i("i",{staticClass:"iconfont icon-fm"}),t._v(" "),i("p",[t._v("私人FM")])]),t._v(" "),i("div",{staticClass:"icon-li"},[i("i",{staticClass:"redBorder"},[t._v(t._s(t.nowdate))]),t._v(" "),i("p",[t._v("每日歌曲推荐")])]),t._v(" "),i("div",{staticClass:"icon-li"},[i("i",{staticClass:"redBorder iconfont icon-paihangbang"}),t._v(" "),i("p",[t._v("云音乐热歌榜")])])]),t._v(" "),i("div",{staticClass:"recommendSonglist"},[i("div",{staticClass:"title"},[i("i",{staticClass:"fa fa-leaf"}),t._v(" "),i("span",[t._v("推荐歌单")]),t._v(" "),i("em",[i("router-link",{attrs:{to:"/bottomnav/songlist"}},[t._v("更多"),i("b",{staticClass:"fa fa-angle-right fa-fw"})])],1)]),t._v(" "),i("div",{staticClass:"songlist"},t._l(t.recommendSonglist,function(s,a){return a<6?i("div",{staticClass:"songbox",on:{click:function(a){t.toSonglist(s.type,s.id)}}},[i("i",[t._v(t._s(s.num))]),t._v(" "),i("div",{staticClass:"imgbox"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.cover,expression:"item.cover"}]})]),t._v(" "),i("p",[t._v(t._s(s.title))])]):t._e()}))]),t._v(" "),i("div",{staticClass:"exclusiveDelivery"},[i("div",{staticClass:"title"},[i("i",{staticClass:"fa fa-leaf"}),t._v(" "),i("span",[t._v("独家放送")]),t._v(" "),i("em",[t._v("更多"),i("b",{staticClass:"fa fa-angle-right fa-fw"})])]),t._v(" "),i("div",{staticClass:"firstfloor"},[i("div",{staticClass:"firstfloorBox left"},[i("img",{attrs:{src:a(20)}}),t._v(" "),i("p",[t._v("网易原创歌曲榜 在深沉的汪洋中抬头仰望星空")])]),t._v(" "),i("div",{staticClass:"firstfloorBox right"},[i("img",{attrs:{src:a(21)}}),t._v(" "),i("p",[t._v("幸田来未全新数字专辑《WFACE~inside~》独家上线！")])])]),t._v(" "),i("div",{staticClass:"secondfloor"},[i("img",{attrs:{src:a(22)}}),t._v(" "),i("p",[t._v("一周热评 第103期 大唐农药 ，喝完这碗还有一碗")])])]),t._v(" "),i("div",{staticClass:"latestMusic recommendSonglist"},[i("div",{staticClass:"title"},[i("i",{staticClass:"fa fa-leaf"}),t._v(" "),i("span",[t._v("最新音乐")]),t._v(" "),i("em",[t._v("更多"),i("b",{staticClass:"fa fa-angle-right fa-fw"})])]),t._v(" "),i("div",{staticClass:"songlist"},t._l(t.latestmusiclist,function(s,a){return i("div",{staticClass:"songbox"},[i("div",{staticClass:"imgbox"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.picUrl,expression:"item.picUrl"}]})]),t._v(" "),i("p",[t._v(t._s(s.albumName)+"\n          "),i("span",[t._v(t._s(s.singerName))])])])}))])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"friends"},[a("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"myzone"},[a("mt-header",{attrs:{fixed:"",title:"账号"}}),t._v(" "),a("div",{staticClass:"myzoneContent"},[a("div",{staticClass:"headpicbox bgwhite"},[a("div",{staticClass:"headpic"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("button",{attrs:{type:"buttom",disabled:t.isCheckin},on:{click:function(s){t.checkin()}}},[t._v(t._s(t.checkInMsg))])]),t._v(" "),t._m(2)]),t._v(" "),a("div",{staticClass:"cellbox"},[a("mt-cell",{attrs:{title:"我的消息",to:"//github.com","is-link":""}},[a("i",{staticClass:"fa fa-envelope-o fa-fw",slot:"icon"})])],1),t._v(" "),a("div",{staticClass:"cellbox"},[a("mt-cell",{attrs:{title:"会员中心",to:"//github.com","is-link":""}},[a("i",{staticClass:"fa fa-trophy fa-fw",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"商城",to:"//github.com","is-link":""}},[a("i",{staticClass:"fa fa-shopping-cart fa-fw",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"在线听歌免流量",to:"//github.com","is-link":""}},[a("i",{staticClass:"fa fa-folder-o fa-fw",slot:"icon"})])],1),t._v(" "),a("div",{staticClass:"cellbox"},[a("mt-cell",{attrs:{title:"设置",to:"//github.com","is-link":""}},[a("i",{staticClass:"fa fa-cog fa-fw",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"主题皮肤",value:"官方红",to:"//github.com","is-link":""}},[a("i",{staticClass:"fa fa-user-o fa-fw",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"夜间模式",to:"//github.com"}},[a("i",{staticClass:"fa fa-lightbulb-o fa-fw",slot:"icon"}),t._v(" "),a("mt-switch",{model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1),t._v(" "),a("mt-cell",{attrs:{title:"定时关闭",to:"//github.com","is-link":""}},[a("i",{staticClass:"fa fa-clock-o fa-fw",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"音乐闹钟",to:"//github.com","is-link":""}},[a("i",{staticClass:"fa fa-bell-o fa-fw",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"驾驶模式",to:"//github.com","is-link":""}},[a("i",{staticClass:"fa fa-car fa-fw",slot:"icon"})])],1),t._v(" "),a("div",{staticClass:"cellbox"},[a("mt-cell",{attrs:{title:"分享网易云音乐",to:"//github.com","is-link":""}},[a("i",{staticClass:"fa fa-share-square-o fa-fw",slot:"icon"})]),t._v(" "),a("mt-cell",{attrs:{title:"关于",to:"//github.com","is-link":""}},[a("i",{staticClass:"fa fa-info-circle fa-fw",slot:"icon"})])],1),t._v(" "),a("div",{staticClass:"drop bgwhite"},[t._v("退出登录")])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"imgbox"},[a("img",{attrs:{src:"http://p1.music.126.net/OiWRTvuOeiXRZNWKzvzRWQ==/18503681184549091.jpg?param=80y80",alt:"头像"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"info"},[a("em",[t._v("黑色摩天轮")]),t._v(" "),a("i",[t._v("Lv.5")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"myzonenav"},[a("a",{attrs:{href:"javascript:;"}},[a("p",{staticClass:"top"},[t._v("动态")]),t._v(" "),a("em",[t._v("0")])]),t._v(" "),a("a",{attrs:{href:"javascript:;"}},[a("p",{staticClass:"top"},[t._v("关注")]),t._v(" "),a("em",[t._v("10")])]),t._v(" "),a("a",{attrs:{href:"javascript:;"}},[a("p",{staticClass:"top"},[t._v("粉丝")]),t._v(" "),a("em",[t._v("0")])]),t._v(" "),a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-edit"}),t._v(" "),a("p",[t._v("我的资料")])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(t,s,a){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mymusic"},[i("mt-header",{attrs:{title:"我的音乐"}},[i("mt-button",{slot:"left"},[t._v("更多")]),t._v(" "),i("mt-button",{slot:"right"},[i("img",{staticClass:"frequency",attrs:{src:a(7)}})])],1),t._v(" "),i("div",{staticClass:"celllist"},[i("mt-cell",{attrs:{title:"本地音乐",to:"javascript:;","is-link":"",value:"1"}},[i("i",{staticClass:"fa fa-music fa-fw",slot:"icon"})]),t._v(" "),i("mt-cell",{attrs:{title:"最近播放",to:"javascript:;","is-link":"",value:"100"}},[i("i",{staticClass:"fa fa-play-circle-o fa-fw",slot:"icon"})]),t._v(" "),i("mt-cell",{attrs:{title:"我的电台",to:"javascript:;","is-link":"",value:"2"}},[i("i",{staticClass:"fa fa-tint fa-fw",slot:"icon"})]),t._v(" "),i("mt-cell",{attrs:{title:"我的收藏",to:"javascript:;","is-link":"",value:"6"}},[i("i",{staticClass:"fa fa-user-plus fa-fw",slot:"icon"})])],1)],1)},staticRenderFns:[]}},function(t,s,a){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("mt-tab-container-item",{attrs:{id:"tab-container2","data-class":"tab-container-2"}},[i("div",{staticClass:"banner"},[i("img",{attrs:{src:a(26),alt:"歌单banner"}})]),t._v(" "),i("div",{staticClass:"songlist-content"},[i("div",{staticClass:"title"},[i("a",{attrs:{href:"javascript:;"}},[t._v("全部歌单"),i("i",{staticClass:"fa fa-angle-right fa-fw"})]),t._v(" "),i("em",[t._v("摇滚")]),t._v(" "),i("em",[t._v("民谣")]),t._v(" "),i("em",[t._v("华语")])]),t._v(" "),i("ul",t._l(t.allsonglist,function(s,a){return i("li",{key:s.id,attrs:{"data-id":s.id}},[i("router-link",{attrs:{to:"/bottomnav/songlistinfo/"+s.id}},[i("div",{staticClass:"imgbox"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.picUrl,expression:"item.picUrl"}]}),t._v(" "),i("span",{staticClass:"author"},[i("i",{staticClass:"fa fa-user-o fa-fw"}),t._v(t._s(s.auther)),1==s.isStar?i("i",{staticClass:"fa fa-star-o fa-fw star"}):t._e()]),t._v(" "),i("span",{staticClass:"listenNum"},[t._v(t._s(s.listenNum))]),t._v(" "),i("span",{staticClass:"mask"})]),t._v(" "),i("div",{staticClass:"songlist-name"},[t._v(t._s(s.listName))])])],1)}))])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("mt-tab-container-item",{attrs:{id:"tab-container4","data-class":"tab-container-4"}},[a("div",{staticClass:"ranking-itembox"},[a("div",{staticClass:"itembox-title"},[t._v("云音乐官方榜")]),t._v(" "),a("div",{staticClass:"itembox-content"},[a("ul",{staticClass:"ranking-list"},t._l(t.music163ranklist,function(s,i){return a("li",[a("div",{staticClass:"ranklogo"},[a("img",{attrs:{src:s.cover}}),t._v(" "),a("div",{staticClass:"msk"})]),t._v(" "),a("div",{staticClass:"rightlist"},t._l(s.songlist,function(s,i){return a("p",[t._v(t._s(i+1)+"."+t._s(s.name)+" - \n              "),t._l(s.artists,function(s,i){return a("em",[0!=i?a("i",[t._v(" / ")]):t._e(),t._v(t._s(s.name))])})],2)}))])}))])])])},staticRenderFns:[]}},function(t,s,a){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"musicstart"},[i("img",{attrs:{src:a(25)},on:{load:t.init}})])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"musicinfo"},[a("mt-header",{attrs:{title:t.song.name}},[a("mt-button",{staticStyle:{color:"#fff"},attrs:{icon:"back"},on:{click:function(s){t.goBack()}},slot:"left"}),t._v(" "),a("mt-button",{slot:"right"},[a("i",{staticClass:"mui-icon mui-icon-upload share"})])],1),t._v(" "),a("div",{staticClass:"phonograph",style:{height:t.allheight}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowLyr,expression:"!isShowLyr"}],staticClass:"phonograph-record",class:{pause:!t.playStatus},on:{click:function(s){t.isLyr()}}},[a("div",{staticClass:"imgbox"},[a("img",{attrs:{src:t._f("picSize")(t.song.album.blurPicUrl)}})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowLyr,expression:"isShowLyr"}],staticClass:"lyricsBox",on:{click:function(s){t.isLyr()}}},[a("mt-range",{attrs:{min:0,max:100},model:{value:t.currentVolume,callback:function(s){t.currentVolume=s},expression:"currentVolume"}},[a("div",{staticClass:"bef",slot:"start"},[a("i",{staticClass:"fa fa-fw",class:{"fa-volume-off":0==t.currentVolume,"fa-volume-down":t.currentVolume<=50&&t.currentVolume>0,"fa-volume-up":t.currentVolume>50},on:{click:function(s){s.stopPropagation(),t.mute()}}}),t._v("\n\t\t\t\t\t"+t._s(t.currentVolume)+"\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"aft",slot:"end"},[t._v("100")])])],1),t._v(" "),a("audio",{attrs:{src:t.song.mp3Url,id:"songAudio"}})]),t._v(" "),a("div",{staticClass:"doArea",style:{height:t.doAreaComputed}},[a("div",{staticClass:"top"},[a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa",class:{"fa-heart":t.islike,"fa-heart-o":!t.islike,heartred:t.islike},on:{click:function(s){t.isLike()}}})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),a("div",{staticClass:"progressBar"},[a("mt-progress",{attrs:{value:t.progressVal}},[a("div",{staticClass:"w5",slot:"start"},[t._v(t._s(t._f("countCurTime")(t.currentTime)))]),t._v(" "),a("div",{staticClass:"w5",slot:"end"},[t._v(t._s(t._f("playtime")(t.song.bMusic.playTime)))])])],1),t._v(" "),a("div",{staticClass:"playArea"},[t._m(3),t._v(" "),t._m(4),t._v(" "),a("a",{attrs:{href:"javascript:;"}},[a("img",{attrs:{src:t.playIcon},on:{click:function(s){t.play()}}})]),t._v(" "),t._m(5),t._v(" "),t._m(6)])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-download"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-comment-o"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-ellipsis-h"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"\tmui-icon mui-icon-loop"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-step-backward"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-step-forward"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"mui-icon mui-icon-list"})])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("mt-tab-container-item",{attrs:{id:"tab-container3","data-class":"tab-container-3"}},[a("h2",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,,function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"app",computed:{asd:function(){return this.$store.getters.getCount}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(4),e=a(24),n=a.n(e),o=a(23),c=a.n(o),r=a(3);a.n(r);s.default={name:"musicinfo",data:function(){return{doArea:150,song:{album:{blurPicUrl:""},bMusic:{playTime:""}},playStatus:!1,playIcon:n.a,progressVal:0,progress:null,currentTime:0,islike:!1,isShowLyr:!1,currentVolume:20}},methods:{getInfo:function(){var t=this;i.a.get("/song/"+this.$route.params.id,function(s){t.song=s.data[0],document.getElementById("songAudio").volume=t.currentVolume/100})},play:function(){var t=this,s=document.getElementById("songAudio");this.playStatus?(this.playIcon=n.a,s.pause(),this.playStatus=!1,clearInterval(this.progress)):(this.playIcon=c.a,this.progress=setInterval(function(){var a;t.currentTime=s.currentTime,a=Math.round(1e3*t.currentTime),t.progressVal=Math.round(a/t.song.bMusic.playTime*100)},1e3),s.play(),this.playStatus=!0)},isLike:function(){this.islike?(this.islike=!1,a.i(r.Toast)("已取消喜欢")):(this.islike=!0,a.i(r.Toast)("已添加到我喜欢的音乐"))},isLyr:function(){this.isShowLyr?this.isShowLyr=!1:this.isShowLyr=!0},mute:function(){this.currentVolume?(sessionStorage.setItem("vol",this.currentVolume),this.currentVolume=0):sessionStorage.getItem("vol")?this.currentVolume=Number(sessionStorage.getItem("vol")):this.currentVolume=20},goBack:function(){this.$router.go(-1)}},watch:{currentVolume:function(t,s){document.getElementById("songAudio").volume=t/100}},computed:{allheight:function(){return window.innerHeight-40-this.doArea+"px"},doAreaComputed:function(){return this.doArea+"px"}},filters:{playtime:function(t){t=Math.ceil(t/1e3);var s=Math.floor(t/60),a=t%60;return s<10&&(s="0"+s),a<10&&(a="0"+a),s+":"+a},picSize:function(t){return t+"?param=182y182"},countCurTime:function(t){t=Math.ceil(Number(t));var s=Math.floor(t/60),a=t%60;return a<10&&(a="0"+a),s<10&&(s="0"+s),s+":"+a}},created:function(){this.getInfo()}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(5);s.default={name:"musicstart",data:function(){return{msg:"../src/assets/music163start.jpg"}},methods:{init:function(){setTimeout(function(){i.a.replace("/bottomnav")},1e3)}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"bottomnav",data:function(){return{msg:"我是 底部导航"}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"friends",data:function(){return{msg:"我是朋友 页面"}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"mymusic",data:function(){return{msg:"我是 我的音乐"}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(3);a.n(i);s.default={name:"myzone",data:function(){return{checkInMsg:"签到",isCheckin:!1}},methods:{checkin:function(){this.isCheckin=!0,this.CheckInMsg="已签到",a.i(i.Toast)({message:"签到成功",iconClass:"fa fa-check fa-3x"})}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(4),e=a(3),n=(a.n(e),a(45)),o=a.n(n),c=a(44),r=a.n(c);s.default={data:function(){return{headerTitle:"歌单",infoData:{},songNum:0,songlist:[],songlistItemVisible:!1,songlistInfoVisible:!1,isStickUp:!1,songMenuPropData:{namn:"",artistsName:"",albumName:""}}},methods:{getinfo:function(){var t=this;i.a.get("/playlist/"+t.$route.params.id,function(s){s.data.cover+=s.data.cover+"?param=144y144",t.infoData=s.data})},getSonglist:function(){var t=this;i.a.get("/song_list/"+t.$route.params.id,function(s){t.songNum=s.data.length,t.songlist=s.data})},deleteSonglistItem:function(t){var s=this;s.songlist.forEach(function(a,i){t==a.id&&s.songlist.splice(i,1)})},showsheet:function(t){this.songMenuPropData.name=t.name;var s=[];t.artists.forEach(function(t,a){s.push(t.name)}),this.songMenuPropData.artistsName=s.join("/"),this.songMenuPropData.albumName=t.album.name,this.songlistItemVisible=!0},showInfoPopup:function(){this.songlistInfoVisible=!0},closePopupfn:function(){this.songlistInfoVisible=!1},scrollStyle:function(){var t=0;document.documentElement&&document.documentElement.scrollTop?t=document.documentElement.scrollTop:document.body&&(t=document.body.scrollTop),t>215?(this.isStickUp=!0,this.headerTitle=this.infoData.title):(this.isStickUp=!1,this.headerTitle="歌单")},goBack:function(){this.$router.go(-1)}},components:{songmenu:o.a,infodes:r.a},created:function(){this.getinfo(),this.getSonglist()},mounted:function(){window.addEventListener("scroll",this.scrollStyle)}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=(a(2),a(5));s.default={name:"homepage",data:function(){return{flag:0,tagnav:["个性推荐","歌单","主播电台","排行榜"],tabActive:"tab-container1"}},methods:{switchs:function(t){switch(this.tabActive="tab-container"+(t+1),t){case 0:i.a.push("/bottomnav/");break;case 1:i.a.push("/bottomnav/songlist");break;case 2:i.a.push("/bottomnav/anchorStation");break;case 3:i.a.push("/bottomnav/rank")}}},watch:{tabActive:function(t,s){this.flag=Number(t.substr(-1,1))-1}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{msg:"我是 主播电台"}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=(a(2),a(5)),e=a(4);s.default={data:function(){return{nowdate:(new Date).getDate(),flag:0,tagnav:["个性推荐","歌单","主播电台","排行榜"],tabActive:"tab-container1",bannerlist:[],recommendSonglist:[],latestmusiclist:[]}},methods:{switchs:function(t){this.flag=t,this.tabActive="tab-container"+(t+1),3==t&&this.ranking()},getBannerList:function(){var t=this;e.a.get("/banner_list",function(s){t.bannerlist=s.data})},recommendSong:function(){var t=this;e.a.get("/recommendList",function(s){for(var a=0;a<s.data.length;a++)s.data[a].cover=s.data[a].cover.replace("?param=140y140","");t.recommendSonglist=s.data})},toSonglist:function(t,s){13==t&&i.a.push("/bottomnav/songlistinfo/"+s)},latestMusicList:function(){var t=this;e.a.get("/latestMusicList",function(s){t.latestmusiclist=s.data})}},watch:{tabActive:function(t,s){this.flag=Number(t.substr(-1,1))-1}},computed:{bannerHeight:function(){return screen.width/2.17}},created:function(){this.getBannerList(),this.recommendSong(),this.latestMusicList()},filters:{typeClassification:function(t,s){if(17==s)return"javascript:;"}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(4),e=a(3);a.n(e);s.default={data:function(){return{music163ranklist:[]}},methods:{ranking:function(){var t=this;i.a.get("/top_list",function(s){t.music163ranklist=s.data[0].items,t.music163ranklist.forEach(function(t,s){t.cover=t.cover.replace("40y40","120y120"),function(t,s){i.a.get("/topSongList/"+t,function(t){t.length=3,this.music163ranklist[s].songlist=t.data})}(t.href.split("?id=")[1],s)})})}},watch:{music163ranklist:function(t,s){console.log(t)}},created:function(){this.ranking()}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(4);s.default={data:function(){return{msg:"我是 歌单",allsonglist:[]}},methods:{allsonglistInit:function(){var t=this;i.a.get("/allsonglist",function(s){s.data.forEach(function(t,s){t.picUrl+="?param=210y210"}),t.allsonglist=s.data})}},created:function(){this.allsonglistInit()}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{closePopup:!1}},props:["infodesdata"],computed:{desc:function(){if(this.infodesdata.desc)return this.infodesdata.desc.split("</b>")[1]}},methods:{closepopup:function(){this.$emit("closepopup")}},filters:{coverSize:function(t){if(t){return t.split("?param=")[0]+"?param=180y180"}},coverDownload:function(t){if(t){console.log(t.split("http://"));return t.split("http://")[1]}}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},props:["songMenuData"]}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(2),e=a(14),n=a.n(e),o=a(5),c=a(17),r=a(3),l=a.n(r),u=a(15),f=(a.n(u),a(4),a(16));a.n(f);i.default.config.productionTip=!1,i.default.use(l.a),i.default.use(c.a),new i.default({el:"#app",router:o.a,store:c.a,template:"<App/>",components:{App:n.a}})}],[96]);
//# sourceMappingURL=app.0cae0daeecc450470b16.js.map