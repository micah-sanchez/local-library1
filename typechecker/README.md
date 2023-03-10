<!-- TITLE/ -->

<h1>TypeChecker</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.com/bevry/typechecker" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/com/bevry/typechecker/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/typechecker" title="View this project on NPM"><img src="https://img.shields.io/npm/v/typechecker.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/typechecker" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/typechecker.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/bevry/typechecker" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/bevry/typechecker.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/bevry/typechecker#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/bevry/typechecker.svg" alt="Dev Dependency Status" /></a></span>
<br class="badge-separator" />
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Utilities to get and check variable types (isString, isPlainObject, isRegExp, etc)

<!-- /DESCRIPTION -->


## Why?

Why should I use this instead of say `instanceof`?

Under certain circumstances `instanceof` may not return the correct results. This occurs with [node's vm module](http://nodejs.org/api/vm.html#vm_globals) especially, and circumstances where an object's prototype has been dereferenced from the original. As such, for basic `==` and `===` checks (like `a === null`), you're fine not using this, but for checks when you would have done `instanceof` (like `err instanceof Error`), you should try to use this instead. Plus things like `isEmpty`, `isEmptyObject` and `isPlainObject` are darn useful!


## Usage

[API Documentation](http://master.typechecker.bevry.surge.sh/docs/)


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Install: <code>npm install --save typechecker</code></li>
<li>Require: <code>require('typechecker')</code></li>
</ul>

<a href="https://jspm.io" title="Native ES Modules CDN"><h3>jspm</h3></a>

``` html
<script type="module">
    import * as pkg from '//dev.jspm.io/typechecker'
</script>
```

<h3><a href="https://editions.bevry.me" title="Editions are the best way to produce and consume packages you care about.">Editions</a></h3>

<p>This package is published with the following editions:</p>

<ul><li><code>typechecker</code> aliases <code>typechecker/index.js</code> which uses <a href="https://editions.bevry.me" title="Editions are the best way to produce and consume packages you care about.">Editions</a> to automatically select the correct edition for the consumers environment</li>
<li><code>typechecker/source/index.ts</code> is typescript source code with import for modules</li>
<li><code>typechecker/edition-browsers/index.js</code> is typescript compiled for browsers with import for modules</li>
<li><code>typechecker/edition-node-13/index.js</code> is typescript compiled for node.js 13 with require for modules</li>
<li><code>typechecker/edition-node-0.8/index.js</code> is typescript compiled for node.js 0.8 with require for modules</li></ul>

<!-- /INSTALL -->


<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/bevry/typechecker/blob/master/HISTORY.md#files">Discover the release history by heading on over to the <code>HISTORY.md</code> file.</a>

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/bevry/typechecker/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="http://balupton.com">Benjamin Lupton</a> ??? <a href="https://github.com/bevry/typechecker/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/typechecker">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="http://balupton.com">Benjamin Lupton</a> ??? <a href="https://github.com/bevry/typechecker/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/typechecker">view contributions</a></li>
<li><a href="joegesualdo.com">Joe Gesualdo</a> ??? <a href="https://github.com/bevry/typechecker/commits?author=joegesualdo" title="View the GitHub contributions of Joe Gesualdo on repository bevry/typechecker">view contributions</a></li>
<li><a href="http://seanfridman.com">Sean Fridman</a> ??? <a href="https://github.com/bevry/typechecker/commits?author=sfrdmn" title="View the GitHub contributions of Sean Fridman on repository bevry/typechecker">view contributions</a></li>
<li><a href="http://mattbierner.com">Matt Bierner</a> ??? <a href="https://github.com/bevry/typechecker/commits?author=mjbvz" title="View the GitHub contributions of Matt Bierner on repository bevry/typechecker">view contributions</a></li>
<li><a href="http://github.com/apps/dependabot-preview">dependabot-preview[bot]</a> ??? <a href="https://github.com/bevry/typechecker/commits?author=dependabot-preview[bot]" title="View the GitHub contributions of dependabot-preview[bot] on repository bevry/typechecker">view contributions</a></li></ul>

<a href="https://github.com/bevry/typechecker/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2013+ <a href="http://bevry.me">Bevry Pty Ltd</a></li>
<li>Copyright &copy; 2011-2012 <a href="http://balupton.com">Benjamin Lupton</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
