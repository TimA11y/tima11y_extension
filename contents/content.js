const addMark = function (selector) {
  let els = document.querySelectorAll(selector);

  els.forEach((el) => {
    el.classList.add("tima11y-mark");
  });

  alert(`Matched ${els.length} elements.`);
}; // end addMark function.

chrome.runtime.onMessage.addListener((message) => {
  addMark(message.selector);
});