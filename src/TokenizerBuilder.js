/*
 * Copyright 2024 VOICEVOX
 * Copyright 2014 Takuya Asano
 * Copyright 2010-2014 Atilika Inc. and contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Tokenizer from "./Tokenizer.js";
import NodeDictionaryLoader from "./loader/NodeDictionaryLoader.js";
import BrowserDictionaryLoader from "./loader/BrowserDictionaryLoader.js";

/**
 * TokenizerBuilder create Tokenizer instance.
 * @param {Object} option JSON object which have key-value pairs settings
 * @param {string} option.dicPath Dictionary directory path (or URL using in browser)
 * @constructor
 */
function TokenizerBuilder(option) {
  const node_or_browser = option.nodeOrBrowser;
  if (node_or_browser != "node" && node_or_browser != "browser") {
    throw new Error(
      `Invalid value for nodeOrBrowser: ${node_or_browser}. Expected 'node' or 'browser'`,
    );
  }
  this.node_or_browser = node_or_browser;

  if (option.dicPath == null) {
    this.dic_path = "dict/";
  } else {
    this.dic_path = option.dicPath;
  }
}

/**
 * Build Tokenizer instance by asynchronous manner
 * @param {TokenizerBuilder~onLoad} callback Callback function
 */
TokenizerBuilder.prototype.build = function (callback) {
  var loader =
    this.node_or_browser == "node"
      ? new NodeDictionaryLoader(this.dic_path)
      : new BrowserDictionaryLoader(this.dic_path);
  loader.load(function (err, dic) {
    callback(err, new Tokenizer(dic));
  });
};

/**
 * Callback used by build
 * @callback TokenizerBuilder~onLoad
 * @param {Object} err Error object
 * @param {Tokenizer} tokenizer Prepared Tokenizer
 */

export default TokenizerBuilder;
