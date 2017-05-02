// ==UserScript==
// @name        Redirect to local gateway
// @namespace   loadletter
// @description Redirect from http://gateway.ipfs.io to http://localhost:8080
// @match       *://gateway.ipfs.io/ipfs/*
// @match       *://gateway.ipfs.io/ipns/*
// @match       *://ipfs.io/ipfs/*
// @match       *://ipfs.io/ipns/*
// @version     3
// @grant       none
// @run-at      document-start
// ==/UserScript==

//shamelessy copypasted from https://github.com/NeoTeo/ipfs-catcher
var curUrl = window.location.toString()

// capture groups always result in the equivalent number of entries in the array.
var regExp = /.?(\/ipfs\/|\/ipns\/)?(Qm\w{44})/
var regExcl = /http:\/\/localhost.*/
var matches = regExp.exec(curUrl)

// If matches is not null it will always have 3 elements, some of 
// which may be null.
if (matches != null) {

    console.log(matches)
    if (matches.length > 1 && !regExcl.test(curUrl)) {

        // matches[1] is the protocol.
        var proto = matches[1]
        defaultProto = (proto == null) ? "/ipfs/" : proto

        // matches[2] is the hash.
        var hash = matches[2]
        if( hash != null ) {
            defaultProto += hash
            var newUrl = "http://localhost:8080"+defaultProto
            window.location = newUrl
        }
    }
} 
