// $(document).ready(function() {
//   $("form#submit").submit(function(event)
$(document).ready(function(){
 $("form#question").submit(function(event) {

   var question1 = $("#who").val();
   var question2 = $("#where").val();
   var question3 = $("#what").val();
   var question4 = $("#how").val();
   var question5 = $("#when").val();


   if (question5 === "Obsolete"){
      $("#rethink").show();
    } else if (question4 === "How things work (logic)"){
      $("#c-sharp").show();
    } else if (question1 === "Be a professional developer"){
      $("#ruby").show();
    } else if (question2 === "Established employer"){
      $("#c-sharp").show();
    } else if (question3 === "Branding Websites"){
      $("#php").show();
    } else {
       $("#rethink").show();
    }

    event.preventDefault();
  });
});
