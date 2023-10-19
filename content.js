const tagName = "input";
new MutationObserver(async (mutations, observer) => {
    for (const mutation of mutations) {
        if (mutation.type !== "childList") continue;
        if (mutation.target.tagName !== tagName.toUpperCase()) continue;

        mutation.target.setAttribute("autocomplete", "off");
    }
}).observe(document, { subtree: true, childList: true });
