(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{102:function(e,t,n){e.exports={Header:"Header_Header__RWSel",HeaderHome:"Header_HeaderHome__4fkBX Header_Header__RWSel",HeaderGame:"Header_HeaderGame__20foV Header_Header__RWSel",ProfileButton:"Header_ProfileButton__77GX2"}},103:function(e,t,n){e.exports={Home:"Home_Home__1aUBM",Content:"Home_Content__2ue8L",Or:"Home_Or__1IcPt","wallet-adapter-button":"Home_wallet-adapter-button__S-GGy"}},161:function(e,t,n){},163:function(e,t){},167:function(e,t){},187:function(e,t){},188:function(e,t){},226:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(96),c=n.n(s),r=(n(161),n(10)),i=n(21),l=n(95),o=n(5),d=n(272),u=n(274),b=n(275),j=n(276),h=n(153),O=n(277),f=n(271),p=n(6),x=n(1),m=n.n(x),_=n(42),g=n.n(_),y=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/games/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.entries);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/games/play/".concat(n),{gameType:n.substring(8),user:t});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=n(123),R=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/users/login",{user:t},{headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/users/history/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=n(102),P=n.n(C),N=n(4),S=function(e){var t=e.user,n=e.onProfileClick,a="184px";return Object(N.jsxs)("div",{className:t?P.a.HeaderGame:P.a.HeaderHome,children:[Object(N.jsx)("div",{style:{minWidth:a},children:Object(N.jsxs)("p",{children:["The ",Object(N.jsx)("b",{children:"ACES"})]})}),Object(N.jsxs)("p",{children:["The ",Object(N.jsx)("b",{children:"ACES Contest"})]}),Object(N.jsx)("div",{style:{minWidth:a},children:Object(N.jsx)("button",{className:P.a.ProfileButton,onClick:n,style:t?{width:a}:{display:"none"},children:"PROFILE"})})]})},T=n(103),H=n.n(T);n(225),n(226);var A=function(e){var t=e.wallet,n=Object(a.useState)(!1),s=Object(r.a)(n,2),c=s[0],l=s[1];return Object(a.useEffect)((function(){t.publicKey&&(R(t.publicKey.toString()),l(!0))}),[t]),c?Object(N.jsx)(i.a,{to:"/play"}):Object(N.jsxs)("div",{className:H.a.Home,children:[Object(N.jsx)(S,{user:!1,onProfileClick:function(){}}),Object(N.jsxs)("div",{className:H.a.Content,children:[Object(N.jsx)(k.a,{children:Object(N.jsx)(k.b,{children:"PLAY"})}),Object(N.jsxs)("div",{className:H.a.Or,children:[Object(N.jsx)("div",{}),Object(N.jsx)("hr",{}),Object(N.jsx)("p",{children:"Or"}),Object(N.jsx)("hr",{})]}),Object(N.jsx)("a",{href:"https://www.magiceden.io/marketplace/the_aces_nft",children:"BUY"}),Object(N.jsx)("p",{children:"In Order to Play the Game You Must Hold At Least 1 Aces NFT"}),Object(N.jsxs)("p",{children:["This version is in ",Object(N.jsx)("b",{children:"Beta Mode"})]})]})]})},K=n(64),B=n(30),D=n.n(B),I=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],F=new Date,G=(new Date(F.getTime()+6e4*F.getTimezoneOffset()),new o.PublicKey("CdQseFmnPh2JBiz5747dJ6oYXK9NKnbdFRfiXTcZuaXT")),W=new o.PublicKey("3y5BXpxZsKqEab8HNYVx2MN77bkiZmCtpZ74RnXkrqjM"),L=function(e){var t,n=e.wallet,s=e.gameId,c=e.rank,i=e.setRank,l=e.rankings,d=e.setRankings,u=e.reloadRankings,b=e.setReloadRankings,j=e.pacesBalance,h=e.reloadPaces,O=e.setReloadPaces,f=Object(a.useState)([]),p=Object(r.a)(f,2),x=p[0],m=p[1],_=Object(a.useState)([]),g=Object(r.a)(_,2),k=g[0],R=g[1],w=Object(a.useState)(),C=Object(r.a)(w,2),P=C[0],S=C[1];t="tourney"===s.substring(0,7)?-1:20;var T=Object(a.useState)(t),H=Object(r.a)(T,2),A=H[0],B=H[1];Object(a.useEffect)((function(){P&&0===u&&(m(P.aces?P.aces:[]),R(P.wildCards))}),[n.publicKey,s,P,u,m,R]),Object(a.useEffect)((function(){if(l){var e=l.map((function(e){return e.user})).indexOf(n.publicKey.toString());-1!==e&&S(l[e]);for(var t=0,a=0;a<l.length;a++)l[a].user===n.publicKey.toString()&&(t+=1);B(t)}}),[n.publicKey,l,B]);var F=Object(a.useState)("PLAY AGAIN"),L=Object(r.a)(F,2),E=L[0],M=L[1],Y=function(){M("Thinking...");var e=new o.Connection("https://solana-api.projectserum.com"),t=new o.PublicKey(G),a=new o.PublicKey(W),c=new o.PublicKey(t);Object(K.c)(e,n.publicKey,c,n.publicKey,n.signTransaction).then((function(t){console.log(t.address.toString()),Object(K.c)(e,n.publicKey,c,a,n.signTransaction).then((function(c){console.log(c.address.toString());var r=(new o.Transaction).add(Object(K.b)(t.address,c.address,n.publicKey,5,[],K.a));e.getRecentBlockhash().then((function(t){console.log(t),r.recentBlockhash=t.blockhash,r.feePayer=n.publicKey,n.signTransaction(r).then((function(t){v(n.publicKey,s).then((function(c){c&&c!=={}&&(m(c.aces),R(c.wildCards),n.publicKey&&y(s).then((function(e){if(d(e),e){var t=e.map((function(e){return e.user})).indexOf(n.publicKey.toString());i(-1===t?"?":t+1),-1!==t&&S(e[t])}})),console.log("setting state"),b(u+1),O(h+1),M("PLAY AGAIN"),console.log("state set"),e.sendRawTransaction(t.serialize()).then((function(e){console.log("".concat(5," PACES transferred to ").concat(a.toString(),". Tx signature: ").concat(e))})).catch((function(e){return console.log("Failed sending transaction.")})))}))})).catch((function(e){M("PLAY AGAIN"),console.log("Transaction signature cancelled.")}))}))}))}))};return Object(N.jsx)("div",{className:D.a.DashContainer,children:Object(N.jsxs)("div",{className:D.a.Dashboard,children:[Object(N.jsx)("div",{className:D.a.Play,children:P?P.handType?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{children:"".concat((P.handType[0].toUpperCase()+P.handType.slice(1)).replace("-"," "))}),Object(N.jsx)("div",{className:D.a.Hand,children:P.hand.sort((function(e,t){return I.indexOf(1===t.face.length?t.face:t.face[0].toUpperCase())-I.indexOf(1===e.face.length?e.face:e.face[0].toUpperCase())})).map((function(e,t){return Object(N.jsx)("div",{children:e.image?Object(N.jsx)("img",{src:e.image,alt:e.face+" of "+e.suit}):Object(N.jsx)("img",{src:"/images/wildCards/".concat(e.face.toUpperCase()).concat(e.suit,".png"),alt:e.face.toUpperCase()+" of "+e.suit})},t)}))}),Object(N.jsxs)("div",{className:D.a.Replay,children:[Object(N.jsxs)("div",{className:D.a.Stats,children:[Object(N.jsxs)("p",{children:[Object(N.jsx)("b",{children:"Rank: "}),l?"".concat(c,"/").concat(l.length):""]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("b",{children:"Entries: "}),-1!==t?"".concat(A,"/").concat(t):"".concat(A)]})]}),Object(N.jsx)("button",{onClick:function(){return Y()},disabled:!!(A&&A>=t&&-1!==t||"PLAY AGAIN"!==E||0===x.length),children:E})]})]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{children:"Need at least 1 Aces NFT to play the card contest."}),Object(N.jsx)("button",{disabled:!j||j<5,onClick:function(){return Y()},children:"PLAY"}),Object(N.jsx)("p",{children:l?"Rank: ".concat(c,"/").concat(l.length):"Rank"})]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{children:"Best Hand"}),Object(N.jsx)("button",{onClick:function(){return Y()},disabled:!j||j<5,children:"PLAY"}),Object(N.jsx)("p",{children:l?"Rank: ".concat(c,"/").concat(l.length):"Rank"})]})}),Object(N.jsx)("hr",{}),Object(N.jsx)("div",{className:D.a.Cards,children:Object(N.jsxs)("div",{className:D.a.CardGrid,children:[Object(N.jsx)("div",{className:D.a.Headline,children:Object(N.jsx)("p",{children:"Table Cards"})}),k.map((function(e,t){return Object(N.jsx)("div",{className:D.a.Card,children:Object(N.jsx)("img",{src:"/images/wildCards/".concat(e.face.toUpperCase()).concat(e.suit,".png"),alt:e.face+" of "+e.suit})},t)})),Object(N.jsx)("div",{className:D.a.Headline,children:Object(N.jsx)("p",{children:"ACES"})}),x&&x.length>0?x.map((function(e,t){return Object(N.jsx)("div",{className:D.a.Card,children:Object(N.jsx)("img",{src:e.image,alt:e.face+" of "+e.suit})},t)})):Object(N.jsx)(N.Fragment,{})]})})]})})},E=n(59),M=n.n(E),Y=function(e){var t,n=e.rankings,s=e.rank,c=e.wallet,i=e.gameId,l=e.setIsRulesOpen;t="deuceswild"===i.substring(8)?"Deuces Wild":"4swild"===i.substring(8)?"4's Wild":"secretwild"===i.substring(8)?"Secret Wild":"8swild"===i.substring(8)?"8's Wild":"6swild"===i.substring(8)?"6's Wild":"tourney0"===i.substring(0,8)?"February Card Contest Tourney":"Five Card Poker";var o=Object(a.useState)(),d=Object(r.a)(o,2),u=d[0],b=d[1];return Object(a.useEffect)((function(){if(n){var e;e=(e=s<=5||"?"===s?n.slice(0,Math.min(10,n.length)):s>n.length-5?n.slice(n.length-Math.min(10,n.length),n.length):n.slice(s-Math.min(5,n.length/2),s).concat(n.slice(s,s+Math.min(5,n.length/2)))).map((function(e){return{rank:0,user:e.user}}));for(var t=-1,a=0;a<e.length;a++)if(e[a].user===c.publicKey.toString()){t=a;break}if(-1===t)b(n.slice(0,Math.min(10,n.length)).map((function(e,t){return{rank:t+1,user:e.user}})));else{for(var r=0;r<e.length;r++)e[r].rank=t!==r?s+r-t:s;b(e)}}}),[n,s,c.publicKey,b]),Object(N.jsxs)("div",{className:M.a.LeaderboardContainer,children:[Object(N.jsxs)("div",{className:M.a.Leaderboard,children:[Object(N.jsxs)("h1",{children:["Leaderboard: ",t]}),Object(N.jsx)("hr",{}),Object(N.jsx)("ul",{children:u?u.map((function(e,t){return Object(N.jsx)("li",{className:Number(e.rank)===Number(s)?M.a.BoldRank:"",children:"#".concat(e.rank,": ")+e.user},t)})):Object(N.jsx)(N.Fragment,{})})]}),Object(N.jsx)("button",{className:M.a.RulesButton,onClick:function(){return l(!0)},children:"RULES"})]})},X=n(45),U=n.n(X),z=function(e){var t=e.wallet,n=e.isProfileOpen,s=e.setIsProfileOpen,c=e.pacesBalance,i=Object(a.useState)(),l=Object(r.a)(i,2),o=l[0],d=l[1];return Object(a.useEffect)((function(){w(t.publicKey.toString()).then((function(e){d(e)}))}),[t.publicKey,d]),Object(N.jsx)("div",{className:n?U.a.ProfileBlock:U.a.ProfileNone,children:Object(N.jsxs)("div",{className:U.a.ProfileMain,children:[Object(N.jsx)("button",{onClick:function(){return s(!1)}}),Object(N.jsxs)("div",{className:U.a.ProfileInner,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{children:"Wallet ID"}),Object(N.jsx)("p",{style:{overflow:"hidden",textOverflow:"ellipsis",maxWidth:"50%"},children:t.publicKey.toString()})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{children:"Games played:"}),Object(N.jsx)("p",{children:null!==o&&void 0!==o&&o.games?o.games.length:"0"})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{children:"Coin balance:"}),Object(N.jsx)("p",{children:c||0})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{children:"Contest history:"}),Object(N.jsx)("div",{className:U.a.History,children:null!==o&&void 0!==o&&o.games?o.games.slice(0,5).map((function(e,t){return"testtest"!==e.substring(0,8)?Object(N.jsx)("div",{className:U.a.HistoryEntry,children:"".concat("deuceswild"===e.substring(8)?"2's Wild ":"4swild"===e.substring(8)?"4's Wild":"secretwild"===e.substring(8)?"Secret Wild":"8swild"===e.substring(8)?"8's Wild":"6swild"===e.substring(8)?"6's Wild":"tourney0"===e.substring(0,8)?"February Card Contest Tourney":"Classic 5 Card","\n                                                ").concat("tourney"!==e.substring(0,7)?String(Number(e.substring(2,4))+1).padStart(2,"0"):"","/").concat(e.substring(0,2)," - \n                                                Rank ").concat(o.ranks[t],"/").concat(o.totals[t])},t):Object(N.jsx)(N.Fragment,{})})):Object(N.jsx)(N.Fragment,{})})]})]})]})})},J=n(60),Z=n.n(J),Q=function(e){var t=e.isRulesOpen,n=e.setIsRulesOpen;return Object(N.jsx)("div",{className:t?Z.a.RulesBlock:Z.a.RulesNone,children:Object(N.jsxs)("div",{className:Z.a.RulesMain,children:[Object(N.jsx)("button",{onClick:function(){return n(!1)}}),Object(N.jsx)("div",{className:Z.a.RulesInner,children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:"The Aces Card Contest runs every day from 12AM-11:59PM UTC."}),Object(N.jsx)("li",{children:'You get up to 20 entries per day, with each entry providing you with 4 new "Table Cards."'}),Object(N.jsx)("li",{children:"Each entry, you will get up to 10 of your Aces NFTs randomly drawn from your deck alone with those 4 Table Cards to make your best hand."}),Object(N.jsx)("li",{children:"After you enter, your entry's respective Aces and Table Cards will appear on the bottom of the screen. The top shows your best entry from the current contest."}),Object(N.jsx)("li",{children:"Currently, the contest is \"Best 5 Card Poker Hand.\" This game has variants such as 2's Wild and 4's Wild, which provides players with another wild card (on top of the Joker) to increase their chances of drawing low probability hands."}),Object(N.jsxs)("li",{children:["By definition, a ",Object(N.jsx)("b",{children:"Table Card"})," is a random card drawn from a normal deck of 52 cards. These cannot be Jokers nor wild."]}),Object(N.jsxs)("li",{children:["An ",Object(N.jsx)("b",{children:"Aces Card"})," is a card you own by owning an ",Object(N.jsx)("b",{children:"Aces NFT"}),". These can be jokers, wild, and are repeatable (i.e. you can draw 2 Ace of Spades if you own them)."]})]})})]})})},V=n(61),q=n.n(V),$=function(e){var t=e.wallet,n=e.gameId,s=e.rankings,c=e.setRankings,l=e.reloadRankings,o=e.setReloadRankings,d=e.pacesBalance,u=e.setReloadPaces,b=Object(a.useState)(!1),j=Object(r.a)(b,2),h=j[0],O=j[1],f=Object(a.useState)(!1),p=Object(r.a)(f,2),x=p[0],m=p[1],_=Object(a.useState)("?"),g=Object(r.a)(_,2),y=g[0],v=g[1];return Object(a.useEffect)((function(){if(null!==t&&void 0!==t&&t.publicKey)if(s){var e=s.map((function(e){return e.user})).indexOf(t.publicKey.toString());v(-1===e?"?":e+1)}else v("?")}),[t,n,s,v]),t.publicKey?Object(N.jsxs)("div",{className:q.a.Game,children:[Object(N.jsx)("p",{children:Object(N.jsx)("b",{children:"BETA"})}),Object(N.jsxs)("div",{className:q.a.Content,children:[Object(N.jsxs)("div",{className:q.a.GameArea,children:[Object(N.jsx)(S,{user:!0,onProfileClick:function(){return O(!0)}}),Object(N.jsx)(L,{wallet:t,gameId:n,rankings:s,rank:y,reloadRankings:l,setRankings:c,setRank:v,setReloadRankings:o,pacesBalance:d,setReloadPaces:u})]}),Object(N.jsx)("div",{className:q.a.Rankings,children:Object(N.jsx)(Y,{wallet:t,gameId:n,rankings:s,rank:y,setIsRulesOpen:m})})]}),Object(N.jsx)(z,{wallet:t,isProfileOpen:h,setIsProfileOpen:O,pacesBalance:d}),Object(N.jsx)(Q,{isRulesOpen:x,setIsRulesOpen:m})]}):Object(N.jsx)(i.a,{to:"/"})},ee=new o.PublicKey("CdQseFmnPh2JBiz5747dJ6oYXK9NKnbdFRfiXTcZuaXT"),te=function(){var e=Object(h.b)(),t=new Date,n=new Date(t.getTime()+6e4*t.getTimezoneOffset()),s=String(n.getDate()).padStart(2,"0")+String(n.getMonth()+1).padStart(2,"0")+String(n.getFullYear())+"5card",c=Object(a.useState)(!1),l=Object(r.a)(c,2),d=l[0],u=l[1],b=Object(a.useState)(0),j=Object(r.a)(b,2),O=j[0],f=j[1],p=Object(a.useState)(),x=Object(r.a)(p,2),m=x[0],_=x[1],g=Object(a.useState)(0),v=Object(r.a)(g,2),k=v[0],R=v[1];return Object(a.useEffect)((function(){y(s).then((function(e){u(e||[])}))}),[e,s,O,u]),Object(a.useEffect)((function(){e.publicKey&&new o.Connection("https://solana-api.projectserum.com").getParsedTokenAccountsByOwner(e.publicKey,{mint:ee}).then((function(e){_(e.value[0].account.data.parsed.info.tokenAmount.amount||0),console.log(e)})).catch((function(e){return console.log(e)}))}),[e,k,_]),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(i.d,{children:[Object(N.jsx)(i.b,{path:"/",element:Object(N.jsx)(A,{wallet:e})}),Object(N.jsx)(i.b,{path:"/play",element:Object(N.jsx)($,{wallet:e,gameId:s,rankings:d,setRankings:u,reloadRankings:O,setReloadRankings:f,pacesBalance:m,setReloadPaces:R})})]})})},ne=function(){var e=Object(a.useMemo)((function(){return[Object(d.a)(),Object(u.a)(),Object(b.a)(),Object(j.a)()]}),[]);return Object(N.jsx)(O.a,{endpoint:"https://solana-api.projectserum.com",children:Object(N.jsx)(f.a,{wallets:e,children:Object(N.jsx)(l.a,{children:Object(N.jsx)(te,{})})})})};c.a.render(Object(N.jsx)(ne,{}),document.getElementById("root"))},30:function(e,t,n){e.exports={DashContainer:"Dashboard_DashContainer__G4W5n",Dashboard:"Dashboard_Dashboard__1uK3T",Play:"Dashboard_Play__1d_2z",Replay:"Dashboard_Replay__2R53y",Hand:"Dashboard_Hand__17d2t",Cards:"Dashboard_Cards__2XYZz",CardGrid:"Dashboard_CardGrid__2Vfkb",Headline:"Dashboard_Headline__3lSWr",Card:"Dashboard_Card__2tCQ2",Stats:"Dashboard_Stats__1e_pm",RulesButton:"Dashboard_RulesButton__1Da-z",Footer:"Dashboard_Footer__CVF82"}},45:function(e,t,n){e.exports={Profile:"Profile_Profile__nD2-Z",ProfileMain:"Profile_ProfileMain__18I6y",ProfileInner:"Profile_ProfileInner__risdd",ProfileBlock:"Profile_ProfileBlock__1_2dO Profile_Profile__nD2-Z",ProfileNone:"Profile_ProfileNone__ePzbk Profile_Profile__nD2-Z",History:"Profile_History__3oShl",HistoryEntry:"Profile_HistoryEntry__3jN5Y"}},59:function(e,t,n){e.exports={LeaderboardContainer:"Leaderboard_LeaderboardContainer__DjWNe",Leaderboard:"Leaderboard_Leaderboard__1JspY",BoldRank:"Leaderboard_BoldRank__2L6LA",RulesButton:"Leaderboard_RulesButton__2pujK"}},60:function(e,t,n){e.exports={Rules:"Rules_Rules__24oWh",RulesMain:"Rules_RulesMain___9aKG",RulesInner:"Rules_RulesInner__1ZpXD",RulesBlock:"Rules_RulesBlock__sU4FC Rules_Rules__24oWh",RulesNone:"Rules_RulesNone__2rXF0 Rules_Rules__24oWh"}},61:function(e,t,n){e.exports={Game:"Game_Game__1qzE8",Content:"Game_Content__2W_3p",GameArea:"Game_GameArea__38dyN",Rankings:"Game_Rankings__1yrWx"}}},[[264,1,2]]]);
//# sourceMappingURL=main.a60774d7.chunk.js.map