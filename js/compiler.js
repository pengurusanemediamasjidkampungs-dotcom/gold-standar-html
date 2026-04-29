/**
 * compiler.js - Menguruskan integrasi dan output kod ke Iframe
 */
const Compiler = {
    render: (html, css, js, targetFrame) => {
        const frameDoc = targetFrame.contentWindow.document;
        
        const content = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>
                    try {
                        ${js}
                    } catch (err) {
                        console.error("Runtime Error:", err.message);
                    }
                <\/script>
            </body>
            </html>
        `;

        frameDoc.open();
        frameDoc.write(content);
        frameDoc.close();
    }
};
