const filterToggle = document.querySelector(".filter-toggle");
const filterContainer = document.querySelector(".tags-container");
const filterLabels = document.querySelectorAll(".tag");
filterContainer.classList.toggle("hidden");

const records = document.querySelectorAll(".record");


const toggleDisplay = tagName => {
  if (tagName == "All") tagName = "record";
  records.forEach( record => {
    let recordClasses = record.classList;

    recordClasses.remove("hidden");
    if (!recordClasses.contains(tagName.toLowerCase())) {
      recordClasses.toggle("hidden");
    }
  });
}

filterToggle.addEventListener("click", (event) => {
  let targetText = event.target.innerText;

  (targetText == "Show filters") ? targetText = "Hide filters" : targetText = "Show filters";
  filterContainer.classList.toggle("hidden");
});

filterLabels.forEach( label => {
  label.addEventListener("click", event => {
    let selected = document.querySelector(".selected");
    let targetClasses = event.target.classList;
    let targetText = event.target.innerText;

    if (!targetClasses.contains("selected")) {
      selected.classList.toggle("selected");
      targetClasses.toggle("selected");
      toggleDisplay(targetText);
    } 
  });
});
