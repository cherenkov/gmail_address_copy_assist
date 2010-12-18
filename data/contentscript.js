let address;
if (/^https?:\/\/mail\.google\.com/.test(location)) {
  function disp() {
    let iframe = document.getElementById("canvas_frame");
    if (iframe && iframe.contentDocument.querySelector('#guser b')) {
      let iframeDoc = iframe.contentDocument;
      address = iframeDoc.querySelector('#guser b');
      if (address && /@gmail\.com/.test(address.textContent)) {
        document.body.removeEventListener("DOMNodeInserted", disp, false);
        document = iframeDoc;
        address.parentNode.insertBefore(createIcon(), address.nextSibling);
      }
    }
  }
  document.body.addEventListener("DOMNodeInserted", disp, false);
} else {
  address = document.querySelector('#guser b');
  if (address && /@gmail\.com/.test(address.textContent)) {
    address.parentNode.insertBefore(createIcon(), address.nextSibling);
  }
}

function createIcon() {
  iconStyle();
  let img = document.createElement('img');
  img.id = "_GACAicon";
  img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAwFBMVEX%2F%2F%2F8rNkLz9vnv8%2FeUn6v9%2Fv72%2BPrm7PLr8PWCj5z6%2B%2FxianUrN0Lu8vfm6%2FFLVF7q7%2FVjbHeDkJ2AjJiDkJyIlKFncHt7h5Lz9%2Fr%2B%2F%2F%2BPj8jq7vJRWmKdnr5rdoCSkcvJz9V3go78%2Ff5WXmf3%2Bfp1gYxxfIZyfYeHk55veoXz9%2FuEkZxncXvy9vnu8%2FdyfokoNEBveYSBjpv3%2Bv19iJRueYPs8feGkp%2F%2F%2F%2F8AAAAAAAAAAAAAAAAAAAAAAAAAAABxr%2FltAAAAOXRSTlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwA6rGVAAAAAAWJLR0Q%2FPmMwdQAAAAlwSFlzAAAASAAAAEgARslrPgAAAAl2cEFnAAAAEAAAABAAXMatwwAAAJVJREFUGNNFztcSgyAURdFDQCn29G5679X%2F%2F7IgoDmPe%2BauuSjMOk0pZXvHigI2tFAuB6tCD57nYQgwF%2BZQSg0m4%2BXLhS18318tRrMvLHdkz4ZeH3fU3IFSGmGKP3cRIkUXNbf%2BcB4jw7XiHuY2wB5ny21uhJAw0UpEDfe2D2glFaLkTi5kiDk3nAsB3AIXkpCYhYkNPzVVF6%2BTYArVAAAAJXRFWHRjcmVhdGUtZGF0ZQAyMDA4LTEwLTIzVDExOjU4OjM2KzA4OjAwqRNZ3gAAACV0RVh0bW9kaWZ5LWRhdGUAMjAwOC0xMC0yM1QxMTo1OTo1MCswODowMLzfeGkAAAAASUVORK5CYII%3D";
  img.title = "Copy";
  img.addEventListener("click", function() {
    postMessage(address.textContent);
  }, false);
  return img;
}

function iconStyle() {
addStyle(<><![CDATA[
#_GACAicon {
  margin: 0 5px;
}
#_GACAicon:hover {
  opacity: 0.7;
}
]]></>);
}

function addStyle(css) {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  document.querySelector('head').appendChild(style);
}