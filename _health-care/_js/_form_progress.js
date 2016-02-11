var formProgress = (function() {
  var continueButton = $('#continueButton');
  var skipButton = $('#skipButton');
  var $allFormSections = $('.form-section');

  // When a particular tab is selected, show the first set of questions in that topic
  var showSectionOfSelectedTab = function(activeTab) {
    var activePanel = $('#' + $(activeTab).attr('aria-controls'));
    var $activeSection = $(activePanel).find('.form-section').first();

    $activeSection.show();
  };

  // Show that the tab of the current set of questions is selected
  var selectTabOfActiveSection = function(nextPanel) {
    var $currentTab = $('.tab-title.active');
    var allTabs = $('.tab-title');
    var nextTab = '';

    for (var i = 0; i < allTabs.length; i++) {
      if ($(allTabs[i]).find('a').attr('aria-controls') === $(nextPanel).attr('id')) {
        nextTab = allTabs[i];
        break;
      }
    }

    $currentTab.removeClass('active');
    $currentTab.find('a').attr('aria-selected', 'false');

    $(nextTab).addClass('active');
    $(nextTab).find('a').attr('aria-selected', 'true');
  };

  // Show the next set of questions
  var showNextSection = function() {
    var $currentSection = $('.form-section:visible');
    var indexOfCurrentSection = $allFormSections.index($currentSection);
    var $currentPanel = $currentSection.parents('.content');
    var nextSection = $allFormSections[indexOfCurrentSection + 1];
    var $nextPanel = $(nextSection).parents('.content');

    $currentSection.hide();

    if ($nextPanel.attr('id') !== $currentPanel.attr('id')) {
      $currentPanel.removeClass('active');
      $currentPanel.attr('aria-hidden', 'true');

      $nextPanel.addClass('active');
      $nextPanel.attr('aria-hidden', 'fasle');

      selectTabOfActiveSection($nextPanel);
    }

    $(nextSection).show();
  };

  var initForm = function() {
    $('.content.active').find('.form-section').first().show();

    $('#continueButton, #skipButton').on('click', function() {
      showNextSection();
    });

    $('.tab-title a').on('click', function() {
      showSectionOfSelectedTab(this);
    });
  };

  return {
    initForm: initForm
  };
}());
$(document).ready(formProgress.initForm);