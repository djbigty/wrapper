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
a[c]=function(){a[c]=function(){H.dg(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.bH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.bH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.bH(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={bx:function bx(){},
a2:function(a){var u,t=H.dh(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
d3:function(a){return v.types[H.a0(a)]},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.N(a)
if(typeof u!=="string")throw H.e(H.c1(a))
return u},
a8:function(a){return H.cz(a)+H.bE(H.Z(a),0,null)},
cz:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.v(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.r||!!l.$iab){r=C.d(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.h.R(t,0)===36){if(1>n)H.ai(P.bz(1,m))
if(n>n)H.ai(P.bz(n,m))
t=t.substring(1,n)}return H.a2(t)},
d4:function(a){throw H.e(H.c1(a))},
bJ:function(a,b){if(a==null)J.cp(a)
throw H.e(H.c3(a,b))},
c3:function(a,b){var u,t,s,r="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.A(!0,b,r,null)
u=J.c5(a)
t=u.gj(a)
if(!(b<0)){if(typeof t!=="number")return H.d4(t)
s=b>=t}else s=!0
if(s){u=t==null?u.gj(a):t
return new P.aw(u,!0,b,r,"Index out of range")}return P.bz(b,r)},
c1:function(a){return new P.A(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.a7()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.cd})
u.name=""}else u.toString=H.cd
return u},
cd:function(){return J.N(this.dartException)},
ai:function(a){throw H.e(a)},
df:function(a){throw H.e(new P.ao(a))},
y:function(a){var u,t,s,r,q,p
a=H.dd(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.bL([],[P.q])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.aK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
aL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
bU:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
bT:function(a,b){return new H.aD(a,b==null?null:b.method)},
by:function(a,b){var u=b==null,t=u?null:b.method
return new H.aB(a,t,u?null:b.receiver)},
a3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.bt(a)
if(a==null)return
if(a instanceof H.R)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.b.T(t,16)&8191)===10)switch(s){case 438:return f.$1(H.by(H.c(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.bT(H.c(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.cf()
q=$.cg()
p=$.ch()
o=$.ci()
n=$.cl()
m=$.cm()
l=$.ck()
$.cj()
k=$.co()
j=$.cn()
i=r.i(u)
if(i!=null)return f.$1(H.by(H.E(u),i))
else{i=q.i(u)
if(i!=null){i.method="call"
return f.$1(H.by(H.E(u),i))}else{i=p.i(u)
if(i==null){i=o.i(u)
if(i==null){i=n.i(u)
if(i==null){i=m.i(u)
if(i==null){i=l.i(u)
if(i==null){i=o.i(u)
if(i==null){i=k.i(u)
if(i==null){i=j.i(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.bT(H.E(u),i))}}return f.$1(new H.aO(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.a9()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.A(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.a9()
return a},
a_:function(a){var u
if(a instanceof H.R)return a.b
if(a==null)return new H.ad(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ad(a)},
d8:function(a,b,c,d,e,f){H.i(a,"$ibv")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.aW("Unsupported number of arguments for wrapped closure"))},
bk:function(a,b){var u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.d8)
a.$identity=u
return u},
cu:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.aI().constructor.prototype):Object.create(new H.a4(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.x
if(typeof t!=="number")return t.k()
$.x=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.bR(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.cq(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.bR(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
cq:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.d3,a)
if(typeof a=="function")if(b)return a
else{u=c?H.bQ:H.bu
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
cr:function(a,b,c,d){var u=H.bu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
bR:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ct(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.cr(t,!r,u,b)
if(t===0){r=$.x
if(typeof r!=="number")return r.k()
$.x=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.O
return new Function(r+H.c(q==null?$.O=H.an("self"):q)+";return "+p+"."+H.c(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.x
if(typeof r!=="number")return r.k()
$.x=r+1
o+=r
r="return function("+o+"){return this."
q=$.O
return new Function(r+H.c(q==null?$.O=H.an("self"):q)+"."+H.c(u)+"("+o+");}")()},
cs:function(a,b,c,d){var u=H.bu,t=H.bQ
switch(b?-1:a){case 0:throw H.e(new H.aG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ct:function(a,b){var u,t,s,r,q,p,o,n=$.O
if(n==null)n=$.O=H.an("self")
u=$.bP
if(u==null)u=$.bP=H.an("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.cs(s,!q,t,b)
if(s===1){n="return function(){return this."+H.c(n)+"."+H.c(t)+"(this."+H.c(u)+");"
u=$.x
if(typeof u!=="number")return u.k()
$.x=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.c(n)+"."+H.c(t)+"(this."+H.c(u)+", "+o+");"
u=$.x
if(typeof u!=="number")return u.k()
$.x=u+1
return new Function(n+u+"}")()},
bH:function(a,b,c,d,e,f,g){return H.cu(a,b,c,d,!!e,!!f,g)},
bu:function(a){return a.a},
bQ:function(a){return a.c},
an:function(a){var u,t,s,r=new H.a4("self","target","receiver","name"),q=J.bS(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
d1:function(a){if(a==null)H.cY("boolean expression must not be null")
return a},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.C(a,"String"))},
dz:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.C(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.C(a,"int"))},
dc:function(a,b){throw H.e(H.C(a,H.a2(H.E(b).substring(2))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.dc(a,b)},
c4:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a0(u)]
else return a.$S()}return},
ae:function(a,b){var u
if(typeof a=="function")return!0
u=H.c4(J.v(a))
if(u==null)return!1
return H.bX(u,null,b,null)},
d:function(a,b){var u,t
if(a==null)return a
if($.bC)return a
$.bC=!0
try{if(H.ae(a,b))return a
u=H.bs(b)
t=H.C(a,u)
throw H.e(t)}finally{$.bC=!1}},
af:function(a,b){if(a!=null&&!H.bG(a,b))H.ai(H.C(a,H.bs(b)))
return a},
C:function(a,b){return new H.aM("TypeError: "+P.at(a)+": type '"+H.c(H.cV(a))+"' is not a subtype of type '"+b+"'")},
cV:function(a){var u,t=J.v(a)
if(!!t.$iP){u=H.c4(t)
if(u!=null)return H.bs(u)
return"Closure"}return H.a8(a)},
cY:function(a){throw H.e(new H.aQ(a))},
dg:function(a){throw H.e(new P.ap(a))},
c6:function(a){return v.getIsolateTag(a)},
bL:function(a,b){a.$ti=b
return a},
Z:function(a){if(a==null)return
return a.$ti},
dC:function(a,b,c){return H.ah(a["$a"+H.c(c)],H.Z(b))},
o:function(a,b){var u=H.Z(a)
return u==null?null:u[b]},
bs:function(a){return H.D(a,null)},
D:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.a2(a[0].name)+H.bE(a,1,b)
if(typeof a=="function")return H.a2(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.bJ(b,t)
return H.c(b[t])}if('func' in a)return H.cM(a,b)
if('futureOr' in a)return"FutureOr<"+H.D("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
cM:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.bL([],[P.q])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.f.H(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.bJ(a0,m)
p=C.h.k(p,a0[m])
l=u[q]
if(l!=null&&l!==P.h)p+=" extends "+H.D(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.D(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.D(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.D(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.d2(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.E(n[g])
i=i+h+H.D(d[c],a0)+(" "+H.c(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
bE:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aa("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.D(p,c)}return"<"+u.h(0)+">"},
ah:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
Y:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.Z(a)
t=J.v(a)
if(t[b]==null)return!1
return H.c0(H.ah(t[d],u),null,c,null)},
cX:function(a,b,c,d){if(a==null)return a
if(H.Y(a,b,c,d))return a
throw H.e(H.C(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.a2(b.substring(2))+H.bE(c,0,null),v.mangledGlobalNames)))},
c0:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.t(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.t(a[t],b,c[t],d))return!1
return!0},
dA:function(a,b,c){return a.apply(b,H.ah(J.v(b)["$a"+H.c(c)],H.Z(b)))},
c9:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="h"||a.name==="j"||a===-1||a===-2||H.c9(u)}return!1},
bG:function(a,b){var u,t
if(a==null)return b==null||b.name==="h"||b.name==="j"||b===-1||b===-2||H.c9(b)
if(b==null||b===-1||b.name==="h"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.bG(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ae(a,b)}u=J.v(a).constructor
t=H.Z(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.t(u,null,b,null)},
u:function(a,b){if(a!=null&&!H.bG(a,b))throw H.e(H.C(a,H.bs(b)))
return a},
t:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="h"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="h"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.t(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="j")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.t("type" in a?a.type:l,b,s,d)
else if(H.t(a,b,s,d))return!0
else{if(!('$i'+"p" in t.prototype))return!1
r=t.prototype["$a"+"p"]
q=H.ah(r,u?a.slice(1):l)
return H.t(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.bX(a,b,c,d)
if('func' in a)return c.name==="bv"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.c0(H.ah(m,u),b,p,d)},
bX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.t(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.t(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.t(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.t(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.db(h,b,g,d)},
db:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.t(c[s],d,a[s],b))return!1}return!0},
dB:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
d9:function(a){var u,t,s,r,q=H.E($.c8.$1(a)),p=$.bl[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bq[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.E($.c_.$2(a,q))
if(q!=null){p=$.bl[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bq[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.br(u)
$.bl[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.bq[q]=u
return u}if(s==="-"){r=H.br(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.cb(a,u)
if(s==="*")throw H.e(P.bV(q))
if(v.leafTags[q]===true){r=H.br(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.cb(a,u)},
cb:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.bK(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
br:function(a){return J.bK(a,!1,null,!!a.$idk)},
da:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.br(u)
else return J.bK(u,c,null,null)},
d6:function(){if(!0===$.bI)return
$.bI=!0
H.d7()},
d7:function(){var u,t,s,r,q,p,o,n
$.bl=Object.create(null)
$.bq=Object.create(null)
H.d5()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.cc.$1(q)
if(p!=null){o=H.da(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
d5:function(){var u,t,s,r,q,p,o=C.j()
o=H.L(C.k,H.L(C.l,H.L(C.e,H.L(C.e,H.L(C.m,H.L(C.n,H.L(C.o(C.d),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.c8=new H.bn(r)
$.c_=new H.bo(q)
$.cc=new H.bp(p)},
L:function(a,b){return a(b)||b},
dd:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aK:function aK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aD:function aD(a,b){this.a=a
this.b=b},
aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(a){this.a=a},
R:function R(a,b){this.a=a
this.b=b},
bt:function bt(a){this.a=a},
ad:function ad(a){this.a=a
this.b=null},
P:function P(){},
aJ:function aJ(){},
aI:function aI(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aM:function aM(a){this.a=a},
aG:function aG(a){this.a=a},
aQ:function aQ(a){this.a=a},
bn:function bn(a){this.a=a},
bo:function bo(a){this.a=a},
bp:function bp(a){this.a=a},
d2:function(a){return J.bS(H.bL(a?Object.keys(a):[],[null]))},
dh:function(a){return v.mangledGlobalNames[a]}},J={
bK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c7:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.bI==null){H.d6()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.bV("Return interceptor for "+H.c(u(a,q))))}s=a.constructor
r=s==null?null:s[$.bM()]
if(r!=null)return r
r=H.d9(a)
if(r!=null)return r
if(typeof a=="function")return C.t
u=Object.getPrototypeOf(a)
if(u==null)return C.i
if(u===Object.prototype)return C.i
if(typeof s=="function"){Object.defineProperty(s,$.bM(),{value:C.c,enumerable:false,writable:true,configurable:true})
return C.c}return C.c},
bS:function(a){a.fixed$length=Array
return a},
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a5.prototype
return J.ay.prototype}if(typeof a=="string")return J.S.prototype
if(a==null)return J.az.prototype
if(typeof a=="boolean")return J.ax.prototype
if(a.constructor==Array)return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
return a}if(a instanceof P.h)return a
return J.c7(a)},
c5:function(a){if(typeof a=="string")return J.S.prototype
if(a==null)return a
if(a.constructor==Array)return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
return a}if(a instanceof P.h)return a
return J.c7(a)},
cp:function(a){return J.c5(a).gj(a)},
N:function(a){return J.v(a).h(a)},
k:function k(){},
ax:function ax(){},
az:function az(){},
a6:function a6(){},
aE:function aE(){},
ab:function ab(){},
T:function T(){},
H:function H(a){this.$ti=a},
bw:function bw(a){this.$ti=a},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aA:function aA(){},
a5:function a5(){},
ay:function ay(){},
S:function S(){}},P={
cC:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.cZ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bk(new P.aT(s),1)).observe(u,{childList:true})
return new P.aS(s,u,t)}else if(self.setImmediate!=null)return P.d_()
return P.d0()},
cD:function(a){self.scheduleImmediate(H.bk(new P.aU(H.d(a,{func:1,ret:-1})),0))},
cE:function(a){self.setImmediate(H.bk(new P.aV(H.d(a,{func:1,ret:-1})),0))},
cF:function(a){P.bA(C.p,H.d(a,{func:1,ret:-1}))},
bA:function(a,b){var u=C.b.p(a.a,1000)
return P.cG(u<0?0:u,b)},
cG:function(a,b){var u=new P.bd()
u.M(a,b)
return u},
cO:function(a){return new P.aR(new P.l($.f,[a]),[a])},
cK:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
cH:function(a,b){P.cL(a,b)},
cJ:function(a,b){var u
b.toString
u=H.o(b,0)
H.af(a,{futureOr:1,type:u})
if(!b.b||H.Y(a,"$ip",[u],"$ap"))b.a.N(a)
else b.a.D(H.u(a,u))},
cI:function(a,b){var u=H.a3(a),t=H.a_(a)
if(b.b)b.a.l(u,t)
else b.a.O(u,t)},
cL:function(a,b){var u,t=null,s=new P.bg(b),r=new P.bh(b),q=J.v(a)
if(!!q.$il)a.G(s,r,t)
else if(!!q.$ip)a.B(s,r,t)
else{u=new P.l($.f,[null])
H.u(a,null)
u.a=4
u.c=a
u.G(s,t,t)}},
cW:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.f.I(new P.bj(u),P.j,P.z,null)},
cw:function(a,b){var u=new P.l($.f,[b])
P.cB(a,new P.av(null,u))
return u},
bW:function(a,b){var u,t,s
b.a=1
try{a.B(new P.b0(b),new P.b1(b),null)}catch(s){u=H.a3(s)
t=H.a_(s)
P.de(new P.b2(b,u,t))}},
b_:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.i(a.c,"$il")
if(u>=4){t=b.m()
b.a=a.a
b.c=a.c
P.I(b,t)}else{t=H.i(b.c,"$iw")
b.a=2
b.c=a
a.F(t)}},
I:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.i(g.c,"$in")
P.bF(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.I(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.i(q,"$in")
P.bF(i,i,g.b,q.a,q.b)
return}l=$.f
if(l!==n)$.f=n
else l=i
g=b.c
if((g&15)===8)new P.b7(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.b6(u,b,q).$0()}else if((g&2)!==0)new P.b5(h,u,b).$0()
if(l!=null)$.f=l
g=u.b
if(!!J.v(g).$ip){if(g.a>=4){k=H.i(o.c,"$iw")
o.c=null
b=o.n(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.b_(g,o)
return}}j=b.b
k=H.i(j.c,"$iw")
j.c=null
b=j.n(k)
g=u.a
p=u.b
if(!g){H.u(p,H.o(j,0))
j.a=4
j.c=p}else{H.i(p,"$in")
j.a=8
j.c=p}h.a=j
g=j}},
cQ:function(a,b){if(H.ae(a,{func:1,args:[P.h,P.m]}))return b.I(a,null,P.h,P.m)
if(H.ae(a,{func:1,args:[P.h]}))return H.d(a,{func:1,ret:null,args:[P.h]})
throw H.e(P.bO(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
cP:function(){var u,t
for(;u=$.J,u!=null;){$.W=null
t=u.b
$.J=t
if(t==null)$.V=null
u.a.$0()}},
cU:function(){$.bD=!0
try{P.cP()}finally{$.W=null
$.bD=!1
if($.J!=null)$.bN().$1(P.c2())}},
bZ:function(a){var u=new P.ac(a)
if($.J==null){$.J=$.V=u
if(!$.bD)$.bN().$1(P.c2())}else $.V=$.V.b=u},
cT:function(a){var u,t,s=$.J
if(s==null){P.bZ(a)
$.W=$.V
return}u=new P.ac(a)
t=$.W
if(t==null){u.b=s
$.J=$.W=u}else{u.b=t.b
$.W=t.b=u
if(u.b==null)$.V=u}},
de:function(a){var u=null,t=$.f
if(C.a===t){P.K(u,u,C.a,a)
return}P.K(u,u,t,H.d(t.v(a),{func:1,ret:-1}))},
dl:function(a,b){H.ai(new P.A(!1,null,"stream","Must not be null"))
return new P.bc([b])},
cB:function(a,b){var u=$.f
if(u===C.a)return P.bA(a,H.d(b,{func:1,ret:-1}))
return P.bA(a,H.d(u.v(b),{func:1,ret:-1}))},
bF:function(a,b,c,d,e){var u={}
u.a=d
P.cT(new P.bi(u,e))},
bY:function(a,b,c,d,e){var u,t=$.f
if(t===c)return d.$0()
$.f=c
u=t
try{t=d.$0()
return t}finally{$.f=u}},
cS:function(a,b,c,d,e,f,g){var u,t=$.f
if(t===c)return d.$1(e)
$.f=c
u=t
try{t=d.$1(e)
return t}finally{$.f=u}},
cR:function(a,b,c,d,e,f,g,h,i){var u,t=$.f
if(t===c)return d.$2(e,f)
$.f=c
u=t
try{t=d.$2(e,f)
return t}finally{$.f=u}},
K:function(a,b,c,d){var u
H.d(d,{func:1,ret:-1})
u=C.a!==c
if(u)d=!(!u||!1)?c.v(d):c.V(d,-1)
P.bZ(d)},
aT:function aT(a){this.a=a},
aS:function aS(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a){this.a=a},
aV:function aV(a){this.a=a},
bd:function bd(){},
be:function be(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.b=!1
this.$ti=b},
bg:function bg(a){this.a=a},
bh:function bh(a){this.a=a},
bj:function bj(a){this.a=a},
av:function av(a,b){this.a=a
this.b=b},
w:function w(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
l:function l(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
aX:function aX(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
b0:function b0(a){this.a=a},
b1:function b1(a){this.a=a},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.b=b},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a){this.a=a},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
ac:function ac(a){this.a=a
this.b=null},
bc:function bc(a){this.$ti=a},
n:function n(a,b){this.a=a
this.b=b},
bf:function bf(){},
bi:function bi(a,b){this.a=a
this.b=b},
b9:function b9(){},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b){this.a=a
this.b=b},
cv:function(a){if(a instanceof H.P)return a.h(0)
return"Instance of '"+H.c(H.a8(a))+"'"},
cA:function(a,b,c){var u=new J.al(b,b.length,[H.o(b,0)])
if(!u.w())return a
if(c.length===0){do a+=H.c(u.d)
while(u.w())}else{a+=H.c(u.d)
for(;u.w();)a=a+c+H.c(u.d)}return a},
at:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.N(a)
if(typeof a==="string")return JSON.stringify(a)
return P.cv(a)},
bO:function(a,b,c){return new P.A(!0,a,b,c)},
bz:function(a,b){return new P.aF(!0,a,b,"Value not in range")},
bB:function(a){return new P.aP(a)},
bV:function(a){return new P.aN(a)},
M:function M(){},
bm:function bm(){},
Q:function Q(a){this.a=a},
ar:function ar(){},
as:function as(){},
F:function F(){},
am:function am(){},
a7:function a7(){},
A:function A(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aw:function aw(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aP:function aP(a){this.a=a},
aN:function aN(a){this.a=a},
ao:function ao(a){this.a=a},
a9:function a9(){},
ap:function ap(a){this.a=a},
aW:function aW(a){this.a=a},
z:function z(){},
aC:function aC(){},
j:function j(){},
a1:function a1(){},
h:function h(){},
m:function m(){},
q:function q(){},
aa:function aa(a){this.a=a},
cy:function(a,b,c){var u,t
if(P.cN(a))return b+"..."+c
u=new P.aa(b)
C.f.H($.X,a)
try{t=u
t.a=P.cA(t.a,a,", ")}finally{if(0>=$.X.length)return H.bJ($.X,-1)
$.X.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
cN:function(a){var u,t
for(u=$.X.length,t=0;t<u;++t)if(a===$.X[t])return!0
return!1}},W={b:function b(){},aj:function aj(){},ak:function ak(){},B:function B(){},aq:function aq(){},a:function a(){},G:function G(){},au:function au(){},r:function r(){},U:function U(){},aH:function aH(){}},F={
ca:function(){var u,t,s,r=window.innerWidth,q=window.innerHeight
F.ag()
u=document
u.querySelector("#logo").hidden=!0
u.querySelector("#player").hidden=!1
F.ag()
t=window.document.domain
s=u.createElement("object")
H.i(s,"$iU")
s.data="https://player.twitch.tv/?channel=djbigty&parent="+H.c(t)
s.width=J.N(r)
s.height=J.N(q)
u.querySelector("#player").appendChild(s)},
ag:function(){var u=0,t=P.cO(null)
var $async$ag=P.cW(function(a,b){if(a===1)return P.cI(b,t)
while(true)switch(u){case 0:u=2
return P.cH(P.cw(C.q,null),$async$ag)
case 2:return P.cJ(null,t)}})
return P.cK($async$ag,t)}}
var w=[C,H,J,P,W,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.bx.prototype={}
J.k.prototype={
h:function(a){return"Instance of '"+H.c(H.a8(a))+"'"}}
J.ax.prototype={
h:function(a){return String(a)},
$iM:1}
J.az.prototype={
h:function(a){return"null"},
$ij:1}
J.a6.prototype={
h:function(a){return String(a)}}
J.aE.prototype={}
J.ab.prototype={}
J.T.prototype={
h:function(a){var u=a[$.ce()]
if(u==null)return this.L(a)
return"JavaScript function for "+H.c(J.N(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibv:1}
J.H.prototype={
H:function(a,b){H.u(b,H.o(a,0))
if(!!a.fixed$length)H.ai(P.bB("add"))
a.push(b)},
h:function(a){return P.cy(a,"[","]")},
gj:function(a){return a.length},
$icx:1}
J.bw.prototype={}
J.al.prototype={
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.df(s))
u=t.c
if(u>=r){t.sE(null)
return!1}t.sE(s[u]);++t.c
return!0},
sE:function(a){this.d=H.u(a,H.o(this,0))}}
J.aA.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
p:function(a,b){return(a|0)===a?a/b|0:this.U(a,b)},
U:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.bB("Result of truncating division is "+H.c(u)+": "+H.c(a)+" ~/ "+b))},
T:function(a,b){var u
if(a>0)u=this.S(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
S:function(a,b){return b>31?0:a>>>b},
$ia1:1}
J.a5.prototype={$iz:1}
J.ay.prototype={}
J.S.prototype={
R:function(a,b){if(b>=a.length)throw H.e(H.c3(a,b))
return a.charCodeAt(b)},
k:function(a,b){if(typeof b!=="string")throw H.e(P.bO(b,null,null))
return a+b},
h:function(a){return a},
gj:function(a){return a.length},
$iq:1}
H.aK.prototype={
i:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.aD.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.aB.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.c(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.c(t.a)+")"
return s+r+"' on '"+u+"' ("+H.c(t.a)+")"}}
H.aO.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.R.prototype={}
H.bt.prototype={
$1:function(a){if(!!J.v(a).$iF)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.ad.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$im:1}
H.P.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibv:1,
ga0:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aJ.prototype={}
H.aI.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.a2(u)+"'"}}
H.a4.prototype={
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.c(H.a8(u))+"'")}}
H.aM.prototype={
h:function(a){return this.a}}
H.aG.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.aQ.prototype={
h:function(a){return"Assertion failed: "+P.at(this.a)}}
H.bn.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.bo.prototype={
$2:function(a,b){return this.a(a,b)},
$S:6}
H.bp.prototype={
$1:function(a){return this.a(H.E(a))},
$S:7}
P.aT.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:4}
P.aS.prototype={
$1:function(a){var u,t
this.a.a=H.d(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:8}
P.aU.prototype={
$0:function(){this.a.$0()},
$S:0}
P.aV.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bd.prototype={
M:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bk(new P.be(this,b),0),a)
else throw H.e(P.bB("`setTimeout()` not found."))}}
P.be.prototype={
$0:function(){this.b.$0()},
$S:1}
P.aR.prototype={}
P.bg.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:9}
P.bh.prototype={
$2:function(a,b){this.a.$2(1,new H.R(a,H.i(b,"$im")))},
$S:10}
P.bj.prototype={
$2:function(a,b){this.a(H.a0(a),b)},
$S:11}
P.av.prototype={
$0:function(){this.b.C(null)},
$S:0}
P.w.prototype={
X:function(a){if((this.c&15)!==6)return!0
return this.b.b.A(H.d(this.d,{func:1,ret:P.M,args:[P.h]}),a.a,P.M,P.h)},
W:function(a){var u=this.e,t=P.h,s={futureOr:1,type:H.o(this,1)},r=this.b.b
if(H.ae(u,{func:1,args:[P.h,P.m]}))return H.af(r.Y(u,a.a,a.b,null,t,P.m),s)
else return H.af(r.A(H.d(u,{func:1,args:[P.h]}),a.a,null,t),s)}}
P.l.prototype={
B:function(a,b,c){var u,t,s,r=H.o(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.f
if(u!==C.a){H.d(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.cQ(b,u)}t=new P.l($.f,[c])
s=b==null?1:3
this.q(new P.w(t,s,a,b,[r,c]))
return t},
a_:function(a,b){return this.B(a,null,b)},
G:function(a,b,c){var u,t=H.o(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=new P.l($.f,[c])
this.q(new P.w(u,(b==null?1:3)|16,a,b,[t,c]))
return u},
q:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.i(t.c,"$iw")
t.c=a}else{if(s===2){u=H.i(t.c,"$il")
s=u.a
if(s<4){u.q(a)
return}t.a=s
t.c=u.c}P.K(null,null,t.b,H.d(new P.aX(t,a),{func:1,ret:-1}))}},
F:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.i(p.c,"$iw")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.i(p.c,"$il")
u=q.a
if(u<4){q.F(a)
return}p.a=u
p.c=q.c}o.a=p.n(a)
P.K(null,null,p.b,H.d(new P.b4(o,p),{func:1,ret:-1}))}},
m:function(){var u=H.i(this.c,"$iw")
this.c=null
return this.n(u)},
n:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
C:function(a){var u,t,s=this,r=H.o(s,0)
H.af(a,{futureOr:1,type:r})
u=s.$ti
if(H.Y(a,"$ip",u,"$ap"))if(H.Y(a,"$il",u,null))P.b_(a,s)
else P.bW(a,s)
else{t=s.m()
H.u(a,r)
s.a=4
s.c=a
P.I(s,t)}},
D:function(a){var u,t=this
H.u(a,H.o(t,0))
u=t.m()
t.a=4
t.c=a
P.I(t,u)},
l:function(a,b){var u,t=this
H.i(b,"$im")
u=t.m()
t.a=8
t.c=new P.n(a,b)
P.I(t,u)},
N:function(a){var u=this
H.af(a,{futureOr:1,type:H.o(u,0)})
if(H.Y(a,"$ip",u.$ti,"$ap")){u.P(a)
return}u.a=1
P.K(null,null,u.b,H.d(new P.aZ(u,a),{func:1,ret:-1}))},
P:function(a){var u=this,t=u.$ti
H.cX(a,"$ip",t,"$ap")
if(H.Y(a,"$il",t,null)){if(a.a===8){u.a=1
P.K(null,null,u.b,H.d(new P.b3(u,a),{func:1,ret:-1}))}else P.b_(a,u)
return}P.bW(a,u)},
O:function(a,b){this.a=1
P.K(null,null,this.b,H.d(new P.aY(this,a,b),{func:1,ret:-1}))},
$ip:1}
P.aX.prototype={
$0:function(){P.I(this.a,this.b)},
$S:0}
P.b4.prototype={
$0:function(){P.I(this.b,this.a.a)},
$S:0}
P.b0.prototype={
$1:function(a){var u=this.a
u.a=0
u.C(a)},
$S:4}
P.b1.prototype={
$2:function(a,b){H.i(b,"$im")
this.a.l(a,b)},
$1:function(a){return this.$2(a,null)},
$S:12}
P.b2.prototype={
$0:function(){this.a.l(this.b,this.c)},
$S:0}
P.aZ.prototype={
$0:function(){var u=this.a
u.D(H.u(this.b,H.o(u,0)))},
$S:0}
P.b3.prototype={
$0:function(){P.b_(this.b,this.a)},
$S:0}
P.aY.prototype={
$0:function(){this.a.l(this.b,this.c)},
$S:0}
P.b7.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.J(H.d(s.d,{func:1}),null)}catch(r){u=H.a3(r)
t=H.a_(r)
if(o.d){s=H.i(o.a.a.c,"$in").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.i(o.a.a.c,"$in")
else q.b=new P.n(u,t)
q.a=!0
return}if(!!J.v(n).$ip){if(n instanceof P.l&&n.a>=4){if(n.a===8){s=o.b
s.b=H.i(n.c,"$in")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.a_(new P.b8(p),null)
s.a=!1}},
$S:1}
P.b8.prototype={
$1:function(a){return this.a},
$S:13}
P.b6.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.o(s,0)
q=H.u(n.c,r)
p=H.o(s,1)
n.a.b=s.b.b.A(H.d(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a3(o)
t=H.a_(o)
s=n.a
s.b=new P.n(u,t)
s.a=!0}},
$S:1}
P.b5.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.i(m.a.a.c,"$in")
r=m.c
if(H.d1(r.X(u))&&r.e!=null){q=m.b
q.b=r.W(u)
q.a=!1}}catch(p){t=H.a3(p)
s=H.a_(p)
r=H.i(m.a.a.c,"$in")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.n(t,s)
n.a=!0}},
$S:1}
P.ac.prototype={}
P.bc.prototype={}
P.n.prototype={
h:function(a){return H.c(this.a)},
$iF:1}
P.bf.prototype={$idx:1}
P.bi.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.a7():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.h(0)
throw u},
$S:0}
P.b9.prototype={
Z:function(a){var u,t,s,r=null
H.d(a,{func:1,ret:-1})
try{if(C.a===$.f){a.$0()
return}P.bY(r,r,this,a,-1)}catch(s){u=H.a3(s)
t=H.a_(s)
P.bF(r,r,this,u,H.i(t,"$im"))}},
V:function(a,b){return new P.bb(this,H.d(a,{func:1,ret:b}),b)},
v:function(a){return new P.ba(this,H.d(a,{func:1,ret:-1}))},
J:function(a,b){H.d(a,{func:1,ret:b})
if($.f===C.a)return a.$0()
return P.bY(null,null,this,a,b)},
A:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.u(b,d)
if($.f===C.a)return a.$1(b)
return P.cS(null,null,this,a,b,c,d)},
Y:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.u(b,e)
H.u(c,f)
if($.f===C.a)return a.$2(b,c)
return P.cR(null,null,this,a,b,c,d,e,f)},
I:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}}
P.bb.prototype={
$0:function(){return this.a.J(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ba.prototype={
$0:function(){return this.a.Z(this.b)},
$S:1}
P.M.prototype={}
P.bm.prototype={}
P.Q.prototype={
h:function(a){var u,t,s,r=new P.as(),q=this.a
if(q<0)return"-"+new P.Q(0-q).h(0)
u=r.$1(C.b.p(q,6e7)%60)
t=r.$1(C.b.p(q,1e6)%60)
s=new P.ar().$1(q%1e6)
return""+C.b.p(q,36e8)+":"+H.c(u)+":"+H.c(t)+"."+H.c(s)}}
P.ar.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:5}
P.as.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:5}
P.F.prototype={}
P.am.prototype={
h:function(a){return"Assertion failed"}}
P.a7.prototype={
h:function(a){return"Throw of null."}}
P.A.prototype={
gu:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gt:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gu()+o+u
if(!q.a)return t
s=q.gt()
r=P.at(q.b)
return t+s+": "+r}}
P.aF.prototype={
gu:function(){return"RangeError"},
gt:function(){return""}}
P.aw.prototype={
gu:function(){return"RangeError"},
gt:function(){var u,t=H.a0(this.b)
if(typeof t!=="number")return t.a1()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.c(u)},
gj:function(a){return this.f}}
P.aP.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.aN.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ao.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.at(u)+"."}}
P.a9.prototype={
h:function(a){return"Stack Overflow"},
$iF:1}
P.ap.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.aW.prototype={
h:function(a){return"Exception: "+this.a}}
P.z.prototype={}
P.aC.prototype={$icx:1}
P.j.prototype={
h:function(a){return"null"}}
P.a1.prototype={}
P.h.prototype={constructor:P.h,$ih:1,
h:function(a){return"Instance of '"+H.c(H.a8(this))+"'"},
toString:function(){return this.h(this)}}
P.m.prototype={}
P.q.prototype={}
P.aa.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.b.prototype={}
W.aj.prototype={
h:function(a){return String(a)}}
W.ak.prototype={
h:function(a){return String(a)}}
W.B.prototype={
gj:function(a){return a.length}}
W.aq.prototype={
h:function(a){return String(a)}}
W.a.prototype={
h:function(a){return a.localName}}
W.G.prototype={}
W.au.prototype={
gj:function(a){return a.length}}
W.r.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.K(a):u}}
W.U.prototype={$iU:1}
W.aH.prototype={
gj:function(a){return a.length}};(function aliases(){var u=J.k.prototype
u.K=u.h
u=J.a6.prototype
u.L=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0
u(P,"cZ","cD",2)
u(P,"d_","cE",2)
u(P,"d0","cF",2)
t(P,"c2","cU",1)})();(function inheritance(){var u=hunkHelpers.inherit,t=hunkHelpers.inheritMany
u(P.h,null)
t(P.h,[H.bx,J.k,J.al,H.aK,P.F,H.R,H.P,H.ad,P.bd,P.aR,P.w,P.l,P.ac,P.bc,P.n,P.bf,P.M,P.a1,P.Q,P.a9,P.aW,P.aC,P.j,P.m,P.q,P.aa])
t(J.k,[J.ax,J.az,J.a6,J.H,J.aA,J.S,W.G,W.aq])
t(J.a6,[J.aE,J.ab,J.T])
u(J.bw,J.H)
t(J.aA,[J.a5,J.ay])
t(P.F,[H.aD,H.aB,H.aO,H.aM,H.aG,P.am,P.a7,P.A,P.aP,P.aN,P.ao,P.ap])
t(H.P,[H.bt,H.aJ,H.bn,H.bo,H.bp,P.aT,P.aS,P.aU,P.aV,P.be,P.bg,P.bh,P.bj,P.av,P.aX,P.b4,P.b0,P.b1,P.b2,P.aZ,P.b3,P.aY,P.b7,P.b8,P.b6,P.b5,P.bi,P.bb,P.ba,P.ar,P.as])
t(H.aJ,[H.aI,H.a4])
u(H.aQ,P.am)
u(P.b9,P.bf)
t(P.a1,[P.bm,P.z])
t(P.A,[P.aF,P.aw])
u(W.r,W.G)
t(W.r,[W.a,W.B])
u(W.b,W.a)
t(W.b,[W.aj,W.ak,W.au,W.U,W.aH])})()
var v={mangledGlobalNames:{z:"int",bm:"double",a1:"num",q:"String",M:"bool",j:"Null",aC:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.j},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.j,args:[,]},{func:1,ret:P.q,args:[P.z]},{func:1,args:[,P.q]},{func:1,args:[P.q]},{func:1,ret:P.j,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[,]},{func:1,ret:P.j,args:[,P.m]},{func:1,ret:P.j,args:[P.z,,]},{func:1,ret:P.j,args:[,],opt:[P.m]},{func:1,ret:[P.l,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function constants(){C.r=J.k.prototype
C.f=J.H.prototype
C.b=J.a5.prototype
C.h=J.S.prototype
C.t=J.T.prototype
C.i=J.aE.prototype
C.c=J.ab.prototype
C.d=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.j=function() {
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
C.o=function(getTagFallback) {
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
C.k=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.l=function(hooks) {
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
C.n=function(hooks) {
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
C.m=function(hooks) {
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
C.e=function(hooks) { return hooks; }

C.a=new P.b9()
C.p=new P.Q(0)
C.q=new P.Q(3e6)})();(function staticFields(){$.x=0
$.O=null
$.bP=null
$.bC=!1
$.c8=null
$.c_=null
$.cc=null
$.bl=null
$.bq=null
$.bI=null
$.J=null
$.V=null
$.W=null
$.bD=!1
$.f=C.a
$.X=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"di","ce",function(){return H.c6("_$dart_dartClosure")})
u($,"dj","bM",function(){return H.c6("_$dart_js")})
u($,"dm","cf",function(){return H.y(H.aL({
toString:function(){return"$receiver$"}}))})
u($,"dn","cg",function(){return H.y(H.aL({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"dp","ch",function(){return H.y(H.aL(null))})
u($,"dq","ci",function(){return H.y(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dt","cl",function(){return H.y(H.aL(void 0))})
u($,"du","cm",function(){return H.y(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ds","ck",function(){return H.y(H.bU(null))})
u($,"dr","cj",function(){return H.y(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"dw","co",function(){return H.y(H.bU(void 0))})
u($,"dv","cn",function(){return H.y(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"dy","bN",function(){return P.cC()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.k,DOMError:J.k,ErrorEvent:J.k,Event:J.k,InputEvent:J.k,MediaError:J.k,NavigatorUserMediaError:J.k,OverconstrainedError:J.k,PositionError:J.k,SensorErrorEvent:J.k,SpeechRecognitionError:J.k,SQLError:J.k,HTMLAudioElement:W.b,HTMLBRElement:W.b,HTMLBaseElement:W.b,HTMLBodyElement:W.b,HTMLButtonElement:W.b,HTMLCanvasElement:W.b,HTMLContentElement:W.b,HTMLDListElement:W.b,HTMLDataElement:W.b,HTMLDataListElement:W.b,HTMLDetailsElement:W.b,HTMLDialogElement:W.b,HTMLDivElement:W.b,HTMLEmbedElement:W.b,HTMLFieldSetElement:W.b,HTMLHRElement:W.b,HTMLHeadElement:W.b,HTMLHeadingElement:W.b,HTMLHtmlElement:W.b,HTMLIFrameElement:W.b,HTMLImageElement:W.b,HTMLInputElement:W.b,HTMLLIElement:W.b,HTMLLabelElement:W.b,HTMLLegendElement:W.b,HTMLLinkElement:W.b,HTMLMapElement:W.b,HTMLMediaElement:W.b,HTMLMenuElement:W.b,HTMLMetaElement:W.b,HTMLMeterElement:W.b,HTMLModElement:W.b,HTMLOListElement:W.b,HTMLOptGroupElement:W.b,HTMLOptionElement:W.b,HTMLOutputElement:W.b,HTMLParagraphElement:W.b,HTMLParamElement:W.b,HTMLPictureElement:W.b,HTMLPreElement:W.b,HTMLProgressElement:W.b,HTMLQuoteElement:W.b,HTMLScriptElement:W.b,HTMLShadowElement:W.b,HTMLSlotElement:W.b,HTMLSourceElement:W.b,HTMLSpanElement:W.b,HTMLStyleElement:W.b,HTMLTableCaptionElement:W.b,HTMLTableCellElement:W.b,HTMLTableDataCellElement:W.b,HTMLTableHeaderCellElement:W.b,HTMLTableColElement:W.b,HTMLTableElement:W.b,HTMLTableRowElement:W.b,HTMLTableSectionElement:W.b,HTMLTemplateElement:W.b,HTMLTextAreaElement:W.b,HTMLTimeElement:W.b,HTMLTitleElement:W.b,HTMLTrackElement:W.b,HTMLUListElement:W.b,HTMLUnknownElement:W.b,HTMLVideoElement:W.b,HTMLDirectoryElement:W.b,HTMLFontElement:W.b,HTMLFrameElement:W.b,HTMLFrameSetElement:W.b,HTMLMarqueeElement:W.b,HTMLElement:W.b,HTMLAnchorElement:W.aj,HTMLAreaElement:W.ak,CDATASection:W.B,CharacterData:W.B,Comment:W.B,ProcessingInstruction:W.B,Text:W.B,DOMException:W.aq,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,Window:W.G,DOMWindow:W.G,EventTarget:W.G,HTMLFormElement:W.au,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,HTMLObjectElement:W.U,HTMLSelectElement:W.aH})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLObjectElement:true,HTMLSelectElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.ca,[])
else F.ca([])})})()
//# sourceMappingURL=main.dart.js.map
