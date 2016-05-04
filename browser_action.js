(function(document) {
  function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
  }

  document.addEventListener('DOMContentLoaded', function() {
    let oReq = new XMLHttpRequest();
    oReq.open('GET', 'http://localhost:3000/spike/user');
    oReq.responseType = 'json';

    oReq.onload = function() {
      // Parse and process the response from Google Image Search.
      let response = oReq.response;
      if (!response) {
        renderStatus('No response!');
        return;
      }

      console.log(response);
      renderStatus(`Ok ${response.ok}`);
    };
    oReq.onerror = function() {
      renderStatus('Network error.');
    };
    oReq.send();

    renderStatus('Ready');
  });
})(document);
