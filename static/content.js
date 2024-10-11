




const getRequest = async () => {
  const response = await
    axios.get('/reqcontent', {
      params: {
        "test": "this is a test"
      }
    })


  res = JSON.parse(response.data);
  data = res;
  return data;

}

const getSearch = async (textInput) => {
  const response = await
    axios.get('/search', {
      params: {
        "key": textInput
      }
    })

  res = JSON.parse(response.data);
  data = res;
  return data;
}














const displayCourse = (
  coursesContainer,
  urlValue,
  titleValue,
  thumbnailValue,
  descriptionValue,
  categoryValue
) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const a = document.createElement("a");
  a.setAttribute("href", urlValue);
  a.setAttribute("target", "_blank");

  const category = document.createElement("div");
  category.classList.add("category");
  category.innerHTML = categoryValue;

  const img = document.createElement("img");
  img.setAttribute("src", thumbnailValue);

  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerHTML = titleValue;

  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = descriptionValue;

  const info = document.createElement("div");
  info.classList.add("info");



  const timeIcon = document.createElement("div");
  timeIcon.classList.add("time-icon");
  timeIcon.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
      clip-rule="evenodd"
    />
  </svg>`;



  coursesContainer.appendChild(card);
  card.appendChild(a);
  a.appendChild(img);
  a.appendChild(title);
  a.appendChild(description);


};

const generateCourseData = (coursesContainer, tabnum) => {
  courses.forEach((co) => {
    let c = co.fields;
    if (tabnum == 0) {
      displayCourse(
        coursesContainer,
        c.url,
        c.title,
        c.thumbnail,
        c.description,
        c.category
      );
    } else if (tabnum == 1) {
      if (c.category == "Video") {
        displayCourse(
          coursesContainer,
          c.url,
          c.title,
          c.thumbnail,
          c.description
        );
      }
    } else if (tabnum == 2) {
      if (c.category == "Podcast") {
        displayCourse(
          coursesContainer,
          c.url,
          c.title,
          c.thumbnail,
          c.description
        );
      }
    } else if (tabnum == 3) {
      if (c.category == "Article") {
        displayCourse(
          coursesContainer,
          c.url,
          c.title,
          c.thumbnail,
          c.description
        );
      }
    }

  });
};

var searchMode = false;
var courses = [];
$(document).ready(async function () {


  var str = document.getElementById("mySearch");
  if (searchMode == false) {
    courses = await getSearch(str.value)
  }

  var tab1bool = false;
  var tab2bool = false;
  var tab3bool = false;
  var tab4bool = false;
  if (tab1bool == false) {
    generateCourseData(document.querySelector(".resource-container"), 0);
  }

  async function searchFunc() {
    var st = document.getElementById("mySearch");
    searchMode = true;
    courses = await getSearch(st.value);
    let index = localStorage.getItem('currentTab');
    if (index == 0 || !index) {
      let coursesContainer = document.querySelector(".resource-container");
      coursesContainer.innerHTML = "";
      generateCourseData(coursesContainer, 0);
      tab1bool = false;

    } else if (index == 1) {
      let coursesContainer = document.querySelector(".videocontent-container");
      coursesContainer.innerHTML = "";
      generateCourseData(coursesContainer, 1);
      tab2bool = false;

    } else if (index == 2) {
      let coursesContainer = document.querySelector(".podcast-container");
      coursesContainer.innerHTML = "";
      generateCourseData(coursesContainer, 2);
      tab3bool = false;

    } else if (index == 3) {
      let coursesContainer = document.querySelector(".article-container");
      coursesContainer.innerHTML = "";
      generateCourseData(coursesContainer, 3);
      tab4bool = false;

    }
  }

  document.getElementById("myBtn").addEventListener("click", searchFunc);

  $('.tabs-control a').click(async function () {
    let index = $(this).index();
    var stre = document.getElementById("mySearch");
    localStorage.setItem('currentTab', index);
    if (index == 0 || !index) {
      let coursesContainer = document.querySelector(".resource-container");
      coursesContainer.innerHTML = "";
      generateCourseData(coursesContainer, 0);
      tab1bool = true;

    } else if (index == 1) {
      let coursesContainer = document.querySelector(".videocontent-container");
      coursesContainer.innerHTML = "";
      generateCourseData(coursesContainer, 1);
      tab2bool = true;

    } else if (index == 2) {
      let coursesContainer = document.querySelector(".podcast-container");
      coursesContainer.innerHTML = "";
      generateCourseData(coursesContainer, 2);
      tab3bool = true;

    } else if (index == 3) {
      let coursesContainer = document.querySelector(".article-container");
      coursesContainer.innerHTML = "";
      generateCourseData(coursesContainer, 3);
      tab4bool = true;

    }

  });
















});