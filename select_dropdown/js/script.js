
$(document).ready(function () {
  let listItems = document.querySelectorAll("#dropdown1 option");
  //  let addList = true;
  var $container = $(
    // '<span class="select2 select2-container"></span>' +
    '<div class="selection"></div>'  // +
  );

  $("#dropdown1").click(function () {
    $(".selection").slideToggle();
    $($container).insertAfter(this);

    function init() {
      let selectCont = $("select");
      // console.log(selectCont)
      let ul = `<ul class="select2-selection__rendered">`
      for (let i = 0; i < listItems.length; i++) {
        ul += `<li class="list-items">${listItems[i].innerText}</li>`
      }
      ul += `</ul>`
      // console.log(ul)
      $(".selection").html(ul);

      let list = document.querySelectorAll("li");
      for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function (e) {
          listItems.forEach(item => {
            item.removeAttribute("selected");
            $(".selection").toggle();
          })
          listItems[i].setAttribute("selected", true);

        })
      }
    }

    init();

  })
})

//new dropdown

let selectedItemContainer = document.querySelector(".selected-item-container");
let downIcon = document.querySelector(".fa-caret-down")
let searchBox = document.querySelector(".search-cont input");
let allListItems = document.querySelectorAll(".item");
let selectedItemContainerPlaceholder = document.querySelector(".selected-item-container-placeholder");

let getVisibility = () => {
  if (document.querySelector(".list-item").style.display == "block") {
    return "none";
  }
  return "block";
}

let getSearchBoxVisiblity = () => {
  if (searchBox.style.opacity == 1) {
    return 0
  }
  return 1;
}

downIcon.addEventListener("click", () => {
  document.querySelector(".list-item").style.display = getVisibility();
  searchBox.style.opacity = getSearchBoxVisiblity();
  searchBox.value = "";
  filterList("");
})

let array = [];
allListItems.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    // console.log(event);
    let obj = {
      id: null,
      name: event.target.innerText
    };

    // switch (event.target.innerText) {
    //   case "Sunday":
    //     obj.id = 1;
    //     break;

    //   case "Monday":
    //     obj.id = 2;
    //     break;

    //   case "Tueday":
    //     obj.id = 3;
    //     break;

    //   case "Wednesday":
    //     obj.id = 4;
    //     break;

    //   case "Thursday":
    //     obj.id = 5;
    //     break;

    //   case "Friday":
    //     obj.id = 6;
    //     break;

    //   case "Saturday":
    //     obj.id = 7;
    //     break;

    //   default:
    //     break;
    // };

    if (array.length == 0 || (!array.includes(event.target.innerText))) {
      // array.push(event.target.innerText);
      array.push(obj);
      let tagElement = `<button class="select-item-text" id=${obj.id}>`;
      tagElement += `<i class="fa fa-xmark" onclick="remove(this, '${obj.name}')"></i>`;
      tagElement += `${obj.name}</button>`

      let objectID = obj.id
      // console.log(objectID);
      // let crossIcons = document.querySelectorAll(".fa-xmark");
      selectedItemContainerPlaceholder.style.display = "none";
      selectedItemContainer.innerHTML += tagElement;
      // crossIcons.forEach(item => item.addEventListener('click', handleClick(objectID)));
      // let selectedItem = document.createElement("p");
      // selectedItem.classList.add("select-item-text");
      // let closeMark = document.createElement("i");
      // closeMark.classList.add("fa fa-xmark");
      // selectedItem.innerHTML = closeMark;
      // selectedItem.innerText = event.target.innerText;
      // selectedItemContainer.appendChild(selectedItem);
      document.querySelector(".list-item").style.display = getVisibility();
      searchBox.style.opacity = getSearchBoxVisiblity();
    }

    else {
      // [Monday, Tuesday].indexOf("Monday"); -> 0
      let index = array.indexOf(event.target.innerText);
      array.splice(index, 1);
      // [Tuesday];
      selectedItemContainer.innerHTML = null;
      // array.map((item, index) => {
      // let selectedItem = document.createElement("p");
      // selectedItem.classList.add("select-item-text");
      // selectedItem.innerText = item;
      // selectedItemContainer.appendChild(selectedItem);
      // });
      selectedItemContainerPlaceholder.style.display = "none";
      document.querySelector(".list-item").style.display = getVisibility();
      searchBox.style.opacity = getSearchBoxVisiblity();
    }
  })
});

//search functionality
searchBox.addEventListener("keyup", function (event) {
  filterList(event.target.value)
})

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  allListItems.forEach(list => {
    let label = list.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  })
}

// Multitag Functionality

const ul = document.querySelector(".content ul");
input = ul.querySelector("input");
const allList = document.querySelectorAll(".list-cont .list");
const closeAll = document.querySelector('#close');
const dropdownCont = document.querySelector(".list-cont")

let tags = [];

function createTag() {
  ul.querySelectorAll("li").forEach(li => {
    li.remove();
  })
  // if(count < 4){
  tags.slice().reverse().forEach(tag => {
    let liTag = `<li><i class="fa-solid fa-xmark" onclick="remove(this, '${tag}')"></i>${tag}</li>`
    ul.insertAdjacentHTML("afterbegin", liTag); //adding liTag inside ul tag.
  })
  // }
  // else if(count > 3){

  // }

  // dropdownCont.style.display = showListCont();  
  closeAll.style.display = "block";
}

function remove(element, tag) {
  --count;
  document.querySelector("#errorMsg").innerText = ``;
  let index = tags.indexOf(tag);//getting removing tag index
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];//remove or exclude selected tag
  selectItemsArray = [...selectItemsArray.slice(0, index), ...selectItemsArray.slice(index + 1)];
  element.parentElement.remove();//removing li of removed tag
  document.querySelectorAll(".new-list").forEach(item => {
    // console.log(item)
    if (item.innerText === tag) {
      item.remove();
    }
  })

  $(this).bind("unselect", function () {
    console.log("unselect trigger");
  })
  $(this).bind("unselecting", function () {
    console.log("unselecting trigger");
  })

  $(this).trigger("unselecting");
  $(this).trigger("unselect");
  //   $(this).trigger("unselect");
  // if (dropdownCont.style.display == "block") {
  //   $(this).trigger("unselecting");
  //   $(ul).trigger("closing");
  //   $(ul).trigger("close");
  //   $(this).trigger("unselect");
  // }
  // else {
  //   $(this).trigger("unselecting");
  //   $(ul).trigger("opening");
  //   $(ul).trigger("open");
  //   $(this).trigger("unselect");
  // }
 
}

function addTag(event) {

  if (event.key == "Enter") { // May, May
    let tag = event.target.value.replace(/\s+/g, '');//removing unwanted space from user tag
    if (tag.length > 1 && !tags.includes(tag)) {
      // console.log(tags.length)
      // console.log(tag.split(" ")); // [May], [May, June], [May, June]
      tag.split(' ').forEach(tag => {
        if (count < 5) {
          tags.push(tag) //adding each tag to array
          let liElement = `<li class="list new-list">${tag}</li>`
          document.querySelector(".list-cont ul").insertAdjacentHTML("beforeend", liElement);
          createTag();
          count++;
          console.log(count);//2,3,4
        }
        else if (count > 4) {
          document.querySelector("#errorMsg").innerText = `You can only create ${count - 1} options`;
        }
      });
    }
    event.target.value = "";
  }
  filterItem(event.target.value);
}

let filterItem = searchValue => {
  searchValue = searchValue.toLowerCase();
  document.querySelectorAll(".list-cont ul li").forEach(item => {
    // console.log(item)
    let listTerm = item.innerText.toLowerCase();
    if (listTerm.indexOf(searchValue) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
      // document.querySelector(".list-cont").innerHTML = "<p>No result Found</p>"
    }

  })
}

function showListCont() {
  if (dropdownCont.style.display == "block") {
    return "none";
  }
  return "block";


}

function closeAllPopop() {
  if (closeAll.style.display == "block") {
    return "none";
  }
  return "block";
}

input.addEventListener('keyup', addTag);

document.querySelector(".content").addEventListener('click', function () {
  dropdownCont.style.display = showListCont();

});

let count = 1;
let selectItemsArray = [];
allList.forEach(item => {

  item.addEventListener("click", (event) => {
    // console.log("List item clicked")
    // console.log(item.innerText);
    // console.log(item.id);
    if (count < 5) {
      // console.log(count)
      closeAll.style.display = "block";
      document.querySelector(".content ul input").value = "";
      // event.path[3].children[0].children[0].children[0].value="";
      dropdownCont.style.display = showListCont();
      selectItemsArray.push(item.id);
      // selectItemsArray.push(item.innerText);
      $.fn.val = function () {
        let ulCont = $(".content ul input");
        console.log(selectItemsArray);
      }

      if (!tags.includes(item.innerText)) {
        tags.push(item.innerText);
        ul.querySelectorAll("li").forEach(li => {
          li.remove();
        })

        tags.slice().reverse().forEach(tag => {
          let liTag = `<li><i class="fa-solid fa-xmark" onclick="remove(this, '${tag}')"></i>${tag}</li>`
          ul.insertAdjacentHTML("afterbegin", liTag);
        });

      }
      count = count + 1;
    }
    else if (count > 4) {
      document.querySelector("#errorMsg").innerText = `You can only select ${count - 1} options`;
    }
  })
})

closeAll.addEventListener('click', function () {
  count = 1;
  tags.length = 0;//making array empty
  selectItemsArray.length = 0; //Making array empty
  ul.querySelectorAll("li").forEach(li => { //removing all liTags
    li.remove();
  })

  document.querySelectorAll(".new-list").forEach(item => {
    // console.log(item) 
    item.remove();
  })

  document.querySelector("#errorMsg").innerText = ``;
  closeAll.style.display = "none";

  $(this).bind("clear", function () {
    console.log("clear trigger")
  })

  $(this).trigger("clear");
})

let data = [
  {
    id: 1,
    name: "Shyam"
  },
  {
    id: 2,
    name: "Binu"
  },
  {
    id: 3,
    name: "Rasmi"
  },
  {
    id: 4,
    name: "Monika"
  }
]

function showObjectData() {
  allList.forEach((item, index) => {
    // console.log(item); // january, febuary
    // console.log(data[index].name); //0 , 1
    item.innerText = data[index].name; //shyam , Binu   
  })
}

// showObjectData();

//custom event
$(ul).on("opening", function () {
  console.log("opening trigger");
})
$(ul).on("open", function () {
  console.log("open trigger")
})
$(ul).bind("closing", function () {
  console.log("closing trigger");
})
$(ul).bind("close", function () {
  console.log("close trigger");
})
$(ul).bind("selecting", function () {
  console.log("selecting trigger");
})
$(ul).bind("select", function () {
  console.log("select trigger");
})

$(ul).click(function () {
  if (dropdownCont.style.display == "block") {
    $(ul).trigger("closing");
    $(ul).trigger("close");
  }
  else {
    $(ul).trigger("opening");
    $(ul).trigger("open");
  }
})

$(allList).click(function () {
  $(ul).trigger("selecting")
  $(ul).trigger("closing");
  $(ul).trigger("close");
  $(ul).trigger("select");
})






