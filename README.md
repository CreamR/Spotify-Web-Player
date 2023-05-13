<a name="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![Apache2.0 License][license-shield]][license-url]
[![Release][release-shield]][release-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CreamR/Spotify-Web-Player">
    <img src="/public/logo.svg" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Spotify - Web Player</h3>

  <p align="center">
    🎧 以 Spotify 为UI层开发的在线音乐APP 🎧
    <br />
    <br />
    <a href="https://github.com/CreamR/Spotify-Web-Player/blob/master/README.md">简体中文</a>
     <strong> · </strong>
    <a href="https://github.com/CreamR/Spotify-Web-Player/blob/master/README-EN.md">English</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>目录</summary>
  <ul>
    <li><a href="#项目介绍">项目介绍</a> </li>
    <li><a href="#技术栈">技术栈</a></li>
    <li><a href="#环境要求">环境要求</a></li>
    <li><a href="#安装与运行 - 服务器">安装与运行 - 服务器</a></li>
    <li><a href="#安装与运行 - 前端">安装与运行 - 前端</a></li>
    <li><a href="#解决跨域问题">解决跨域问题</a></li>
    <li><a href="#UI设计参考">UI设计参考</a></li>
    <li><a href="#贡献者">贡献者</a></li>
    <li><a href="#开源协议">开源协议</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## 项目介绍

<!-- 项目图片部分 -->

Spotify - Web Player 是一个在线音乐平台项目，基于 Vue3 组合式 API + Element Plus，后端使用网易云音乐的数据，相比于网易云音乐去掉了冗余的模块，仅保留基本功能, 目前还在开发中。

<p align="right">(<a href="#readme-top">返回顶部</a>)</p>

## 技术栈

- Vue3 with composition API
- Vue-router
- Pinia
- Vite
- Less
- Element-plus
- ES6+
- Fetch

<p align="right">(<a href="#readme-top">返回顶部</a>)</p>

<!-- GETTING STARTED -->

## 环境要求

- NodeJS 16+
- Chrome67+ / Edge79+ / Safari12+
- 适配电脑与平板页面

## 安装与运行 - 服务器

```sh
$ # clone the project
$ git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
$ cd NeteaseCloudMusicApi
$ node app.js
```

## 安装与运行 - 前端

```sh
$ # clone the project
$ git clone https://github.com/CreamR/Spotify-Web-Player.git
$ # install dependencies and run it
$ # recommend pnpm as a package manager that more faster than npm and the grammar is similar with npm
$ pnpm install
$ pnpm run dev
```

## 解决跨域问题

##### 默认情况下, 由于未设置跨域允许，可能会造成无法使用或者白屏问题, 解决此问题可能有以下方法

- 使用浏览器插件将跨域请求改为允许
- 在前端发送网络请求时设置跨域允许
- 后端在编写接口时改为跨域允许
- 使用构建器

##### 我们以第一种方法为例

推荐 [Allow CORS](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) 插件, 下载安装后在使用此项目时启用它即可, 当然你也可以自行选择其他插件或者其他方法来解决跨域问题

<p align="right">(<a href="#readme-top">返回顶部</a>)</p>

## UI 设计参考

[YouTube](https://www.youtube.com)
[Spotify](https://www.spotify.com/)

<p align="right">(<a href="#readme-top">返回顶部</a>)</p>

## 贡献者

此项目由 Gmz@creamR 开发，后端接口支持为 - [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

<p align="right">(<a href="#readme-top">返回顶部</a>)</p>

<!-- LICENSE -->

## 开源协议

[Apache License 2.0](https://github.com/CreamR/Spotify-Web-Player/blob/master/LICENSE)

CreamR/Spotify-Web-Player is licensed under the Apache License 2.0. A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

<p align="right">(<a href="#readme-top">返回顶部</a>)</p>

[stars-shield]: https://img.shields.io/github/stars/creamR/Spotify-Web-Player?style=for-the-badge
[stars-url]: https://github.com/CreamR/Spotify-Web-Player/stargazers
[license-shield]: https://img.shields.io/hexpm/l/apa?style=for-the-badge
[license-url]: https://github.com/CreamR/Spotify-Web-Player/blob/master/LICENSE
[release-shield]: https://img.shields.io/github/v/release/creamR/spotify-web-player?style=for-the-badge
[release-url]: https://github.com/CreamR/Spotify-Web-Player/releases/tag
