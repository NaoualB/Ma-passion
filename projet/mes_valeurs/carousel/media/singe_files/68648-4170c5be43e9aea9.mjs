(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[68648],{661966:(e,t,n)=>{n.d(t,{fm:()=>i,q6:()=>r,kM:()=>a,MZ:()=>I,vJ:()=>A,qp:()=>O,GY:()=>p,Vn:()=>S,Dl:()=>R,uV:()=>D,$N:()=>N});const i={DOWNLOAD_TEMPLATE:"DOWNLOAD_TEMPLATE",UPLOAD_TEMPLATE:"UPLOAD_TEMPLATE",HISTORY:"HISTORY",RESOURCES:"RESOURCES"},r={GENERAL:"GENERAL",CAMPAIGNS:"CAMPAIGNS",AD_GROUPS:"AD_GROUPS",ADS:"ADS",KEYWORDS:"KEYWORDS",PRODUCT_GROUPS:"PRODUCT_GROUPS",ERROR_CODES:"ERROR_CODES"},a={BILLING_HISTORY:"BILLING_HISTORY",BILLING_FORMS:"BILLING_FORMS",ORDER_LINES:"ORDER_LINES",PROMOTIONS:"PROMOTIONS",DOCUMENTS:"DOCUMENTS"},o="Shopify",s="WordPress",l="WooCommerce",_="Weebly",c="Tealium",u="Magento",d="Squarespace",T="Ecwid",E="Bigcommerce",I={GOOGLE_TAG_MANAGER:"Google Tag Manager",SHOPIFY:"Shopify",WOO_COMMERCE:"WooCommerce",WORDPRESS:"WordPress",SQUARESPACE:"Squarespace",WEEBLY:"Weebly",TEALIUM:"Tealium",MAGENTO:"Magento",ECWID:"Ecwid",BIG_COMMERCE:"BigCommerce"},A={["Google Tag Manager"]:I.GOOGLE_TAG_MANAGER,[o]:I.SHOPIFY,[l]:I.WOO_COMMERCE,[s]:I.WORDPRESS,[d]:I.SQUARESPACE,[_]:I.WEEBLY,[c]:I.TEALIUM,[u]:I.MAGENTO,[T]:I.ECWID,[E]:I.BIG_COMMERCE},O={PINTEREST_TAG:"PINTEREST_TAG",PINTEREST_TAG_EVENTS:"PINTEREST_TAG_EVENTS",PINTEREST_TAG_HISTORY:"PINTEREST_TAG_HISTORY",PINTEREST_TAG_HEALTH:"PINTEREST_TAG_HEALTH",CONVERSION_UPLOAD:"CONVERSION_UPLOAD",UPLOAD_HISTORY:"UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD:"PCA_UPLOAD"},p={PINTEREST_TAG_DASHBOARD:"PINTEREST_TAG_DASHBOARD",PINTEREST_TAG_LANDING:"PINTEREST_TAG_LANDING",PINTEREST_TAG_INSTRUCTIONS:"PINTEREST_TAG_INSTRUCTIONS",PINTEREST_TAG_HISTORY:"PINTEREST_TAG_HISTORY",CONVERSION_UPLOAD_LANDING:"CONVERSION_UPLOAD_LANDING",CONVERSION_UPLOAD_VALIDATION:"CONVERSION_UPLOAD_VALIDATION",CONVERSION_UPLOAD_HISTORY:"CONVERSION_UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD_LANDING:"PCA_UPLOAD_LANDING",PCA_UPLOAD_VALIDATION:"PCA_UPLOAD_VALIDATION"},S={UNREAD:"UNREAD",READ:"READ",ACCEPTED:"ACCEPTED",REJECTED:"REJECTED",DISMISSED:"DISMISSED",INVALID:"INVALID",MUTED:"MUTED",SNOOZED:"SNOOZED",PMP_REPORTED:"PMP_REPORTED",EMAILED:"EMAILED",BULK_DOWNLOADED:"BULK_DOWNLOADED",FILTERED:"FILTERED",PUSHED:"PUSHED"},R={ATTRIBUTION_DESTINATION:"attributiondestination",ATTRIBUTION_EXPIRY:"attributionexpiry",ATTRIBUTION_REPORT_TO:"attributionreportto",ATTRIBUTION_SOURCE_EVENT_ID:"attributionsourceeventid"},D=2592e6,N={ATTRIBUTION_SOURCE_ID:"attributionsourceid",ATTRIBUTE_DESTINATION:"attributiondestination",ATTRIBUTE_ON:"attributeon"}},958795:(e,t,n)=>{n.d(t,{v:()=>c,h:()=>u});var i=n(484898),r=n(439887),a=n(844870),o=n(773559),s=n(940060),l=n(661966),_=n(215828);const c=({href:e,pinId:t,pin:n,location:a,auxData:c},u)=>{if(n&&n.is_promoted){const A=(0,r.Z)(n,a),O=(0,_.nS)({url:e,pinId:t,csrId:null,clientTrackingParams:A,auxData:c});if(i.Z.isSafari()){var d;const i=s.K.fromGlobalContext(),{group:r}=i.experiments.getWithActivation("m10n_event_conversion_measurement");let a=null!==(d=i.userAgent)&&void 0!==d&&d.browserVersion?i.userAgent.browserVersion:"0.0";var T;if(a=parseFloat(a.split(".")[0]+"."+a.split(".")[1]),void 0!==n.campaign_id&&a>=14.1&&["enabled_safari"].includes(r))return((e,t,n)=>{const i=document.createElement("a");i.setAttribute("href",t),i.setAttribute("target","_blank"),i.setAttribute("rel","noopener nofollow noreferrer"),i.style.cursor="pointer",i.style.display="block",i.setAttribute(l.$N.ATTRIBUTION_SOURCE_ID,""+e%256),i.setAttribute(l.$N.ATTRIBUTE_DESTINATION,n),i.setAttribute(l.$N.ATTRIBUTE_ON,n),i.click()})(null!==(T=n.campaign_id)&&void 0!==T?T:0,O,e),u({event_type:101,clientTrackingParams:A,object_id_str:t||"",aux_data:{pin_id:t||"",click_measurement_ppid:n.pin_promotion_id||"",click_measurement_campaign_id:n.campaign_id||"",is_pcm:!0,page_url:e}}),!0}else if(i.Z.isChrome()){var E;const i=s.K.fromGlobalContext(),{group:r}=i.experiments.getWithActivation("m10n_event_conversion_measurement_chrome"),a=null!==(E=i.userAgent)&&void 0!==E&&E.browserVersion?parseInt(i.userAgent.browserVersion.split(".")[0],10):0;var I;if(void 0!==n.pin_promotion_id&&a>86&&["enabled"].includes(r))return((e,t,n)=>{const i=document.createElement("a");i.setAttribute("href",t),i.setAttribute("target","_blank"),i.setAttribute("rel","noopener nofollow noreferrer"),i.style.cursor="pointer",i.style.display="block",i.setAttribute(l.Dl.ATTRIBUTION_SOURCE_EVENT_ID,""+e),i.setAttribute(l.Dl.ATTRIBUTION_DESTINATION,n),i.setAttribute(l.Dl.ATTRIBUTION_EXPIRY,""+l.uV),i.setAttribute(l.Dl.ATTRIBUTION_REPORT_TO,o.Z.settings.CANONICAL_MAIN_URL),i.click()})(null!==(I=n.pin_promotion_id)&&void 0!==I?I:-1,O,e),u({event_type:101,clientTrackingParams:A,object_id_str:t||"",aux_data:{pin_id:t||"",click_measurement_ppid:n.pin_promotion_id||"",click_measurement_campaign_id:n.campaign_id||"",is_ecm:!0,page_url:e}}),!0}}return!1},u=({href:e,pinId:t,pin:n,location:i,auxData:o},s)=>{if("undefined"!=typeof window&&window.Windows)(0,a.Z)({url:e,pinId:t,pin:n,location:i,auxData:o});else{if(c({href:e,pinId:t,pin:n,location:i,auxData:o},s))return;(0,_.Gj)({url:e,pinId:t,csrId:null,clientTrackingParams:(0,r.Z)(n,i),auxData:o})}}},515528:(e,t,n)=>{n.d(t,{ZF:()=>i,Wv:()=>r,zI:()=>a,UP:()=>o});const i=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],r=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","ShoppingSquareGridRelatedProducts","UserProfilePinGrid","ShoppingList"],a=[...r,"ShoppingSquareGridRelatedProductsBoth","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],o=["BaseBoardPinGrid"]},844870:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(439887),r=n(831251),a=n(215828);function o({url:e,pinId:t,pin:n,location:o,auxData:s}){const l={check_only:!0,client_tracking_params:n?(0,i.Z)(n,o):void 0,pin_id:n?n.id:t,url:e,aux_data:JSON.stringify(s)};(0,r.Z)(l).callGet().then((r=>{if(r&&r.resource_response&&!r.resource_response.error){const{resource_response:e}=r,{redirect_status:t,url:n}=e.data;if(!["blocked","suspicious","porn"].includes(t)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const e=new window.Windows.Foundation.Uri(n);window.Windows.System.Launcher.launchUriAsync(e)}return}}if(n){const r=(0,i.Z)(n,o);(0,a.Gj)({url:e,pinId:t,csrId:null,clientTrackingParams:r,auxData:s})}else(0,a.Gj)({url:e,pinId:t})}))}},805803:(e,t,n)=>{n.d(t,{l:()=>a,Y:()=>r});var i=n(584489);const r=e=>i.Z.instance.dispatch(function(e){return{type:"SPAMMY_CLICKTHROUGH_WARNING_SHOW",payload:e}}(e)),a=()=>i.Z.instance.dispatch({type:"SPAMMY_CLICKTHROUGH_WARNING_DISMISS"})},215828:(e,t,n)=>{n.d(t,{nS:()=>N,iw:()=>m,gV:()=>R,G3:()=>L,lI:()=>C,Gj:()=>P,Jd:()=>S,$3:()=>D});var i=n(85038),r=n(799881),a=n(439887),o=n(350100);const s=e=>"string"!=typeof e&&e?e.state:null;var l=n(238402),_=n(760877),c=n(195693),u=n(831251),d=n(844870),T=n(141618),E=n(515528),I=n(805803),A=n(958795),O=n(493858),p=n(858875);const S=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},R=({isOffsiteUrl:e,event:t})=>!e&&(t.metaKey||t.ctrlKey),D=({location:e,pin:t,surface:n})=>!(0,O.jL)(t)&&(({location:e,pinId:t,surface:n})=>{const i=Boolean(n),r=E.ZF.includes(n),a=e.pathname.includes(t);return i&&!r||a})({location:e,pinId:t.id,surface:n}),N=e=>{const t=Math.round(1e3*Math.random())+"",n=Math.round(1e3*Math.random())+"";i.t8((0,p.GS)(t),n);const r=`${t}-${n}`,{queryParams:a,url:o}=e;let s={token:r,url:o};if(!a){const{pinId:t,csrId:n,clientTrackingParams:i,auxData:r}=e;s={...s,pin:null!=t?t:void 0,csr:n&&!t?n:void 0,client_tracking_params:i,aux_data:r?JSON.stringify(r):void 0}}a&&(s={...s,...a});return`/offsite/?${(0,l.Z)(s)}`},P=e=>{(0,r.Z)(N(e),!0)},m=async({isMounted:e,pin:t,location:n,spamCheckCallback:i,href:r})=>{const o=await(0,u.Z)({check_only:!0,client_tracking_params:(0,a.Z)(t,n),pin_id:null==t?void 0:t.id,url:r}).callGet({showError:!1});if(!o.resource_response.error&&e){const e=o.resource_response.data||{},{message:t,redirect_status:n,url:r}=e;i({blocked:["blocked","suspicious","porn"].includes(n),message:t,redirectStatus:n,sanitized_url:r})}},L=({event:e,onHistoryChange:t,href:n,history:i,target:a})=>{const l=(0,o.Z)(n),u=s(n),d=(0,_.Z)(l);d===T.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===a?(0,r.Z)(l,"blank"===a):i&&d===T.Z.SAME_ORIGIN&&(i.push((0,c.Z)({url:l}),null!=u?u:{}),t&&t({event:e}))},C=({href:e,pinId:t,pin:n,location:i,auxData:r,spamCheck:o,queryParams:s},l)=>{"undefined"!=typeof window&&window.Windows?(0,d.Z)({url:e,pinId:t,pin:n,location:i,auxData:r}):n?(({spamCheck:e,auxData:t,location:n,pin:i,pinId:r,href:o},s)=>{if(null!=e&&e.blocked)(0,I.Y)(e);else{if((0,A.v)({href:o,pinId:r,pin:i,location:n,auxData:t},s))return;P({url:o,pinId:r,csrId:null,clientTrackingParams:(0,a.Z)(i,n),auxData:t})}})({spamCheck:o,auxData:r,location:i,pin:n,pinId:t,href:e},l):P({url:e,pinId:t,queryParams:s})}},831251:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(311866);function r(e){return i.ZP.create("ApiResource",{url:"/v3/offsite/",data:e})}},268648:(e,t,n)=>{n.d(t,{Z:()=>_,p:()=>c});var i=n(667294),r=n(350100),a=n(539484),o=n(457175),s=n(215828),l=n(855168);function _(e){const{externalData:t,href:n,onHistoryChange:_,target:c}=e,{logContextEvent:u}=(0,o.v)(),[d,T]=(0,i.useState)(null),[E,I]=(0,i.useState)(!1),A=(0,l.k6)(),O=(0,l.TH)(),p=(0,a.Z)({url:(0,r.Z)(n)});return(0,i.useEffect)((()=>(I(!0),()=>{I(!1)})),[]),(0,i.useEffect)((()=>{p&&null!=t&&t.pin&&null===d&&(0,s.$3)({location:O,pin:t.pin,surface:t.surface})&&(0,s.iw)({isMounted:E,pin:t.pin,location:O,spamCheckCallback:e=>T(e),href:(0,r.Z)(n)})}),[t,n,p,E,O,d]),({event:e})=>{var i;(0,s.gV)({isOffsiteUrl:p,event:e})||(e.preventDefault(),n&&(p||null!=t&&t.dangerouslyForceOffsiteUrl?(0,s.lI)({auxData:null==t?void 0:t.auxData,href:(0,r.Z)(n),pinId:null==t||null===(i=t.pin)||void 0===i?void 0:i.id,pin:null==t?void 0:t.pin,queryParams:null==t?void 0:t.queryParams,location:O,spamCheck:d},u):(0,s.G3)({event:e,href:n,history:A,onHistoryChange:_,target:"blank"===c?"blank":null})))}}const c=({children:e,...t})=>e({handleClick:_(t)})},350100:(e,t,n)=>{n.d(t,{Z:()=>i});const i=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},539484:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(508841);const r=({url:e})=>!(!e||!e.match(/^https{0,1}:\/\//)||(0,i.Z)(e))},195693:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(296882);const r=(e,t)=>0===e.lastIndexOf(t,0),a=({url:e})=>{const t=(0,i.Z)("/");return r(e,t)?e.substr(t.length-1):e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/68648-4170c5be43e9aea9.mjs.map