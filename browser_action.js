(function (document) {
  function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
  }

  document.addEventListener('DOMContentLoaded', function() {
    renderStatus('Ready');
  });
})(document);
