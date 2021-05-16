const filterToggle = document.querySelector(".filter-toggle");
const tagsContainer = document.querySelector(".tags-container");
const tags = document.querySelectorAll(".tag");

const records = document.querySelectorAll(".record");
const albums = document.querySelectorAll(".albums");
const singles = document.querySelectorAll(".singles");
const vinyl = document.querySelectorAll(".vinyl");



const toggleDisplay = tagName => {
  if (tagName == "All") {
    tagName = "record";
  }
  records.forEach( record => {
    record.classList.remove("hidden");
    if (!record.classList.contains(tagName.toLowerCase())) {
      record.classList.toggle("hidden");
    }
  });
}

filterToggle.addEventListener("click", (event) => {
  if (event.target.innerText == "Show filters") {
    event.target.innerText = "Hide filters";
    tagsContainer.style.display = "block";
  } else {
    event.target.innerText = "Show filters";
    tagsContainer.style.display = "none";
  }
});

tags.forEach( tag => {
  tag.addEventListener("click", event => {
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