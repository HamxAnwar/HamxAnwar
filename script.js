// Open the specified tab and show its content with sliding animation
function openTab(event, tabId) {
    const tabContents = document.getElementsByClassName('tabcontent');
    const activeTab = document.getElementById(tabId);
    
    // Check if the tab is already active
    if (activeTab.style.display === 'block') {
      return;
    }
    
    for (let i = 0; i < tabContents.length; i++) {
      const tabContent = tabContents[i];
      
      if (tabContent.style.display === 'block') {
        // Slide out the currently active tab
        tabContent.style.animation = 'slide-out 0.5s forwards';
        
        setTimeout(() => {
          tabContent.style.display = 'none';
          tabContent.style.animation = '';
          
          // Slide in the selected tab
          activeTab.style.animation = 'slide-in 0.5s forwards';
          activeTab.style.display = 'block';
        }, 500); // Wait for slide-out animation to finish
      }
    }
  
    const tabLinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove('active');
    }
  
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
  