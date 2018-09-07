function iframeElement(frameName, element) {

  var iframe = document.querySelector(frameName);
  var elem = iframe.contentWindow.document.querySelector(element);

  return elem;
  
}