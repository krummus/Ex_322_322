(this.webpackJsonpp2epbook=this.webpackJsonpp2epbook||[]).push([[0],{ 20:function(e,n,t){},41:function(e,n,t){'use strict';t.r(n);var o=t(1),a=t(15),c=t.n(a),r=(t(20),t(3)),u=t(0),i=function(e){return Object(u.jsxs)('div',{ children:['filter shown with ',Object(u.jsx)('input',{ value:e.filterText,onChange:e.onChange })] })},s=function(e){var n=e.person,t=e.removeContact;return Object(u.jsxs)('li',{ children:[n.name,' ',n.number,' ',Object(u.jsx)('button',{ onClick:t,children:'delete' })] })},l=function(e){return Object(u.jsxs)('form',{ onSubmit:e.formOnSubmit,children:[Object(u.jsxs)('div',{ children:['name: ',Object(u.jsx)('input',{ value:e.nameInput,onChange:e.nameOnChange }),Object(u.jsx)('br',{}),'phone: ',Object(u.jsx)('input',{ type:'tel',id:'tel',name:'tel',value:e.phoneValue,onChange:e.phoneOnChange,minLength:'8',maxLength:'10' })] }),Object(u.jsx)('div',{ children:Object(u.jsx)('button',{ type:'submit',children:'add' }) })] })},d=function(e){var n=e.message,t=e.errState;return null===n?Object(u.jsx)('div',{}):!0===t?Object(u.jsx)('div',{ className:'error',children:n }):Object(u.jsx)('div',{ className:'good',children:n })},f=t(4),h=t.n(f),b='/api/persons',m={ getAll:function(){return h.a.get(b).then((function(e){return e.data}))},create:function(e){return h.a.post(b,e).then((function(e){return e.data}))},update:function(e,n){return h.a.put(b+'/'+e,n).then((function(e){return e.data}))},remove:function(e){return h.a.delete(b+'/'+e).then((function(e){return e.data}))} },j=function(){var e=Object(o.useState)([]),n=Object(r.a)(e,2),t=n[0],a=n[1],c=Object(o.useState)('a new name...'),f=Object(r.a)(c,2),h=f[0],b=f[1],j=Object(o.useState)('telephone number'),p=Object(r.a)(j,2),O=p[0],g=p[1],x=Object(o.useState)(''),v=Object(r.a)(x,2),w=v[0],C=v[1],S=Object(o.useState)(null),k=Object(r.a)(S,2),L=k[0],T=k[1],y=Object(o.useState)(!1),I=Object(r.a)(y,2),D=I[0],N=I[1],V=0===w.length?t:t.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}));Object(o.useEffect)((function(){console.log('effect'),m.getAll().then((function(e){console.log('promise fulfilled - data loaded'),a(e)}))}),[]),console.log('render',t,'persons');return Object(u.jsxs)('div',{ children:[Object(u.jsx)('h2',{ children:'Phonebook' }),Object(u.jsx)(i,{ filterValue:w,onChange:function(e){C(e.target.value)} }),Object(u.jsx)('h2',{ children:'add a new' }),Object(u.jsx)(l,{ formOnSubmit:function(e){e.preventDefault(),console.log('button clicked');var n={ name:h,number:O },o=t.filter((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})).length>0;console.log(o,'exists'),o?function(e){var n=t.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}));console.log('person exists @ ',n.id),window.confirm(t.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})).name+' has already been added to the phone book! Would you like to replace the old number with a new one?')&&m.update(n.id,e).then((function(e){a(t.map((function(t){return t.id!==n.id?t:e}))),T('\''.concat(e.name,'\' has been updated with number \'').concat(e.number,'\'')),N(!1),console.log(t),b('a new name...'),g('telephone number'),setTimeout((function(){T(null)}),3e3)})).catch((function(e){N(!0),T(''.concat(e.response.data)),b('a new name...'),g('telephone number'),a(t.filter((function(e){return e.id!==n.id}))),setTimeout((function(){T(null)}),3e3)}))}(n):'a new name...'===n.name||'telephone number'===n.number?(T('Please enter details other than the default!'),N(!0),setTimeout((function(){T(null)}),3e3)):m.create(n).then((function(e){n.id=e.id,a(t.concat(n)),T('\''.concat(e.name,'\' has been added to the phonebook')),N(!1),b('a new name...'),g('telephone number'),setTimeout((function(){T(null)}),3e3)})).catch((function(e){N(!0),T(''.concat(e.response.data)),console.log(e.response.data,'error message details'),setTimeout((function(){T(null)}),3e3)}))},nameInput:h,nameOnChange:function(e){b(e.target.value)},phoneValue:O,phoneOnChange:function(e){g(e.target.value)} }),Object(u.jsx)('h2',{ children:'Numbers' }),Object(u.jsx)(d,{ message:L,errState:D }),Object(u.jsx)('ul',{ children:V.map((function(e){return Object(u.jsx)(s,{ person:e,removeContact:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm('Delete '+n.name)&&(console.log('delete button has been pressed for ID',e),m.remove(e).then((function(o){T('\''.concat(n.name,'\' has been deleted')),N(!1),a(t.filter((function(n){return n.id!==e}))),setTimeout((function(){T(null)}),3e3)})).catch((function(e){T(''.concat(e.response.data)),N(!0),a(t.filter((function(e){return e.id!==n.id}))),setTimeout((function(){T(null)}),3e3)})))}(e.id)} },e.id)})) })] })};c.a.render(Object(u.jsx)(j,{}),document.getElementById('root'))} },[[41,1,2]]])
//# sourceMappingURL=main.a40ffe23.chunk.js.map