$(document).ready(function(){
    let allCheckBox = $('input[type="checkbox"]');
    // console.log(allCheckBox);
    $(allCheckBox).click(function(){
        for(let i=0; i<allCheckBox.length; i++){
            // console.log(allCheckBox[i]);
            if(allCheckBox[i].name == 'singleDatePicker' && $(allCheckBox[i]).is(":checked")){
                console.log("hi");
                $('input[type = "text"]').daterangepicker({
                    singleDatePicker : true,
                    //  timePicker24Hour:true,
                     showDropdowns:true,
                     minYear:1900,
                     maxYear: parseInt(moment().format('YYYY'),10),
                     startDate: moment().startOf('hour'),
                     endDate: moment().startOf('hour').add(32, 'hour'),
                    locale: {
                    format: 'DD/M/YYYY ',
                    cancelLabel: 'Clear'
                    },
                });
            }
            else if(allCheckBox[i].name == 'timePicker' && $(allCheckBox[i]).is(":checked")){
                // console.log("time picker");
                $('input[type = "text"]').daterangepicker({
                    singleDatePicker : true,
                    timePicker : true,
                    timePickerIncrement:10,
                    timePicker24Hour:true,
                    showDropdowns:true,
                    minYear:1900,
                    maxYear: parseInt(moment().format('YYYY'),10),
                    startDate: moment().startOf('hour'),
                    endDate: moment().startOf('hour').add(32, 'hour'),
                    locale: {
                    format: 'DD/M/YYYY hh:mm:ss A',
                    cancelLabel: 'Clear'
                    },
                });
            }
            else if(allCheckBox[i].name == 'dateRangePicker' && $(allCheckBox[i]).is(":checked")){
                // console.log("date range picker");
                $('input[type = "text"]').daterangepicker({
                    timePicker : true,
                    timePicker24Hour:true,
                    linkedCalendar:true,
                    showDropdowns:true,
                    minYear:1900,
                    maxYear: parseInt(moment().format('YYYY'),10),
                    startDate: moment().startOf('hour'),
                    endDate: moment().startOf('hour').add(32, 'hour'),
                    locale: {
                    format: 'DD/M/YYYY hh:mm:ss A',
                    cancelLabel: 'Clear'
                    },
                    ranges : {
                        'Today': [moment(), moment()],
                        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                        }
                });

            }

        }
    })

  

    //Date Selector
    $('input[name="dateselect"]').daterangepicker({
         singleDatePicker:true,
         minDate:"01/01/2023",
         maxDate:"31/12/2023",
         locale:{
            format:"DD/MM/YYYY"
         }
    });

    $('input[name="dateselect"]').on('apply.daterangepicker' ,function(ev, picker){
        // console.log(picker)
        let date = picker.startDate.format('DD/MM/YYYY');
        // console.log(date)
        let dateVar = date.charAt(0)+date.charAt(1);
        // console.log(dateVar);
        let arr = [];
        for(let i=0; i<12; i++){
            // console.log("hi");
            if(i<9){
                arr.push(`${dateVar}/0${i+1}/2023`);
                update(arr);
            }else{
                arr.push(`${dateVar}/${i+1}/2023`);
                update(arr);
            }
        }
    });

    function update(arr){
        // console.log(arr);
        $('input[name="dateselect"]').daterangepicker({
            singleDatePicker:true,
            startDate:arr[0],
            minDate:'01/01/2023',
            maxDate:'31/12/2023',
            locale:{
                format:'DD/MM/YYYY'
            },
            isInvalidDate: function(ele){
                // console.log(ele);
                let currDate = moment(ele._d).format('DD/MM/YYYY');
                console.log(currDate);
                return arr.indexOf(currDate) == -1;
            }
        });
    }
        
        //Month Range
        $('button').click(function(){
           let monthValue =  $('input[name="monthrange"]').val();
        //    console.log(monthValue);
           monthRange (monthValue) ;
            
        })
        
          function monthRange(monthValue){
            console.log(monthValue);
            $('input[name="datepractice"]').daterangepicker({
                 singleDatePicker:true,
                 minDate:"01-01-2023",
                 maxDate:`30-${monthValue}-2023`,
                 locale:{
                 format:"DD-MM-YYYY",
                },
            });
          }

        //Date disable
        
        let arr1 = [];
        for(let i=0; i<12; i++){
            // console.log("hi");
            if(i<9){
                arr1.push(`0${i+1}/15/2023`);
            }else{
                arr1.push(`${i+1}/15/2023`); 
            }
        }

    
            $('input[name="datedisable"]').daterangepicker({
                minDate:'01/01/2023',
                maxDate:'12/31/2023',
                // endDate:moment(),
                locale:{
                    format:'MM/DD/YYYY'
                },
                isInvalidDate: function(ele){
                    let currDate = moment(ele._d).format('MM/DD/YYYY');
                    return arr1.indexOf(currDate) != -1;
                }
            }); 

            //disable
            function compareTwoArrays(arr1,arr2){
            let flag=1;
                for(let i=0;i<arr2.length;i++)
                {
                    for(let j=0;j<arr1.length;j++)
                    {
                        if(arr2[i]==arr1[j])
                        {
                            flag=0;
                        }
                    }
                }
        
                flag==0?(alert("The date range is not pickable"),$('input[name="datedisable"]').val('')):(alert("The date range is pickable"));
            }
        
            var arr2 = [];
        
            $('input[name="datedisable"]').on('apply.daterangepicker',function(ev,picker){
               
                arr2=[];
                
        
                var startDate = picker.startDate.format("MM/DD/YYYY");
        
                var startDay = parseInt(startDate.charAt(3)+""+startDate.charAt(4));
        
                var startDate_no_of_month = parseInt(startDate.charAt(0)+""+startDate.charAt(1));
        
                arr2.push(startDate);
        
                var endDate = picker.endDate.format("MM/DD/YYYY");
        
                var endDay = parseInt(endDate.charAt(3)+""+endDate.charAt(4));
                
                let year = parseInt(startDate.charAt(6)+startDate.charAt(7)+startDate.charAt(8)+startDate.charAt(9));
                let range;
        
                if(startDay<endDay){
        
                    range = Math.abs(startDay-endDay);
        
                }
        
                else{
        
                    let no_of_days = new Date(year,startDate_no_of_month,0).getDate();
        
                    let d = Math.abs(no_of_days-startDay);
        
                    range = endDay+d;
                }
        
                for(let i=1;i<=range;i++)
        
                {
                    arr2.push(moment(startDate).add(i,'days').format("MM/DD/YYYY"));
                }
        
                compareTwoArrays(arr1,arr2);
        
            })

             $('input[name="datedisable"]').val('');
        
        })

