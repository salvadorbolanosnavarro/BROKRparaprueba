(function () {
  var SPRITE =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<symbol id="ic-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c0-3.4 2.9-5.8 6.5-5.8s6.5 2.4 6.5 5.8"/></symbol>' +
    '<symbol id="ic-help" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.4 2.4 0 1 1 3.4 2.2c-.9.5-1.2 1-1.2 2"/><circle cx="11.8" cy="16.4" r=".7" fill="currentColor" stroke="none"/></symbol>' +
    '<symbol id="ic-bell" viewBox="0 0 24 24"><path d="M6 9.5a6 6 0 1 1 12 0c0 3.8 1.4 5.3 2 6H4c.6-.7 2-2.2 2-6z"/><path d="M9.5 18a2.5 2.5 0 0 0 5 0"/></symbol>' +
    '<symbol id="ic-alert" viewBox="0 0 24 24"><path d="M9.1 3.6h5.8l4.1 4.1v5.8l-4.1 4.1H9.1L5 13.5V7.7z"/><path d="M12 8v4.2"/><circle cx="12" cy="15.6" r=".7" fill="currentColor" stroke="none"/></symbol>' +
    '<symbol id="ic-chevron" viewBox="0 0 24 24"><path d="M9 5.5l6.5 6.5L9 18.5"/></symbol>' +
    '<symbol id="ic-pin" viewBox="0 0 24 24"><path d="M12 21.5c4.2-5.2 7-8.2 7-11.3a7 7 0 1 0-14 0c0 3.1 2.8 6.1 7 11.3z"/><circle cx="12" cy="10.2" r="2.5"/></symbol>' +
    '<symbol id="ic-heart" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9.2-9C1.4 7.8 3.8 4.8 6.9 4.8c2 0 3.3 1.2 5.1 3 1.8-1.8 3.1-3 5.1-3 3.1 0 5.5 3 4.1 6.2C19 15.6 12 20 12 20z"/></symbol>' +
    '<symbol id="ic-home" viewBox="0 0 24 24"><path d="M4 11.2l8-6.4 8 6.4V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z"/></symbol>' +
    '<symbol id="ic-building" viewBox="0 0 24 24"><path d="M4 21V7l7-3v17"/><path d="M11 21V10l8 3v8"/><path d="M7 9h1.4M7 12h1.4M7 15h1.4M14.5 14h1.4M14.5 17h1.4"/></symbol>' +
    '<symbol id="ic-chart" viewBox="0 0 24 24"><path d="M6 19v-6M12 19V8M18 19v-9"/></symbol>' +
    '<symbol id="ic-contract" viewBox="0 0 24 24"><path d="M7 3h7l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M13 3v5h5"/><path d="M8.5 17h7"/></symbol>' +
    '<symbol id="ic-grid" viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/></symbol>' +
    '<symbol id="ic-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></symbol>' +
    '<symbol id="ic-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>' +
    '<symbol id="ic-trend" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/><path d="M21 12V7h-5"/></symbol>' +
    '<symbol id="ic-calc" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2.2"/><path d="M8 7.5h8"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01"/></symbol>' +
    '<symbol id="ic-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 5.6a3 3 0 0 1 0 5.8"/><path d="M17.5 20a5.5 5.5 0 0 0-3-4.9"/></symbol>' +
    '<symbol id="ic-photo" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.2"/><circle cx="8.5" cy="10" r="1.6"/><path d="M21 16l-5-5-8 8"/></symbol>' +
    '<symbol id="ic-wand" viewBox="0 0 24 24"><path d="M5 19l9-9"/><path d="M14 4.5l1.3 3 3 1.3-3 1.3-1.3 3-1.3-3-3-1.3 3-1.3z"/></symbol>' +
    '<symbol id="ic-facebook" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M14.5 8.5H13c-.7 0-1 .4-1 1.1V11h2.3l-.4 2.4H12V19"/></symbol>' +
    '<symbol id="ic-settings" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2.6v2.4M12 19v2.4M21.4 12H19M5 12H2.6M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6"/></symbol>' +
    '</defs></svg>';
  function inject() { document.body.insertAdjacentHTML('afterbegin', SPRITE); }
  if (document.body) { inject(); }
  else { document.addEventListener('DOMContentLoaded', inject); }
})();
