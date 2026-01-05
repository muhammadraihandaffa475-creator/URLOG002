// Di fungsi loadSection, kita perlu menambahkan penanganan error untuk iframe.
function loadSection(section) {
    const iframe = document.getElementById(section + '-iframe');
    const iframeWrap = iframe.parentElement;
    const url = localStorage.getItem(section + 'Url');

    // Kosongkan wrap dari pesan sebelumnya
    iframeWrap.innerHTML = ''; 
    iframeWrap.appendChild(iframe); // Masukkan kembali iframe

    if (url) {
        // Tambahkan event listener untuk menangani error loading iframe
        iframe.onload = function() {
            // Jika berhasil dimuat, hapus pesan error jika ada
            const errorMsg = iframeWrap.querySelector('.error-message');
            if (errorMsg) errorMsg.remove();
        };
        iframe.onerror = function() {
            // Jika gagal memuat, tampilkan pesan error
            showError(iframeWrap, 'Gagal memuat spreadsheet. Pastikan file tersedia dan telah dipublikasikan.');
        };
        iframe.src = url;
        iframe.style.display = 'block';
    } else {
        iframe.src = '';
        iframe.style.display = 'none';
        showMessage(iframeWrap, '📄 Belum ada spreadsheet dari admin');
    }
}

function showError(parent, text) {
    // Sembunyikan iframe
    const iframe = parent.querySelector('iframe');
    iframe.style.display = 'none';

    // Buat elemen pesan error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div style="padding: 20px; text-align: center; color: #ff6b6b; background: rgba(255,107,107,0.1); border-radius: 10px;">
            <i class="fas fa-exclamation-triangle"></i>
            <p>${text}</p>
            <p style="font-size: 12px; opacity: 0.8;">Pastikan file Google Sheets sudah dipublikasikan (File > Share > Publish to web).</p>
        </div>
    `;
    parent.appendChild(errorDiv);
}