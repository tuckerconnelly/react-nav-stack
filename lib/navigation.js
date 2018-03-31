Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
var __WEB__=!global.__BUNDLE_START_TIME__&&window.location.pathname;

var removeTrailingSlashFromUrl=function removeTrailingSlashFromUrl(url){
var urlParts=url.split('?');
urlParts[0]=urlParts[0].replace(/\/$/,'');
return urlParts.join('?');
};

var pushState=exports.pushState=function pushState(stateObj,title,url){return{
type:'HISTORY_PUSH_STATE',
payload:{stateObj:stateObj||{},title:title||'',url:removeTrailingSlashFromUrl(url)}};};

var replaceState=exports.replaceState=function replaceState(stateObj,title,url){return{
type:'HISTORY_REPLACE_STATE',
payload:{stateObj:stateObj||{},title:title||'',url:removeTrailingSlashFromUrl(url)}};};

var back=exports.back=function back(fromPopState){
if(__WEB__&&!fromPopState){
window.history.back();
return{type:'NULL'};
}
return{type:'HISTORY_BACK'};
};
var forward=exports.forward=function forward(fromPopState){
if(__WEB__&&!fromPopState){
window.history.forward();
return{type:'NULL'};
}
return{type:'HISTORY_FORWARD'};
};
var go=exports.go=function go(numberOfEntries){return{
type:'HISTORY_GO',
payload:{numberOfEntries:numberOfEntries}};};

var replaceTop=exports.replaceTop=function replaceTop(stateObj,title,url){return{
type:'HISTORY_REPLACE_TOP',
payload:{stateObj:stateObj||{},title:title||'',url:removeTrailingSlashFromUrl(url)}};};

var pushTop=exports.pushTop=function pushTop(stateObj,title,url){return{
type:'HISTORY_PUSH_TOP',
payload:{stateObj:stateObj||{},title:title||'',url:removeTrailingSlashFromUrl(url)}};};


var initialState={
index:0,
history:[{stateObj:{index:0},title:'',url:''}]};


if(__WEB__){
initialState.history[0].url=removeTrailingSlashFromUrl(window.location.pathname);
window.history.replaceState(
initialState.history[0].stateObj,
initialState.history[0].title,
initialState.history[0].url);

}exports.default=

function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case'HISTORY_PUSH_STATE':{var _action$payload=
action.payload,stateObj=_action$payload.stateObj,title=_action$payload.title,url=_action$payload.url;

if(url===state.history[state.index].url)return state;

var stateObjWithIndex=_extends({},stateObj,{index:state.index+1});

if(__WEB__)window.history.pushState(stateObjWithIndex,title,url.length?url:'/');
return{
index:state.index+1,
history:state.history.
slice(0,state.index+1).
concat([{stateObj:stateObjWithIndex,title:title,url:url}])};

}
case'HISTORY_REPLACE_STATE':{var _action$payload2=
action.payload,_stateObj=_action$payload2.stateObj,_title=_action$payload2.title,_url=_action$payload2.url;

if(_url===state.history[state.index].url)return state;

var _stateObjWithIndex=_extends({},_stateObj,{index:state.index});

if(__WEB__)window.history.replaceState(_stateObjWithIndex,_title,_url.length?_url:'/');
return{
index:state.index,
history:state.history.
slice(0,state.index).
concat([{stateObj:_stateObjWithIndex,title:_title,url:_url}])};

}
case'HISTORY_REPLACE_TOP':{var _action$payload3=
action.payload,_stateObj2=_action$payload3.stateObj,_title2=_action$payload3.title,_url2=_action$payload3.url;

var _stateObjWithIndex2=_extends({},_stateObj2,{index:state.index});

var newUrl=state.history[state.index].url+'/'+_url2;

if(__WEB__)window.history.replaceState(_stateObjWithIndex2,_title2,newUrl);
return{
index:state.index,
history:state.history.
slice(0,state.index).
concat([{stateObj:_stateObjWithIndex2,title:_title2,url:newUrl}])};

}
case'HISTORY_PUSH_TOP':{var _action$payload4=
action.payload,_stateObj3=_action$payload4.stateObj,_title3=_action$payload4.title,_url3=_action$payload4.url;

var _stateObjWithIndex3=_extends({},_stateObj3,{index:state.index+1});

var _newUrl=state.history[state.index].url+'/'+_url3;

if(__WEB__)window.history.pushState(_stateObjWithIndex3,_title3,_newUrl);
return{
index:state.index+1,
history:state.history.
slice(0,state.index+1).
concat([{stateObj:_stateObjWithIndex3,title:_title3,url:_newUrl}])};

}
case'HISTORY_BACK':
if(state.index===0)return state;
return _extends({},state,{index:state.index-1});

case'HISTORY_FORWARD':
if(state.index===state.history.length-1)return state;
return _extends({},state,{index:state.index+1});

case'HISTORY_GO':{
var targetIndex=state.index+action.payload.numberOfEntries;

if(!state.history[targetIndex]){
console.warn('Tried to `go()` to a non-existant index!');
return state;
}
return _extends({},state,{index:targetIndex});
}

default:return state;}

};