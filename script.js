// A $( document ).ready() block
$(document).ready(function(){
 //  Create plain object with key-value pair
  var myObj = {}   
  
      // onclick Event to save the event text message based on current time block
  $(".saveBtn").on("click",function(){
      var hour = $(this).attr("id")
      var input = $(this).siblings(".input-area").val()
      console.log(hour, input)
      myObj[hour]= input
      console.log(myObj)
      localStorage.setItem("myObj", JSON.stringify(myObj))
  
  })
  
  //Check browser support for local storage 
  function displayEventMessage(){
      myObj = JSON.parse(localStorage.getItem("myObj")) 
      if (!myObj){
          myObj={} 
      }
  
      for (key in myObj){
          console.log(myObj[key])
          $("#" + key).siblings(".input-area").val(myObj[key])
  
      }
  }
  
  // Changes the background color of the text area based on current time 
  function colorEvent(){
      $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
      var current = moment().hours()  
  
      $(".input-area").each(function(){
          var hour = parseInt($(this).siblings(".saveBtn").attr("id"))
          console.log("hour update", hour)
  
          if (hour < current){
              $(this).addClass("past")
          }
          else if (hour === current){
              $(this).removeClass("past")
              $(this).addClass("present")
          }
          else{
              $(this).removeClass("past")
              $(this).removeClass("present")
              $(this).addClass("future")
          }
  
      })
  
  }
  
  displayEventMessage()
  colorEvent()

  })