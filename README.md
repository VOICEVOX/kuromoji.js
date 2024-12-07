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
