chrome.commands.onCommand.addListener(async function() {
  await chrome.tabs.query({currentWindow: true}, async function(tabs) {
    var cb = document.createElement("textarea"), acc = "", i;

    for (i = 0; i < tabs.length; i++) {
      acc += tabs[i].url.toString() + "\n";
    }

/* this line: works fine with firefox,
 * but not with chrome.
 *     await navigator.clipboard.writeText(acc);
 * TODO: get rid of execCommand()...
 * https://stackoverflow.com/questions/3436102/copy-to-clipboard-in-chrome-extension
 */
    document.body.appendChild(cb);
    cb.value = acc;
    cb.select();
    document.execCommand("copy");
    document.body.removeChild(cb);
  });
});

// vim: set ts=2 sts=2 sw=2 et:
