document.addEventListener("DOMContentLoaded", () => {
    const addDayBtn = document.getElementById("addDayBtn");
    const viewDaysBtn = document.getElementById("viewDaysBtn");
    const searchNotesBtn = document.getElementById("searchNotesBtn");
  
    const addDaySection = document.getElementById("addDaySection");
    const viewDaysSection = document.getElementById("viewDaysSection");
    const searchNotesSection = document.getElementById("searchNotesSection");
  
    const closeButtons = document.querySelectorAll(".close");
  
    // Show/Hide sections
    addDayBtn.addEventListener("click", () => toggleSection(addDaySection));
    viewDaysBtn.addEventListener("click", () => toggleSection(viewDaysSection));
    searchNotesBtn.addEventListener("click", () => toggleSection(searchNotesSection));
  
    closeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.classList.add("hidden");
      });
    });
  
    function toggleSection(section) {
      section.classList.toggle("hidden");
    }
  });