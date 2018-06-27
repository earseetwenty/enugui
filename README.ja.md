# EnuGui - Enumivoブロックプロデューサ投票 & ウォレット

`EnuGui`はENUブロックチェーン用に設計されたライトウォレットの機能限定リリースです。このアプリケーションはENUのリモートAPIエンドポイントに接続し、プロデューサ投票の操作と、いくつかの基本的なウォレットコマンドを実行できます。

### 機能

- **ブロックプロデューサ投票**: 支持するブロックプロデューサを選択し、票を投じます。ブロックプロデューサ投票UIは検索ツールではないことに注意して下さい。これは安全に投票するためのシンプルなインターフェースです。
- **トークン転送**: 残高を保有するENUまたはその他のトークンを他のユーザーや取引所に転送します。
- **CPU/帯域ステーキング**: 帯域またはCPUにENUをステークします。これはブロックプロデューサ投票にウェイトを加えるとともに、ネットワーク上でリソースの使用権を与えます。
- **ローカルウォレット**: インポートした秘密鍵にパスワードを設定してローカルウォレットを作成します。キーはこのパスワードを使用してローカルで暗号化されます。このパスワードはウォレットのロックを解除するたびに必要となります。
- **一時使用**: アプリケーションにキーを保存したくない場合は、パスワードを設定しないで下さい。アプリケーションを終了すると、キーは消去されます。

## EnuGuiの入手

最新のリリースはこのリポジトリのリリースページでいつでも利用可能です:

[https://github.com/enumivo/enugui/releases](https://github.com/enumivo/enugui/releases)

どのファイルが必要かを決めるには、...

- **MacOSユーザーの場合**: DMG (`enugui-***.dmg`) またはZIP (`enugui-***-mac.zip`) ファイルをダウンロード。
- **Windowsユーザーの場合**: EXE (`enugui-***.exe`) ファイルをダウンロード。
- **Linuxユーザーの場合**: SNAP (`enugui-***-_amd64.snap`) またはDEB (`enugui-***-_amd64.deb`) ファイルをダウンロード。

### セキュリティ: 秘密鍵

`EnuGui`を使用するとき、すべてのトランザクションはアプリケーション内で署名され、秘密鍵は絶対に送信されません。ローカルウォレットのパスワードを指定した場合、アプリケーションは将来の使用のために秘密鍵を保存してAES-256で暗号化します。

### エンドポイント

このアプリケーションを使用するために、このリポジトリ内でノードのリストを公開しています:

[https://github.com/enumivo/enugui/blob/master/nodes.md](https://github.com/enumivo/enugui/blob/master/nodes.md)

このリストは時間とともに更新され、アプリケーションの初期画面から参照することができます。

### 自分でビルドする方法

アプリケーションを自身でビルドしたい場合は、nodejs/npm/yarnが既にローカルにインストールされていることを確認してください。

**注**: Windows開発環境でこのElectronアプリケーションを構成する場合は、追加の手順が必要です。

```
git clone git@github.com:enumivo/enugui.git enugui
cd enugui
yarn install
```

次に、いずれかを実行してください:

- MacOS: `yarn package`
- Linux: `yarn package-linux`
- Windows: `yarn package-win`
- All: `yarn package-all`

プロジェクトのルートフォルダ内の`releases`にビルドしたファイルがあります。
