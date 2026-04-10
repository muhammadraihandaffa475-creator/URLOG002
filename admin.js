<script>
const SECTIONS = ['rpd','lra','pbj','eperwabku'];

/* Convert Google Sheets → PUBHTML (PALING STABIL) */
function toEmbed(url){
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if(!match) return null;
    return `https://docs.google.com/spreadsheets/d/${match[1]}/pubhtml?widget=true&headers=false`;
}

/* SAVE URL */
function saveUrl(section){
    const input = document.getElementById(section + 'Url');
    const rawUrl = input.value.trim();

    if(!rawUrl.includes('docs.google.com/spreadsheets')){
        alert(
`❌ LINK TIDAK VALID

WAJIB:
Google Sheets
File → Share → Publish to web`
        );
        return;
    }

    const embedUrl = toEmbed(rawUrl);
    if(!embedUrl){
        alert('❌ Tidak bisa membaca Spreadsheet ID');
        return;
    }

    localStorage.setItem(section + 'Url', embedUrl);
    localStorage.setItem(section + 'Updated', new Date().toLocaleString('id-ID'));

    alert('✅ Spreadsheet berhasil disimpan & akan tampil di USER');
}

/* LOAD URL SAAT ADMIN DIBUKA */
window.onload = ()=>{
    SECTIONS.forEach(id=>{
        const saved = localStorage.getItem(id + 'Url');
        if(saved){
            document.getElementById(id + 'Url').value = saved;
        }
    });
};
</script>
