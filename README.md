# VOICEVOX kuromoji.js

[VOICEVOXエディタ](https://github.com/VOICEVOX/voicevox)のモック用にチューニングした[kuromoji.js](https://github.com/takuyaa/kuromoji.js)です。
ESModuleとして利用できます。

機能追加はしない予定で、VOICEVOXエディタ内で不都合が生じない限り積極的にメンテナンスもしない予定です。
標準的なライブラリやフレームワークを用いた開発環境の改善は歓迎します。

## 使い方

```sh
npm install github:VOICEVOX/kuromoji.js
```

```ts
import { builder, IpadicFeatures, Tokenizer } from "kuromoji";

let _tokenizer: Tokenizer<IpadicFeatures>;

// ブラウザで使う場合
builder({
  nodeOrBrowser: "browser",
  dicPath: "https://url/to/dict",
}).build((err: Error, tokenizer: Tokenizer<IpadicFeatures>) => {
  _tokenizer = tokenizer;
});

// Node.jsで使う場合
builder({
  nodeOrBrowser: "node",
  dicPath: "node_modules/kuromoji/dict",
}).build((err: Error, tokenizer: Tokenizer<IpadicFeatures>) => {
  _tokenizer = tokenizer;
});
```

## 開発環境

```sh
npm i
```

## テスト

```sh
npm run test
```

## フォーマット

```sh
npm run fmt
```
