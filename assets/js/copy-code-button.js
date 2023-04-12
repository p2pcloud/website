
if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
    script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
    script.crossOrigin = 'anonymous';
    script.onload = function () {
        addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
}

function addCopyButtons(clipboard) {
    document.querySelectorAll('.highlight td:nth-child(2) code').forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = '📋 Copy';

        button.addEventListener('click', function () {
            let text = "";

            for (let child of codeBlock.children) {
                text += child.innerText;
            }

            clipboard.writeText(text).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();

                const originalText = button.innerText;
                button.innerText = 'Copied!';

                setTimeout(function () {
                    button.innerText = originalText;
                }, 2000);
            }, function (error) {
                button.innerText = 'Error';
                console.error('Could not copy text: ', error);
            });
        });

        let highlight = codeBlock.parentNode
        for (let i = 0; i < 10; i++) {
            if (highlight.classList.contains('highlight')) {
                break
            }
            highlight = highlight.parentNode
        }

        highlight.parentNode.insertBefore(button, highlight);
    });
}