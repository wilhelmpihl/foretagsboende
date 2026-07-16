// Delat beteende för landningssidorna: lead-formulär mot /api/enquiry.
// OBS: POSTar ENDAST till vårt API — servern sköter mail/webhook.
(function () {
  'use strict';

  document.querySelectorAll('form.lnd-form').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var err = form.querySelector('.lnd-form-err');
      var btn = form.querySelector('button[type=submit]');
      var get = function (name) {
        var el = form.querySelector('[name=' + name + ']');
        return el ? el.value.trim() : '';
      };

      if (!get('companyName') || !get('email') || get('email').indexOf('@') === -1) {
        if (err) { err.textContent = 'Fyll i företagsnamn och giltig e-postadress.'; err.style.display = 'block'; }
        return;
      }
      if (err) err.style.display = 'none';
      if (btn) { btn.disabled = true; btn.textContent = 'Skickar…'; }

      fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: get('companyName'),
          contactName: get('contactName'),
          email: get('email'),
          phone: get('phone'),
          checkIn: get('checkIn'),
          checkOut: get('checkOut'),
          guests: parseInt(get('guests'), 10) || 1,
          industry: get('industry') || form.dataset.industry || '',
          message: get('message'),
          listingTitle: form.dataset.source || 'Landningssida'
        })
      }).then(function (r) {
        if (!r.ok) throw new Error('http ' + r.status);
        form.style.display = 'none';
        var ok = form.parentElement.querySelector('.lnd-form-ok');
        if (ok) ok.style.display = 'block';
      }).catch(function () {
        if (btn) { btn.disabled = false; btn.textContent = 'Skicka förfrågan'; }
        if (err) { err.textContent = 'Något gick fel — försök igen eller nå oss på WhatsApp.'; err.style.display = 'block'; }
      });
    });
  });
})();
