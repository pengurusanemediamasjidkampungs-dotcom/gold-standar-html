/**
 * editor.js - Menguruskan tingkah laku textarea dan tab
 */
const Editor = {
    // Kandungan asal fail
    files: {
        'index.html': '<h1>Hello World</h1>',
        'style.css': 'body { background: #f4f4f4; text-align: center; }',
        'script.js': 'console.log("IDE Pro Ready!");'
    },
    activeFile: 'index.html',

    init(textarea, callback) {
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                textarea.value = textarea.value.substring(0, start) + "  " + textarea.value.substring(end);
                textarea.selectionStart = textarea.selectionEnd = start + 2;
            }
        });

        // Trigger kemaskini metrik pada setiap input
        textarea.addEventListener('input', callback);
    },

    updateMetrics(textarea) {
        const text = textarea.value;
        const lines = text.split('\n').length;
        const col = textarea.selectionStart - text.lastIndexOf('\n', textarea.selectionStart - 1);
        return { lines, col };
    }
};
