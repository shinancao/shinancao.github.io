webpackJsonp([3],{"3iTu":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),a=i("NYxO"),o={name:"People",components:{TheLogo:i("tF1C").a},computed:n()({},Object(a.b)({people:function(t){return t.people.all}})),created:function(){this.$store.dispatch("people/getPeople")},methods:{viewFilm:function(t){var e=new URL(t).pathname.split("/")[2];this.$router.push({path:"/films",query:{id:e}})}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("TheLogo"),t._v(" "),i("div",{staticClass:"people-wrapper"},t._l(t.people,function(e){return i("div",{key:e.id,staticClass:"people-card",on:{click:function(i){return t.viewFilm(e.films[0])}}},[i("div",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"introduction"},[i("div",{staticClass:"introduction-item"},[i("span",{staticClass:"item-title"},[t._v("Gender")]),i("span",{staticClass:"item-content"},[t._v(t._s(e.gender))])]),t._v(" "),i("div",{staticClass:"introduction-item"},[i("span",{staticClass:"item-title"},[t._v("Age")]),i("span",{staticClass:"item-content"},[t._v(t._s(e.age))])]),t._v(" "),i("div",{staticClass:"introduction-item"},[i("span",{staticClass:"item-title"},[t._v("Eye Color")]),i("span",{staticClass:"item-content"},[t._v(t._s(e.eye_color))])]),t._v(" "),i("div",{staticClass:"introduction-item"},[i("span",{staticClass:"item-title"},[t._v("Hair Color")]),i("span",{staticClass:"item-content"},[t._v(t._s(e.hair_color))])])])])}),0)],1)},staticRenderFns:[]};var l=i("VU/8")(o,c,!1,function(t){i("fqiW")},"data-v-b5f86c4e",null);e.default=l.exports},fqiW:function(t,e){}});
//# sourceMappingURL=3.ecb70ff18c9fa5dc6438.js.map