// Open the specified tab and show its content
function openTab(event, tabId) {
    const tabContents = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
    }
  
    const tabLinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove('active');
    }
  
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
  }
  
  // Add event listeners to the tab buttons
  const tabButtons = document.getElementsByClassName('tablinks');
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function (event) {
      openTab(event, this.getAttribute('data-tab'));
    });
  }
  
  // Set the default tab to be opened on page load
  document.getElementsByClassName('tablinks')[0].click();
  