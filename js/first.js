function setSomething(elem, to, val) {
  document.querySelector(elem).style[to] = val;
}

function colorRelated(backgroundColor) {
  setSomething("#particles-js", "background-color", backgroundColor);
  setSomething(".sp#configed", "background-color", backgroundColor);
  setSomething("#send-btn", "background-color", backgroundColor);
  setSomething("#contact-us", "color", backgroundColor);
  setSomething("#top", "background-color", backgroundColor);
}

colorRelated(config.backgroundColor);
