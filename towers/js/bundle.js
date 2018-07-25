!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){const r=o(1),n=o(2);$(()=>{const t=$(".hanoi"),e=new r;new n(e,t)})},function(t,e){t.exports=class{constructor(){this.towers=[[3,2,1],[],[]]}isValidMove(t,e){const o=this.towers[t],r=this.towers[e];return 0!==o.length&&(0==r.length||o[o.length-1]<r[r.length-1])}isWon(){return 3==this.towers[2].length||3==this.towers[1].length}move(t,e){return!!this.isValidMove(t,e)&&(this.towers[e].push(this.towers[t].pop()),!0)}print(){console.log(JSON.stringify(this.towers))}promptMove(t,e){this.print(),t.question("Enter a starting tower: ",o=>{const r=parseInt(o);t.question("Enter an ending tower: ",t=>{const o=parseInt(t);e(r,o)})})}run(t,e){this.promptMove(t,(o,r)=>{this.move(o,r)||console.log("Invalid move!"),this.isWon()?(this.print(),console.log("You win!"),e()):this.run(t,e)})}}},function(t,e){t.exports=class{constructor(t,e){this.start=null,this.game=t,this.el=e,this.setupTowers(),this.render()}setupTowers(){for(let t=0;t<3;t++){let e=$(`<ul class="p${t}"></ul>`);e.on("click",()=>{console.log(t),this.game.isWon()||(null===this.start?this.start=t:this.game.move(this.start,t)?this.start=null:this.game.isWon()?($("li").css("background-color","green"),alert("Good work, you!")):alert("Invalid Move! Try again."),this.render())}),this.el.append(e);for(let t=3;t>0;t--)e.append($(`<li id='d${t}'></li>`))}}render(){console.log(this.game.towers[0][0]);for(let t=0;t<3;t++)for(let e=0;e<3;e++)void 0!==this.game.towers[t][e]?($(`ul.p${t} li#d${this.game.towers[t][e]}`).css("width",`${60*this.game.towers[t][e]}px`),$(`ul.p${t} li#d${this.game.towers[t][e]}`).show()):$(`ul.p${t} li#d${e+1}`).hide()}}}]);