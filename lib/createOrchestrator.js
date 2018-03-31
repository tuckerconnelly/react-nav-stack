Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src\\createOrchestrator.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

function makeStackFromPathname(pathname){
var pathArray=pathname.split('/');
pathArray.shift();
return pathArray;
}exports.default=

function(fragment){return function(component){
var ComposedComponent=component;


if(!ComposedComponent.render&&!ComposedComponent.prototype.render){
ComposedComponent=function(_Component){_inherits(ComposedComponent,_Component);function ComposedComponent(){_classCallCheck(this,ComposedComponent);return _possibleConstructorReturn(this,(ComposedComponent.__proto__||Object.getPrototypeOf(ComposedComponent)).apply(this,arguments));}_createClass(ComposedComponent,[{key:'render',value:function render()
{
return component(this.props,this.context);
}}]);return ComposedComponent;}(_react.Component);

}var

Orchestrator=function(_Component2){_inherits(Orchestrator,_Component2);
function Orchestrator(props,context){_classCallCheck(this,Orchestrator);var _this2=_possibleConstructorReturn(this,(Orchestrator.__proto__||Object.getPrototypeOf(Orchestrator)).call(this,
props,context));_this2.












state={urlStack:[]};_this2.


























_unsubscribeFromStore=null;_this2.

_updateUrlStack=function(){
var state=_this2.context.store.getState();
var index=state.navigation.index;


_this2.setState({
urlStack:makeStackFromPathname(state.navigation.history[index].url)});

};(0,_invariant2.default)(context.store,'Couldn\'t find the store on the context. '+'Make sure you have a redux <Provider> at the top '+'of your app.');(0,_invariant2.default)(context.store.getState().navigation,'Couldn\'t find the navigation reducer on the store. '+'Make sure you have react-stack-nav\'s reducer on '+'your root reducer.');return _this2;}_createClass(Orchestrator,[{key:'getChildContext',value:function getChildContext(){return{lastOrchestratorId:this._orchestratorId,orchestratorPath:this._orchestratorPath};}},{key:'componentWillMount',value:function componentWillMount(){var lastOrchestratorId=this.context.lastOrchestratorId;this._orchestratorId=lastOrchestratorId!==undefined?lastOrchestratorId+1:0;this._orchestratorPath=this.context.orchestratorPath?[].concat(_toConsumableArray(this.context.orchestratorPath),[fragment]):[];this._updateUrlStack();this._unsubscribeFromStore=this.context.store.subscribe(this._updateUrlStack);}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._unsubscribeFromStore();}},{key:'render',value:function render()



















{
return(
_react2.default.createElement(ComposedComponent,_extends({},
this.props,{
routeFragment:this._routeFragment,__source:{fileName:_jsxFileName,lineNumber:97}})));

}},{key:'_routeFragment',get:function get(){var _this3=this;var urlMatchesOrchestratorPath=this._orchestratorPath.reduce(function(prev,curr,i){if(!prev)return false;if(!_this3.state.urlStack[i])return false;if(_this3._orchestratorPath[i]instanceof RegExp){return _this3.state.urlStack[i].match(_this3._orchestratorPath[i]);}return _this3.state.urlStack[i]===_this3._orchestratorPath[i];},true);if(!urlMatchesOrchestratorPath)return undefined;return this.state.urlStack[this._orchestratorId]||'';}}]);return Orchestrator;}(_react.Component);


Orchestrator.displayName='Orchestrator('+(
_react.Component.displayName||_react.Component.name||'Component')+')';

Orchestrator.contextTypes=_extends({},
Orchestrator.contextTypes,{
store:_propTypes2.default.object,
lastOrchestratorId:_propTypes2.default.number,
orchestratorPath:_propTypes2.default.array});


Orchestrator.childContextTypes=_extends({},
Orchestrator.childContextTypes,{
lastOrchestratorId:_propTypes2.default.number,
orchestratorPath:_propTypes2.default.array});


return Orchestrator;
};};module.exports=exports['default'];