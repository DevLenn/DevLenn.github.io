<!DOCTYPE html>
<html>
<head>
    <title>DemoApp</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
  <div class="tabs">
    <ul class="tab-menu">
      <?php
      $tabs = [
        'Low Level' => 'This is the Low Level tab content.',
        'High Level' => 'This is the High Level tab content.',
        'AI' => 'This is the AI tab content.'
      ];

      foreach ($tabs as $tab => $content) {
        echo '<li><a href="#' . strtolower($tab) . '">' . $tab . '</a></li>';
      }
      ?>
    </ul>
    <div class="tab-content">
      <?php
      foreach ($tabs as $tab => $content) {
        echo '<div id="' . strtolower($tab) . '">' . $content . '</div>';
      }
      ?>
    </div>
  </div>

  <?php
  echo '<script>';
  echo 'const tabLinks = document.querySelectorAll(".tab-menu li a");';
  echo 'const tabContents = document.querySelectorAll(".tab-content div");';
  echo 'tabLinks.forEach((link, index) => {';
  echo 'link.addEventListener("click", function(e) {';
  echo 'e.preventDefault();';
  echo 'tabLinks.forEach(otherLink => {';
  echo 'otherLink.classList.remove("active");';
  echo '});';
  echo 'this.classList.add("active");';
  echo 'tabContents.forEach(content => {';
  echo 'content.style.display = "none";';
  echo '});';
  echo 'tabContents[index].style.display = "block";';
  echo '});';

  echo 'link.addEventListener("mouseover", function() {';
  echo 'tabLinks.forEach(otherLink => {';
  echo 'otherLink.classList.remove("hover");';
  echo '});';
  echo 'this.classList.add("hover");';
  echo '});';

  echo 'link.addEventListener("mouseout", function() {';
  echo 'this.classList.remove("hover");';
  echo '});';
  echo '});';
  echo '</script>';
  ?>
</body>
</html>
