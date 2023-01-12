$(document).ready(function () {
  window.onclick = (event) => {
    let popop = document.querySelector(".popop");

    let show = window.getComputedStyle(popop).display;
    // console.log(show);
    //if(popop.style.display == "block"){
    // popop.style.display = "none"
    // console.log(popop.setAttribute("style", "display: none"));
    // }
  };

  let listItems = document.querySelectorAll(".list-item");

  for (let j = 0; j < listItems.length; j++) {
    listItems[j].addEventListener("click", function () {
      let changeColor = document.getElementsByClassName("active");

      changeColor[0].className = changeColor[0].className.replace("active", "");
      this.className += " active";
      // console.log(changeColor);
    });
  }

  let menuicon = document.querySelector(".icon-menu");

  let listHead = document.querySelectorAll(".list-header");

  let arrliName = [];

  for (let i = 0; i < listHead.length; i++) {
    arrliName.push(listHead[i].innerText);
  }

  menuicon.addEventListener("click", function () {
    let ele = document.querySelector(".left-container");
    let width = window.getComputedStyle(ele).width;
    let allMenuItems = document.querySelectorAll(".list-item-text");

    if (width == "225px") {
      ele.setAttribute("style", "width: 40px");
      for (let index = 0; index < allMenuItems.length; index++) {
        allMenuItems[index].setAttribute("style", "display:none");
      }

      for (let i = 0; i < listHead.length; i++) {
        listHead[i].innerText = "...";
      }
    } else {
      ele.setAttribute("style", "width: 225px");
      for (let index = 0; index < allMenuItems.length; index++) {
        allMenuItems[index].setAttribute("style", "display:inline");
      }

      //console.log(arrliName);
      for (let i = 0; i < listHead.length; i++) {
        listHead[i].innerText = arrliName[i];
      }
    }
  });

  let closeicon = document.querySelector(".icon-clear");

  closeicon.addEventListener("click", function close() {
    document.getElementById("item-bar2").style.display = "none";
  });

  // let fullSize = document.querySelector(".icon-fullscreen");

  // fullSize.addEventListener('click', function fullScreen(){
  // console.log("full screen button clicked");
  //     let body =  document.getElementsByTagName("<body>");
  //     document.getElementById("item10").style.width ="100vw";
  //     document.getElementById("item10").style.height ="100vh";
  // })

  // let popop = document.getElementById("popop");

  let notificationIcon = document.querySelector(".icon-notifications");
  let popop = document.querySelector(".popop");
  let addPopop = true;

  ////console.log("Notification ");
  notificationIcon.addEventListener("click", function openPopop() {
    //console.log("Notification icon is clicked");

    if (addPopop) {
      //   // popop.classList.add("open-popop");
      popop.style.display = "block";
    } else {
      popop.style.display = "none";
    }
    addPopop = !addPopop;
  });

  window.addEventListener("click", function handleClickOutsideBox(event) {
    // console.log(event.path[0].classList.contains("icon-notifications"));

    if (
      !event.path[0].classList.contains("icon-notifications") &&
      popop.style.display == "block"
    ) {
      popop.style.display = "none";
    } else {
      // console.log("hi");
    }
  });

  // document.getElementsByClassName('popop').style.display = "none";
  // let popop = document.querySelector('.popop');
  // let display = window.getComputedStyle(popop).display;
  // let body = document.querySelector('body')
  // body.addEventListener('click',function(event){
  //  let popop = document.querySelector('.popop');
  //  let display = window.getComputedStyle(popop).display;
  // console.log(popop);
  // console.log(display)
  // if(display == 'block'){
  //     popop.setAttribute("style", "display: none");
  //  }
  //  else{
  //    popop.setAttribute("style", "display: block");
  // }
  //})

  let items = [
    {
      image: "icon-flag",
      title: "New Subscription",
      subtitle:
        " Your customer subscribed for the basic plan. The customer will pay $25 per month.",
      time: "2pm",
    },
    {
      image: "icon-mail",
      title: "2 new messages",
      subtitle: " The last payment for your G Suite Basic subscription failed.",
      time: "4pm",
    },
    {
      image: "icon-flag",
      title: "Sandy Doe",
      subtitle:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      time: "1pm",
    },
    {
      image: "icon-mail",
      title: "2 new messages",
      subtitle: " The last payment for your G Suite Basic subscription failed.",
      time: "4pm",
    },
    {
      image: "icon-flag",
      title: "Sandy Doe",
      subtitle:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      time: "1pm",
    },
  ];

  let popopList = document.querySelector(".popop-list");
  let template = `<div class="popop-item">
    <div class="left-side">
      <i class="popop-icon"></i>
    </div>
    <div class="right-side">
      <div class="right-side-top-part">
        <span class="popop-title"></span>
        <img class="popop-time"></img>
      </div>
      <div class="right-side-bottom-part">
        <p class="popop-subtitle"></p>
      </div>
    </div>
  </div>`;

  //getUrl for dropdown
  let getUrl = ajaxCall("https://reqres.in/api/users?page=2");
  let getUrlData = getUrl.data;

  //Dropdown template
  for (let i = getUrlData.length - 1; i >= 0; i--) {
    popopList.insertAdjacentHTML("afterbegin", template);
    document.querySelector(".popop-icon").innerHTML = getUrlData[i].id;
    document.querySelector(".popop-title").innerHTML = getUrlData[i].first_name;
    // document.querySelector(".popop-subtitle").innerHTML = arrObj[i].email;
    document
      .querySelector(".popop-time")
      .setAttribute("src", getUrlData[i].avatar);
  }

  //Line chart
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Son", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "itouch",
          data: [20, 80, 70, 140, 140, 80, 200],
          tension: 0.4,
          backgroundColor: "rgba(238, 211, 128, 0.6)",
          fill: "origin",
        },
        {
          label: "ipad",
          data: [80, 100, 30, 200, 50, 170, 150],
          tension: 0.4,
          backgroundColor: "rgba(137, 187, 232, 0.6)",
          fill: "origin",
        },
        {
          label: "iphone",
          data: [10, 130, 80, 70, 180, 105, 250],
          tension: 0.4,
          backgroundColor: "rgba(91, 210, 171, 0.6)",
          fill: "origin",
        },
      ],
    },
    options: {
      scales: {
        y: {
          grid: {
            display: false,
            drawBorder: false,
            drawOnChartArea: false,
          },
          beforeAtZero: true,
        },
        x: {
          grid: {
            display: false,
            drawBorder: false,
            drawOnChartArea: false,
          },
          beginAtZero: true,
        },
      },

      plugins: {
        legend: {
          display: false,
        },
      },

      interaction: {
        intersect: false,
        mode: "index",
      },
    },
  });

  //Doughnut chart

  let xValues = ["Organic", "Referral", "Other"];
  let yValues = [200, 550, 250];
  let barColors = ["#f0c541", "#4e9de6", "#2ecd99"];

  new Chart("myPchart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
          borderWidth: 0,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  //Bar chart

  let x1Values = [
    "January",
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  let y1Values = [10, 30, 80, 61, 26, 75, 40];
  let barColors1 = "#f0c541";
  let y2Values = [28, 48, 40, 19, 86, 27, 90];
  let barColors2 = "#2ecd99";
  let y3Values = [8, 28, 50, 29, 76, 79, 40];
  let barColors3 = "#4e9de6";
  new Chart("myBchart", {
    type: "bar",
    data: {
      labels: x1Values,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: barColors1,
          data: y1Values,
        },
        {
          label: "My Second dataset",
          backgroundColor: barColors2,
          data: y2Values,
        },
        {
          label: "My Third dataset",
          backgroundColor: barColors3,
          data: y3Values,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            display: false,
          },
          stacked: true,
        },
        y: {
          beginAtZero: true,
          min: 0,
          max: 200,
          ticks: {
            stepSize: 20,
          },
          grid: {
            display: false,
          },
          stacked: true,
        },
      },
    },
  });

  let tableContent = [
    {
      campaign: "Facebook",
      client: "Beavis",
      changes: "2.43%",
      buget: "$1478",
      status: "Active",
    },
    {
      campaign: "Youtube",
      client: "Felix",
      changes: "1.43%",
      buget: "$951",
      status: "Closed",
    },
    {
      campaign: "Twitter",
      client: "Cannibus",
      changes: "-8.43%",
      buget: "$632",
      status: "Hold",
    },
    {
      campaign: "Spotify",
      client: "Neosoft",
      changes: "7.43%",
      buget: "$325",
      status: "Hold",
    },
    {
      campaign: "Instagram",
      client: "Hencework",
      changes: "9.43%",
      buget: "$258",
      status: "Active",
    },
  ];

  let tableBody = document.querySelector(".item10-table tbody");
  // console.log(tableHead);
  // let tableRowContent = `
  //                           <tr class="social-media">
  //                             <td class="social-campaign"></td>
  //                             <td class="social-client"></td>
  //                             <td class="social-changes"></td>
  //                             <td class="social-buget"></td>
  //                             <td class="social-status"></td>
  //                           </tr>

  //                         `;

  // for(let i=0; i<tableContent.length; i++){
  //   console.log("Hi");
  // tableBody.insertAdjacentHTML("afterbegin", tableRowContent);
  //     document.querySelector(".social-campaign").innerText = tableContent[i].campaign;
  //     document.querySelector(".social-client").innerText = tableContent[i].client ;
  //     document.querySelector(".social-changes").innerText = tableContent[i].changes;
  //     document.querySelector(".social-buget").innerText = tableContent[i].buget;
  //     document.querySelector(".social-status").innerText = tableContent[i].status;
  //     document.querySelector(".social-status").getAttribute(tableContent[2].status);
  //     console.log(document.querySelector(".social-status").getAttribute(tableContent[2].status))
  // }

  // let tableRowContent = `<tr class="social-media">
  //                           <td class="u_id"></td>
  //                           <td class="first-name"></td>
  //                           <td class="last-name"></td>
  //                           <td class="email"></td>
  //                           <td class="avatar"></td>
  //                         </tr>
  //                       `;
  function ajaxCall(url) {
    let value;
    $.ajax({
      type: "GET",
      url: `${url}`,
      async: false,
      dataType: "json",
      success: function (data) {
        value = data;
      },
      error: function (error) {
        console.log(`Error ${error}`);
      },
    });
    return value;
  }


  // Pagination Old logic our logic //
  let pageNumber = 1;
  let getTableListUrl = ajaxCall(
    `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
  );
  let totalData = ajaxCall(`http://localhost:3000/users`);
  // console.log(totalData);
  let totalDataLength = totalData.length; //50
  console.log(totalDataLength)
  let itemsToShowInOnePage = 5; //5
  let totalPages = Math.ceil(totalDataLength / itemsToShowInOnePage) //10
  // console.log(Math.ceil(7.2))
  // console.log(totalPages);

  let leftArrow = document.querySelector("#leftarrow");
  let firstButton = document.querySelector("#first-btn");
  let secondButton = document.querySelector("#second-btn");
  let thirdButton = document.querySelector("#third-btn");
  let extendButton = document.querySelector("#extend");
  let eightButton = document.querySelector("#eight-btn");
  let nineButton = document.querySelector("#nine-btn");
  let lastButton = document.querySelector("#last-btn");

  let allButton = [firstButton, secondButton, thirdButton, eightButton, nineButton, lastButton];
  // console.log(allButton)
  let rightArrow = document.querySelector("#rightarrow");
  let currentPageNumber = 1;

  lastButton.innerHTML = totalPages;
  nineButton.innerHTML = totalPages - 1;
  eightButton.innerHTML = totalPages - 2;
  // extendButton.disabled = true;

  function pageData() {
    for (let i = 0; i < getTableListUrl.length; i++) {
      document.querySelectorAll(".u_id")[i].innerText = getTableListUrl[i].id;
      document.querySelectorAll(".first-name")[i].innerText =
        getTableListUrl[i].first_name;
      document.querySelectorAll(".last-name")[i].innerText =
        getTableListUrl[i].last_name;
      document.querySelectorAll(".email")[i].innerText =
        getTableListUrl[i].email;
      document.querySelectorAll(".avatar ")[i].innerText =
        getTableListUrl[i].phone;
    }
  }

  function clearData() {
    document.querySelectorAll(".u_id").forEach((item) => {
      item.innerText = "";
    });
    document.querySelectorAll(".first-name").forEach((item) => {
      item.innerText = "";
    });
    document.querySelectorAll(".last-name").forEach((item) => {
      item.innerText = "";
    });
    document.querySelectorAll(".email").forEach((item) => {
      item.innerText = "";
    });
    document.querySelectorAll(".avatar ").forEach((item) => {
      item.innerText = "";
    });
  }

  leftArrow.disabled = true;
  leftArrow.classList.add("disableElement");
  rightArrow.classList.add("active-btn");

  pageData();
  //Right button
  rightArrow.addEventListener("click", function (event) {
    // console.log(`Updated page is${currentPageNumber}`)
    if (pageNumber != totalPages) {
      leftArrow.disabled = false;
      leftArrow.classList.remove("disableElement");
      leftArrow.classList.add("active-btn");
      clearData();
      pageNumber += 1;
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      // console.log(`current page is ${pageNumber}`);
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      secondButton.classList.add("active-btn");

      if (pageNumber > 2) {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        thirdButton.classList.add("active-btn");
      }

      if (pageNumber > 3 && pageNumber < (totalPages - 2)) {
        thirdButton.innerText = pageNumber;
        secondButton.innerText = pageNumber - 1;
        firstButton.innerText = pageNumber - 2;
        // extendButton.style.display = "none";
      }

      if (pageNumber > (totalPages - 3)) {
        extendButton.style.display = "none";
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        eightButton.classList.add("active-btn");
      }

      if ((pageNumber > (totalPages - 2)) && (pageNumber < totalPages)) {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        nineButton.classList.add("active-btn");
      }

      if (pageNumber == totalPages) {
        rightArrow.disabled = true;
        rightArrow.classList.add("disableElement");
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        lastButton.classList.add("active-btn")
      }
    }

    // if (currentPageNumber != totalPages) {
    //   // console.log(`Current page is ${currentPageNumber}`)
    //   currentPageNumber += 1;
    //   console.log(`Current page is ${currentPageNumber}`);
    //   console.log(event.path[1].children[1])
    //   // for (let i = 0; i < allButton.length; i++) {
    //   //   allButton[i].classList.remove("active-btn");
    //   // }
    //   // thirdButton.classList.add("active-btn");
    //   // if (currentPageNumber == 1) {
    //   //   for (let i = 0; i < allButton.length; i++) {
    //   //     allButton[i].classList.remove("active-btn");
    //   //   }
    //   //   firstButton.classList.add("active-btn");
    //   //   leftArrow.disabled = true;
    //   //   leftArrow.classList.add("disableElement")
    //   // }

    //   if (currentPageNumber > 1 && event.path[1].children[1].innerText == "1") {
    //     for (let i = 0; i < allButton.length; i++) {
    //       allButton[i].classList.remove("active-btn");
    //     }
    //     secondButton.classList.add("active-btn");
    //     leftArrow.disabled = false;
    //     leftArrow.classList.remove("disableElement")
    //   }
    //   if (currentPageNumber > 2 && event.path[1].children[2].innerText == "2") {
    //     for (let i = 0; i < allButton.length; i++) {
    //       allButton[i].classList.remove("active-btn");
    //     }
    //     thirdButton.classList.add("active-btn");
    //   }
    //   if ((currentPageNumber > 3 && currentPageNumber < totalPages - 2) && (event.path[1].children[3].innerText == "3")) {
    //     console.log("yes");
    //     for (let i = 0; i < allButton.length; i++) {
    //       allButton[i].classList.remove("active-btn");
    //     }
    //     thirdButton.classList.add("active-btn");
    //     firstButton.innerText = currentPageNumber - 2;
    //     secondButton.innerText = currentPageNumber - 1;
    //     thirdButton.innerText = currentPageNumber;
    //   }
    //   if ((currentPageNumber > 4 && currentPageNumber < totalPages - 2) && (event.path[1].children[3].innerText == "4")) {
    //     console.log("yes");
    //     for (let i = 0; i < allButton.length; i++) {
    //       allButton[i].classList.remove("active-btn");
    //     }
    //     thirdButton.classList.add("active-btn");
    //     firstButton.innerText = currentPageNumber - 2;
    //     secondButton.innerText = currentPageNumber - 1;
    //     thirdButton.innerText = currentPageNumber;
    //   }
    //   if ((currentPageNumber > 5 && currentPageNumber < totalPages - 2) && (event.path[1].children[3].innerText == "5")) {
    //     console.log("yes");
    //     for (let i = 0; i < allButton.length; i++) {
    //       allButton[i].classList.remove("active-btn");
    //     }
    //     thirdButton.classList.add("active-btn");
    //     firstButton.innerText = currentPageNumber - 2;
    //     secondButton.innerText = currentPageNumber - 1;
    //     thirdButton.innerText = currentPageNumber;
    //   }
    //   if ((currentPageNumber > 6 && currentPageNumber < totalPages - 2) && (event.path[1].children[3].innerText == "6")) {
    //     console.log("yes");
    //     for (let i = 0; i < allButton.length; i++) {
    //       allButton[i].classList.remove("active-btn");
    //     }
    //     thirdButton.classList.add("active-btn");
    //     firstButton.innerText = currentPageNumber - 2;
    //     secondButton.innerText = currentPageNumber - 1;
    //     thirdButton.innerText = currentPageNumber;
    //   }
    //   if ((currentPageNumber > 7 && currentPageNumber == totalPages - 2)) {
    //     for (let i = 0; i < allButton.length; i++) {
    //       allButton[i].classList.remove("active-btn");
    //     }
    //     eightButton.classList.add("active-btn");
    //   }
    //   if ((currentPageNumber > 8 && currentPageNumber < totalPages )) {
    //     for (let i = 0; i < allButton.length; i++) {
    //       allButton[i].classList.remove("active-btn");
    //     }
    //     nineButton.classList.add("active-btn");
    //   }
    //   if (currentPageNumber == totalPages ) {
    //     for (let i = 0; i < allButton.length; i++) {
    //       allButton[i].classList.remove("active-btn");
    //     }
    //     lastButton.classList.add("active-btn");
    //     rightArrow.disabled=true;
    //     rightArrow.classList.add("disableElement");
    //   }

    //   // if (currentPageNumber > totalPages -3 ) {
    //   //   // console.log("yes");
    //   //   for (let i = 0; i < allButton.length; i++) {
    //   //     allButton[i].classList.remove("active-btn");
    //   //   }
    //   //   eightButton.classList.add("active-btn");
    //   //   extendButton.style.display = "none";
    //   //   eightButton.innerText = currentPageNumber;
    //   //   thirdButton.innerText = currentPageNumber - 1;
    //   //   secondButton.innerText = currentPageNumber - 2;
    //   //   firstButton.innerText = currentPageNumber - 3;
    //   // }
    //   // if (currentPageNumber > totalPages-2) {
    //   //   // console.log("yes");
    //   //   for (let i = 0; i < allButton.length; i++) {
    //   //     allButton[i].classList.remove("active-btn");
    //   //   }
    //   //   nineButton.classList.add("active-btn");
    //   //   nineButton.innerText = currentPageNumber;
    //   //   // extendButton.innerText = currentPageNumber - 1;
    //   //   // thirdButton.innerText = currentPageNumber - 2;
    //   //   // secondButton.innerText = currentPageNumber - 3;
    //   //   // firstButton.innerText = currentPageNumber - 4;
    //   // }
    //   // if (currentPageNumber < totalPages) {
    //   //   // console.log("yes");
    //   //   for (let i = 0; i < allButton.length; i++) {
    //   //     allButton[i].classList.remove("active-btn");
    //   //   }
    //   //   nineButton.classList.add("active-btn");
    //   //   nineButton.innerText = currentPageNumber;
    //   // extendButton.innerText = currentPageNumber - 1;
    //   // thirdButton.innerText = currentPageNumber - 2;
    //   // secondButton.innerText = currentPageNumber - 3;
    //   // firstButton.innerText = currentPageNumber - 4;
    //   // }
    //   // if (currentPageNumber == totalPages) {
    //   //   // console.log("yes");
    //   //   for (let i = 0; i < allButton.length; i++) {
    //   //     allButton[i].classList.remove("active-btn");
    //   //   }
    //   //   lastButton.classList.add("active-btn")
    //   // lastButton.innerText = currentPageNumber;
    //   // eightButton.innerText = currentPageNumber - 1;
    //   // extendButton.innerText = currentPageNumber - 2;
    //   // thirdButton.innerText = currentPageNumber - 3;
    //   // secondButton.innerText = currentPageNumber - 4;
    //   // firstButton.innerText = currentPageNumber - 5;
    //   // extendButton.style.display = "block"
    //   // }
    //   // if (currentPageNumber > 9) {
    //   //   // console.log("yes");
    //   //   for (let i = 0; i < allButton.length; i++) {
    //   //     allButton[i].classList.remove("active-btn");
    //   //   }
    //   //   lastButton.classList.add("active-btn");
    //   //   lastButton.innerText = currentPageNumber;
    //   //   nineButton.innerText = currentPageNumber - 1;
    //   //   eightButton.innerText = currentPageNumber - 2
    //   //   extendButton.innerText = currentPageNumber - 3;
    //   //   thirdButton.innerText = currentPageNumber - 4;
    //   //   secondButton.innerText = currentPageNumber - 5;
    //   //   firstButton.innerText = currentPageNumber - 6;
    //   //   rightArrow.disabled = true
    //   //   rightArrow.classList.add("disableElement");

    //   // }
    //   // if(currentPageNumber > 8 && event.path[1].children[5].innerText == "8"){
    //   //    console.log("yes")
    //   //   for (let i = 0; i < allButton.length; i++) {
    //   //     allButton[i].classList.remove("active-btn");
    //   //   }
    //   //   nineButton.classList.add("active-btn");
    //   // }
    //   // if(currentPageNumber > 9 && event.path[1].children[6].innerText == "9"){
    //   //   //  console.log("yes")
    //   //   for (let i = 0; i < allButton.length; i++) {
    //   //     allButton[i].classList.remove("active-btn");
    //   //   }
    //   //   lastButton.classList.add("active-btn");

    //   // }
    //   clearData();
    //   getTableListUrl = ajaxCall(
    //     `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
    //   );
    //   pageData();
    // }

      //   if (currentPageNumber != totalPages) {
      //   // console.log("yes")
      //   currentPageNumber += 1;
      //   // console.log(currentPageNumber);
      //   for (let i = 0; i < allButton.length; i++) {
      //     allButton[i].classList.remove("active-btn");
      //   }
      //   thirdButton.classList.add("active-btn");
      //   if (currentPageNumber == 1) {
      //     for (let i = 0; i < allButton.length; i++) {
      //       allButton[i].classList.remove("active-btn");
      //     }
      //     firstButton.classList.add("active-btn");
      //     leftArrow.disabled = true;
      //     leftArrow.classList.add("disableElement")
      //   }
      //   if (currentPageNumber > 1) {
      //     for (let i = 0; i < allButton.length; i++) {
      //       allButton[i].classList.remove("active-btn");
      //     }
      //     secondButton.classList.add("active-btn");
      //     leftArrow.disabled = false;
      //     leftArrow.classList.remove("disableElement")
      //   }
      //   if (currentPageNumber > 2) {
      //     for (let i = 0; i < allButton.length; i++) {
      //       allButton[i].classList.remove("active-btn");
      //     }
      //     thirdButton.classList.add("active-btn");
      //     // leftArrow.disabled = false;
      //     // leftArrow.classList.remove("disableElement")

      //   }
      //   if (currentPageNumber > 3) {
      //     // console.log("yes");
      //     // for (let i = 0; i < allButton.length; i++) {
      //     //   allButton[i].classList.remove("active-btn");
      //     // }
      //     // thirdButton.classList.add("active-btn");
      //     firstButton.innerText = currentPageNumber - 2;
      //     secondButton.innerText = currentPageNumber - 1;
      //     thirdButton.innerText = currentPageNumber;
      //   }
      //   if (currentPageNumber > 6) {
      //     // console.log("yes");
      //     for (let i = 0; i < allButton.length; i++) {
      //       allButton[i].classList.remove("active-btn");
      //     }
      //     extendButton.classList.add("active-btn");
      //     extendButton.innerText = currentPageNumber;
      //     thirdButton.innerText = currentPageNumber - 1;
      //     secondButton.innerText = currentPageNumber - 2;
      //     firstButton.innerText = currentPageNumber - 3;
      //   }
      //   if (currentPageNumber > 7) {
      //     // console.log("yes");
      //     for (let i = 0; i < allButton.length; i++) {
      //       allButton[i].classList.remove("active-btn");
      //     }
      //     eightButton.classList.add("active-btn");
      //     eightButton.innerText = currentPageNumber;
      //     extendButton.innerText = currentPageNumber - 1;
      //     thirdButton.innerText = currentPageNumber - 2;
      //     secondButton.innerText = currentPageNumber - 3;
      //     firstButton.innerText = currentPageNumber - 4;
      //   }
      //   if (currentPageNumber > 8) {
      //     // console.log("yes");
      //     for (let i = 0; i < allButton.length; i++) {
      //       allButton[i].classList.remove("active-btn");
      //     }
      //     nineButton.classList.add("active-btn");
      //     nineButton.innerText = currentPageNumber;
      //     eightButton.innerText = currentPageNumber - 1;
      //     extendButton.innerText = currentPageNumber - 2;
      //     thirdButton.innerText = currentPageNumber - 3;
      //     secondButton.innerText = currentPageNumber - 4;
      //     firstButton.innerText = currentPageNumber - 5;
      //     extendButton.style.display = "block"
      //   }
      //   if (currentPageNumber > 9) {
      //     // console.log("yes");
      //     for (let i = 0; i < allButton.length; i++) {
      //       allButton[i].classList.remove("active-btn");
      //     }
      //     lastButton.classList.add("active-btn");
      //     lastButton.innerText = currentPageNumber;
      //     nineButton.innerText = currentPageNumber - 1;
      //     eightButton.innerText = currentPageNumber - 2
      //     extendButton.innerText = currentPageNumber - 3;
      //     thirdButton.innerText = currentPageNumber - 4;
      //     secondButton.innerText = currentPageNumber - 5;
      //     firstButton.innerText = currentPageNumber - 6;
      //     rightArrow.disabled = true
      //     rightArrow.classList.add("disableElement");

      //   }
      //   if(currentPageNumber > 8 && event.path[1].children[5].innerText == "8"){
      //      console.log("yes")
      //     for (let i = 0; i < allButton.length; i++) {
      //       allButton[i].classList.remove("active-btn");
      //     }
      //     nineButton.classList.add("active-btn");
      //   }
      //   if(currentPageNumber > 9 && event.path[1].children[6].innerText == "9"){
      //     //  console.log("yes")
      //     for (let i = 0; i < allButton.length; i++) {
      //       allButton[i].classList.remove("active-btn");
      //     }
      //     lastButton.classList.add("active-btn");

      //   }
      //   clearData();
      //   getTableListUrl = ajaxCall(
      //     `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
      //   );
      //   pageData();
      // }
  });

  //left button
  leftArrow.addEventListener("click", function (event) {
    // console.log(pageNumber);
    // if (totalPages != 1) {
    //   totalPages--;
    //   if (totalPages - 1 < totalPages) {
    //     console.log(`total pages is ${totalPages}`)//9
    //     rightArrow.disabled = false;
    //     rightArrow.classList.remove("disableElement");
    //     rightArrow.classList.add("active-btn");
    //     for (let i = 0; i < allButton.length; i++) {
    //       allButton[i].classList.remove("active-btn");
    //     }
    //     console.log(`Current page ${currentPageNumber}`)
    //     if(totalPages == currentPageNumber - 1) {
    //       nineButton.classList.add("active-btn");
    //     }
    //     else if (totalPages == currentPageNumber - 2){
    //       eightButton.classList.add("active-btn");
    //     }
    //     else if (totalPages == currentPageNumber - 3){
    //       eightButton.classList.add("active-btn");
    //       eightButton.innerText =totalPages;
    //       nineButton.innerText=totalPages-1;
    //       lastButton.innerText = totalPages-2
    //     }
    //   }



    //   // if (totalPages - 2 < totalPages) {
    //   //   console.log(`total pages is ${totalPages}`)//9
    //   //   rightArrow.disabled = false;
    //   //   rightArrow.classList.remove("disableElement");
    //   //   rightArrow.classList.add("active-btn");
    //   //   for (let i = 0; i < allButton.length; i++) {
    //   //     allButton[i].classList.remove("active-btn");
    //   //   }
    //   //   nineButton.classList.add("active-btn");
    //   // }

    //   clearData();
    //   getTableListUrl = ajaxCall(
    //     `http://localhost:3000/users?_page=${totalPages}&_limit=5`
    //   );
    //   pageData();
    // }


     pageNumber -= 1;
     
    if (pageNumber == 1) {
      leftArrow.disabled = true;
      leftArrow.classList.add('disableElement');
      secondButton.classList.remove("active-btn");
      firstButton.classList.add("active-btn");
      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      // console.log(pageNumber);
    }

     if (pageNumber === 2 || pageNumber <= totalPages - 8) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      secondButton.classList.add("active-btn");
      // leftArrow.disabled = false
      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      // console.log(pageNumber);
    }

    else if (pageNumber === 3) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      secondButton.classList.add("active-btn");
      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      // console.log(pageNumber);
    }

    else if (pageNumber === 4) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      secondButton.classList.add("active-btn");
      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      
    }

    else if (pageNumber === 5) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      secondButton.classList.add("active-btn");

      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      // console.log(pageNumber);
    }

    else if (pageNumber === 6) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      secondButton.classList.add("active-btn");
      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      // console.log(pageNumber);
    }

    else if (pageNumber === 7) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      thirdButton.classList.add("active-btn");
      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      // console.log(pageNumber);
    }

    else if (pageNumber === 8) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      eightButton.classList.add("active-btn");
      extendButton.style.display = "block"
      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      console.log(pageNumber);
      rightArrow.classList.remove("disableElement");
      rightArrow.classList.add("active-btn");
    }

    else if (pageNumber === 9) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      nineButton.classList.add("active-btn");
      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      // console.log(pageNumber);
      rightArrow.disabled = false
      rightArrow.classList.remove("disableElement");
      rightArrow.classList.add("active-btn");

    }
    // console.log(event.path[1].children[1].innerText == "5")
    if (event.path[1].children[1].innerText == "5" && pageNumber == (totalPages / 2)) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      firstButton.classList.add("active-btn");
      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
 
    }

    if (event.path[1].children[1].innerText == "5" && pageNumber == ((totalPages / 2) - 1)) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      firstButton.classList.add("active-btn");
      thirdButton.innerText = pageNumber + 2
      secondButton.innerText = pageNumber + 1;
      firstButton.innerText = pageNumber;

      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      // console.log(pageNumber);
    }

    if (event.path[1].children[1].innerText == "4" && pageNumber == ((totalPages / 2) - 1)) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      firstButton.classList.add("active-btn");
      thirdButton.innerText = pageNumber + 2
      secondButton.innerText = pageNumber + 1;
      firstButton.innerText = pageNumber;

      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      // console.log(pageNumber);
    }

    if (event.path[1].children[1].innerText == "3" && pageNumber == ((totalPages / 2) - 2)) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      firstButton.classList.add("active-btn");
      thirdButton.innerText = pageNumber + 2
      secondButton.innerText = pageNumber + 1;
      firstButton.innerText = pageNumber;

      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      // console.log(pageNumber);
    }

    if (event.path[1].children[1].innerText == "2" && pageNumber == ((totalPages / 2) - 3)) {
      for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("active-btn");
      }
      firstButton.classList.add("active-btn");
      thirdButton.innerText = pageNumber + 2
      secondButton.innerText = pageNumber + 1;
      firstButton.innerText = pageNumber;
      leftArrow.classList.remove("active-btn");
      leftArrow.classList.add("disableElement");
      clearData();
      getTableListUrl = ajaxCall(
        `http://localhost:3000/users?_page=${pageNumber}&_limit=5`
      );
      pageData();
      // console.log(pageNumber);
    }

    currentPageNumber -= 1;

      if (currentPageNumber == 1) {
        leftArrow.disabled = true;
        leftArrow.classList.add('disableElement')
        secondButton.classList.remove("active-btn");
        firstButton.classList.add("active-btn");
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      }

      else if (currentPageNumber === 2) {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        secondButton.classList.add("active-btn");
        // leftArrow.disabled = false
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      }

      else if (currentPageNumber === 3) {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        secondButton.classList.add("active-btn");
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
        // console.log(pageNumber);
      }

      else if (currentPageNumber === 7) {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        thirdButton.classList.add("active-btn");
        extendButton.style.display = "none";
        thirdButton.innerText = currentPageNumber;
        secondButton.innerText = currentPageNumber - 1;
        firstButton.innerText = currentPageNumber - 2;
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      }

      else if (currentPageNumber === 8) {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        eightButton.classList.add("active-btn");
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      }

      else if (currentPageNumber === 9) {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        nineButton.classList.add("active-btn");
        rightArrow.disabled = false;
        rightArrow.classList.remove("disableElement");
        rightArrow.classList.add("active-btn");
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      }

      else if (currentPageNumber === 6) {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        secondButton.classList.add("active-btn");
        // extendButton.style.display ="none";
        thirdButton.innerText = currentPageNumber + 1;
        secondButton.innerText = currentPageNumber;
        firstButton.innerText = currentPageNumber - 1;
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      }

      else if (currentPageNumber === 5) {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        firstButton.classList.add("active-btn");
        // extendButton.style.display ="none";
        thirdButton.innerText = currentPageNumber + 2;
        secondButton.innerText = currentPageNumber + 1;
        firstButton.innerText = currentPageNumber;
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      }

      else if (currentPageNumber === 4) {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        firstButton.classList.add("active-btn");
        extendButton.style.display = "block";
        thirdButton.innerText = currentPageNumber + 2;
        secondButton.innerText = currentPageNumber + 1;
        firstButton.innerText = currentPageNumber;
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      }

      if (currentPageNumber === 3 && event.path[1].children[1].innerText == "4") {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        firstButton.classList.add("active-btn");
        // extendButton.style.display ="block";
        thirdButton.innerText = currentPageNumber + 2;
        secondButton.innerText = currentPageNumber + 1;
        firstButton.innerText = currentPageNumber;
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      }

      if (currentPageNumber === 2 && event.path[1].children[1].innerText == "3") {
        console.log("yes")
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        firstButton.classList.add("active-btn");
        // extendButton.style.display ="block";
        thirdButton.innerText = currentPageNumber + 2;
        secondButton.innerText = currentPageNumber + 1;
        firstButton.innerText = currentPageNumber;
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      }

       if (currentPageNumber === 2 && event.path[1].children[3].innerText == "3") {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
         secondButton.classList.add("active-btn");
        // // extendButton.style.display ="block";
        // thirdButton.innerText = currentPageNumber + 2;
        // secondButton.innerText = currentPageNumber + 1;
        // firstButton.innerText = currentPageNumber;
        console.log(currentPageNumber)
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      }


      if (currentPageNumber === 1 && event.path[1].children[1].innerText == "2") {
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        firstButton.classList.add("active-btn");
        // extendButton.style.display ="block";
        thirdButton.innerText = currentPageNumber + 2;
        secondButton.innerText = currentPageNumber + 1;
        firstButton.innerText = currentPageNumber;
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      }

     else if (currentPageNumber == 9 && event.path[1].children[1].innerText == "10") {
        console.log("yes");
        for (let i = 0; i < allButton.length; i++) {
          allButton[i].classList.remove("active-btn");
        }
        thirdButton.classList.add("active-btn");
        extendButton.style.display ="block";
        thirdButton.innerText = currentPageNumber + 2;
        secondButton.innerText = currentPageNumber + 1;
        firstButton.innerText = currentPageNumber;
        clearData();
        getTableListUrl = ajaxCall(
          `http://localhost:3000/users?_page=${currentPageNumber}&_limit=5`
        );
        pageData();
      } 

  });

  //first button
  firstButton.addEventListener('click', function (event) {
    if (event.target.innerText == "1") {
      leftArrow.classList.remove("active-btn");
      leftArrow.classList.add('disableElement');
    }

    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove("active-btn");
    }
    firstButton.classList.add("active-btn");
    rightArrow.disabled = false;
    rightArrow.classList.remove("disableElement");
    rightArrow.classList.add("active-btn");
    // leftArrow.style.display = "none";
    // updatePageNumber(event.target.innerText);
    currentPageNumber = parseInt(event.target.innerText);
    clearData();
    getTableListUrl = ajaxCall(
      `http://localhost:3000/users?_page=${event.target.innerText}&_limit=5`
    );
    pageData();
  })

  //Second button
  secondButton.addEventListener('click', function (event) {
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove("active-btn");
    }
    secondButton.classList.add("active-btn");
    leftArrow.disabled = false
    leftArrow.classList.remove('disableElement');
    leftArrow.classList.add("active-btn");
    rightArrow.disabled = false;
    rightArrow.classList.remove("disableElement");
    rightArrow.classList.add("active-btn");
    currentPageNumber = parseInt(event.target.innerText);
    // console.log(currentPageNumber);
    clearData();
    getTableListUrl = ajaxCall(
      `http://localhost:3000/users?_page=${event.target.innerText}&_limit=5`
    );
    pageData();

  })

  //third button
  thirdButton.addEventListener('click', function (event) {
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove("active-btn");
    }
    thirdButton.classList.add("active-btn");
    leftArrow.disabled = false;
    leftArrow.classList.remove('disableElement');
    leftArrow.classList.add("active-btn");
    rightArrow.disabled = false;
    rightArrow.classList.remove("disableElement");
    rightArrow.classList.add("active-btn");
    currentPageNumber = parseInt(event.target.innerText);
    clearData();
    getTableListUrl = ajaxCall(
      `http://localhost:3000/users?_page=${event.target.innerText}&_limit=5`
    );
    pageData();
  })

  //eight button
  eightButton.addEventListener('click', function (event) {
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove("active-btn");
    }
    eightButton.classList.add("active-btn");
    currentPageNumber = parseInt(event.target.innerText);
    clearData();
    getTableListUrl = ajaxCall(
      `http://localhost:3000/users?_page=${event.target.innerText}&_limit=5`
    );
    pageData();
    leftArrow.disabled = false
    leftArrow.classList.remove('disableElement');
    leftArrow.classList.add("active-btn");
    rightArrow.disabled = false;
    rightArrow.classList.remove("disableElement");
    rightArrow.classList.add("active-btn");
  })

  //nine button
  nineButton.addEventListener('click', function (event) {
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove("active-btn");
    }
    nineButton.classList.add("active-btn");
    currentPageNumber = parseInt(event.target.innerText);
    clearData();
    getTableListUrl = ajaxCall(
      `http://localhost:3000/users?_page=${event.path[0].innerHTML}&_limit=5`
    );
    pageData();
    leftArrow.disabled = false
    leftArrow.classList.remove('disableElement');
    leftArrow.classList.add("active-btn");
    rightArrow.disabled = false;
    rightArrow.classList.add("active-btn");
    rightArrow.classList.remove("disableElement");
  })

  //last button
  lastButton.addEventListener('click', function (event) {
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove("active-btn");
    }
    lastButton.classList.add("active-btn");
    currentPageNumber = parseInt(event.target.innerText);
    clearData();
    getTableListUrl = ajaxCall(
      `http://localhost:3000/users?_page=${event.path[0].innerHTML}&_limit=5`
    );
    pageData();
    leftArrow.disabled = false
    leftArrow.classList.remove('disableElement');
    leftArrow.classList.add("active-btn");
    rightArrow.disabled = true;
    rightArrow.classList.remove("active-btn");
    rightArrow.classList.add('disableElement')
  })

});
