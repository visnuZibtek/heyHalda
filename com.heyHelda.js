var heldaContainer;

function onLoadHelda() {

  return new Promise((resolve, reject) => {
    const head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style'),
      css = '.backdrop{opacity:1;transition:opacity .4s ease;z-index:2147483647;background:rgba(0,0,0,.6);position:fixed!important;bottom:-1000px;left:-1000px;right:-1000px;top:-1000px}.hh-iframe-wrapper{opacity:1;animation-name:fadeIn;transition:1.5s;animation-duration:1.5s}.wrapper{position:fixed;bottom:0;box-sizing:border-box;left:0;overflow:auto;padding:30px;right:0;text-align:center;top:0;white-space:nowrap;width:100%;padding:30px 0;opacity:1;transition:opacity .4s ease;z-index:2147483647}.wrapper::before{content:"";display:inline-block;height:100%;vertical-align:middle}.hh-iframe-wrapper{position:relative;vertical-align:middle;display:inline-block;max-width:100vw;height:445px;width:760px}.hh-mdl-close{position:absolute;top:5px;right:0;border:none;border-radius:50%}.close-ico{font-weight:600;border-radius:50%;font-size:1.1em;line-height:1.493;width:22px;height:22px;text-align:center;cursor:pointer;transition:background-color .3s ease-in-out}@keyframes fadeIn{from{opacity:0}to{opacity:1}}';

    head.appendChild(style);
    if (style.styleSheet) style.styleSheet.cssText = css; // This is required for IE8 and below.
    else style.appendChild(document.createTextNode(css));

    heldaContainer = document.createElement('div');
    heldaContainer.className = 'heyhelda-container';
    heldaContainer.innerHTML = `<div class="heyHelda-body">
<div class="backdrop"></div>
<div class="wrapper">
  <div class="hh-iframe-wrapper">
    <button id="mdlClose" class="hh-mdl-close" type="button"><div class="close-ico">x</div></button>
    <iframe id="targetFrame" class="hh-mdl-iframe" frameBorder="0" src="https://visnuzibtek.github.io/heyHelda/templates/helda-modal.html"
      style="width: 100% !important; height: 100% !important;"></iframe>
  </div>
</div>
</div>`;

    setTimeout(() => {
      document.body.appendChild(heldaContainer);
      resolve(true);
    }, 1000);
  })
}

function intiateCloseEvent() {
  document.getElementById('mdlClose').addEventListener('click', () => {
    throwCloseEvent();
  });
}

const throwCloseEvent = () => {
  const heldaFrame = document.getElementById('targetFrame');
  heldaFrame.contentWindow.postMessage('mdlClose', '*');
}

const addEventListner = () => {
  window.onmessage = (e) => {
    if (e.data == 'success') {
      heldaContainer.innerHTML = `<div class="heyHelda-body"></div>`;
    }
  };
}


window.onload = function () { // same as window.addEventListener('load', (event) => {
  onLoadHelda().then(() => {
    intiateCloseEvent();
    addEventListner();
  });
};



