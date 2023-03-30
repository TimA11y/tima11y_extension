const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  let selector = txtSelector.value;
  chrome.tabs.query(
    {
      "active": true,
      "currentWindow": true
    },
    (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { "selector": selector });
    }
  );

  window.close();
});