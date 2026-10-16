(function(){
  var EMAIL   = 'business@aromaranusantara.com';
  var AJAX    = 'https://formsubmit.co/ajax/' + EMAIL;
  var WA      = '6285732345939';

  var form   = document.getElementById('arnInquiry');
  if (!form) return;
  var status = document.getElementById('arnFormStatus');
  var tombol = form.querySelector('.arn-form-btn');
  var labelTombol = tombol ? tombol.innerHTML : '';

  // Only known product values may preselect the existing form control.
  var params = typeof URLSearchParams === 'function' ? new URLSearchParams(location.search) : null;
  var requestedProduct = params ? params.get('product') : '';
  var allowedProducts = ['clove', 'nutmeg', 'cardamom', 'mixed'];
  function selectRequestedProduct(){
    var field = form.elements['product'];
    if (field && !field.value && allowedProducts.indexOf(requestedProduct) !== -1) {
      field.value = requestedProduct;
    }
  }
  selectRequestedProduct();

  function tampilkan(kelas, html){
    if (!status) return;
    status.className = 'arn-form-status tampil ' + kelas;
    status.innerHTML = html;
  }

  /* kembali dari jalur tanpa-JS: FormSubmit memulangkan ke ?inquiry=sent */
  if (/[?&]inquiry=sent\b/.test(location.search)) {
    tampilkan('sukses', 'Thank you. Your inquiry has been sent to our team.');
    if (history.replaceState) {
      if (params) params.delete('inquiry');
      var remaining = params ? params.toString() : '';
      history.replaceState({}, '', location.pathname + (remaining ? '?' + remaining : '') + location.hash);
    }
  }

  function ambil(nama){
    var el = form.elements[nama];
    return el && el.value ? String(el.value).trim() : '';
  }
  function labelProduk(){
    var el = form.elements['product'];
    if (!el || !el.value) return '';
    return el.options[el.selectedIndex].text;
  }
  function pesanRingkas(){
    return [
      'New spice inquiry from aromaranusantara.com',
      '',
      'Name: ' + ambil('name'),
      'Company: ' + (ambil('company') || '-'),
      'Email: ' + ambil('email'),
      'Buyer country: ' + (ambil('country') || '-'),
      'Destination port: ' + (ambil('destination_port') || '-'),
      'Order quantity: ' + (ambil('quantity') || '-'),
      'Product of interest: ' + (labelProduk() || '-'),
      '',
      'Requirements:',
      ambil('message') || '-'
    ].join('\n');
  }
  function jalurCadangan(alasan){
    var teks = encodeURIComponent(pesanRingkas());
    tampilkan('galat', alasan
      + ' You can still reach us directly &#8212; '
      + '<a href="https://wa.me/' + WA + '?text=' + teks + '" target="_blank" rel="noopener">send this on WhatsApp</a> '
      + 'or <a href="mailto:' + EMAIL + '?subject='
      + encodeURIComponent('Spice inquiry - ' + (ambil('company') || ambil('name')))
      + '&body=' + teks + '">email it to ' + EMAIL + '</a>.');
  }

  form.addEventListener('submit', function(e){
    /* tanpa fetch, biarkan POST biasa ke FormSubmit berjalan apa adanya */
    if (typeof window.fetch !== 'function') return;
    e.preventDefault();
    if (form.checkValidity && !form.checkValidity()) { form.reportValidity(); return; }
    if (ambil('_honey')) return;   /* jebakan bot */

    if (tombol) { tombol.disabled = true; tombol.innerHTML = 'Sending&#8230;'; }
    tampilkan('sukses', 'Sending your inquiry&#8230;');

    var muatan = {
      name:    ambil('name'),
      company: ambil('company') || '-',
      email:   ambil('email'),
      country: ambil('country') || '-',
      destination_port: ambil('destination_port') || '-',
      quantity: ambil('quantity') || '-',
      product: labelProduk() || '-',
      message: ambil('message') || '-',
      _subject: 'New spice inquiry - ' + (ambil('company') || ambil('name')),
      _template: 'table',
      _captcha: 'false'
    };

    fetch(AJAX, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(muatan)
    })
    .then(function(r){ return r.json().catch(function(){ return {}; }); })
    .then(function(d){
      if (tombol) { tombol.disabled = false; tombol.innerHTML = labelTombol; }
      if (d && String(d.success) === 'true') {
        form.reset();
        selectRequestedProduct();
        tampilkan('sukses', 'Thank you. Your inquiry has been sent to our team.');
      } else {
        jalurCadangan('We could not send that automatically.');
      }
    })
    .catch(function(){
      if (tombol) { tombol.disabled = false; tombol.innerHTML = labelTombol; }
      jalurCadangan('The connection failed.');
    });
  });
})();
