# Notes for Multitool

## Tools

* Check Selector - Selector Viewer
* Remove aria-hidden
* Jump to dialog

## Aria-hidden

If document.activeElement shows a location, move up the tree and remove aria-hidden from all elements.
If there is no document.activeElement, remove all aria-hidden="true".
Possibly just all to remove all aria-hidden="true"

* Remove aria-hidden="true" from currently focus elements and parents.
* Remove aria-hidden="true" from interface.

## Jump to dialog

List all elements with role="dialog" or the dialog element, provide text contents for the dialogs. Then let the user select the dialog to jump to and move the screen reader focus inside that dialog.

maybe temporarily set <div tabindex="-1"></div> to a spot at the top of the dialog, move focus there, and then remove the node?


## Internal Messaging

We will need to provide better communication between the popup and content scripts. Probably just pass an object like...

{
 "type": "type of message.",
 "data": "data for that specific message type.
}

So for jump to dialog,

popup: {"type": "query", "data": "dialog"}
content: {"type" "response", "data": [list of dialog nodes and text content.]
user selects a dialog
popup: {"type": "jump-to-dialog", "data": node of dialog}


Maybe for remove aria-hidden.
popup: {type: query, data: current focus}
content: {type: response, data: node with current focus and text content.
Then fgive the user a choice of either removing aria-hidden from the current focused element and all its parents
or
removing all aria-hidden="true" from the interface.
Report in alert dialog how many aria-hidden="true" are removed.

I need to rewrite content.js to have a listener that takes in messages and then passes them to the correct function.
need to think through popup.js and the different screens
probably a combobox to select the tool, then automatically change the ui to the write context.
If I add the ability to store current state, the popup.js could always display the last selected tool with options

So the selector viewer would show up with the last selector used.
aria-hidden would prepopulate the choices.
dialog jump would prepopulate with the current dialogs.

Maybe for dialog jumping, provde a option to jump to the body of the document instead of a dialog.
