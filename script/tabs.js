function openPage(pageName,elmnt,classname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active');
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.classList.add(classname);
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
