var te=Object.create;var g=Object.defineProperty,re=Object.defineProperties,oe=Object.getOwnPropertyDescriptor,ne=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,se=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var A=(o,e,r)=>e in o?g(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,f=(o,e)=>{for(var r in e||(e={}))U.call(e,r)&&A(o,r,e[r]);if(v)for(var r of v(e))ue.call(e,r)&&A(o,r,e[r]);return o},x=(o,e)=>re(o,ne(e));var ie=(o,e)=>{for(var r in e)g(o,r,{get:e[r],enumerable:!0})},I=(o,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of ae(e))!U.call(o,a)&&a!==r&&g(o,a,{get:()=>e[a],enumerable:!(s=oe(e,a))||s.enumerable});return o};var _=(o,e,r)=>(r=o!=null?te(se(o)):{},I(e||!o||!o.__esModule?g(r,"default",{value:o,enumerable:!0}):r,o)),de=o=>I(g({},"__esModule",{value:!0}),o);var we={};ie(we,{associatedLedgerAccountLayout:()=>ye,dwLayout:()=>xe,farmAddRewardLayout:()=>Pe,farmLedgerLayoutV3_1:()=>Le,farmLedgerLayoutV3_2:()=>X,farmLedgerLayoutV5_1:()=>ge,farmLedgerLayoutV5_2:()=>H,farmLedgerLayoutV6_1:()=>Z,farmRewardLayout:()=>le,farmRewardRestartLayout:()=>fe,farmRewardTimeInfoLayout:()=>ee,farmStateV3Layout:()=>W,farmStateV5Layout:()=>Y,farmStateV6Layout:()=>z,realFarmStateV3Layout:()=>$,realFarmStateV5Layout:()=>J,realFarmV6Layout:()=>Q,withdrawRewardLayout:()=>pe});module.exports=de(we);var M=require("@solana/web3.js"),P=_(require("bn.js"));var n=require("@solana/buffer-layout"),T=n.Layout,k=n.Structure;var N=n.UInt;var E=n.seq;var w=n.blob;var h=class extends T{constructor(r,s,a){super(r,a);this.blob=w(r),this.signed=s}decode(r,s=0){let a=new P.default(this.blob.decode(r,s),10,"le");return this.signed?a.fromTwos(this.span*8).clone():a}encode(r,s,a=0){return typeof r=="number"&&(r=new P.default(r)),this.signed&&(r=r.toTwos(this.span*8)),this.blob.encode(r.toArrayLike(Buffer,"le",this.span),s,a)}};function m(o){return new N(1,o)}function t(o){return new h(8,!1,o)}function y(o){return new h(16,!1,o)}var V=class extends T{constructor(r,s,a,c){super(r.span,c);this.layout=r,this.decoder=s,this.encoder=a}decode(r,s){return this.decoder(this.layout.decode(r,s))}encode(r,s,a){return this.layout.encode(this.encoder(r),s,a)}getSpan(r,s){return this.layout.getSpan(r,s)}};function u(o){return new V(w(32),e=>new M.PublicKey(e),e=>e.toBuffer(),o)}var R=class extends k{decode(e,r){return super.decode(e,r)}};function i(o,e,r){return new R(o,e,r)}function d(o,e,r){let s,a=typeof e=="number"?e:(0,P.isBN)(e)?e.toNumber():new Proxy(e,{get(c,l){if(!s){let p=Reflect.get(c,"count");s=(0,P.isBN)(p)?p.toNumber():p,Reflect.set(c,"count",s)}return Reflect.get(c,l)},set(c,l,p){return l==="count"&&(s=p),Reflect.set(c,l,p)}});return E(o,a,r)}var L=require("@solana/web3.js");var b=require("lodash"),F=_(require("dayjs")),K=_(require("dayjs/plugin/utc"));F.default.extend(K.default);var B=class{constructor(e){this.logLevel=e.logLevel!==void 0?e.logLevel:0,this.name=e.name}set level(e){this.logLevel=e}get time(){return(0,F.default)().utc().format("YYYY/MM/DD HH:mm:ss UTC")}get moduleName(){return this.name}isLogLevel(e){return e<=this.logLevel}error(...e){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...e),this):this}logWithError(...e){let r=e.map(s=>typeof s=="object"?JSON.stringify(s):s).join(", ");throw new Error(r)}warning(...e){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...e),this):this}info(...e){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...e),this):this}debug(...e){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...e),this):this}},D={},ce={};function G(o){let e=(0,b.get)(D,o);if(!e){let r=(0,b.get)(ce,o);e=new B({name:o,logLevel:r}),(0,b.set)(D,o,e)}return e}var De=G("Raydium_farm_config"),O="EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q",Ke=new L.PublicKey(O),C="9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z",Ge=new L.PublicKey(C),j="FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG",Oe=new L.PublicKey(j),Ce={[O]:3,[C]:5,[j]:6};var je=new L.PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),qe=new L.PublicKey("FrspKwj8i3pNmKwXreTveC4fu7KL5ZbGeXdZBe2XViu1");var q={"Standard SPL":0,"Option tokens":1};var ye=i([m("instruction")]),pe=i([m("instruction")]),me=i([t("rewardState"),t("rewardOpenTime"),t("rewardEndTime"),t("rewardLastUpdateTime"),t("totalReward"),t("totalRewardEmissioned"),t("rewardClaimed"),t("rewardPerSecond"),y("accRewardPerShare"),u("rewardVault"),u("rewardMint"),u("rewardSender"),t("rewardType"),d(t(),15,"padding")]),$=i([t("state"),t("nonce"),u("lpVault"),u("rewardVault"),u(),u(),t(),t(),t("totalReward"),y("perShareReward"),t("lastSlot"),t("perSlotReward")]),J=i([t("state"),t("nonce"),u("lpVault"),u("rewardVaultA"),t("totalRewardA"),y("perShareRewardA"),t("perSlotRewardA"),m("option"),u("rewardVaultB"),w(7),t("totalRewardB"),y("perShareRewardB"),t("perSlotRewardB"),t("lastSlot"),u()]),Q=i([t(),t("state"),t("nonce"),t("validRewardTokenNum"),y("rewardMultiplier"),t("rewardPeriodMax"),t("rewardPeriodMin"),t("rewardPeriodExtend"),u("lpMint"),u("lpVault"),d(me,5,"rewardInfos"),u("creator"),u(),d(t(),32,"padding")]),W=new Proxy($,{get(o,e,r){return e==="decode"?(...s)=>{let a=o.decode(...s);return x(f({},a),{version:3,rewardInfos:[{rewardVault:a.rewardVault,totalReward:a.totalReward,perSlotReward:a.perSlotReward,perShareReward:a.perShareReward}]})}:Reflect.get(o,e,r)}}),Y=new Proxy(J,{get(o,e,r){return e==="decode"?(...s)=>{let a=o.decode(...s);return x(f({},a),{version:5,rewardInfos:[{rewardVault:a.rewardVaultA,totalReward:a.totalRewardA,perSlotReward:a.perSlotRewardA,perShareReward:a.perShareRewardA},{rewardVault:a.rewardVaultB,totalReward:a.totalRewardB,perSlotReward:a.perSlotRewardB,perShareReward:a.perShareRewardB}]})}:Reflect.get(o,e,r)}}),z=new Proxy(Q,{get(o,e,r){return e==="decode"?(...s)=>{let a=o.decode(...s);return x(f({},a),{version:6,rewardInfos:a.rewardInfos.map(c=>{var l;return x(f({},c),{rewardType:((l=Object.entries(q).find(p=>String(p[1])===c.rewardType.toString()))!=null?l:["Standard SPL"])[0]})})})}:Reflect.get(o,e,r)}}),ee=i([t("isSet"),t("rewardPerSecond"),t("rewardOpenTime"),t("rewardEndTime"),t("rewardType")]),le=i([m("instruction"),t("nonce"),d(ee,5,"rewardTimeInfo")]),fe=i([m("instruction"),t("rewardReopenTime"),t("rewardEndTime"),t("rewardPerSecond")]),Pe=i([m("instruction"),t("isSet"),t("rewardPerSecond"),t("rewardOpenTime"),t("rewardEndTime")]),Le=i([t("state"),u("id"),u("owner"),t("deposited"),d(t(),1,"rewardDebts")]),X=i([t("state"),u("id"),u("owner"),t("deposited"),d(y(),1,"rewardDebts"),d(t(),17)]),ge=i([t("state"),u("id"),u("owner"),t("deposited"),d(t(),2,"rewardDebts")]),H=i([t("state"),u("id"),u("owner"),t("deposited"),d(y(),2,"rewardDebts"),d(t(),17)]),Z=i([t(),t("state"),u("id"),u("owner"),t("deposited"),d(y(),5,"rewardDebts"),d(t(),16)]),xe=i([m("instruction"),t("amount")]);0&&(module.exports={associatedLedgerAccountLayout,dwLayout,farmAddRewardLayout,farmLedgerLayoutV3_1,farmLedgerLayoutV3_2,farmLedgerLayoutV5_1,farmLedgerLayoutV5_2,farmLedgerLayoutV6_1,farmRewardLayout,farmRewardRestartLayout,farmRewardTimeInfoLayout,farmStateV3Layout,farmStateV5Layout,farmStateV6Layout,realFarmStateV3Layout,realFarmStateV5Layout,realFarmV6Layout,withdrawRewardLayout});
//# sourceMappingURL=layout.js.map