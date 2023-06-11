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
      slideOut(tabContent);

      setTimeout(() => {
        tabContent.style.display = 'none';

        // Slide in the selected tab
        slideIn(activeTab);
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

// Slide out the specified element
function slideOut(element) {
  let pos = 0;
  const id = setInterval(frame, 5);

  function frame() {
    if (pos === -100) {
      clearInterval(id);
      element.style.display = 'none';
    } else {
      pos--;
      element.style.right = pos + '%';
    }
  }
}

// Slide in the specified element
function slideIn(element) {
  let pos = -100;
  element.style.display = 'block';
  const id = setInterval(frame, 5);

  function frame() {
    if (pos === 0) {
      clearInterval(id);
    } else {
      pos++;
      element.style.right = pos + '%';
    }
  }
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
