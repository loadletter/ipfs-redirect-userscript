// ==UserScript==
// @name        Redirect to local IPFS gateway
// @namespace   loadletter
// @description Redirect URLs from http://gateway.ipfs.io to a local IPFS gateway
// @match       *://gateway.ipfs.io/ipfs/*
// @version     1
// @grant       none
// @run-at      document-start
// ==/UserScript==

var local_gw = "localhost:8080";

location.host = local_gw;
