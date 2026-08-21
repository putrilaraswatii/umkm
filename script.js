document.getElementById('navToggle').addEventListener('click', function(){
    document.getElementById('navMenu').classList.toggle('open');
  });
  document.querySelectorAll('#navMenu a').forEach(a=>a.addEventListener('click',()=>{
    document.getElementById('navMenu').classList.remove('open');
  }));

  function formatRupiah(n){
    return 'Rp ' + Math.round(n).toLocaleString('id-ID');
  }
  function updateSim(){
    const pendapatan = parseFloat(document.getElementById('pendapatan').value) || 0;
    const persen = parseFloat(document.getElementById('persen').value) || 0;
    document.getElementById('persenVal').textContent = persen + '%';
    const pribadi = pendapatan * (persen/100);
    const usaha = pendapatan - pribadi;
    document.getElementById('hasilUsaha').textContent = formatRupiah(usaha);
    document.getElementById('hasilPribadi').textContent = formatRupiah(pribadi);
  }
  document.getElementById('pendapatan').addEventListener('input', updateSim);
  document.getElementById('persen').addEventListener('input', updateSim);
  updateSim();

// Tombol template buku kas
const templateKasBtn = document.getElementById('templateKasBtn');
if (templateKasBtn) {
  templateKasBtn.addEventListener('click', function (event) {
    event.preventDefault();
    alert("Ganti tautan ini dengan link Google Spreadsheet template buku kas milikmu, lalu atur akses ke 'Siapa saja yang punya link → Dapat melihat'.");
  });
}
