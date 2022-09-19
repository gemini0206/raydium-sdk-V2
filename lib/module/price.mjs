import s from"bn.js";import Z from"big.js";import we from"bn.js";import{get as P,set as K}from"lodash";import E from"dayjs";import j from"dayjs/plugin/utc";E.extend(j);var y=class{constructor(e){this.logLevel=e.logLevel!==void 0?e.logLevel:0,this.name=e.name}set level(e){this.logLevel=e}get time(){return E().utc().format("YYYY/MM/DD HH:mm:ss UTC")}get moduleName(){return this.name}isLogLevel(e){return e<=this.logLevel}error(...e){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...e),this):this}logWithError(...e){let r=e.map(o=>typeof o=="object"?JSON.stringify(o):o).join(", ");throw new Error(r)}warning(...e){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...e),this):this}info(...e){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...e),this):this}debug(...e){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...e),this):this}},F={},Y={};function p(t){let e=P(F,t);if(!e){let r=P(Y,t);e=new y({name:t,logLevel:r}),K(F,t,e)}return e}import H from"toformat";var I=H,d=I;import w from"big.js";import X from"decimal.js-light";var N=p("module/fraction"),B=d(w),f=d(X),z={[0]:f.ROUND_DOWN,[1]:f.ROUND_HALF_UP,[2]:f.ROUND_UP},$={[0]:w.roundDown,[1]:w.roundHalfUp,[2]:w.roundUp},n=class{constructor(e,r=U){this.numerator=c(e),this.denominator=c(r)}get quotient(){return this.numerator.div(this.denominator)}invert(){return new n(this.denominator,this.numerator)}add(e){let r=e instanceof n?e:new n(c(e));return this.denominator.eq(r.denominator)?new n(this.numerator.add(r.numerator),this.denominator):new n(this.numerator.mul(r.denominator).add(r.numerator.mul(this.denominator)),this.denominator.mul(r.denominator))}sub(e){let r=e instanceof n?e:new n(c(e));return this.denominator.eq(r.denominator)?new n(this.numerator.sub(r.numerator),this.denominator):new n(this.numerator.mul(r.denominator).sub(r.numerator.mul(this.denominator)),this.denominator.mul(r.denominator))}mul(e){let r=e instanceof n?e:new n(c(e));return new n(this.numerator.mul(r.numerator),this.denominator.mul(r.denominator))}div(e){let r=e instanceof n?e:new n(c(e));return new n(this.numerator.mul(r.denominator),this.denominator.mul(r.numerator))}toSignificant(e,r={groupSeparator:""},o=1){Number.isInteger(e)||N.logWithError(`${e} is not an integer.`),e<=0&&N.logWithError(`${e} is not positive.`),f.set({precision:e+1,rounding:z[o]});let a=new f(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(e);return a.toFormat(a.decimalPlaces(),r)}toFixed(e,r={groupSeparator:""},o=1){return Number.isInteger(e)||N.logWithError(`${e} is not an integer.`),e<0&&N.logWithError(`${e} is negative.`),B.DP=e,B.RM=$[o]||1,new B(this.numerator.toString()).div(this.denominator.toString()).toFormat(e,r)}isZero(){return this.numerator.isZero()}};var Le=p("Raydium_amount"),Te=d(Z);import{PublicKey as G}from"@solana/web3.js";var M={symbol:"SOL",name:"Solana",decimals:9},l={symbol:"WSOL",name:"Wrapped SOL",mint:"So11111111111111111111111111111111111111112",decimals:9,extensions:{coingeckoId:"solana"}},Fe={isQuantumSOL:!0,isLp:!1,official:!0,mint:new G(l.mint),decimals:9,symbol:"SOL",id:"sol",name:"solana",icon:"https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",extensions:{coingeckoId:"solana"}};import{PublicKey as S}from"@solana/web3.js";import{TOKEN_PROGRAM_ID as V}from"@solana/spl-token";import{PublicKey as i,SystemProgram as Q,SYSVAR_RENT_PUBKEY as ee}from"@solana/web3.js";function x({pubkey:t,isSigner:e=!1,isWritable:r=!0}){return{pubkey:t,isWritable:r,isSigner:e}}var ve=[x({pubkey:V,isWritable:!1}),x({pubkey:Q.programId,isWritable:!1}),x({pubkey:ee,isWritable:!1})];function q({publicKey:t,transformSol:e}){if(t instanceof i)return e&&t.equals(b)?v:t;if(e&&t===b.toBase58())return v;if(typeof t=="string")try{return new i(t)}catch{throw new Error("invalid public key")}throw new Error("invalid public key")}var qe=new i("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),Ce=new i("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"),Ae=new i("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),_e=new i("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),Ke=new i("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),je=new i("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),Ye=new i("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"),He=new i("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"),Ie=new i("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa"),Xe=new i("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo"),ze=new i("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),v=new i("So11111111111111111111111111111111111111112"),b=i.default;var D=class{constructor({mint:e,decimals:r,symbol:o="UNKNOWN",name:a="UNKNOWN",skipMint:W=!1}){if(e===b.toBase58()||e instanceof S&&b.equals(e)){this.decimals=l.decimals,this.symbol=l.symbol,this.name=l.name,this.mint=new S(l.mint);return}this.decimals=r,this.symbol=o,this.name=a,this.mint=W?S.default:q({publicKey:e})}equals(e){return this===e?!0:this.mint.equals(e.mint)}},h=D;h.WSOL=new D(l);var T=class{constructor({decimals:e,symbol:r="UNKNOWN",name:o="UNKNOWN"}){this.decimals=e,this.symbol=r,this.name=o}equals(e){return this===e}},L=T;L.SOL=new T(M);var sr=new n(C);var k=p("Raydium_bignumber");var Br=new s(0),U=new s(1),xr=new s(2),Sr=new s(3),Dr=new s(5),R=new s(10),C=new s(100),Lr=new s(1e3),Tr=new s(1e4),A=9007199254740991;function c(t){if(t instanceof s)return t;if(typeof t=="string"){if(t.match(/^-?[0-9]+$/))return new s(t);k.logWithError(`invalid BigNumberish string: ${t}`)}return typeof t=="number"?(t%1&&k.logWithError(`BigNumberish number underflow: ${t}`),(t>=A||t<=-A)&&k.logWithError(`BigNumberish number overflow: ${t}`),new s(String(t))):typeof t=="bigint"?new s(t.toString()):(k.logWithError(`invalid BigNumberish value: ${t}`),new s(0))}function O(t){return R.pow(c(t))}var re=p("Raydium_price"),g=class extends n{constructor(r){let{baseToken:o,quoteToken:a,numerator:W,denominator:_}=r;super(W,_);this.baseToken=o,this.quoteToken=a,this.scalar=new n(O(o.decimals),O(a.decimals))}get raw(){return new n(this.numerator,this.denominator)}get adjusted(){return super.mul(this.scalar)}invert(){return new g({baseToken:this.quoteToken,quoteToken:this.baseToken,denominator:this.numerator,numerator:this.denominator})}mul(r){this.quoteToken!==r.baseToken&&re.logWithError("mul token not equals");let o=super.mul(r);return new g({baseToken:this.baseToken,quoteToken:r.quoteToken,denominator:o.denominator,numerator:o.numerator})}toSignificant(r=this.quoteToken.decimals,o,a){return this.adjusted.toSignificant(r,o,a)}toFixed(r=this.quoteToken.decimals,o,a){return this.adjusted.toFixed(r,o,a)}};export{g as Price};
//# sourceMappingURL=price.mjs.map