// sent-contact.js
(function() {
  function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  var param = getQueryParam('whatsapp');
  if (param === '1') {
    setTimeout(function() {
      window.location.href = 'https://wa.me/5531993791793?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%meu%procedimento%C3%A7%C3%A3o%20de%20sobrancelhas%20no%20Bella%20Lumea.%20Pode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F';
    }, 1000);
  }
})();
