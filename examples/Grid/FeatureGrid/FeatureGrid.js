webpackJsonp([18],{951:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var l=a(1),u=r(l),n=a(9),o=a(122),f=r(o),d=a(77),i=r(d),m=a(23),c=new f.default({geometry:new i.default([19.09,1.09])}),h={foo:"bar",foo2:"bar2",foo3:"bar3",foo9:"bar9",name:"Point"};c.setProperties(h),c.setId(1909);var b={foo:"A",foo2:"nice",foo9:"example"};(0,n.render)(u.default.createElement("div",{className:"example-block"},u.default.createElement("h2",null,"FeatureGrid without a filter:"),u.default.createElement(m.FeatureGrid,{feature:c}),u.default.createElement("br",null),u.default.createElement("h2",null,"FeatureGrid with filtered attributes (foo and foo9 only):"),u.default.createElement(m.FeatureGrid,{feature:c,attributeFilter:["foo","foo9"],style:{width:"50%"}}),u.default.createElement("br",null),u.default.createElement("h2",null,"FeatureGrid with different column width (70 % width for column name / 30 % width for column value):"),u.default.createElement(m.FeatureGrid,{feature:c,attributeNameColumnWidthInPercent:70,style:{width:"50%"}}),u.default.createElement("br",null),u.default.createElement("h2",null,"FeatureGrid with column name mapping:"),u.default.createElement(m.FeatureGrid,{feature:c,attributeFilter:["foo","foo2","foo9","name"],attributeNames:b,style:{width:"50%"}})),document.getElementById("exampleContainer"))}},[951]);