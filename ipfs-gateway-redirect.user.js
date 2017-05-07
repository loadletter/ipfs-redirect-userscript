// ==UserScript==
// @name        Redirect to local gateway
// @namespace   loadletter
// @description Redirect from http://gateway.ipfs.io to http://localhost:8080
// @match       *://gateway.ipfs.io/ipfs/*
// @match       *://gateway.ipfs.io/ipns/*
// @match       *://ipfs.io/ipfs/*
// @match       *://ipfs.io/ipns/*
// @version     2
// @grant       none
// @run-at      document-start
// ==/UserScript==

var local_gw = "localhost:8080";

location.host = local_gw;
