<div align="center">
  <img src="public/tombstone.png" alt="tombstone" style="height: 80px; width: 80px; padding: 0 20px;">
  <h1>Killed by Time</h1>
  <p>失落的中文互联网遗址，记录那些曾经辉煌过的中文互联网产品。</p>
</div>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/621f2534-f31e-481f-9707-7cb7a84481bd/deploy-status)](https://app.netlify.com/sites/killedbytime/deploys) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](/LICENSE) [![Twitter Follow](https://img.shields.io/twitter/follow/hutusi?color=%231da1f2&style=flat-square)](https://twitter.com/hutusi)

</div>

## 贡献

欢迎贡献产品信息，请提供以下信息：

- 产品名称 (`name`)
- 发布或上线日期 (`dateOpen`)
- 下线或中止日期 (`dateClose`)
- 产品描述 (`description`)
- 链接 (`link`) - 产品相关链接.
- 类型 (`type`) - 如: social, bbs, blog 等。

有两种方式提交产品信息：

### 1. 提交 issue

按照 issue 模板提交[新 issue](https://github.com/hutusi/killedbytime/issues/new?template=add-a-product.md).

### 2. Fork 本仓库并提交 PR

1. Fork 本仓库。
2. 创建一个新分支，按照产品名来命名分支，比如互联网网址(xici-net) 。
3. 切换到该分支并开始编辑 `graveyard.json` 文件，并按照上述信息内容添加；或者在命令行上输入 `yarn && yarn kill` 命令按提示输入。
4. 添加产品到 `graveyard.json` 文件后，运行 `yarn test` 来确保 `graveyard.json` 格式正确。
5. 提交 Commit 并创建一个 Pull Request.

## 声明

本项目来源于 Cody Odgen 的开源项目[Killed by Google](https://github.com/codyogden/killedbygoogle), License 也沿用原 MIT License. 
