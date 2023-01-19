$(document).ready(function () {
    $.fn.select2.defaults.set("allowClear","true"); 
    var data = [
        {
            id: 0,
            text: 'enhancement'
        },
        {
            id: 1,
            text: 'bug'
        },
        {
            id: 2,
            text: 'duplicate'
        },
        {
            id: 3,
            text: 'invalid'
        },
        {
            id: 4,
            text: 'wontfix'
        }
    ];

    // $("#dropdown").select2({
    //     // ajax: {

    //     //     url: "http://localhost:3000/users",
    //     //     dataType: 'json',

    //     // },
    //     placeholder: "Select a Month",
    //     allowClear: true,
    //     tags:true,

    // $("#dropdown").select2({
    //     minimumInputLength: 2,
    //     tags: [],
    //     ajax: {
    //         url: `http://localhost:3000/users?_page=${pageNumber}&_limit=5`,
    //         dataType: 'json',
    //         type: "GET",
    //         // async:false,
    //         // quietMillis: 50,
    //         delay:250,
    //         data: function (pageNumber) {
    //             return {
    //                 pageNumber: 1,
    //             };
    //         },

    //         processResults: function (data) {

    //             // return {
    //             //     results: $.map(data, function (item) {
    //             //         // return {
    //             //         //     text: item.completeName,
    //             //         //     slug: item.slug,
    //             //         //     id: item.id,
    //             //         // }
    //             //     })
    //             // };

    //             console.log(data);
    //         },
    //         cache:true,
    //     },
    // });
    //dropdown image
    function formatState(state) {
        console.log(state);
        console.log(state.phone);

        let str="";

        str+="<p style='margin-top:-2px;'>"+state.phone+"<p>";

        var $state = $(str);

        //Image

        // if (!state.id) {

        //     return state.text;

        // }

        // var baseUrl = "/Quascenta/task/images";

        // var $state = $(

        //     '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'

        // );

        return $state;

    };
    console.log(data);

    //placeholder match item
    function matchCustom(params, dataObj) {
        // If there are no search terms, return all of the data
        if ($.trim(params.term) === '') {
            return dataObj;
        }

        // Do not display the item if there is no 'text' property
        if (typeof dataObj.phone === 'undefined') {
            return null;
        }

        // `params.term` should be the term that is used for searching
        // `data.text` is the text that is displayed for the data object
        if (String(dataObj.phone).indexOf(params.term) > -1) {
            var modifiedData = $.extend({}, dataObj, true);
            modifiedData.phone += '';

            // You can return modified objects from here
            // This includes matching the `children` how you want in nested data sets
            return modifiedData;
        }

        // Return `null` if the term should not be displayed
        return null;
    }

   



    $("#dropdown").select2({
        data: data,
        // allowClear: true,
        placeholder: "select a Item"

        // templateResult: formatState, //show dropdown image.
        // selectOnClose: true,         //select the first option
        
        // maximumSelectionLength: 3,   //at least 3 items selected
        // tags: true,                  //dynamic add 1 item

        // templateSelection: function (data) {  //show image in select box
        //     console.log(data);
        //     if (data.id === '') { // adjust for custom placeholder values
        //         return 'Custom styled placeholder text';
        //     }

        //     return data.text;
        // }
        // matcher: matchCustom, // match the character
        // minimumInputLength: 3 , // atleast 3 characters
        // minimumResultsForSearch: 20, 
        // minimumResultsForSearch: -1,
        // dir: "rtl" // right side item will show

    })
    // $("#dropdown").val(['1', '2']); // multiple item select by default
    // $("#dropdown").trigger('change'); // multiple item select in the select box
    // $("#dropdown").val(null).trigger('change'); //clear
    // $("#dropdown").select2('open');// dropdown list opened
    // $("#dropdown").select2('close'); // dropdown list closed
    // $("#dropdown").select2('destroy');// select2 plugin not work
    // $("#dropdown").val('2');
    // $("#dropdown").trigger('change.select2');

    // $("#dropdown").on('select2:closing',function(){ //dropdown close event trigger
    //     console.log("closing trigger")
    // });
    $("#dropdown").on('select2:opening', function () { //dropdown open event trigger
        console.log("opening trigger")
    });
    // $("#dropdown").on('select2:open', function () { //dropdown open event trigger
    //     console.log("  open trigger")
    // });
    // $("#dropdown").on('select2:close', function () { //dropdown close event trigger
    //     console.log("  close trigger")
    // });
    // $("#dropdown").on('select2:selecting', function () { //selecting and select botha are same
    //     console.log(" selecting trigger")
    // });
    // $("#dropdown").on('select2:unselecting', function () { //removing the selected elements
    //     console.log(" unselecting trigger")
    // });
    // $("#dropdown").on('select2:clear', function () { //allowClear true and it will clear all elements from input box.
    //     console.log("clear trigger")                 //clear & clearing both are same
    // });
    // $("#dropdown").select2({ //language select
    //     language: "es"
    //});
    // $("#dropdown").select2();

    //api data in dropdown list
    let dataObj = [];
    let getApiData = ajaxCall("http://localhost:3000/users");
    for(let i=0; i<getApiData.length; i++){
        dataObj.push(getApiData[i]);
    }
    console.log(dataObj);

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

      $("#dropdownApidata").select2({
        data:dataObj,
        placeholder:"Select your Name",
        // allowClear: true,
        templateResult:formatState,
        templateSelection:formatState,
        matcher: matchCustom,
    })

    $('#dropdown2').select2({
         data: data,
        // allowClear: true,
         placeholder: "select a Day",
         tags:true,
        //  selectOnClose: true,
        closeOnSelect:true
        // createTag: function (params) {
        //     console.log(params)
        //   var term = $.trim(params.term);
        //     console.log(term)
        //   if (term === '') {
        //     return null;
        //   }
      
        //   return {
        //     id: term,
        //     text: term,
        //     newTag:true,// add additional parameters
        //   }
        // }
        
        // createTag: function (params) {  //constraining the select box
        //     // Don't offset to create a tag if there is no @ symbol
        //     if (params.term.indexOf('#') === -1) {
        //       // Return null to disable tag creation
        //       return null;
        //     }
        
        //     return {
        //       id: params.term,
        //       text: params.term
        //     }
        //   },

        
      });

      

})


