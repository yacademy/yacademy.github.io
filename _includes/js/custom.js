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
  