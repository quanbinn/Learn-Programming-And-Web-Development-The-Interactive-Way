# 体验DOM树结构的数据节点

## 基本原理

1. DOM tree是一个二叉树的数据结构，对于每一个数据节点，都有它的父节点(parent)，另外也有它的兄弟节点(Sibling)和孩子节点(children)。
2. 对于每一个元素节点的内容，可以从innerHTML的property取出相应的value。
3. 无论是使用getElementById("tagName")取出1个对象, 或者是使用getElementsByTagName("tagName")等取出多个对象，返回的数据都是一个对象（同时可以被看成**一个数组**）。例如使用document.getElementsByTagName("h2")的返回对象如下：

```javascript
x=document.getElementsByTagName("h2");
typeof x is an object

x = [h2, h2, h2, h2, h2]
x = {
	0: {对象1}，
	1: {对象2}，
	2: {对象3}，
	3: {对象4}，
	   ---
	n: {对象n+1}
}

```
	
## 打开实验文件

单击右方的[IANA-managed Reserved Domains](https://www.iana.org/domains/reserved), 浏览器里会打开一个页面，鼠标右键页面检查，在控制台（Console）里面输入下面的代码段，如下图所示。

```javascript
x=document.getElementsByTagName("h2");
x[0].innerHTML
x[1].innerHTML
```

```javascript
0: h2
accessKey: ""
align: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
ariaColIndex: null
ariaColSpan: null
ariaCurrent: null
ariaDescription: null
ariaDisabled: null
ariaExpanded: null
ariaHasPopup: null
ariaHidden: null
ariaKeyShortcuts: null
ariaLabel: null
ariaLevel: null
ariaLive: null
ariaModal: null
ariaMultiLine: null
ariaMultiSelectable: null
ariaOrientation: null
ariaPlaceholder: null
ariaPosInSet: null
ariaPressed: null
ariaReadOnly: null
ariaRelevant: null
ariaRequired: null
ariaRoleDescription: null
ariaRowCount: null
ariaRowIndex: null
ariaRowSpan: null
ariaSelected: null
ariaSetSize: null
ariaSort: null
ariaValueMax: null
ariaValueMin: null
ariaValueNow: null
ariaValueText: null
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {length: 0}
autocapitalize: ""
autofocus: false
baseURI: "https://www.iana.org/domains/reserved"
childElementCount: 0
childNodes: NodeList(1)
0: text
length: 1
__proto__: NodeList
children: HTMLCollection []
classList: DOMTokenList [value: ""]
className: ""
clientHeight: 19
clientLeft: 0
clientTop: 0
clientWidth: 365
contentEditable: "inherit"
dataset: DOMStringMap {}
dir: ""
draggable: false
elementTiming: ""
enterKeyHint: ""
firstChild: text
assignedSlot: null
baseURI: "https://www.iana.org/domains/reserved"
childNodes: NodeList []
data: "Example domains"
firstChild: null
isConnected: true
lastChild: null
length: 15
nextElementSibling: null
nextSibling: null
nodeName: "#text"
nodeType: 3
nodeValue: "Example domains"
ownerDocument: document
parentElement: h2
parentNode: h2
previousElementSibling: null
previousSibling: null
textContent: "Example domains"
wholeText: "Example domains"
__proto__: Text
firstElementChild: null
hidden: false
id: ""
innerHTML: "Example domains"
innerText: "Example domains"
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: text
assignedSlot: null
baseURI: "https://www.iana.org/domains/reserved"
childNodes: NodeList []
data: "Example domains"
firstChild: null
isConnected: true
lastChild: null
length: 15
nextElementSibling: null
nextSibling: null
nodeName: "#text"
nodeType: 3
nodeValue: "Example domains"
ownerDocument: document
parentElement: h2
parentNode: h2
previousElementSibling: null
previousSibling: null
textContent: "Example domains"
wholeText: "Example domains"
__proto__: Text
lastElementChild: null
localName: "h2"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: p
nextSibling: text
nodeName: "H2"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 19
offsetLeft: 20
offsetParent: body
offsetTop: 197
offsetWidth: 365
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
outerHTML: "<h2>Example domains</h2>"
outerText: "Example domains"
ownerDocument: document
parentElement: div#main_right
parentNode: div#main_right
part: DOMTokenList [value: ""]
prefix: null
previousElementSibling: p
previousSibling: text
scrollHeight: 19
scrollLeft: 0
scrollTop: 0
scrollWidth: 365
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
tabIndex: -1
tagName: "H2"
textContent: "Example domains"
title: ""
translate: true
__proto__: HTMLHeadingElement
accessKey: (...)
align: (...)
ariaAtomic: (...)
ariaAutoComplete: (...)
ariaBusy: (...)
ariaChecked: (...)
ariaColCount: (...)
ariaColIndex: (...)
ariaColSpan: (...)
ariaCurrent: (...)
ariaDescription: (...)
ariaDisabled: (...)
ariaExpanded: (...)
ariaHasPopup: (...)
ariaHidden: (...)
ariaKeyShortcuts: (...)
ariaLabel: (...)
ariaLevel: (...)
ariaLive: (...)
ariaModal: (...)
ariaMultiLine: (...)
ariaMultiSelectable: (...)
ariaOrientation: (...)
ariaPlaceholder: (...)
ariaPosInSet: (...)
ariaPressed: (...)
ariaReadOnly: (...)
ariaRelevant: (...)
ariaRequired: (...)
ariaRoleDescription: (...)
ariaRowCount: (...)
ariaRowIndex: (...)
ariaRowSpan: (...)
ariaSelected: (...)
ariaSetSize: (...)
ariaSort: (...)
ariaValueMax: (...)
ariaValueMin: (...)
ariaValueNow: (...)
ariaValueText: (...)
assignedSlot: (...)
attributeStyleMap: (...)
attributes: (...)
autocapitalize: (...)
autofocus: (...)
baseURI: (...)
childElementCount: (...)
childNodes: (...)
children: (...)
classList: (...)
className: (...)
clientHeight: (...)
clientLeft: (...)
clientTop: (...)
clientWidth: (...)
contentEditable: (...)
dataset: (...)
dir: (...)
draggable: (...)
elementTiming: (...)
enterKeyHint: (...)
firstChild: (...)
firstElementChild: (...)
hidden: (...)
id: (...)
innerHTML: (...)
innerText: (...)
inputMode: (...)
isConnected: (...)
isContentEditable: (...)
lang: (...)
lastChild: (...)
lastElementChild: (...)
localName: (...)
namespaceURI: (...)
nextElementSibling: (...)
nextSibling: (...)
nodeName: (...)
nodeType: (...)
nodeValue: (...)
nonce: (...)
offsetHeight: (...)
offsetLeft: (...)
offsetParent: (...)
offsetTop: (...)
offsetWidth: (...)
onabort: (...)
onanimationend: (...)
onanimationiteration: (...)
onanimationstart: (...)
onauxclick: (...)
onbeforecopy: (...)
onbeforecut: (...)
onbeforepaste: (...)
onbeforexrselect: (...)
onblur: (...)
oncancel: (...)
oncanplay: (...)
oncanplaythrough: (...)
onchange: (...)
onclick: (...)
onclose: (...)
oncontextmenu: (...)
oncopy: (...)
oncuechange: (...)
oncut: (...)
ondblclick: (...)
ondrag: (...)
ondragend: (...)
ondragenter: (...)
ondragleave: (...)
ondragover: (...)
ondragstart: (...)
ondrop: (...)
ondurationchange: (...)
onemptied: (...)
onended: (...)
onerror: (...)
onfocus: (...)
onformdata: (...)
onfullscreenchange: (...)
onfullscreenerror: (...)
ongotpointercapture: (...)
oninput: (...)
oninvalid: (...)
onkeydown: (...)
onkeypress: (...)
onkeyup: (...)
onload: (...)
onloadeddata: (...)
onloadedmetadata: (...)
onloadstart: (...)
onlostpointercapture: (...)
onmousedown: (...)
onmouseenter: (...)
onmouseleave: (...)
onmousemove: (...)
onmouseout: (...)
onmouseover: (...)
onmouseup: (...)
onmousewheel: (...)
onpaste: (...)
onpause: (...)
onplay: (...)
onplaying: (...)
onpointercancel: (...)
onpointerdown: (...)
onpointerenter: (...)
onpointerleave: (...)
onpointermove: (...)
onpointerout: (...)
onpointerover: (...)
onpointerrawupdate: (...)
onpointerup: (...)
onprogress: (...)
onratechange: (...)
onreset: (...)
onresize: (...)
onscroll: (...)
onsearch: (...)
onseeked: (...)
onseeking: (...)
onselect: (...)
onselectionchange: (...)
onselectstart: (...)
onstalled: (...)
onsubmit: (...)
onsuspend: (...)
ontimeupdate: (...)
ontoggle: (...)
ontransitioncancel: (...)
ontransitionend: (...)
ontransitionrun: (...)
ontransitionstart: (...)
onvolumechange: (...)
onwaiting: (...)
onwebkitanimationend: (...)
onwebkitanimationiteration: (...)
onwebkitanimationstart: (...)
onwebkitfullscreenchange: (...)
onwebkitfullscreenerror: (...)
onwebkittransitionend: (...)
onwheel: (...)
outerHTML: (...)
outerText: (...)
ownerDocument: (...)
parentElement: (...)
parentNode: (...)
part: (...)
prefix: (...)
previousElementSibling: (...)
previousSibling: (...)
scrollHeight: (...)
scrollLeft: (...)
scrollTop: (...)
scrollWidth: (...)
shadowRoot: (...)
slot: (...)
spellcheck: (...)
style: (...)
(...)
```

## 参考文献及资料

1. [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Modelt) 
2. [JavaScript Interface Element **from W3.org**](http://www.w3.org/2009/cheatsheet/#inf,js,it,Element) 
3. [HTML DOM 教程 **from w3c**](https://www.w3school.com.cn/htmldom/dom_intro.asp) 