# 前言

Java 程序员一提起前端知识，心情那是五味杂陈，百感交集。

* 说不学它吧，说不定进公司以后，就会被抓壮丁去时不时写点前端代码
* 说学它吧，HTML、CSS、JavaScript 哪个不得下大功夫才能精通？
* 学一点够不够用呢？如果只学基础的 JavaScript 是不够用的，前端都已经工程化了，Vue、React 这些框架你去看吧，光有点基础根本看不懂，甚至连前端页面路径在哪儿配置，如何跳转都不甚了解。所以得学，而且要学的还不少，请把前端当作 Web 不可或缺的一部分来学习。
* 学习前端好处挺多，有这么一句挺有道理的话：一个程序员至少应该掌握一门静态语言，如 Java，还应该掌握一门动态语言，如 JavaScript。而且，学了前端，就如打通了程序员的任督二脉，可以独立接活了

课程安排：

整个课程分成五章：
* HTML / CSS 这部分对 Java 程序员来说，不是重点，但又不能不讲，这俩知识作为第一章，必学
* JavaScript 这部分是重点，尤其是 ES6 以后的一些新语法，不理解这些，前端代码根本看不懂，必学
* Vue2，Vue3，React 这三章是三选一的关系，根据你入职公司的使用的前端技术不同，有针对地学习
  * 后三章会涵盖 TypeScript、VueCli、Vuex、VueRouter、ElementUI、Vite、CreateReactApp、React、Redux、ReactRouter 等库和工具的使用

# 一、HTML

## 1、初识 HTML 与 CSS

1、HTML 是什么

HTML 即 HyperText Markup language 超文本标记语言，咱们熟知的网页就是用它编写的，HTML 的作用是定义网页的内容和结构。

* HyperText 是指用超链接的方式组织网页，把网页联系起来
* Markup 是指用 `<标签>` 的方式赋予内容不同的功能和含义

2、CSS 是什么

CSS 即 Cascading Style Sheets 级联（层叠）样式表，它描述了网页的表现与展示效果

代码示例：

网页 1：

```html
<!DOCTYPE html>
<html lang="zh">

<head>
    <title>网页1</title>
</head>

<body>
    <h1>这是网页1</h1>

    <p>这是与本页相关的<a href="01-初识html-网页2.html">网页2</a></p>
    <p>这是与本页相关的<a href="01-初识html-网页3.html">网页3</a></p>

    <link rel="stylesheet" href="01-初识CSS.css">
</body>

</html>
```

网页 2：

```html
<!DOCTYPE html>
<html lang="zh">

<head>
    <title>网页2</title>
</head>

<body>
    <h1>这是网页2</h1>

    <a href="javascript:history.back()">返回</a>
</body>

</html>
```

网页 3：

```html
<!DOCTYPE html>
<html lang="zh">

<head>
    <title>网页3</title>
</head>

<body>
    <h1>这是网页3</h1>

    <a href="javascript:history.back()">返回</a>
</body>

</html>
```

CSS：

```css
html, body {
    background-color: rgba(233, 143, 143, 0.422);
    padding-left: 10px;
    padding-right: 10px;
}

a {
    margin-left: 5px;
    font-size: 24px;
    font-family: 隶书;
}
```

最终页面展示效果：

![image1](assets/image1.png)

## 2、HTML 元素

HTML 由一系列元素 `elements` 组成，例如：

```html
<p>Hello, world!</p>
```

* 整体称之为元素
* `<p>` 和 `</p>` 分别称为起始和结束标签
* 标签包围起来的 Hello, world 称之为内容

* p 是预先定义好的 html 标签，作用是将内容作为一个单独的段落

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>02-HTML元素</title>
</head>

<body>
    <p>Hello World</p>
    <p>Hello World 2</p>
    <p>Hello World 3</p>
    <p>Hello World 4</p>
</body>

</html>
```

元素还可以有属性，一个元素可以有多个属性，多个属性之间用空格分隔，如：

```html
<p id="p1" title="标题1">Hello World</p>
<p id="p2">Hello World 2</p>
```

* 属性一般是预先定义好的，这里的 id 属性是给元素一个唯一的标识

元素之间可以嵌套，如：

```html
<p>HTML 是一门非常<b>强大</b>的语言</p>
```

错误嵌套写法：

```html
<p>HTML 是一门非常<b>强大的语言</p></b>
```

> 嵌套的原则：标签不能交叉

不包含内容的元素称之为空元素，如

```html
<img src="1.png">
<img src="1.png"/>
```

* img 作用是用来展示图片
* src 属性用来指明图片路径

## 3、HTML 页面

前面介绍的只是单独的 HTML 元素，它们可以充当一份完整的 HTML 页面的组成部分

```html
<!DOCTYPE html> <!--文档类型声明-->
<html>
    <head>
        <meta charset="utf-8">
        <title>测试页面</title>
    </head>
    
    <body>
        <p id="p1">Hello, world!</p>
        <img src="1.png">
    </body>
</html>
```

* `html` 元素囊括了页面中所有其它元素，整个页面只需一个，称为根元素
* `head` 元素包含的是那些不用于展现内容的元素，如 `title`，`link`，`meta` 等
* `body` 元素包含了对用户展现内容的元素，例如后面会学到的用于展示文本、图片、视频、音频的各种元素

> VS Code 中快速生成完整 HTML 页面的快捷键：
>
> * 输入三个 ! 然后回车，生成 `<!DOCTYPE html>`
> * 输入一个 ! 然后回车，生成 HTML 页面的基本结构
> * 输入 `html:5` 然后回车，也是生成 HTML 页面的基本结构

## 4、常见元素

### 4.1、文本

#### Heading

```html
<h1>1号标题</h1>
<h2>2号标题</h2>
<h3>3号标题</h3>
<h4>4号标题</h4>
<h5>5号标题</h5>
<h6>6号标题</h6>
```

#### Paragraph

```html
<p>段落</p>
```

#### List

无序列表 unordered list，其中 li 代表 list item

```html
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
</ul>
```

有序列表

```html
<ol>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
</ol>
```

多级列表，可以嵌套

```html
<ul>
    <li>
    	北京市
        <ul>
            <li>海淀区</li>
            <li>朝阳区</li>
            <li>昌平区</li>
        </ul>
    </li>
    <li>
    	河北省
        <ul>
            <li>石家庄</li>
            <li>保定</li>
        </ul>
    </li>
</ul>
```

#### Anchor

锚，超链接。语法：

```html
<a href="网页地址">超链接文本</a>
```

代码示例：

```html
<a href="本地网页.html">本地网页</a>
<hr>
<a href="https://www.baidu.com">互联网网页</a>
<hr>
<a href="#p1">页面内锚点</a>
<hr>

<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>

<p id="p1">很下面的内容</p>
<a href="#">回到顶部</a>
```

### 4.2、多媒体

#### Image

语法：

```html
<img src="文件路径">
```

其中 src 格式有 3 种

1、文件地址

```html
<img src="img/黑马logo.png">
```

2、data URL，格式如下

```
data:媒体类型;base64,数据
```

代码示例：

```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6
          QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAB8NSURBVHhetZsJtJVlucefs6czMyij
          // 中间省略
          KoK7qyUTSfT4w/9nn7daf/sw+/HCd7dmrrwvIivDOY/R9Ox2kRF2k3aQAAAABJRU5ErkJggg==" alt="">
```

Java 中得到 base64 编码的方法：

控制台输入 `jshell`，然后输入 `Files.readAllBytes(Path.of("文件路径"))`，然后输入 `System.out.println(Base64.getEncoder().encodeToString($1))`，最终得到一个字符串

3、object URL，需要配合 JavaScript 使用

#### Video

```html
<video src="文件路径"></video>
<video src="media/test.mp4" width="300" controls autoplay></video>
```

#### Audio

```html
<audio src="文件路径"></audio>
<audio src="media/bgm.mp3" controls></audio>
```

### 4.3、表单

#### 作用与语法

表单的作用：**收集**用户填入的**数据**，并将这些数据**提交给服务器**

表单的语法：

```html
<form action="服务器地址" method="请求方式" enctype="数据格式">
    <!-- 表单项 -->
    <input type="text" name="username">
    <input type="submit" value="提交按钮">
</form>
```

* method 请求方式有：
  * get （默认）提交时，数据跟在 URL 地址之后
  * post 提交时，数据在请求体内
* enctype 在 post 请求时，指定请求体的数据格式
  * `application/x-www-form-urlencoded`（默认）
  * `multipart/form-data`
* 其中表单项提供多种收集数据的方式
  * 有 name 属性的表单项数据，才会被发送给服务器

#### 常见的表单项

1、文本框

文本框填什么内容就显示什么内容

```html
<input type="text" name="uesrname">
```

2、密码框

密码框填的内容默认会被隐藏起来

```html
<input type="password" name="password">
```

3、隐藏框

隐藏框不会在页面显示出来，但只要写了 name 和 value 属性，表单提交时依然会把隐藏框的数据发送给服务器

```html
<input type="hidden" name="id">
<input type="hidden" name="id" value="1">
```

4、日期框

提交的日期格式为 yyyy-MM-dd

```html
<input type="date" name="birthday">
```

5、单选

checked 属性指定一个单选项是否默认选中

```html
<input type="radio" name="sex" value="男" checked>
<input type="radio" name="sex" value="女">
```

6、多选

```html
<input type="checkbox" name="fav" value="唱歌">
<input type="checkbox" name="fav" value="逛街">
<input type="checkbox" name="fav" value="游戏">
```

7、文件上传

文件选择框要求表单必须指定两个属性 method 和 enctype 的值分别为 post 和 `multipart/form-data`

```html
<input type="file" name="avatar">
```

综合代码示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>表单元素</title>
</head>

<body>
    <!-- 表单的基本用法 -->
    <form action="https://www.baidu.com/s">
        <input type="text" name="wd">
        <input type="submit" value="搜索">
    </form>

    <br><br>

    <form action="http://localhost:8080/test" method="post" enctype="multipart/form-data">
        <!-- 文本框 -->
        <input type="text" name="username">
        <br>
        <!-- 密码框 -->
        <input type="password" name="password">
        <br>
        <!-- 隐藏框 -->
        <input type="hidden" name="id" value="1">
        <br>
        <!-- 日期框 -->
        <input type="date" name="birthday">
        <br>

        <!-- 单选框 -->
        男<input type="radio" name="sex" value="男" checked>
        女<input type="radio" name="sex" value="女">
        <br>

        <!-- 多选框 -->
        唱歌<input type="checkbox" name="favorites" value="唱歌">
        逛街<input type="checkbox" name="favorites" value="逛街">
        游戏<input type="checkbox" name="favorites" value="游戏">
        <br>

        <!-- 文件选择框 -->
        <input type="file" name="avatar">
        <br>

        <!-- 提交按钮 -->
        <input type="submit" value="提交">
    </form>
</body>

</html>
```

后端代码：

```java
@Controller
public class MyController {
    @RequestMapping("/test")
    @ResponseBody
    public String test(User user, MultipartFile avatar) {
        System.out.println("user: " + user);
        System.out.println("avatar: " + avatar.getSize());
        return "收到数据";
    }

    static class User {
        private String username;
        private String password;
        private int id;

        @DateTimeFormat(pattern = "yyyy-MM-dd")
        private LocalDate birthday;

        private String sex;
        private List<String> favorites;

        // getter、setter、toString省略
    }
    
    // 也可使用record来代替Java Bean
    record User(Integer id, String username, String password, String sex, List<String> fav,
                @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate birthday) {
    }
}
```

## 5、HTTP 请求

### 5.1、请求组成

请求由三部分组成：

1. 请求行
   * 请求行由请求方式、URI、协议版本组成
2. 请求头
   * 格式：`头名: 头值`
3. 请求体
   * 一般用来携带向服务器提交的数据

可以用 telnet 程序测试

### 5.2、请求方式与数据格式

#### GET 请求示例

```http
GET /test2?name=%E5%BC%A0&age=20 HTTP/1.1
Host: localhost
```

* `%E5%BC%A0` 是【张】经过 URL 编码后的结果
* 可在浏览器控制台中运行 JavaScript 代码 `encodeURIComponent("张")` 来获取 “张” 经过 URL 编码后的结果

URL 编码就是把字符先按 UTF-8 编码，然后找到其 16 进制，每个 16 进制前面加一个 %

#### POST 请求示例

```http
POST /test2 HTTP/1.1
Host: localhost
Content-Type: application/x-www-form-urlencoded
Content-Length: 21

name=%E5%BC%A0&age=18
```

`application/x-www-form-urlencoed` 格式细节：

* 参数分成名字和值，中间用 `=` 分隔
* 多个参数使用 `&` 进行分隔
* 【张】等特殊字符需要用 `encodeURIComponent()` 编码为【%E5%BC%A0】后才能发送

后端代码：

```java
@RequestMapping("/test2")
@ResponseBody
public String test2(String name, Integer age) {
    System.out.println(name + " " + age);
    return "收到：" + name + " " + age;
}
```

#### JSON 请求示例

```http
POST /test3 HTTP/1.1
Host: localhost
Content-Type: application/json
Content-Length: 25

{"name":"zhang","age":18}
```

JSON 对象格式：

```json
{"属性名":属性值}
```

其中属性值可以是

* 字符串 ""
* 数字
* true, false
* null
* 对象
* 数组

JSON 数组格式：

```json
[元素1, 元素2, ...]
```

发送 GET 和 POST 请求时，汉字要经过 URL 编码后才能发送，但发 JSON 请求时汉字也可以照常发送

后端代码：

```java
@RequestMapping("/test3")
@ResponseBody
public Req test3(@RequestBody Req req) {
    System.out.println(req);
    return req;
}

record Req(String name, int age) {}
```

#### multipart 请求示例

```http
POST /test2 HTTP/1.1
Host: localhost
Content-Type: multipart/form-data; boundary=123
Content-Length: 125

--123
Content-Disposition: form-data; name="name"

lisi
--123
Content-Disposition: form-data; name="age"

30
--123--
```

* `boundary=123` 用来定义分隔符
* 起始分隔符是 `--分隔符`
* 结束分隔符是 `--分隔符--`

#### 数据格式小结

1、客户端发送

* 编码
  * `application/x-www-form-urlencoded`：URL 编码
  * `application/json`：UTF-8 编码
  * `multipart/form-data`：每部分编码可以不同
* 表单只支持以 `application/x-www-form-urlencoded` 和 `multipart/form-data` 格式发送数据
* 文件上传需要用 `multipart/form-data` 格式
* JavaScript 代码可以支持任意格式发送数据

2、服务端接收

* 对 `application/x-www-form-urlencoded` 和 `multipart/form-data` 格式的数据，Spring 接收方式是统一的，只需要用 Java Bean 的属性名对应请求参数名即可
* 对于 `applicaiton/json` 格式的数据，Spring 接收需要使用 `@RequestBody` 注解 + Java Bean 的方式

### 5.3、session 原理

HTTP 无状态，有会话

* 无状态是指，请求之间相互独立，第一次请求的数据，第二次请求不能重用
* 有会话是指，客户端和服务端都有相应的技术，可以暂存数据，让数据在请求间共享

服务端使用了 session 技术来暂存数据

客户端发送请求后，服务端会将数据比如 name 存到 session 中，并返回给客户端 JSESSIONID

```http
GET /s1?name=zhang HTTP/1.1
Host: localhost
```

客户端后续发请求时在 cookie 中携带 JSESSIONID，便可从 session 中取数据

```http
GET /s2 HTTP/1.1
Host: localhost
Cookie: JSESSIONID=560FA845D02AE09B176E1BC5D9816A5D
```

后端代码：

```java
@RequestMapping("/session1")
@ResponseBody
public String s1(HttpSession session, String name) {
    session.setAttribute("name", name);
    return "数据已存储";
}

@RequestMapping("/session2")
@ResponseBody
public String s2(HttpSession session) {
    return "取出数据" + session.getAttribute("name");
}
```

session 技术实现身份验证的流程图：

```mermaid
sequenceDiagram
participant Client
participant L as LoginController
participant i as LoginInterceptor
participant Session
rect rgb(200, 223, 255)
Client ->> +L : 登录请求
L ->> L : 检查用户名，密码，验证通过
L ->> +Session : 存入用户名
Session -->> -L: 
L -->> -Client: 登录成功
end
rect rgb(200, 190, 255)
Client ->> +i : 其它请求
i ->> +Session : 获取用户名
Session -->> -i : 
i ->> i: 用户名存在，放行
i -->> -Client : 
end
```

### 5.4、JWT 原理

JWT 技术实现身份验证：

```mermaid
sequenceDiagram
participant Client
participant L as LoginController
participant i as LoginInterceptor

rect rgb(200, 223, 255)
Client ->> +L : 登录请求
L ->> L : 检查用户名，密码，验证通过
L -->> -Client : 登录成功，返回token
end

rect rgb(150, 190, 155)
Client ->> +i : 其它请求，携带token
i ->> i : 校验token，校验无误，放行
i -->> -Client : 
end
```

发送请求后，若用户名和密码校验通过，服务端生成 token 并返回给客户端

```http
GET /j1?name=zhang&pass=123 HTTP/1.1
Host: localhost
```
后续发请求时需要在请求头中携带 token，服务端接收到请求后会校验 token

```http
GET /j2 HTTP/1.1
Host: localhost
Authorization: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9._1-P_TLlzQPb1_lCyGwplMZaKQ8Mcw_plBbYPZ3OX28
```

后端代码：

```java
SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

@RequestMapping("/jwt1")
@ResponseBody
public String j1(String name, String pass) {
    if ("zhang".equals(name) && "123".equals(pass)) {
        String token = Jwts.builder().setSubject(name).signWith(key).compact();
        return "验证身份通过:" + token;
    } else {
        return "验证身份失败";
    }
}

@RequestMapping("/jwt2")
@ResponseBody
public String j2(@RequestHeader String authorization) {
    try {
        System.out.println(authorization);
        // Jws<Claims> jws = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(authorization);
        Jws<Claims> jws = Jwts.parser().setSigningKey(key).build().parseClaimsJws(authorization);
        return "校验通过, 你是:" + jws.getBody().getSubject();
    } catch (Exception e) {
        return "校验失败";
    }
}
```

观察生成的 token，可以发现 token 被 `.` 分隔成三部分

* 第一部分 header，保存 token 使用的签名算法
* 第二部分 poyload，保存 token 里包含的一些数据
* 第三部分 签名

第一部分和第二部分都没有加密，使用的 base64 编码

关键在第三部分签名，签名能保证 token 令牌的数据不被篡改。因为签名是根据前两部分外加一个密钥生成的，当我们修改了 poyload 中的数据，最终生成的签名会改变

```java
String token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6aGFuZyJ9.sDDRsT2ZsLC5OlVHSQ6qAOtgCV6z_J_FRm3SSeve614";

// {"alg":"HS256"}
System.out.println(new String(Base64.getDecoder().decode("eyJhbGciOiJIUzI1NiJ9")));
// {"sub":"zhang"}
System.out.println(new String(Base64.getDecoder().decode("eyJzdWIiOiJ6aGFuZyJ9")));


String str = """
        {"sub":"admin"}""";
// eyJzdWIiOiJhZG1pbiJ9
System.out.println(Base64.getEncoder().encodeToString(str.getBytes(StandardCharsets.UTF_8)));
```

# 二、CSS

即 Cascading  Style  Sheets，它描述了网页的表现与展示效果

1、选择器

* type 选择器 — 根据标签名进行匹配（元素选择器）
* class 选择器 — 根据元素的 class 属性进行匹配

* id 选择器  — 根据元素的 id 属性进行匹配

三个选择器的优先级排序：id 选择器 > class 选择器 > type 选择器

代码示例：

```html
<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS示例</title>

    <link rel="stylesheet" href="02-style.css">
</head>
    
<body>
    <p id="p1">1111111111</p>
    <p class="c1" id="p2">2222222222</p>
    <p class="c1" id="p3">3333333333</p>
</body>
    
</html>
```

```css
/* 元素(type)选择器 */
p {
    background-color: rgb(243, 136, 42);
}

/* class 选择器 */
.c1 {
    background-color: rgb(151, 211, 48);
}

/* id 选择器 */
#p3 {
    background-color: cyan;
    /* display: none; */
    display: block;
}
```

2、属性和值

* `background-color: red;`
* ...
* display 控制元素是否可见

更多属性的讲解参见文档：<https://developer.mozilla.org/zh-CN/docs/Web/CSS>

3、布局

与布局相关的 HTML 元素

* div

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>布局</title>

    <style>
        html,
        body {
            margin: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 30px;
            font-weight: bold;
        }

        div {
            box-sizing: border-box;
        }

        .container {
            height: 100%;
            position: relative;
        }

        #header {
            background-color: rgb(152, 152, 255);
            width: 100%;
            height: 80px;
            padding-top: 10px;
        }

        #aside {
            background-color: aquamarine;
            float: left;
            width: 200px;
            height: calc(100% - 140px);
            padding-top: 10px;
        }

        #main {
            background-color: honeydew;
            float: left;
            width: calc(100% - 200px);
            height: calc(100% - 140px);
            padding-top: 10px;
            padding-left: 20px;
            text-align: left;
        }

        #footer {
            background-color: darksalmon;
            height: 60px;
            padding-top: 10px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div id="header">#header</div>
        <div id="aside">#aside</div>
        <div id="main">
            <form action="">
                <input type="text">
            </form>
        </div>
        <div style="clear: both;"></div>
        <div id="footer">#footer</div>
    </div>
</body>

</html>
```

![image2](assets/image2.png)

* template

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>模板</title>

    <style>
        html,
        body {
            margin: 0;
            width: 100%;
            height: 100%;
        }

        .btn {
            padding: 10px;
        }

        .out {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            background-color: darkgrey;
        }

        .in {
            width: 200px;
            box-sizing: border-box;
            height: 200px;
            border: solid 2px black;
            padding: 10px;
            background-color: antiquewhite;
            margin: 10px;
            float: left;
        }
    </style>
</head>

<body>
    <div class="out">
        <div class="btn">
            <input type="button" value="根据模板创建" id="add" />
        </div>
    </div>

    <template id="t">
        <div class="in">
            <form action="">
                <p><label>姓名</label> <input type="text"></p>
                <p><label>年龄</label> <input type="text"></p>
                <p><input type="submit" value="添加"></p>
            </form>
        </div>
    </template>

    <script>
        document.getElementById("add").onclick = () => {
            let t = document.getElementById("t");
            let inputs = t.content.querySelectorAll("input");
            inputs[0].value = randomGenerator("abcdefghijklmnopqrstuvwxyz", 5);
            inputs[1].value = randomGenerator("1234567890", 2);
            const c = document.importNode(t.content, true);
            document.querySelector(".out").appendChild(c);
        }
        function randomGenerator(str, n) {
            const result = [];
            for (let i = 0; i < n; i++) {
                result.push(str.charAt(Math.floor(Math.random() * str.length)))
            }
            return result.join("");
        }
    </script>
</body>

</html>
```

运行效果：每点击一次根据模板创建，就会生成一个添加姓名和年龄的表单

![image3](assets/image3.png)
