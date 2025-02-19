(function (jtd, undefined) {

// Event handling

jtd.addEvent = function(el, type, handler) {
  if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}
jtd.removeEvent = function(el, type, handler) {
  if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
}
jtd.onReady = function(ready) {
  // in case the document is already rendered
  if (document.readyState!='loading') ready();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', ready);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') ready();
  });
}

// Show/hide mobile menu

function initNav() {
  jtd.addEvent(document, 'click', function(e){
    var target = e.target;
    while (target && !(target.classList && target.classList.contains('nav-list-expander'))) {
      target = target.parentNode;
    }
    if (target) {
      e.preventDefault();
      target.parentNode.classList.toggle('active');
    }
  });

  const siteNav = document.getElementById('site-nav');
  const mainHeader = document.getElementById('main-header');
  const menuButton = document.getElementById('menu-button');

  jtd.addEvent(menuButton, 'click', function(e){
    e.preventDefault();

    if (menuButton.classList.toggle('nav-open')) {
      siteNav.classList.add('nav-open');
      mainHeader.classList.add('nav-open');
    } else {
      siteNav.classList.remove('nav-open');
      mainHeader.classList.remove('nav-open');
    }
  });
}

// Switch theme

jtd.getTheme = function() {
  var cssFileHref = document.querySelector('[rel="stylesheet"]').getAttribute('href');
  return cssFileHref.substring(cssFileHref.lastIndexOf('-') + 1, cssFileHref.length - 4);
}

jtd.setTheme = function(theme) {
  var cssFile = document.querySelector('[rel="stylesheet"]');
  cssFile.setAttribute('href', 'http://localhost:4000/assets/css/just-the-docs-' + theme + '.css');
}

// Document ready

jtd.onReady(function(){
  initNav();
});

})(window.jtd = window.jtd || {});

function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
    }
  
    // Remove 'active' class from all tab buttons
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove('active');
    }
  
    // Show the selected tab content and mark the button as active
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  }
  
  function openInnerTab(evt, innerTabName) {
    // Hide all inner tab contents
    const innerTabContents = document.getElementsByClassName('inner-tab-content');
    for (let i = 0; i < innerTabContents.length; i++) {
      innerTabContents[i].style.display = 'none';
    }
  
    // Remove 'active' class from all inner tab buttons
    const innerTabButtons = document.getElementsByClassName('inner-tab-button');
    for (let i = 0; i < innerTabButtons.length; i++) {
      innerTabButtons[i].classList.remove('active');
    }
  
    // Show the selected inner tab content and mark the button as active
    document.getElementById(innerTabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  }
  
  // Show the first tab and its first inner tab by default
  document.getElementById('tab1').style.display = 'block';
  document.getElementsByClassName('tab-button')[0].classList.add('active');
  
  document.getElementById('innerTab1').style.display = 'block';
  document.getElementsByClassName('inner-tab-button')[0].classList.add('active');
  ``
  
