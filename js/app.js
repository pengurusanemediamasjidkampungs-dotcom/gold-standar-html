/**
 * app.js - Pusat kawalan utama IDE
 */
document.addEventListener('DOMContentLoaded', () => {
    const codeEditor = document.getElementById('code-editor');
    const liveFrame = document.getElementById('live-frame');
    const btnRun = document.getElementById('btn-run');
    const statusMetrics = document.querySelector('.left-metrics span');
    const tabs = document.querySelectorAll('.tab');

    // 1. Inisialisasi Editor
    Editor.init(codeEditor, () => {
        const metrics = Editor.updateMetrics(codeEditor);
        statusMetrics.textContent = `Ln ${metrics.lines}, Col ${metrics.col}`;
        
        // Simpan perubahan ke memori sementara
        Editor.files[Editor.activeFile] = codeEditor.value;
    });

    // 2. Fungsi Run Engine
    const runEngine = () => {
        Compiler.render(
            Editor.files['index.html'],
            Editor.files['style.css'],
            Editor.files['script.js'],
            liveFrame
        );
    };

    btnRun.addEventListener('click', runEngine);

    // 3. Sistem Tab Swapping
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            UIEffects.toggleActiveTab(tabs, tab);
            
            // Simpan fail lama, muat fail baru
            Editor.activeFile = tab.textContent.trim();
            codeEditor.value = Editor.files[Editor.activeFile];
        });
    });

    // 4. Keyboard Shortcut (Ctrl + Enter)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runEngine();
        }
    });

    // Muat kandungan awal
    codeEditor.value = Editor.files['index.html'];
    runEngine();
});
