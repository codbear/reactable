(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{485:function(module,exports,__webpack_require__){__webpack_require__(486),__webpack_require__(642),__webpack_require__(643),__webpack_require__(843),__webpack_require__(844),__webpack_require__(850),__webpack_require__(851),__webpack_require__(849),__webpack_require__(846),__webpack_require__(852),__webpack_require__(847),__webpack_require__(848),__webpack_require__(853),module.exports=__webpack_require__(839)},552:function(module,exports){},643:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(352)},839:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(352).configure)([__webpack_require__(840),__webpack_require__(841)],module,!1)}).call(this,__webpack_require__(208)(module))},840:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=840},841:function(module,exports,__webpack_require__){var map={"./stories/Table.stories.jsx":845};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=841},845:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Filled",(function(){return Filled})),__webpack_require__.d(__webpack_exports__,"Filtering",(function(){return Filtering})),__webpack_require__.d(__webpack_exports__,"Sorting",(function(){return Sorting})),__webpack_require__.d(__webpack_exports__,"Pagination",(function(){return Pagination}));var _sortingOrderToCompar,_templateObject,objectSpread2=__webpack_require__(37),react=__webpack_require__(0),taggedTemplateLiteral=__webpack_require__(86),styled_components_browser_esm=__webpack_require__(73),slicedToArray=__webpack_require__(146),services_getColumnsInitialState=function getColumnsInitialState(columns){return columns.map((function(column,index){var header=column.header,isSortable=column.isSortable,sortingButtonProps={"aria-label":"Sort rows by ".concat(header),"aria-description":"The column is not ordered"};return{header:{value:header},isSortable:Boolean(isSortable),props:Object(objectSpread2.a)({header:{key:"column_".concat(index)}},isSortable?{sortingButton:sortingButtonProps}:{})}}))},services_getRowsInitialState=function getRowsInitialState(data,columns){return data.map((function(row,rowIndex){var rowCells=columns.map((function(column,columnIndex){return{props:{key:"row_".concat(rowIndex,"_column_").concat(columnIndex)},value:row[column.dataField]}}));return{props:{key:"row_".concat(rowIndex)},cells:rowCells}}))},defineProperty=__webpack_require__(84),sortingOrderStates={DEFAULT:"ASCENDANT",ASCENDANT:"ASCENDANT",DESCENDANT:"DESCENDANT"},getColumnsNextState_getAriaDescription=function getAriaDescription(sortingOrder){var _sortingOrderToAriaDe;return(_sortingOrderToAriaDe={},Object(defineProperty.a)(_sortingOrderToAriaDe,sortingOrderStates.ASCENDANT,"The column is in ascending order"),Object(defineProperty.a)(_sortingOrderToAriaDe,sortingOrderStates.DESCENDANT,"The column is in descending order"),_sortingOrderToAriaDe)[sortingOrder]||"The column is not ordered"},services_getColumnsNextState=function getColumnsNextState(columns,_ref){var sortingColumn=_ref.sortingColumn,sortingOrder=_ref.sortingOrder;return columns.map((function(column){var sortingOrderForColumn=column.props.header.key===sortingColumn&&sortingOrder,sortingButtonProps=Object(objectSpread2.a)(Object(objectSpread2.a)({},column.props.sortingButton),{},{"aria-description":getColumnsNextState_getAriaDescription(sortingOrderForColumn)});return Object(objectSpread2.a)(Object(objectSpread2.a)({},column),{},{sortingOrder:sortingOrderForColumn,props:Object(objectSpread2.a)(Object(objectSpread2.a)({},column.props),column.isSortable?{sortingButton:sortingButtonProps}:{})})}))},sortingOrderToComparisonFunction=(_sortingOrderToCompar={},Object(defineProperty.a)(_sortingOrderToCompar,sortingOrderStates.ASCENDANT,(function compareGreaterThan(item,nextItem){return item.value>nextItem.value?1:item.value<nextItem.value?-1:0})),Object(defineProperty.a)(_sortingOrderToCompar,sortingOrderStates.DESCENDANT,(function compareLowerThan(item,nextItem){return item.value>nextItem.value?-1:item.value<nextItem.value?1:0})),_sortingOrderToCompar),services_getSortRows=function getSortRows(sortingColumn,sortingOrder){return function(rows){var comparisonFunction=sortingOrderToComparisonFunction[sortingOrder];if(!comparisonFunction)return rows;var minifiedRows=rows.map((function(row,rowIndex){var value=row.cells.find((function(cell){return cell.props.key==="row_".concat(rowIndex,"_").concat(sortingColumn)})).value,valueToCompare="string"==typeof value?value.toLocaleLowerCase():value;return{index:rowIndex,value:valueToCompare}}));return minifiedRows.sort(comparisonFunction),minifiedRows.map((function(row){return rows[row.index]}))}},voidUseSorting=function voidUseSorting(){return function(){}},hooks_useTable=function useTable(data,userDefinedColumns,_ref){var _ref$useSorting=_ref.useSorting,useSorting=void 0===_ref$useSorting?voidUseSorting:_ref$useSorting,_useState=Object(react.useState)(services_getColumnsInitialState(userDefinedColumns)),_useState2=Object(slicedToArray.a)(_useState,2),columns=_useState2[0],setColumns=_useState2[1],_useState3=Object(react.useState)(services_getRowsInitialState(data,userDefinedColumns)),_useState4=Object(slicedToArray.a)(_useState3,2),rows=_useState4[0],setRows=_useState4[1],onSort=useSorting((function handleSetRows(rowsAdapter){var rowsInitialState=services_getRowsInitialState(data,userDefinedColumns),nextRowsState="function"==typeof rowsAdapter?rowsAdapter(rowsInitialState):rowsInitialState;setRows(nextRowsState)}),(function onColumnOrder(sortingColumn,sortingOrder){var nextColumnState=services_getColumnsNextState(columns,{sortingColumn:sortingColumn,sortingOrder:sortingOrder});setColumns(nextColumnState)}));return{hasHeader:columns.some((function(column){return Boolean(column.header.value)})),columns:columns,rows:rows,onSort:onSort}},hooks_useSorting=function useSorting(onRowsSort,onColumnOrder){var _useState=Object(react.useState)(),_useState2=Object(slicedToArray.a)(_useState,2),sortingColumn=_useState2[0],setSortingColumn=_useState2[1],_useState3=Object(react.useState)(sortingOrderStates.DEFAULT),_useState4=Object(slicedToArray.a)(_useState3,2),sortingOrder=_useState4[0],setSortingOrder=_useState4[1];return function handleSort(columnKey){if(sortingColumn!==columnKey){var _sortingOrder=function initSorting(columnKey){return setSortingColumn(columnKey),setSortingOrder(sortingOrderStates.DEFAULT),onColumnOrder(columnKey,sortingOrderStates.DEFAULT),sortingOrderStates.DEFAULT}(columnKey),sortRows=services_getSortRows(columnKey,_sortingOrder);return onRowsSort(sortRows)}if(sortingOrder===sortingOrderStates.ASCENDANT){var nextSortingOrder=function reverseSorting(){var nextSortingOrder=sortingOrder===sortingOrderStates.ASCENDANT?sortingOrderStates.DESCENDANT:sortingOrderStates.ASCENDANT;return setSortingOrder(nextSortingOrder),onColumnOrder(sortingColumn,nextSortingOrder),nextSortingOrder}(),_sortRows=services_getSortRows(sortingColumn,nextSortingOrder);return onRowsSort(_sortRows)}if(sortingOrder===sortingOrderStates.DESCENDANT)return function disableSorting(){setSortingColumn(null),setSortingOrder(sortingOrderStates.DEFAULT),onColumnOrder(null,null)}(),onRowsSort()}},TableCell_TableCell=styled_components_browser_esm.b.td(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  padding: 6px 16px;\n  border-bottom: 1px solid ",";\n"])),(function(_ref){return _ref.theme.palette.divider})),jsx_runtime=__webpack_require__(30),UnsortedIcon_UnsortedIcon=function UnsortedIcon(_ref){var width=_ref.width,height=_ref.height,color=_ref.color;return Object(jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"".concat(width,"px"),height:"".concat(height,"px"),viewBox:"0 0 24 24",fill:color,children:[Object(jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(jsx_runtime.jsx)("path",{d:"M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"})]})};UnsortedIcon_UnsortedIcon.defaultProps={width:24,height:24,color:"#000000"},UnsortedIcon_UnsortedIcon.__docgenInfo={description:"",methods:[],displayName:"UnsortedIcon",props:{width:{defaultValue:{value:"24",computed:!1},type:{name:"number"},required:!1,description:""},height:{defaultValue:{value:"24",computed:!1},type:{name:"number"},required:!1,description:""},color:{defaultValue:{value:"'#000000'",computed:!1},type:{name:"string"},required:!1,description:""}}};var components_UnsortedIcon_UnsortedIcon=UnsortedIcon_UnsortedIcon;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/UnsortedIcon/UnsortedIcon.jsx"]={name:"UnsortedIcon",docgenInfo:UnsortedIcon_UnsortedIcon.__docgenInfo,path:"src/lib/components/UnsortedIcon/UnsortedIcon.jsx"});var SortedAscIcon_SortedAscIcon=function SortedAscIcon(_ref){var width=_ref.width,height=_ref.height,color=_ref.color;return Object(jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"".concat(width,"px"),height:"".concat(height,"px"),viewBox:"0 0 24 24",fill:color,children:[Object(jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(jsx_runtime.jsx)("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"})]})};SortedAscIcon_SortedAscIcon.defaultProps={width:24,height:24,color:"#000000"},SortedAscIcon_SortedAscIcon.__docgenInfo={description:"",methods:[],displayName:"SortedAscIcon",props:{width:{defaultValue:{value:"24",computed:!1},type:{name:"number"},required:!1,description:""},height:{defaultValue:{value:"24",computed:!1},type:{name:"number"},required:!1,description:""},color:{defaultValue:{value:"'#000000'",computed:!1},type:{name:"string"},required:!1,description:""}}};var components_SortedAscIcon_SortedAscIcon=SortedAscIcon_SortedAscIcon;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/SortedAscIcon/SortedAscIcon.jsx"]={name:"SortedAscIcon",docgenInfo:SortedAscIcon_SortedAscIcon.__docgenInfo,path:"src/lib/components/SortedAscIcon/SortedAscIcon.jsx"});var SortedDescIcon_SortedDescIcon=function SortedDescIcon(_ref){var width=_ref.width,height=_ref.height,color=_ref.color;return Object(jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"".concat(width,"px"),height:"".concat(height,"px"),viewBox:"0 0 24 24",fill:color,children:[Object(jsx_runtime.jsx)("path",{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"}),Object(jsx_runtime.jsx)("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})]})};SortedDescIcon_SortedDescIcon.defaultProps={width:24,height:24,color:"#000000"},SortedDescIcon_SortedDescIcon.__docgenInfo={description:"",methods:[],displayName:"SortedDescIcon",props:{width:{defaultValue:{value:"24",computed:!1},type:{name:"number"},required:!1,description:""},height:{defaultValue:{value:"24",computed:!1},type:{name:"number"},required:!1,description:""},color:{defaultValue:{value:"'#000000'",computed:!1},type:{name:"string"},required:!1,description:""}}};var _sortingOrderToSortin,components_SortedDescIcon_SortedDescIcon=SortedDescIcon_SortedDescIcon;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/SortedDescIcon/SortedDescIcon.jsx"]={name:"SortedDescIcon",docgenInfo:SortedDescIcon_SortedDescIcon.__docgenInfo,path:"src/lib/components/SortedDescIcon/SortedDescIcon.jsx"});var sortingOrderToSortingIcon=(_sortingOrderToSortin={},Object(defineProperty.a)(_sortingOrderToSortin,sortingOrderStates.ASCENDANT,components_SortedAscIcon_SortedAscIcon),Object(defineProperty.a)(_sortingOrderToSortin,sortingOrderStates.DESCENDANT,components_SortedDescIcon_SortedDescIcon),_sortingOrderToSortin),SortIcon_SortIcon=function SortIcon(_ref){var sortingOrder=_ref.sortingOrder,IconToRender=sortingOrderToSortingIcon[sortingOrder]||components_UnsortedIcon_UnsortedIcon;return Object(jsx_runtime.jsx)(IconToRender,{})};SortIcon_SortIcon.defaultProps={sortingOrder:!1},SortIcon_SortIcon.__docgenInfo={description:"",methods:[],displayName:"SortIcon",props:{sortingOrder:{defaultValue:{value:"false",computed:!1},type:{name:"union",value:[{name:"bool"},{name:"enum",value:[{value:"SORTING_ORDER_STATES.ASCENDANT",computed:!0},{value:"SORTING_ORDER_STATES.DESCENDANT",computed:!0}]}]},required:!1,description:""}}};var TableCellHeader_templateObject,_templateObject2,components_SortIcon_SortIcon=SortIcon_SortIcon;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/SortIcon/SortIcon.jsx"]={name:"SortIcon",docgenInfo:SortIcon_SortIcon.__docgenInfo,path:"src/lib/components/SortIcon/SortIcon.jsx"});var StyledTableCellHeader=Object(styled_components_browser_esm.b)(TableCell_TableCell)(TableCellHeader_templateObject||(TableCellHeader_templateObject=Object(taggedTemplateLiteral.a)(["\n  color: ",";\n  text-align: left;\n  white-space: nowrap;\n"])),(function(_ref){return _ref.theme.palette.text})),SortingButton=styled_components_browser_esm.b.button(_templateObject2||(_templateObject2=Object(taggedTemplateLiteral.a)(["\n  width: 100%;\n  min-height: 42px;\n  padding: 0;\n\n  border: none;\n  background: none;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  font-size: inherit;\n  font-weight: inherit;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))),TableCellHeader_TableCellHeader=function TableCellHeader(_ref2){var column=_ref2.column,onSort=_ref2.onSort,isSortable=column.isSortable,sortingOrder=column.sortingOrder,value=column.header.value,props=column.props;return Object(jsx_runtime.jsx)(StyledTableCellHeader,{as:"th",children:isSortable?Object(jsx_runtime.jsxs)(SortingButton,Object(objectSpread2.a)(Object(objectSpread2.a)({onClick:function handleSort(){onSort(props.header.key)}},props.sortingButton),{},{children:[value,Object(jsx_runtime.jsx)(components_SortIcon_SortIcon,{sortingOrder:sortingOrder})]})):value})};TableCellHeader_TableCellHeader.defaultProps={onSort:function onSort(){}},TableCellHeader_TableCellHeader.__docgenInfo={description:"",methods:[],displayName:"TableCellHeader",props:{onSort:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},column:{type:{name:"shape",value:{isSortable:{name:"bool",required:!1},sortingOrder:{name:"union",value:[{name:"bool"},{name:"enum",value:[{value:"SORTING_ORDER_STATES.ASCENDANT",computed:!0},{value:"SORTING_ORDER_STATES.DESCENDANT",computed:!0}]}],required:!1},header:{name:"shape",value:{value:{name:"string",required:!1}},required:!1},props:{name:"shape",value:{header:{name:"object",required:!1},sortingButton:{name:"object",required:!1}},required:!1}}},required:!0,description:""}}};var Table_templateObject,Table_templateObject2,_templateObject3,_templateObject4,_templateObject5,components_TableCellHeader_TableCellHeader=TableCellHeader_TableCellHeader;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/TableCellHeader/TableCellHeader.jsx"]={name:"TableCellHeader",docgenInfo:TableCellHeader_TableCellHeader.__docgenInfo,path:"src/lib/components/TableCellHeader/TableCellHeader.jsx"});var TableWrapper=styled_components_browser_esm.b.div(Table_templateObject||(Table_templateObject=Object(taggedTemplateLiteral.a)(["\n  width: 100%;\n  overflow: auto;\n"]))),TableContainer=styled_components_browser_esm.b.table(Table_templateObject2||(Table_templateObject2=Object(taggedTemplateLiteral.a)(["\n  width: 100%;\n  border: 1px solid ",";\n  border-collapse: collapse;\n"])),(function(_ref){return _ref.theme.palette.divider})),TableRow=styled_components_browser_esm.b.tr(_templateObject3||(_templateObject3=Object(taggedTemplateLiteral.a)(["\n  height: 52px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(_ref2){return _ref2.theme.palette.secondary})),TableHeaderRowOutlined=styled_components_browser_esm.b.tr(_templateObject4||(_templateObject4=Object(taggedTemplateLiteral.a)(["\n  height: 56px;\n"]))),variantToTableHeaderRow={outlined:TableHeaderRowOutlined,filled:Object(styled_components_browser_esm.b)(TableHeaderRowOutlined)(_templateObject5||(_templateObject5=Object(taggedTemplateLiteral.a)(["\n  background-color: ",";\n"])),(function(_ref3){return _ref3.theme.palette.primary}))},Table_Table=function Table(_ref4){var data=_ref4.data,userDefinedColumns=_ref4.columns,variant=_ref4.variant,color=_ref4.color,headerTextColor=_ref4.headerTextColor,useSorting=_ref4.useSorting,theme=Object(react.useMemo)((function(){return{palette:{primary:color,secondary:"#fafafa",divider:"#e5e8ec",text:headerTextColor}}}),[color,headerTextColor]),registeredServices=Object(react.useMemo)((function(){var shouldUseSorting=!1!==useSorting,sortingHook=shouldUseSorting&&"function"==typeof useSorting?useSorting:hooks_useSorting;return Object(objectSpread2.a)({},shouldUseSorting?{useSorting:sortingHook}:{})}),[useSorting]),_useTable=hooks_useTable(data,userDefinedColumns,registeredServices),columns=_useTable.columns,rows=_useTable.rows,hasHeader=_useTable.hasHeader,onSort=_useTable.onSort,TableHeaderRow=variantToTableHeaderRow[variant];return Object(jsx_runtime.jsx)(styled_components_browser_esm.a,{theme:theme,children:Object(jsx_runtime.jsx)(TableWrapper,{children:Object(jsx_runtime.jsxs)(TableContainer,{children:[hasHeader&&Object(jsx_runtime.jsx)("thead",{children:Object(jsx_runtime.jsx)(TableHeaderRow,{children:columns.map((function(column){return Object(jsx_runtime.jsx)(components_TableCellHeader_TableCellHeader,Object(objectSpread2.a)({column:column,onSort:onSort},column.props.header))}))})}),Object(jsx_runtime.jsx)("tbody",{children:rows.map((function(row){return Object(jsx_runtime.jsx)(TableRow,Object(objectSpread2.a)(Object(objectSpread2.a)({},row.props),{},{children:row.cells.map((function(cell){return Object(jsx_runtime.jsx)(TableCell_TableCell,Object(objectSpread2.a)(Object(objectSpread2.a)({},cell.props),{},{children:cell.value}))}))}))}))})]})})})};Table_Table.defaultProps={variant:"outlined",color:"#c7c7c7",headerTextColor:"#000000",useSorting:!1},Table_Table.__docgenInfo={description:"",methods:[],displayName:"Table",props:{variant:{defaultValue:{value:"'outlined'",computed:!1},type:{name:"enum",value:[{value:"'filled'",computed:!1},{value:"'outlined'",computed:!1}]},required:!1,description:""},color:{defaultValue:{value:"'#c7c7c7'",computed:!1},type:{name:"string"},required:!1,description:""},headerTextColor:{defaultValue:{value:"'#000000'",computed:!1},type:{name:"string"},required:!1,description:""},useSorting:{defaultValue:{value:"false",computed:!1},type:{name:"union",value:[{name:"bool"},{name:"func"}]},required:!1,description:""},data:{type:{name:"arrayOf",value:{name:"objectOf",value:{name:"union",value:[{name:"string"},{name:"number"}]}}},required:!0,description:""},columns:{type:{name:"arrayOf",value:{name:"shape",value:{dataField:{name:"string",required:!0},isSortable:{name:"bool",required:!1}}}},required:!0,description:""}}};var components_Table_Table=Table_Table;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/components/Table/Table.jsx"]={name:"Table",docgenInfo:Table_Table.__docgenInfo,path:"src/lib/components/Table/Table.jsx"});var mocks_data=[{secretIdentity:"Tony Stark",name:"Iron Man",age:38},{secretIdentity:"Steve Rogers",name:"Captain America",age:90},{secretIdentity:"Natalia Romanova",name:"Black Widow",age:26}],basicColumnsMock=[{header:"Super Hero",dataField:"name"},{header:"Secret identity",dataField:"secretIdentity"},{header:"Age",dataField:"age"}],Table_stories_Template=(__webpack_exports__.default={title:"Table",component:components_Table_Table},function Template(args){return Object(jsx_runtime.jsx)(components_Table_Table,Object(objectSpread2.a)({},args))}),Default=Table_stories_Template.bind({});Default.args={data:mocks_data,columns:basicColumnsMock};var Filled=Table_stories_Template.bind({});Filled.args={variant:"filled",color:"#c7c7c7",headerTextColor:"#000000",data:mocks_data,columns:basicColumnsMock};var Filtering=Table_stories_Template.bind({});Filtering.args={data:mocks_data,columns:basicColumnsMock};var Sorting=Table_stories_Template.bind({});Sorting.args={data:mocks_data,columns:[{header:"Super Hero",dataField:"name",isSortable:!0},{header:"Secret identity",dataField:"secretIdentity"},{header:"Age",dataField:"age",isSortable:!0}],useSorting:!0};var Pagination=Table_stories_Template.bind({});Pagination.args={data:mocks_data,columns:basicColumnsMock},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Table {...args} />"}},Default.parameters),Filled.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Table {...args} />"}},Filled.parameters),Filtering.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Table {...args} />"}},Filtering.parameters),Sorting.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Table {...args} />"}},Sorting.parameters),Pagination.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Table {...args} />"}},Pagination.parameters)},853:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(860),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[485,2,3]]]);