function showTab(tabId) {
    // Alle Tab-Inhalte ausblenden
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
    }
  
    // Alle Buttons zurücksetzen
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
  
    // Den ausgewählten Tab-Inhalt anzeigen
    document.getElementById(tabId).style.display = 'block';
  
    // Den ausgewählten Button hervorheben
    const activeButton = document.querySelector(`button[onclick="showTab('${tabId}')"]`);
    activeButton.classList.add('active');
  }
  
  // Standardmäßig den Tab "About" anzeigen
  showTab('about');
  
  function twitch() {
    window.open("https://www.twitch.tv/replays", "_blank");
  }

  function youtube() {
    window.open("https://www.youtube.com/user/ReplayILY", "_blank");
  }

  function instagram() {
    window.open("https://www.instagram.com/replays/", "_blank");
  }

  function twitter() {
    window.open("https://twitter.com/Replays", "_blank");
  }

  function tiktok() {
    window.open("https://www.tiktok.com/@replays", "_blank");
  }