# 解析URL

## URL示例说明，分别如下图所示。

![](/images/章8-理解网站开发的重要功能/解析URL/url说明1.jpg)
![](/images/章8-理解网站开发的重要功能/解析URL/url说明2.jpg)

## 打开实验文件

单击右方的[解析URL](https://codepen.io/quanbinn/pen/GRomwLe), 浏览器里会打开一个新的页面，里面有下面的两段代码段，如下图所示。

```html
<form>
  url：<input type="text" id="url" placeholder="input target url"><br>
  <input type="button" value="解析 input url" onclick="handleurlSubmit()"/><br>
</form>

<form>
  select url：<select id="seleted_url" >
    <option value="https://john.doe@www.example.com:123/forum/questions/?tag=networking&order=newest#top">https://john.doe@www.example.com:123/forum/questions/?tag=networking&order=newest#top</option>
    <option value="ldap://[2001:db8::7]/c=GB?objectClass?one">ldap://[2001:db8::7]/c=GB?objectClass?one</option>
    <option value="mailto:John.Doe@example.com">mailto:John.Doe@example.com</option>
    <option value="tel:+1-816-555-1212">tel:+1-816-555-1212</option>
    <option value="telnet://192.0.2.16:80/">telnet://192.0.2.16:80/</option> 
    <option value="urn:oasis:names:specification:docbook:dtd:xml:4.1.2">urn:oasis:names:specification:docbook:dtd:xml:4.1.2/</option>
  </select><br>
  <input type="button" value="解析selected url" onclick="handleSelectedurlSubmit()"/><br>
</form>
```

```javascript
function handleurlSubmit(){
  let urlString = document.getElementById("url").value;
  let url = new URL(urlString);

  alert(url.protocol); 
  alert(url.host); 
  alert(url.hostname);
  alert(url.port);  
  alert(url.pathname);   
  alert(url.search);
  alert(url.hash);
}

function handleSelectedurlSubmit(){
  let urlString = document.getElementById("seleted_url").value;
  let url = new URL(urlString);

  alert(url.protocol); 
  alert(url.host); 
  alert(url.hostname);
  alert(url.port);  
  alert(url.pathname);   
  alert(url.search);
  alert(url.hash);
}
```

## 参考文献及资料

1. 维基百科
	- [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) 
	- [Uniform Resource Identifier](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)
	- [URL](https://en.wikipedia.org/wiki/URL)
	- [Uniform Resource Name](https://en.wikipedia.org/wiki/Uniform_Resource_Name)

2. [URL objects](https://javascript.info/url)

