// ==UserScript==
// @name          Blogtruyen.com
// @namespace     http://userstyles.org
// @description	  Tạo bởi  Nguyễn Văn Cao Kỳ
// @author        Ani - VN
// @homepage      https://userstyles.org/styles/144396
// @include       http://blogtruyen.com/*
// @include       https://blogtruyen.com/*
// @include       http://*.blogtruyen.com/*
// @include       https://*.blogtruyen.com/*
// @include       http://id.blogtruyen.com*
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant		GM_listValues
// @grant		GM_deleteValue
// @run-at        document-start
// @compatible  chrome
// @compatible  firefox
// @license     The MIT License (MIT); http://opensource.org/licenses/MIT
// @version       1.3
// ==/UserScript==


(function() {var css = "";
             if (false || (document.domain == "blogtruyen.com" || document.domain.substring(document.domain.indexOf(".blogtruyen.com") + 1) == "blogtruyen.com"))
                 css += [
                     "body {",
                     "    background: #6e7274 url(http://farm5.staticflickr.com/4216/35079800750_f3b86d6449_o.jpg) center top fixed repeat;",
                     "    background-size: cover !important;",
                     "}",
                     "body#tinymce {",
                     "    color: #fff;",
                     "    background: #fff url(http://farm5.staticflickr.com/4585/38480158626_4f540b87be_o.jpg) center top fixed repeat;",
                     "    background-size: cover !important;",
                     "}",
                     "a[style] {",
                     "    display: none;",
                     "}",
                     "#mota h1 {",
                     "    color: #fff",
                     "}",
                     ".color-blue, .color-u-1 {",
                     "    color: #fff",
                     "}",
                     "body {",
                     "    color: rgb(255, 255, 255);",
                     "}",
                     "#menu {",
                     "    background: rgba(82, 182, 243, 0.51);",
                     "}",
                     ".list-mainpage .storyitem footer {",
                     "    background: rgba(69, 194, 255, 0.64);",
                     "}",
                     ".color-red,",
                     ".color-u-4 {",
                     "    color: #fff;",
                     "}",
                     ".bg-cyan {",
                     "    background: #41bcff;",
                     "}",
                     ".bg-lightcoral {",
                     "    background: #41bcff;",
                     "}",
                     ".ui-widget-header {",
                     "    color: #fff;",
                     "}",
                     ".bg-white {",
                     "    background: rgba(0, 121, 181, 0.71) !important;",
                     "}",
                     ".list-mainpage .storyitem h3 a {",
                     "    color: #ffffff;",
                     "}",
                     "#toolbar {",
                     "    background: rgba(0, 115, 130, 0.34);",
                     "}",
                     "img[src*=\"http://4.bp.blogspot.com/-0sEMrAZhKBE/WJ2lW-CwYKI/AAAAAAABOsk/85xbHPtisJE/s0/\"] {",
                     "    display: none;",
                     "}",
                     "#storyPinked {",
                     "    background: rgba(84, 209, 255, 0.38);",
                     "}",
                     "#menu ul.menu>li>a {",
                     "    color: #fff;",
                     "}",
                     "#menu ul.submenu li a {",
                     "    color: rgb(255, 255, 255);",
                     "}",
                     "#menu ul.submenu {",
                     "    background: rgba(37, 205, 255, 0.84);",
                     "}",
                     ".color-blue,",
                     ".color-u-1 {",
                     "    color: rgb(0, 99, 146);",
                     "}",
                     ".nav-tabs {",
                     "    border-bottom: 1px solid #2eb3ff;",
                     "}",
                     ".widget-top-forum {",
                     "    background: rgba(160, 222, 255, 0.55);",
                     "}",
                     ".nav-tabs>li.active>a,",
                     ".nav-tabs>li.active>a:hover,",
                     ".nav-tabs>li.active>a:focus {",
                     "    background-color: rgba(20, 185, 255, 0.46);",
                     "}",
                     ".widget-top-forum .nav-tabs li a {",
                     "    color: white;",
                     "}",
                     ".nav-tabs>li.active>a,",
                     ".nav-tabs>li.active>a:hover,",
                     ".nav-tabs>li.active>a:focus {",
                     "    color: rgb(255, 255, 255);",
                     "}",
                     ".widget-top-forum .nav-tabs li.title {",
                     "    color: #ffffff;",
                     "}",
                     ".widget-top-forum .tab-content ul li a:visited {",
                     "    color: #000000;",
                     "}",
                     ".widget-top-forum .tab-content ul li a {",
                     "    color: #003f82;",
                     "}",
                     ".bg-yellow {",
                     "    background: rgb(65, 188, 255);",
                     "}",
                     ".bg-green {",
                     "    background: #41bcff;",
                     "}",
                     ".bg-coral {",
                     "    background: #41bcff;",
                     "}",
                     ".view-type i.active {",
                     "    color: white;",
                     "}",
                     ".ui-widget-content {",
                     "    background: rgba(0, 165, 255, 0.21) !important;",
                     "}",
                     ".ui-widget-content {",
                     "    color: #fff;",
                     "}",
                     ".color-orange {",
                     "    color: #ffffff;",
                     "}",
                     ".color-green,",
                     ".color-u-3 {",
                     "    color: #ffffff;",
                     "}",
                     ".color-blue,",
                     ".color-u-1 {",
                     "    color: rgb(255, 255, 255);",
                     "}",
                     ".ui-widget-content a {",
                     "    color: #79ffe7;",
                     "}",
                     "#top-newest-comment p img {",
                     "    display: none;",
                     "}",
                     "#tab-hot-story > ul > li.active > a {",
                     "    color: #ffffff;",
                     "}",
                     "#tab-hot-story > div > p > span:first-child a {",
                     "    color: #fff;",
                     "}",
                     ".manga-detail h1.entry-title a {",
                     "    color: #ffffff;",
                     "}",
                     ".manga-detail {",
                     "    background: rgba(166, 224, 255, 0.46);",
                     "}",
                     ".color-u-2 {",
                     "    color: #7b00d6;",
                     "}",
                     ".color-fuchsia {",
                     "    color: #000;",
                     "}",
                     ".color-hotpink {",
                     "    color: #000000;",
                     "}",
                     ".manga-detail .list-chapters .list-wrap p:nth-child(2n+1) {",
                     "    background: rgba(103, 155, 177, 0);",
                     "}",
                     ".manga-detail .list-chapters .list-wrap p a {",
                     "    color: #002f54;",
                     "    display: block;",
                     "    padding: 5px 3px;",
                     "}",
                     ".manga-detail .list-chapters .list-wrap p a:visited,",
                     ".manga-detail .list-chapters .list-wrap p a.visited {",
                     "    color: #003ece;",
                     "}",
                     ".manga-detail .list-chapters .list-wrap p:hover a {",
                     "    color: #ffffff;",
                     "}",
                     ".comic-btn-download-chap {",
                     "    color: rgb(0, 0, 0) !important;",
                     "}",
                     ".manga-detail .social-button {",
                     "    display: none;",
                     "}",
                     ".text-green {",
                     "    color: rgba(255, 255, 255, 0);",
                     "}",
                     ".manga-detail .votes .vote-statictis {",
                     "    color: rgba(0, 237, 255, 0);",
                     "}",
                     ".manga-detail .votes {",
                     "    margin: 20px auto;",
                     "    text-align: center;",
                     "    background: rgba(0, 95, 140, 0.51);",
                     "    border: 3px solid rgba(63, 195, 255, 0.86);",
                     "    padding: 10px 80px;",
                     "}",
                     ".progress-bar-success {",
                     "    background-color: #00d3ff;",
                     "}",
                     ".manga-detail .progress {",
                     "    height: 15px!important;",
                     "    background-color: #ffffff;",
                     "}",
                     ".manga-detail .votes .bt-like,",
                     ".manga-detail .votes .bt-dislike {",
                     "    color: #ffffff;",
                     "}",
                     "#toolbar .frm-q-search input[type=\'text\'] {",
                     "    background: rgb(255, 255, 255);",
                     "}",
                     "#toolbar .frm-q-search input[type=\'submit\'] {",
                     "    background-color: #fff;",
                     "}",
                     "div.fb-comments.fb_iframe_widget {",
                     "    background: rgba(255, 255, 255, 0.8) !important;",
                     "}",
                     ".list-comment .ul-comment .sub-comment .sub-content {",
                     "    border: 1px solid #ccc;",
                     "    padding: 5px;",
                     "    background: rgba(0, 125, 193, 0.44);",
                     "}",
                     ".mce-btn {",
                     "    border: 1px solid #b1b1b1;",
                     "    border-color: transparent transparent transparent transparent;",
                     "    position: relative;",
                     "    text-shadow: 0 1px 1px rgba(255, 255, 255, .75);",
                     "    display: inline-block;",
                     "    background-color: rgba(111, 206, 255, 0.41);",
                     "}",
                     ".mce-panel {",
                     "    border: 0 solid #cacaca;",
                     "    border: 0 solid rgba(0, 0, 0, .2);",
                     "    background-color: rgba(255, 255, 255, 0.07);",
                     "}",
                     "div#sticky {",
                     "    display: none;",
                     "}",
                     "textarea#MangaComment.editorcomment {",
                     "    padding: 0px 270px;",
                     "}",
                     "div.c-content {",
                     "    background: #2f333569;",
                     "}",
                     "img[src*=\"http://3.bp.blogspot.com/-SClhoA8I_sI/TxOkLKBnS8I/AAAAAAAAAH0/HS4apVPTu1c/s50-c/\"] {",
                     "    content: url(http://www.ani-vn.com/img/gallery-images/54739325_p1%20-%20snow%20miku2014~2016.png);",
                     "    height: 58px;",
                     "    width: 58px;",
                     "}",
                     "iframe[src*=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fblogtruyen.page%2F&tabs=timeline%2Cmessages&width=280&height=800&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1092402354157500\"] {",
                     "    display: none;",
                     "}",
                     "section.bg-white.comments {",
                     "    width: 620px !important;",
                     "    border-left: 5px solid #50ceff !important;",
                     "    border-right: 5px solid #4fceff !important;",
                     "}",
                     "body section div:nth-child(1) iframe:nth-child(1) {",
                     "    display: none;",
                     "}",
                     "div.fb-comments.fb_iframe_widget {",
                     "    width: 580px !important;",
                     "}",
                     ".fb_iframe_widget iframe {",
                     "    width: 560px !important;",
                     "}",
                     "h3.bold.fs-16 {",
                     "    color: white;",
                     "}",
                     "div#form-comment .pointer {",
                     "    background: #ffffff;",
                     "}",
                     "article#content img:first-child:hover {",
                     "    content: url(http://www.ani-vn.com/img/credit.jpg);",
                     "}",
                     "#readonline .breadcrumbs a:first-child span:first-child {",
                     "    padding: 6px 6px 6px 6px;",
                     "    text-decoration: none;",
                     "    background: linear-gradient(141deg, #00537E 0, #3AA17E 75%)!important;",
                     "    border: none!important;",
                     "    border-radius: 3px!important;",
                     "    box-shadow: 6px 6px 25px -6px #3AA17E!important;",
                     "    transition: .8s cubic-bezier(.08, .52, .52, 1) background, .4s cubic-bezier(.08, .52, .52, 1) opacity;",
                     "    color: white !important;",
                     "}",
                     "#readonline .breadcrumbs a:nth-child(2) span:first-child {",
                     "    padding: 6px 6px 6px 6px;",
                     "    text-decoration: none;",
                     "    border: none!important;",
                     "    border-radius: 3px!important;",
                     "    box-shadow: 6px 6px 25px -6px #3AA17E!important;",
                     "    background: linear-gradient(141deg, #662D8C 0, #ED1E79 75%)!important;",
                     "    transition: .8s cubic-bezier(.08, .52, .52, 1) background, .4s cubic-bezier(.08, .52, .52, 1) opacity;",
                     "    color: white !important;",
                     "}",
                     "#readonline .breadcrumbs a {",
                     "    color: #7a8a7a00;",
                     "}",
                     "#readonline .breadcrumbs {",
                     "    color: #fff;",
                     "}",
                     "#copyright, #copyright a {",
                     "    color: #fff;",
                     "    font-size: 12px;",
                     "    display: none;",
                     "}",
                     "#readonline h1 {",
                     "    font-size: 25px;",
                     "    font-weight: bold;",
                     "    padding: 6px 6px;",
                     "    text-decoration: none;",
                     "    border: none!important;",
                     "    border-radius: 3px!important;",
                     "    box-shadow: 6px 6px 25px -6px #3AA17E!important;",
                     "    background: linear-gradient(141deg, #662D8C 0, #ED1E79 75%)!important;",
                     "    color: white !important;",
                     "    text-align: center;",
                     "    margin-bottom: 13px;",
                     "    text-shadow: 0 0 4px #fff0, 3px -5px 5px #fff0, 5px -10px 8px #e6e3e300, 7px -15px 12px #cfcbcb00, 15px -25px 18px #5f5e5e00;",
                     "}",
                     ".category-detail .description,",
                     ".author-detail .description {",
                     "    background: #003c58a3;",
                     "}",
                     ".list-manga-bycate .list p,",
                     ".list-manga-bycate .list .p {",
                     "    background-color: #003c58a3;",
                     "    border-bottom: 1px solid #ffffff;",
                     "}",
                     ".list-manga-bycate .list p:hover,",
                     ".list-manga-bycate .list .p:hover {",
                     "    background: #006096;",
                     "}",
                     ".list-manga-bycate .list p:nth-child(1):hover,",
                     ".list-manga-bycate .list .p:nth-child(1):hover {",
                     "    background-color: #006ba7;",
                     "}",
                     ".list-manga-bycate .list p>span:nth-child(1) a, .list-manga-bycate .list .p>span:nth-child(1) a {",
                     "    padding: 19px 19px;",
                     "    font-size: 15px;",
                     "    font-weight: bold;",
                     "    text-decoration: none;",
                     "    border: none!important;",
                     "    background: linear-gradient(141deg, #41bcff 10%, #41bcff 5%)!important;",
                     "    border-radius: 3px!important;",
                     "    box-shadow: 6px 6px 25px -6px #3AA17E!important;",
                     "    transition: .8s cubic-bezier(.08, .52, .52, 1) background, .4s cubic-bezier(.08, .52, .52, 1) opacity;",
                     "    color: white !important;",
                     "}",
                     "div p:nth-child(2) span:nth-child(2).fs-12 {",
                     "    font-size: 12px;",
                     "    width: 40px;",
                     "    font-weight: bold;",
                     "    margin: 0px 18px;",
                     "    text-decoration: none;",
                     "    border: none!important;",
                     "    background: linear-gradient(141deg, #41bcff 10%, #41bcff 5%)!important;",
                     "    border-radius: 3px!important;",
                     "    box-shadow: 6px 6px 25px -6px #3AA17E!important;",
                     "    transition: .8s cubic-bezier(.08, .52, .52, 1) background, .4s cubic-bezier(.08, .52, .52, 1) opacity;",
                     "    color: white !important;",
                     "}",
                     "div p:nth-child(2) span:nth-child(3).fs-12 {",
                     "    font-size: 12px;",
                     "    font-weight: bold;",
                     "    text-decoration: none;",
                     "    border: none!important;",
                     "    background: linear-gradient(141deg, #41bcff 10%, #41bcff 5%)!important;",
                     "    border-radius: 3px!important;",
                     "    box-shadow: 6px 6px 25px -6px #3AA17E!important;",
                     "    transition: .8s cubic-bezier(.08, .52, .52, 1) background, .4s cubic-bezier(.08, .52, .52, 1) opacity;",
                     "    color: white !important;",
                     "}",
                     "div p:nth-child(2) span:nth-child(4).fs-12 {",
                     "    font-size: 12px;",
                     "    font-weight: bold;",
                     "    width: 50px;",
                     "    margin: 0px 10px;",
                     "    text-decoration: none;",
                     "    border: none!important;",
                     "    background: linear-gradient(141deg, #41bcff 10%, #41bcff 5%)!important;",
                     "    border-radius: 3px!important;",
                     "    box-shadow: 6px 6px 25px -6px #3AA17E!important;",
                     "    transition: .8s cubic-bezier(.08, .52, .52, 1) background, .4s cubic-bezier(.08, .52, .52, 1) opacity;",
                     "    color: white !important;",
                     "}",
                     "div p span:nth-child(4).fs-12 {",
                     "    font-size: 12px;",
                     "    font-weight: bold;",
                     "    width: 50px;",
                     "",
                     "    text-decoration: none;",
                     "    border: none!important;",
                     "    background: linear-gradient(141deg, #41bcff 10%, #41bcff 5%)!important;",
                     "    border-radius: 3px!important;",
                     "    box-shadow: 6px 6px 25px -6px #3AA17E!important;",
                     "    transition: .8s cubic-bezier(.08, .52, .52, 1) background, .4s cubic-bezier(.08, .52, .52, 1) opacity;",
                     "    color: white !important;",
                     "}",
                     "div p span:nth-child(3).fs-12 {",
                     "    font-size: 12px;",
                     "    font-weight: bold;",
                     "    text-decoration: none;",
                     "    border: none!important;",
                     "    background: linear-gradient(141deg, #41bcff 10%, #41bcff 5%)!important;",
                     "    border-radius: 3px!important;",
                     "    box-shadow: 6px 6px 25px -6px #3AA17E!important;",
                     "    transition: .8s cubic-bezier(.08, .52, .52, 1) background, .4s cubic-bezier(.08, .52, .52, 1) opacity;",
                     "    color: white !important;",
                     "}",
                     "div p span:nth-child(2).fs-12 {",
                     "    font-size: 12px;",
                     "    width: 40px;",
                     "    font-weight: bold;",
                     "",
                     "    text-decoration: none;",
                     "    border: none!important;",
                     "    background: linear-gradient(141deg, #41bcff 10%, #41bcff 5%)!important;",
                     "    border-radius: 3px!important;",
                     "    box-shadow: 6px 6px 25px -6px #3AA17E!important;",
                     "    transition: .8s cubic-bezier(.08, .52, .52, 1) background, .4s cubic-bezier(.08, .52, .52, 1) opacity;",
                     "    color: white !important;",
                     "}",
                     "div.al-j.fs-12 {",
                     "    padding: 19px 19px;",
                     "    font-size: 13px;",
                     "    font-weight: bold;",
                     "    text-decoration: none;",
                     "    border: none!important;",
                     "    background: linear-gradient(141deg, #41bcff 10%, #0090ff 75%)!important;",
                     "    border-radius: 3px!important;",
                     "    box-shadow: 6px 6px 25px -6px #3AA17E!important;",
                     "    transition: .8s cubic-bezier(.08, .52, .52, 1) background, .4s cubic-bezier(.08, .52, .52, 1) opacity;",
                     "    color: white !important;",
                     "}"
                 ].join("\n");
             if (false || (document.location.href.indexOf("http://id.blogtruyen.com") == 0))
                 css += [
                     ".img-backdrop {",
                     "    display: none;",
                     "}"
                 ].join("\n");
             if (typeof GM_addStyle != "undefined") {
                 GM_addStyle(css);
             } else if (typeof PRO_addStyle != "undefined") {
                 PRO_addStyle(css);
             } else if (typeof addStyle != "undefined") {
                 addStyle(css);
             } else {
                 var node = document.createElement("style");
                 node.type = "text/css";
                 node.appendChild(document.createTextNode(css));
                 var heads = document.getElementsByTagName("head");
                 if (heads.length > 0) {
                     heads[0].appendChild(node);
                 } else {
                     // no head yet, stick it whereever
                     document.documentElement.appendChild(node);
                 }
             }
            })();


//================PR============


setInterval(function(){
    var tiptip = document.getElementsByClassName('tiptip');
    Array.prototype.forEach.call(tiptip, function(el) {
        var id = el.dataset.tiptip;
        var content = document.getElementById(id).cloneNode(true);
        if(content.className.indexOf('hidden') > -1) {
            content.className = content.className.replace('hidden', '');
            content.style.padding = '10px';
            var title = content.getElementsByClassName("bold al-c fs-12")[0];
            if(title) {
                title.parentElement.removeChild(title);
                el.parentElement.appendChild(content);
            }
        }
    });
});

//================PR============


function checkList() {
	if (GM_getValue(window.top.location.host, '不在黑名单中') == window.top.location.host) { //如果该页面在黑名单中，则不执行
		return true;
	};
};
//================公共函数区============

function addEvent(obj, event, fn) {
	return obj.addEventListener ? obj.addEventListener(event, fn, false) : obj.attachEventListener("on" + event, fn);
};

function getSize(obj) {
	return document.documentElement[obj] != 0 ? document.documentElement[obj] : document.body[obj];
}

function hasScroll() {
	return getSize('scrollHeight') > getSize('clientHeight') ? true : false;
};

function getStyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

function $(id) {
	return document.getElementById(id);
}

function doMove(obj, attr, dir, target, endFn) {
	dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
			var speed = parseInt(getStyle(obj, attr)) + dir;
			if (speed > target && dir > 0 || speed < target && dir < 0) {
				speed = target;
			};
			obj.style[attr] = speed + "px";
			if (speed == target) {
				clearInterval(obj.timer);
				endFn && endFn();
			};
		},
		30);
};
//================样式区============
var cssText = '\
#scrollMars-troy{\
	position:fixed !important;\
	right:30px;\
	z-index:9999999 !important;\
}\
\
.sroll-btn-troy{\
	width:50px !important;\
	height:50px !important;\
	text-align:center !important;\
	background:#303030 !important;\
	color:#fff !important;\
	display:block !important;\
	opacity:0.8 !important;\
	fitter:alpha(opacity:80) !important;\
	cursor:pointer !important;\
	border-radius:50% !important;\
	box-shadow:2px 2px 40px 2px #303030 !important;\
	line-height:50px !important;\
	font-size:35px !important;\
	font-style:inherit !important;\
	font-weight:bold !important;\
	font-family:"宋体" !important;\
}\
#scrollMars-troy>div>div:hover{\
	background:#FF0000 !important;\
}\
#mars-point{\
	width:100px !important;\
	height:100px !important;\
	position:absolute !important;\
	top:0 !important;\
	left:-40px !important;\
}\
#setting-troy{\
	width: 300px !important;\
	height: auto !important;\
	border: 2px solid #303030 !important;\
	position: fixed !important;\
	top: 200px !important;\
	left: 33% !important;\
	color: #fff !important;\
	background: #303030 !important;\
	z-index:9999999999 !important;\
}\
#setting-troy>div{\
	margin: 20px !important;\
}\
#setting-troy>div input{\
	color:#fff !important;\
	background:#303030 !important;\
	padding:5px !important;\
	margin:5px !important;\
}\
#percent{\
	position:absolute !important;\
	top:42px !important;\
	left:-20px;\
	color:#147474 !important;\
	font-family:"微软雅黑" !important;\
	font-size:16px !important;\
	line-height:16px !important;\
}\
'
GM_addStyle(cssText);
//================主要代码区============
GM_getValue("turn") ? GM_setValue("turn", true) : GM_setValue("turn", GM_getValue("turn"));

function readmode(speed, inteval, endFn) {
	if (!$('percent') || GM_getValue("turn") == false || createBtn() == false) {
		return;
	}
	clearInterval(document.readMode);
	document.readMode = setInterval(function() {
		var position = getSize('scrollTop') + speed;
		document.body.scrollTop = document.documentElement.scrollTop = position;
		clearTimeout(document.showPercent);
		var precent = parseInt(getSize('scrollTop') / (getSize('scrollHeight') - getSize('clientHeight')) * 100);
		$('percent').style.display = "block";
		$('percent').innerHTML = precent + '%';
		if (position + getSize('clientHeight') >= getSize('scrollHeight')) { //如果滚到底部
			clearInterval(document.readMode);
			$('percent').style.display = "none";
		}
	}, inteval)
	GM_setValue("turn", true);
}

function moveMars(obj, index) {
	if (index == 'mouseout') {
		clearTimeout(obj.timerHover);
		obj.timerHover = setTimeout(function() {
				doMove(obj, "right", 5, -30);
			},
			3000); //鼠标离开后，3s隐藏到边栏
	} else if (index == 'mouseover') {
		clearTimeout(obj.timerHover);
		doMove(obj, "right", 5, 30);
	}
}

function scroll(obj, dir) { //obj随意，dir>0往上滚，dir<0往下滚
	clearInterval(obj.timerScroll);
	clearInterval(document.readMode);
	obj.timerScroll = setInterval(function() {
		var position;
		if (dir > 0) { //往上滚动
			var speed = (getSize('scrollTop') / 10) + 10;
			position = getSize('scrollTop') - speed;
			if (position <= 0) { //如果滚到顶部
				document.body.scrollTop = document.documentElement.scrollTop = 0;
				clearInterval(obj.timerScroll);
			}
		} else { //往下滚动
			var speed = ((getSize('scrollHeight') - getSize('scrollTop')) / 20) + 10;
			position = getSize('scrollTop') + speed;
			if (position + getSize('clientHeight') >= getSize('scrollHeight')) { //如果滚到底部
				document.body.scrollTop = document.documentElement.scrollTop = getSize('scrollHeight');
				clearInterval(obj.timerScroll);
			}
		}
		document.body.scrollTop = document.documentElement.scrollTop = position;
	}, 20)
}

function createBtn() {
	if (checkList() == true) {
		return false;
	}
	var jugg = $("scrollMars-troy");
	if (jugg && hasScroll() == true) { //如果有滚动条,并且存在滚动按钮
		$('scrollMars-troy').style.top = (getSize('clientHeight') / 3) + 'px'; //调整按钮位置
	} else if (jugg && hasScroll() == false) { //如果没有滚动条，但是有按钮
		jugg.remove(jugg); //删除按钮
	};
	if (hasScroll() == false && !jugg) { //如果没有滚动条,并且没有按钮
		return false;
	} else if (hasScroll() == true && !jugg) { //如果有滚动条，并且没有按钮
		var mars = document.createElement('div');
		mars.id = "scrollMars-troy";
		window.top.document.documentElement.appendChild(mars);
		mars.innerHTML = "\
		<div id='percent'></div>\
		<div id='mars-point'></div>\
		<div>\
			<div id='goTop-troy' title='返回顶部' class='sroll-btn-troy'></div>\
			<div id='goBtn-troy' title='去到底部' class='sroll-btn-troy'></div>\
		</div>\
		";
		$('scrollMars-troy').style.top = (getSize('clientHeight') / 3) + 'px';
		$("goTop-troy").innerHTML = "↑";
		$("goBtn-troy").innerHTML = "↓";
		addEvent($("goTop-troy"), "click", function() {
			scroll(mars, 1)
		});
		addEvent($("goBtn-troy"), "click", function() {
			scroll(mars, -1)
		});
		addEvent($("mars-point"), "mouseover", function(e) {
			moveMars(mars, "mouseover");
		});
		addEvent($("mars-point"), "mouseout", function(e) {
			moveMars(mars, "mouseout");
		});
		addEvent(mars, "mouseover", function() {
			moveMars(mars, "mouseover")
		});
		addEvent(window, "resize", function() {
			$('scrollMars-troy').style.top = (getSize('clientHeight') / 3) + 'px';
		});
		moveMars(mars, "mouseout"); //页面加载完成，默认3s后隐藏到边栏
		return true;
	};
};
//================执行区============
addEvent(window, 'mousewheel', function() { //滚动则停止，兼容chrome/ie/opera
	createBtn() && clearInterval($('scrollMars-troy').timerScroll);
})

addEvent(window, 'DOMMouseScroll', function() { //滚动则停止，兼容firefox
	createBtn() && clearInterval($('scrollMars-troy').timerScroll);
})

addEvent(document, 'dblclick', function(event) { //双击进入阅读模式
	var type = /input|form|textarea|img|a|li|object|video|audio/ig;
	event = event || window.event;
	var macType = type.test(event.target.nodeName);
	if (macType) {
		return;
	};
	readmode(1, 20);
})

addEvent(document, 'click', function() { //单击退出阅读模式
	if ($('percent')) {
		clearInterval(document.readMode);
		$('percent').style.display = "none";
	}
})

addEvent(window.top, "resize", function() { //页面大小改变，初始化按钮
	createBtn();
});
addEvent(document, 'DOMContentLoaded', function() {
	createBtn();
})
//================快捷键区============
addEvent(window, 'keydown', function(event) {
	event = event || window.event;
	if (event.keyCode == 38) { //alt+1，向上滚动
		scroll($('scrollMars-troy'), 1)
	} else if (event.keyCode == 40) { //alt+2，向下滚动
		scroll($('scrollMars-troy'), -1)
	} else if (event.ctrlKey && event.altKey) { //ctrl+alt,调出按钮
		moveMars($('scrollMars-troy'), "mouseover");
		setTimeout(function() {
			moveMars($('scrollMars-troy'), "mouseout");
		}, 3000);
	} else if (event.keyCode == 27) { //Esc退出控制面板
		var setting = $('setting-troy');
		setting　 && 　setting.remove(setting);
	} else if (event.ctrlKey && event.keyCode == 113) { //ctrl+F2，调处控制面板
		$('setting-troy') && 　setting.remove(setting);
		var setting = document.createElement('div');
		setting.id = 'setting-troy';
		var inner = "\
			<div id='setting-pan-troy'>\
				<div>\
					控制面板:Ctrl+F2<br />\
					添加黑名单域名：<input type='text' id='blackList' placeholder='www.baidu.com' /><br />\
					<input type='button' value='添加黑名单' id='saveSetting' />\
					<input type='button' id='quiet' value='退出面板(Esc)' /><br/><hr />\
					<input type='button' id='clear' value='移除黑名单'>\
					<input type='button' id='showlist' value='显示黑名单'>\
					<input type='button' id='clearall' value='清空黑名单'>\
					<input type='button' id='readmodebtn' value='双击滚动开关'>\
				</div>\
			</div>\
		"
		window.top.document.documentElement.appendChild(setting);
		setting.innerHTML = inner;
		//var domian=/^[0-9-a-z]{0,}\.{0,1}[0-9-a-z]+\.{0,1}[a-z]{0,}\.{1}[a-z]+$/ig;//用于验证域名是否符合规范
		var domian = /^[0-9a-zA-Z]+[0-9a-zA-Z\.-]*\.[a-zA-Z]{2,4}$/;
		var host = window.top.location.host;
		$('blackList').value = host;
		//GM_setValue("turn",true);//第一次安装脚本，默认开启双击滚动
		addEvent($('quiet'), 'click', function() { //退出
			setting.remove(setting);
		});
		addEvent($('clear'), 'click', function() { //移出黑名单
			alert(GM_getValue($('blackList').value, '未获取') + "：移除成功");
			GM_deleteValue($('blackList').value);
		});
		addEvent($('clearall'), 'click', function() { //清空黑名单
			for (var i = 0; i < GM_listValues().length; i++) {
				if (domian.test(GM_listValues()[i]) == true) {
					console.log('黑名单：' + GM_listValues()[i] + '被删除');
					GM_deleteValue(GM_listValues()[i]);
				}
			}; //for
			alert('清空完毕,\nBug:可能需要多点几次，才能清空');
		})
		addEvent($('showlist'), 'click', function() { //显示黑名单
			if (GM_listValues().length <= 1) {
				alert('空的黑名单');
				return;
			} else {
				for (var i = 0; i < GM_listValues().length; i++) {
					if (domian.test(GM_listValues()[i]) == true) {
						var list = document.createElement('li');
						list.innerHTML = GM_listValues()[i];
						document.querySelector('#setting-pan-troy>div').appendChild(list);
					}
				} //for
			}
		});
		addEvent($('readmodebtn'), 'click', function() { //禁用双击滚动
			console.log("当前状态：" + GM_getValue("turn"), "空的变量");
			if (GM_getValue("turn") == true) {
				GM_setValue("turn", false);
				alert('开关状态：' + GM_getValue("turn") + '，禁用成功');
				return;
			} else if (GM_getValue("turn") == false) {
				GM_setValue("turn", true);
				alert('开关状态：' + GM_getValue("turn") + '，开启成功');
				return;
			}
		})
		addEvent($('saveSetting'), 'click', function() { //保存
			if (domian.test($('blackList').value) == false) { //检查输入的域名是否符合规范
				alert($('blackList').value + '域名格式不正确' + '\n比如：tieba.baidu.com或www.baidu.com')
				return;
			} else if ($('blackList').value != '') { //如果有填入黑名单列表
				if (GM_getValue($('blackList').value, '不存在这个黑名单') != $('blackList').value) { //不在黑名单中
					GM_setValue($('blackList').value, $('blackList').value);
					alert('禁用：' + $('blackList').value + '成功');
				} else {
					alert('该域名已在黑名单中');
				}
			} else { //没有填入黑名单
				alert('请输入域名');
				return;
			}
		})
	}
}) //监听keydown，快捷键
