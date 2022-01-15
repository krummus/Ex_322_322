(this.webpackJsonpp2epbook=this.webpackJsonpp2epbook||[]).push([[0],{ 19:function(e,n,t){},39:function(e,n,t){'use strict';t.r(n);var o=t(1),a=t(14),r=t.n(a),c=(t(19),t(3)),u=t(0),i=function(e){return Object(u.jsxs)('div',{ children:['filter shown with ',Object(u.jsx)('input',{ value:e.filterText,onChange:e.onChange })] })},s=function(e){var n=e.person,t=e.removeContact;return Object(u.jsxs)('li',{ children:[n.name,' ',n.number,' ',Object(u.jsx)('button',{ onClick:t,children:'delete' })] })},l=function(e){return Object(u.jsxs)('form',{ onSubmit:e.formOnSubmit,children:[Object(u.jsxs)('div',{ children:['name: ',Object(u.jsx)('input',{ value:e.nameInput,onChange:e.nameOnChange }),Object(u.jsx)('br',{}),'phone: ',Object(u.jsx)('input',{ type:'tel',id:'tel',name:'tel',value:e.phoneValue,onChange:e.phoneOnChange,minLength:'10',maxLength:'10' })] }),Object(u.jsx)('div',{ children:Object(u.jsx)('button',{ type:'submit',children:'add' }) })] })},d=function(e){var n=e.message,t=e.errState;return null===n?Object(u.jsx)('div',{}):!0===t?Object(u.jsx)('div',{ className:'error',children:n }):Object(u.jsx)('div',{ className:'good',children:n })},h=t(4),b=t.n(h),f='/api/notes',m=function(){return b.a.get(f).then((function(e){return e.data}))},j=function(e){return b.a.post(f,e).then((function(e){return e.data}))},p=function(e,n){return b.a.put(f+'/'+e,n).then((function(e){return e.data}))},O=function(e){return b.a.delete(f+'/'+e).then((function(e){return e.data}))},g=function(){var e=Object(o.useState)([]),n=Object(c.a)(e,2),t=n[0],a=n[1],r=Object(o.useState)('a new name...'),h=Object(c.a)(r,2),b=h[0],f=h[1],g=Object(o.useState)('telephone number'),v=Object(c.a)(g,2),x=v[0],w=v[1],C=Object(o.useState)(''),S=Object(c.a)(C,2),k=S[0],L=S[1],y=Object(o.useState)(null),T=Object(c.a)(y,2),I=T[0],D=T[1],N=Object(o.useState)(!1),V=Object(c.a)(N,2),E=V[0],J=V[1],P=0===k.length?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));Object(o.useEffect)((function(){console.log('effect'),m().then((function(e){console.log('promise fulfilled - data loaded'),a(e)}))}),[]),console.log('render',t,'persons');var B=function(e){var n=t.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}));console.log('person exists @ ',n.id),window.confirm(t.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})).name+' has already been added to the phone book! Would you like to replace the old number with a new one?')&&p(n.id,e).then((function(e){a(t.map((function(t){return t.id!==n.id?t:e}))),D('\''.concat(e.name,'\' has been updated with number \'').concat(e.number,'\'')),J(!1),console.log(t),f('a new name...'),w('telephone number'),setTimeout((function(){D(null)}),5e3)})).catch((function(e){J(!0),D('\''.concat(n.name,'\' has already been removed from the server')),f('a new name...'),w('telephone number'),setTimeout((function(){D(null)}),5e3),a(t.filter((function(e){return e.id!==n.id})))}))};return Object(u.jsxs)('div',{ children:[Object(u.jsx)('h2',{ children:'Phonebook' }),Object(u.jsx)(i,{ filterValue:k,onChange:function(e){L(e.target.value)} }),Object(u.jsx)('h2',{ children:'add a new' }),Object(u.jsx)(l,{ formOnSubmit:function(e){console.log('button clicked');var n={ name:b,number:x };t.filter((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})).length>0?B(n):'a new name...'===n.name||'telephone number'===n.number?(e.preventDefault(),D('Please enter details other than the default!'),J(!0),setTimeout((function(){D(null)}),2e3)):j(n).then((function(e){a(t.concat(e)),D('\''.concat(e.name,'\' has been added to the phonebook')),J(!1),f('a new name...'),w('telephone number'),setTimeout((function(){D(null)}),5e3)}))},nameInput:b,nameOnChange:function(e){console.log(e.target.value),f(e.target.value)},phoneValue:x,phoneOnChange:function(e){w(e.target.value)} }),Object(u.jsx)('h2',{ children:'Numbers' }),Object(u.jsx)(d,{ message:I,errState:E }),Object(u.jsx)('ul',{ children:P.map((function(e){return Object(u.jsx)(s,{ person:e,removeContact:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm('Delete '+n.name)&&(console.log('delete button has been pressed for ID',e),O(e).then((function(o){D('\''.concat(n.name,'\' has been deleted')),J(!1),console.log(o,'server response'),a(t.filter((function(n){return n.id!==e})))})).catch((function(e){D('\''.concat(n.name,'\' has already been removed from the server')),J(!0),setTimeout((function(){D(null)}),5e3),a(t.filter((function(e){return e.id!==n.id})))})))}(e.id)} },e.id)})) })] })};r.a.render(Object(u.jsx)(g,{}),document.getElementById('root'))} },[[39,1,2]]])
//# sourceMappingURL=main.da734638.chunk.js.map