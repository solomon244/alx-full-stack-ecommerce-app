import{u as m,g as w,c as f,r as d,a as i,o as e,b as o,d as t,F as k,e as b,t as l}from"./index.c36cb58f.js";const z={key:0},V={key:1},M={key:2,class:"overflow-x-scroll"},C={class:"w-full pt-2 text-sm text-left text-gray-500 dark:text-gray-400"},B=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{class:"py-3 px-2"},"First name"),t("th",{class:"py-3 px-2"},"Last Name"),t("th",{class:"py-3 px-2"},"Email"),t("th",{class:"py-3 px-2"},"Created at"),t("th",{class:"py-3 px-2"},"address"),t("th",{class:"py-3 px-2"},"action")])],-1),A={class:"px-2"},H={class:"py-3 px-2"},L={class:"py-3 px-2"},F={class:"py-3 px-2"},S={class:"py-3 px-2"},q={class:"py-3 px-2"},D={class:"py-3 px-2"},E={class:"flex space-x-2"},N=["onClick"],P=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eye",viewBox:"0 0 16 16"},[t("path",{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}),t("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"})],-1),Q=[P],$=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"green",class:"bi bi-pencil",viewBox:"0 0 16 16"},[t("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})],-1),I=[$],j=["onClick"],G=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",class:"bi bi-trash",viewBox:"0 0 16 16"},[t("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),t("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})],-1),J=[G],R={__name:"Buyer",setup(K){const{error:n,result:_,loading:h}=m(w`
query MyQuery {
  buyer {
    created_at
    address
    email
    first_name
    last_name
    id
  }
}
`,{fetchPolicy:"network-only"}),p=f(()=>{var a,c;return(c=(a=_.value)==null?void 0:a.buyer)!=null?c:[]}),r=d(0),g=()=>{},x=a=>{r.value=a,isDelete.value=!0},u=d(!1),v=a=>{r.value=a,u.value=!0};return d(!1),(a,c)=>i(n)?(e(),o("div",z,"error loading api")):i(h)?(e(),o("div",V,"loading API")):(e(),o("div",M,[t("table",C,[B,t("tbody",A,[(e(!0),o(k,null,b(i(p),s=>(e(),o("tr",{key:s.id,class:"bg-white border-b dark:bg-gray-900 dark:border-gray-700"},[t("td",H,l(s.first_name),1),t("td",L,l(s.last_name),1),t("td",F,l(s.email),1),t("td",S,l(s.created_at),1),t("td",q,l(s.address),1),t("td",D,[t("div",E,[t("button",{onClick:y=>v(s.id)},Q,8,N),t("button",{onClick:g},I),t("button",{onClick:y=>x(s.id)},J,8,j)])])]))),128))])])]))}};export{R as default};