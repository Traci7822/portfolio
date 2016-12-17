$(document).ready(function() {
  showHome();

  $(".navItem").click(function(event) {
    event.preventDefault();
    showPanel(this);
    if (this.id == "resume") {
      //not showing
      $("#technicalSkills-content").show();
    }
  });

  $(".resumeItem").click(function(event) {
    event.preventDefault();
    showResumeSection(this);
  });

  $(".contactButton").click(function(event) {
    event.preventDefault();
    hideSections();
    $("#contact-content").show();
  });

  $(".project").click(function(event) {
    console.log(10);
    //all content showing
    // event.preventDefault();
    hideSections();
    hideResumeLinks();
    hideProjectSections();
    showProjectSections(this);
    // $("#" + section.id + "-content").show();

  });
});

function showHome() {
  hideSections();
  hideResumeLinks();
  hideProjectSections();
  $("#about-content").show();
}

function hideSections() {
  var items = document.querySelectorAll(".navItem");
  for (var i = 0; i < items.length; i++) {
    $("#" + items[i].id + "-content").hide();
  }
}

function showPanel(section){
  var panel = $(section).attr('id');
  hideSections();
  hideResumeLinks();
  hideProjectSections();
  $("#" + panel + "-content").show();
}

function hideResumeLinks() {
  var items = document.querySelectorAll(".resumeItem");
  for (var i = 0; i < items.length; i++) {
    $("#" + items[i].id + "-content").hide();
  }
}

function hideResumeSections() {
  var items = document.querySelectorAll(".resumeSection");
  for (var i = 0; i < items.length; i++) {
    $("#" + items[i].id + "-content").hide();
  }
}

function showResumeSection(section) {
  hideResumeSections();
  $("#" + section.id + "-content").show();
}

function hideProjectSections() {
  var items = document.querySelectorAll(".project");
  for (var i = 0; i < items.length; i++) {
    $("#" + items[i].id + "-content").hide();
  }
}

function showProjectSections(section) {
  hideProjectSections();
  $("#" + section.id + "-content").show();
}
