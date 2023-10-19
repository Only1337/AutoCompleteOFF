const tagName = "input";
new MutationObserver(async (mutations, observer) => {
    for (const mutation of mutations) {
        if (mutation.type !== "childList") continue;
        for (const child of mutation.addedNodes) {
            if (child.tagName !== tagName.toUpperCase()) continue;

            child.setAttribute("autocomplete", "off");
        }
    }
}).observe(document, { subtree: true, childList: true });
