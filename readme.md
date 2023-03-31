# TimA11y Extension

## The Problem

I need to find a CSS selector that will contain part of a web page. When I just need to select a couple nodes, it is easy enough to do using the DOM inspector. However, sometimes the size of the content can make it more difficult to determine if the selector I picked will contain all the content.

## The Solution

When you activate the extension (using control+shift+S), you are asked to enter your CSS selector. After you click the Apply button, the extension applies a class to all the nodes that match the selector. What happens is the words "[[ start ]]" and "[[ end ]]"  will appear directly before and after the selected node. This added content is visually hidden so it won't alter the UI. The extension will also display an alert dialog informing you how many nodes matched the selector.

## Change Log


### 0.1.0 - Initial Commit

* The initial commit of the extension.

## 0.2.0

* Added control+shift+S keyboard shortcut to activate the extension more easily.

## 0.2.1

* Fixed the manifest.json because the part covering the keyboard shortcut was missing a description--causing the manifest to be invalid.


