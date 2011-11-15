// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
      null, {code: 'var a=document.createElement("script");a.type="text/javascript";a.src="http://growbutton.com/javascripts/bookmarklet.js";document.documentElement.appendChild(a)' });
});
