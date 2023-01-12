
$(document).ready(function () {
  let listItems = document.querySelectorAll("#dropdown1 option");
  //  let addList = true;
  var $container = $(
    '<span class="select2 select2-container"></span>' +
    '<div class="selection"></div>'  // +
    //   '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
    // '</span>'
  );

  $("#dropdown1").click(function () {

    // if(addList == true){
    //   $(".selection").css("display","block");
    // }else{
    //   $(".selection").css("display","none");
    // }
    // addList = !addList
    $(".selection").slideToggle();


    $($container).insertAfter(this);

    function init() {
      let selectCont = $("select")
      console.log(selectCont)
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
          console.log(listItems[i].innerText);
          listItems.forEach(item => {
            item.removeAttribute("selected");
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
const allList = document.querySelectorAll(".list-cont .list")
const closeAll = document.querySelector('#close');
const dropdownCont = document.querySelector(".list-cont")

let tags = [];

function createTag() {
  ul.querySelectorAll("li").forEach(li => {
    li.remove();
  })
  tags.slice().reverse().forEach(tag => {
    let liTag = `<li><i class="fa-solid fa-xmark" onclick="remove(this, '${tag}')"></i>${tag}</li>`
    ul.insertAdjacentHTML("afterbegin", liTag); //adding liTag inside ul tag.
  })
  // dropdownCont.style.display = showListCont();  

}

function remove(element, tag) {
  let index = tags.indexOf(tag);//getting removing tag index
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];//remove or exclude selected tag
  element.parentElement.remove();//removing li of removed tag
  document.querySelectorAll(".new-list").forEach(item => {
    // console.log(item)
    if (item.innerText === tag) {
      item.remove();
    }
  })
}

function addTag(event) {
  if (event.key == "Enter") { // May, May

    let tag = event.target.value.replace(/\s+/g, ' ');//removing unwanted space from user tag
    if (tag.length > 1 && !tags.includes(tag)) {
      // console.log(tag.split(" ")); // [May], [May, June], [May, June]
      tag.split(' ').forEach(tag => {
        tags.push(tag) //adding each tag to array
        let liElement = `<li class="list new-list">${tag}</li>`
        document.querySelector(".list-cont ul").insertAdjacentHTML("beforeend", liElement);
        createTag();
      });
    }
    event.target.value = "";
  }
  filterItem(event.target.value);

}

let filterItem = searchValue => {
  searchValue = searchValue.toLowerCase();
  allList.forEach(item => {
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

input.addEventListener('keyup', addTag);

document.querySelector(".content").addEventListener('click', function () {
  dropdownCont.style.display = showListCont();
});

allList.forEach(item => {
  item.addEventListener("click", (event) => {
    document.querySelector(".content ul input").value = "";
    // event.path[3].children[0].children[0].children[0].value="";
    dropdownCont.style.display = showListCont();

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

  })

})

closeAll.addEventListener('click', function () {
  tags.length = 0;//making array empty
  ul.querySelectorAll("li").forEach(li => { //removing all liTags
    li.remove();
  })

  document.querySelectorAll(".new-list").forEach(item  => {
    // console.log(item) 
      item.remove();
  })
})



