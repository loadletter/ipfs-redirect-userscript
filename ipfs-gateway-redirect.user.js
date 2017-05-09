// ==UserScript==
// @name        Redirect to local gateway
// @namespace   loadletter
// @description Redirect from http://gateway.ipfs.io to http://localhost:8080
// @match       *://gateway.ipfs.io/ipfs/*
// @match       *://gateway.ipfs.io/ipns/*
// @match       *://ipfs.io/ipfs/*
// @match       *://ipfs.io/ipns/*
// @exclude     http://localhost:*/*
// @version     4
// @grant       none
// @run-at      document-start
// ==/UserScript==

var regExp = /.?(\/ipfs\/|\/ipns\/)?(Qm\w{44})/;
var matches = regExp.exec(window.location.toString());

// If matches is not null it will always have 3 elements, some of 
// which may be null.
if (matches != null && matches.length > 1) {
	// matches[1] is the protocol.
	var defaultProto = (matches[1] == null) ? "/ipfs/" : matches[1];

	// matches[2] is the hash.
	var hash = matches[2];
	if(hash != null) {
		var newUrl = "http://localhost:8080" + defaultProto + hash;
		window.location = newUrl;
	}
}
