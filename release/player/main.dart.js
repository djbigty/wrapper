{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.bv(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.aw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.aw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.aw(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={at:function at(){},
D:function(a){var u,t=H.bw(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
bk:function(a){return v.types[H.an(a)]},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.u(a)
if(typeof u!=="string")throw H.d(H.aL(a))
return u},
J:function(a){return H.bc(a)+H.av(H.B(a),0,null)},
bc:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.n(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.o||!!l.$iM){r=C.b(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.f.v(t,0)===36){if(1>n)H.aB(P.au(1,m))
if(n>n)H.aB(P.au(n,m))
t=t.substring(1,n)}return H.D(t)},
bl:function(a){throw H.d(H.aL(a))},
az:function(a,b){if(a==null)J.b1(a)
throw H.d(H.aO(a,b))},
aO:function(a,b){var u,t,s,r="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.o(b,r,null)
u=J.aQ(a)
t=u.gi(a)
if(!(b<0)){if(typeof t!=="number")return H.bl(t)
s=b>=t}else s=!0
if(s){u=t==null?u.gi(a):t
return new P.a1(u,b,r,"Index out of range")}return P.au(b,r)},
aL:function(a){return new P.o(a,null,null)},
d:function(a){var u
if(a==null)a=new P.a6()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.b_})
u.name=""}else u.toString=H.b_
return u},
b_:function(){return J.u(this.dartException)},
aB:function(a){throw H.d(a)},
bu:function(a){throw H.d(new P.W(a))},
b7:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ab().constructor.prototype):Object.create(new H.E(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.j
if(typeof t!=="number")return t.j()
$.j=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.aF(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.b3(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.aF(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
b3:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.bk,a)
if(typeof a=="function")if(b)return a
else{u=c?H.aE:H.aq
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
b4:function(a,b,c,d){var u=H.aq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
aF:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.b6(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.b4(t,!r,u,b)
if(t===0){r=$.j
if(typeof r!=="number")return r.j()
$.j=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.v
return new Function(r+H.c(q==null?$.v=H.V("self"):q)+";return "+p+"."+H.c(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.j
if(typeof r!=="number")return r.j()
$.j=r+1
o+=r
r="return function("+o+"){return this."
q=$.v
return new Function(r+H.c(q==null?$.v=H.V("self"):q)+"."+H.c(u)+"("+o+");}")()},
b5:function(a,b,c,d){var u=H.aq,t=H.aE
switch(b?-1:a){case 0:throw H.d(new H.a9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
b6:function(a,b){var u,t,s,r,q,p,o,n=$.v
if(n==null)n=$.v=H.V("self")
u=$.aD
if(u==null)u=$.aD=H.V("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.b5(s,!q,t,b)
if(s===1){n="return function(){return this."+H.c(n)+"."+H.c(t)+"(this."+H.c(u)+");"
u=$.j
if(typeof u!=="number")return u.j()
$.j=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.c(n)+"."+H.c(t)+"(this."+H.c(u)+", "+o+");"
u=$.j
if(typeof u!=="number")return u.j()
$.j=u+1
return new Function(n+u+"}")()},
aw:function(a,b,c,d,e,f,g){return H.b7(a,b,c,d,!!e,!!f,g)},
aq:function(a){return a.a},
aE:function(a){return a.c},
V:function(a){var u,t,s,r=new H.E("self","target","receiver","name"),q=J.aG(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.L(a,"String"))},
an:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.L(a,"int"))},
bt:function(a,b){throw H.d(H.L(a,H.D(H.Q(b).substring(2))))},
bp:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.n(a)[b])return a
H.bt(a,b)},
aP:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.an(u)]
else return a.$S()}return},
bj:function(a,b){var u
if(typeof a=="function")return!0
u=H.aP(J.n(a))
if(u==null)return!1
return H.aI(u,null,b,null)},
L:function(a,b){return new H.ad("TypeError: "+P.ar(a)+": type '"+H.c(H.bg(a))+"' is not a subtype of type '"+b+"'")},
bg:function(a){var u,t=J.n(a)
if(!!t.$iw){u=H.aP(t)
if(u!=null)return H.aY(u)
return"Closure"}return H.J(a)},
bv:function(a){throw H.d(new P.Y(a))},
aR:function(a){return v.getIsolateTag(a)},
aZ:function(a,b){a.$ti=b
return a},
B:function(a){if(a==null)return
return a.$ti},
bE:function(a,b,c){return H.R(a["$a"+H.c(c)],H.B(b))},
ax:function(a,b){var u=H.B(a)
return u==null?null:u[b]},
aY:function(a){return H.m(a,null)},
m:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.D(a[0].name)+H.av(a,1,b)
if(typeof a=="function")return H.D(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.an(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.az(b,t)
return H.c(b[t])}if('func' in a)return H.be(a,b)
if('futureOr' in a)return"FutureOr<"+H.m("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
be:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.aZ([],[P.l])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.d.p(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.az(a0,m)
p=C.f.j(p,a0[m])
l=u[q]
if(l!=null&&l!==P.f)p+=" extends "+H.m(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.m(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.m(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.m(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.bi(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.Q(n[g])
i=i+h+H.m(d[c],a0)+(" "+H.c(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
av:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.K("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.m(p,c)}return"<"+u.h(0)+">"},
R:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bh:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.B(a)
t=J.n(a)
if(t[b]==null)return!1
return H.aK(H.R(t[d],u),null,c,null)},
bB:function(a,b,c,d){if(a==null)return a
if(H.bh(a,b,c,d))return a
throw H.d(H.L(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.D(b.substring(2))+H.av(c,0,null),v.mangledGlobalNames)))},
aK:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.i(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.i(a[t],b,c[t],d))return!1
return!0},
bC:function(a,b,c){return a.apply(b,H.R(J.n(b)["$a"+H.c(c)],H.B(b)))},
aU:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="f"||a.name==="r"||a===-1||a===-2||H.aU(u)}return!1},
aN:function(a,b){var u,t
if(a==null)return b==null||b.name==="f"||b.name==="r"||b===-1||b===-2||H.aU(b)
if(b==null||b===-1||b.name==="f"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.aN(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bj(a,b)}u=J.n(a).constructor
t=H.B(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.i(u,null,b,null)},
aM:function(a,b){if(a!=null&&!H.aN(a,b))throw H.d(H.L(a,H.aY(b)))
return a},
i:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="f"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="f"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.i(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="r")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.i("type" in a?a.type:l,b,s,d)
else if(H.i(a,b,s,d))return!0
else{if(!('$i'+"b9" in t.prototype))return!1
r=t.prototype["$a"+"b9"]
q=H.R(r,u?a.slice(1):l)
return H.i(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.aI(a,b,c,d)
if('func' in a)return c.name==="by"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.aK(H.R(m,u),b,p,d)},
aI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.i(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.i(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.i(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.i(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.bs(h,b,g,d)},
bs:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.i(c[s],d,a[s],b))return!1}return!0},
bD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
bq:function(a){var u,t,s,r,q=H.Q($.aT.$1(a)),p=$.ai[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ao[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.Q($.aJ.$2(a,q))
if(q!=null){p=$.ai[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ao[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ap(u)
$.ai[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ao[q]=u
return u}if(s==="-"){r=H.ap(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.aW(a,u)
if(s==="*")throw H.d(P.aH(q))
if(v.leafTags[q]===true){r=H.ap(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.aW(a,u)},
aW:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.aA(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ap:function(a){return J.aA(a,!1,null,!!a.$ibA)},
br:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ap(u)
else return J.aA(u,c,null,null)},
bn:function(){if(!0===$.ay)return
$.ay=!0
H.bo()},
bo:function(){var u,t,s,r,q,p,o,n
$.ai=Object.create(null)
$.ao=Object.create(null)
H.bm()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.aX.$1(q)
if(p!=null){o=H.br(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
bm:function(){var u,t,s,r,q,p,o=C.i()
o=H.t(C.j,H.t(C.k,H.t(C.c,H.t(C.c,H.t(C.l,H.t(C.m,H.t(C.n(C.b),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.aT=new H.ak(r)
$.aJ=new H.al(q)
$.aX=new H.am(p)},
t:function(a,b){return a(b)||b},
w:function w(){},
ac:function ac(){},
ab:function ab(){},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a){this.a=a},
a9:function a9(a){this.a=a},
ak:function ak(a){this.a=a},
al:function al(a){this.a=a},
am:function am(a){this.a=a},
bi:function(a){return J.aG(H.aZ(a?Object.keys(a):[],[null]))},
bw:function(a){return v.mangledGlobalNames[a]}},J={
aA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aS:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ay==null){H.bn()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.aH("Return interceptor for "+H.c(u(a,q))))}s=a.constructor
r=s==null?null:s[$.aC()]
if(r!=null)return r
r=H.bq(a)
if(r!=null)return r
if(typeof a=="function")return C.q
u=Object.getPrototypeOf(a)
if(u==null)return C.h
if(u===Object.prototype)return C.h
if(typeof s=="function"){Object.defineProperty(s,$.aC(),{value:C.a,enumerable:false,writable:true,configurable:true})
return C.a}return C.a},
aG:function(a){a.fixed$length=Array
return a},
n:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a4.prototype
return J.a3.prototype}if(typeof a=="string")return J.y.prototype
if(a==null)return J.G.prototype
if(typeof a=="boolean")return J.a2.prototype
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.z.prototype
return a}if(a instanceof P.f)return a
return J.aS(a)},
aQ:function(a){if(typeof a=="string")return J.y.prototype
if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.z.prototype
return a}if(a instanceof P.f)return a
return J.aS(a)},
b1:function(a){return J.aQ(a).gi(a)},
u:function(a){return J.n(a).h(a)},
e:function e(){},
a2:function a2(){},
G:function G(){},
I:function I(){},
a7:function a7(){},
M:function M(){},
z:function z(){},
q:function q(a){this.$ti=a},
as:function as(a){this.$ti=a},
U:function U(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
H:function H(){},
a4:function a4(){},
a3:function a3(){},
y:function y(){}},P={
b8:function(a){if(a instanceof H.w)return a.h(0)
return"Instance of '"+H.c(H.J(a))+"'"},
bd:function(a,b,c){var u=new J.U(b,b.length,[H.ax(b,0)])
if(!u.m())return a
if(c.length===0){do a+=H.c(u.d)
while(u.m())}else{a+=H.c(u.d)
for(;u.m();)a=a+c+H.c(u.d)}return a},
ar:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.u(a)
if(typeof a==="string")return JSON.stringify(a)
return P.b8(a)},
b2:function(a,b,c){return new P.o(a,b,c)},
au:function(a,b){return new P.a8(a,b,"Value not in range")},
ag:function(a){return new P.af(a)},
aH:function(a){return new P.ae(a)},
O:function O(){},
aj:function aj(){},
a_:function a_(){},
a6:function a6(){},
o:function o(a,b,c){this.b=a
this.c=b
this.d=c},
a8:function a8(a,b,c){this.b=a
this.c=b
this.d=c},
a1:function a1(a,b,c,d){var _=this
_.f=a
_.b=b
_.c=c
_.d=d},
af:function af(a){this.a=a},
ae:function ae(a){this.a=a},
W:function W(a){this.a=a},
Y:function Y(a){this.a=a},
P:function P(){},
a5:function a5(){},
r:function r(){},
C:function C(){},
f:function f(){},
l:function l(){},
K:function K(a){this.a=a},
bb:function(a,b,c){var u,t
if(P.bf(a))return b+"..."+c
u=new P.K(b)
C.d.p($.A,a)
try{t=u
t.a=P.bd(t.a,a,", ")}finally{if(0>=$.A.length)return H.az($.A,-1)
$.A.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
bf:function(a){var u,t
for(u=$.A.length,t=0;t<u;++t)if(a===$.A[t])return!0
return!1}},W={b:function b(){},S:function S(){},T:function T(){},k:function k(){},x:function x(){},Z:function Z(){},F:function F(){},a:function a(){},p:function p(){},a0:function a0(){},h:function h(){},aa:function aa(){},N:function N(){},ah:function ah(a){this.a=a},X:function X(){}},F={
aV:function(){var u,t,s=window.innerWidth,r=window.innerHeight,q=window.document,p=document
H.bp(p.querySelector("#player"),"$ix")
u=q.domain
t=p.createElement("iframe")
t.src="https://player.twitch.tv/?channel=djbigty&parent="+H.c(u)
t.width=J.u(s)
t.height=J.u(r)
new W.ah(t).sA(0,0)
C.p.sw(null,0)}}
var w=[C,H,J,P,W,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.at.prototype={}
J.e.prototype={
h:function(a){return"Instance of '"+H.c(H.J(a))+"'"}}
J.a2.prototype={
h:function(a){return String(a)},
$iO:1}
J.G.prototype={
h:function(a){return"null"}}
J.I.prototype={
h:function(a){return String(a)}}
J.a7.prototype={}
J.M.prototype={}
J.z.prototype={
h:function(a){var u=a[$.b0()]
if(u==null)return this.u(a)
return"JavaScript function for "+H.c(J.u(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.q.prototype={
p:function(a,b){H.aM(b,H.ax(a,0))
if(!!a.fixed$length)H.aB(P.ag("add"))
a.push(b)},
h:function(a){return P.bb(a,"[","]")},
gi:function(a){return a.length},
$iba:1}
J.as.prototype={}
J.U.prototype={
m:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.bu(s))
u=t.c
if(u>=r){t.sn(null)
return!1}t.sn(s[u]);++t.c
return!0},
sn:function(a){this.d=H.aM(a,H.ax(this,0))}}
J.H.prototype={
q:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.ag(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
$iC:1}
J.a4.prototype={$iP:1}
J.a3.prototype={}
J.y.prototype={
v:function(a,b){if(b>=a.length)throw H.d(H.aO(a,b))
return a.charCodeAt(b)},
j:function(a,b){if(typeof b!=="string")throw H.d(P.b2(b,null,null))
return a+b},
h:function(a){return a},
gi:function(a){return a.length},
$il:1}
H.w.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gB:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ac.prototype={}
H.ab.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.D(u)+"'"}}
H.E.prototype={
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.c(H.J(u))+"'")}}
H.ad.prototype={
h:function(a){return this.a}}
H.a9.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.ak.prototype={
$1:function(a){return this.a(a)},
$S:0}
H.al.prototype={
$2:function(a,b){return this.a(a,b)}}
H.am.prototype={
$1:function(a){return this.a(H.Q(a))},
$S:1}
P.O.prototype={
h:function(a){return this?"true":"false"}}
P.aj.prototype={}
P.a_.prototype={}
P.a6.prototype={
h:function(a){return"Throw of null."}}
P.o.prototype={
gl:function(){return"Invalid argument"},
gk:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gl()+o+u
s=q.gk()
r=P.ar(q.b)
return t+s+": "+r}}
P.a8.prototype={
gl:function(){return"RangeError"},
gk:function(){return""}}
P.a1.prototype={
gl:function(){return"RangeError"},
gk:function(){var u,t=H.an(this.b)
if(typeof t!=="number")return t.C()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.c(u)},
gi:function(a){return this.f}}
P.af.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ae.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.W.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ar(u)+"."}}
P.Y.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.P.prototype={}
P.a5.prototype={$iba:1}
P.r.prototype={
h:function(a){return"null"}}
P.C.prototype={}
P.f.prototype={constructor:P.f,$if:1,
h:function(a){return"Instance of '"+H.c(H.J(this))+"'"},
toString:function(){return this.h(this)}}
P.l.prototype={}
P.K.prototype={
gi:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.b.prototype={}
W.S.prototype={
h:function(a){return String(a)}}
W.T.prototype={
h:function(a){return String(a)}}
W.k.prototype={
gi:function(a){return a.length}}
W.x.prototype={$ix:1}
W.Z.prototype={
h:function(a){return String(a)}}
W.F.prototype={
h:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)}}
W.a.prototype={
h:function(a){return a.localName},
$ia:1}
W.p.prototype={}
W.a0.prototype={
gi:function(a){return a.length}}
W.h.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.t(a):u}}
W.aa.prototype={
gi:function(a){return a.length}}
W.N.prototype={
h:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)}}
W.ah.prototype={}
W.X.prototype={
sw:function(a,b){throw H.d(P.ag("Can only set height for content rect."))},
sA:function(a,b){throw H.d(P.ag("Can only set width for content rect."))},
h:function(a){var u=this.a
return"Rectangle ("+H.c(u.getBoundingClientRect().left)+", "+H.c(u.getBoundingClientRect().top)+") "+C.e.q(u.offsetWidth)+" x "+C.e.q(u.offsetHeight)}};(function aliases(){var u=J.e.prototype
u.t=u.h
u=J.I.prototype
u.u=u.h})();(function inheritance(){var u=hunkHelpers.inherit,t=hunkHelpers.inheritMany
u(P.f,null)
t(P.f,[H.at,J.e,J.U,H.w,P.a_,P.O,P.C,P.a5,P.r,P.l,P.K,W.X])
t(J.e,[J.a2,J.G,J.I,J.q,J.H,J.y,W.p,W.Z,W.F])
t(J.I,[J.a7,J.M,J.z])
u(J.as,J.q)
t(J.H,[J.a4,J.a3])
t(H.w,[H.ac,H.ak,H.al,H.am])
t(H.ac,[H.ab,H.E])
t(P.a_,[H.ad,H.a9,P.a6,P.o,P.af,P.ae,P.W,P.Y])
t(P.C,[P.aj,P.P])
t(P.o,[P.a8,P.a1])
u(W.h,W.p)
t(W.h,[W.a,W.k])
u(W.b,W.a)
t(W.b,[W.S,W.T,W.x,W.a0,W.aa])
u(W.N,W.F)
u(W.ah,W.X)})()
var v={mangledGlobalNames:{P:"int",aj:"double",C:"num",l:"String",O:"bool",r:"Null",a5:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,args:[,]},{func:1,args:[P.l]}],interceptorsByTag:null,leafTags:null};(function constants(){C.o=J.e.prototype
C.d=J.q.prototype
C.p=J.G.prototype
C.e=J.H.prototype
C.f=J.y.prototype
C.q=J.z.prototype
C.h=J.a7.prototype
C.a=J.M.prototype
C.b=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.i=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.n=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.j=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.k=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.m=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.l=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.c=function(hooks) { return hooks; }
})();(function staticFields(){$.j=0
$.v=null
$.aD=null
$.aT=null
$.aJ=null
$.aX=null
$.ai=null
$.ao=null
$.ay=null
$.A=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"bx","b0",function(){return H.aR("_$dart_dartClosure")})
u($,"bz","aC",function(){return H.aR("_$dart_js")})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.e,DOMError:J.e,ErrorEvent:J.e,Event:J.e,InputEvent:J.e,MediaError:J.e,NavigatorUserMediaError:J.e,OverconstrainedError:J.e,PositionError:J.e,SensorErrorEvent:J.e,SpeechRecognitionError:J.e,SQLError:J.e,HTMLAudioElement:W.b,HTMLBRElement:W.b,HTMLBaseElement:W.b,HTMLBodyElement:W.b,HTMLButtonElement:W.b,HTMLCanvasElement:W.b,HTMLContentElement:W.b,HTMLDListElement:W.b,HTMLDataElement:W.b,HTMLDataListElement:W.b,HTMLDetailsElement:W.b,HTMLDialogElement:W.b,HTMLEmbedElement:W.b,HTMLFieldSetElement:W.b,HTMLHRElement:W.b,HTMLHeadElement:W.b,HTMLHeadingElement:W.b,HTMLHtmlElement:W.b,HTMLIFrameElement:W.b,HTMLImageElement:W.b,HTMLInputElement:W.b,HTMLLIElement:W.b,HTMLLabelElement:W.b,HTMLLegendElement:W.b,HTMLLinkElement:W.b,HTMLMapElement:W.b,HTMLMediaElement:W.b,HTMLMenuElement:W.b,HTMLMetaElement:W.b,HTMLMeterElement:W.b,HTMLModElement:W.b,HTMLOListElement:W.b,HTMLObjectElement:W.b,HTMLOptGroupElement:W.b,HTMLOptionElement:W.b,HTMLOutputElement:W.b,HTMLParagraphElement:W.b,HTMLParamElement:W.b,HTMLPictureElement:W.b,HTMLPreElement:W.b,HTMLProgressElement:W.b,HTMLQuoteElement:W.b,HTMLScriptElement:W.b,HTMLShadowElement:W.b,HTMLSlotElement:W.b,HTMLSourceElement:W.b,HTMLSpanElement:W.b,HTMLStyleElement:W.b,HTMLTableCaptionElement:W.b,HTMLTableCellElement:W.b,HTMLTableDataCellElement:W.b,HTMLTableHeaderCellElement:W.b,HTMLTableColElement:W.b,HTMLTableElement:W.b,HTMLTableRowElement:W.b,HTMLTableSectionElement:W.b,HTMLTemplateElement:W.b,HTMLTextAreaElement:W.b,HTMLTimeElement:W.b,HTMLTitleElement:W.b,HTMLTrackElement:W.b,HTMLUListElement:W.b,HTMLUnknownElement:W.b,HTMLVideoElement:W.b,HTMLDirectoryElement:W.b,HTMLFontElement:W.b,HTMLFrameElement:W.b,HTMLFrameSetElement:W.b,HTMLMarqueeElement:W.b,HTMLElement:W.b,HTMLAnchorElement:W.S,HTMLAreaElement:W.T,CDATASection:W.k,CharacterData:W.k,Comment:W.k,ProcessingInstruction:W.k,Text:W.k,HTMLDivElement:W.x,DOMException:W.Z,DOMRectReadOnly:W.F,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,Window:W.p,DOMWindow:W.p,EventTarget:W.p,HTMLFormElement:W.a0,Document:W.h,DocumentFragment:W.h,HTMLDocument:W.h,ShadowRoot:W.h,XMLDocument:W.h,Attr:W.h,DocumentType:W.h,Node:W.h,HTMLSelectElement:W.aa,ClientRect:W.N,DOMRect:W.N})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.aV,[])
else F.aV([])})})()
//# sourceMappingURL=main.dart.js.map
