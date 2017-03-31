$(document).ready(function(){
 $("form#question").submit(function(event) {

   var question1 = $("#who").val();
   var question2 = $("#where").val();
   var question3 = $("#what").val();
   var question4 = $("#how").val();
   var question5 = $("#when").val();


   if (question5 === "Obsolete"){
      $("#rethink").show();
      $("#c-sharp").hide();
      $("#ruby").hide();
      $("#php").hide();
    } else if ((question1 === "To run a startup") || (question2 === "Start ups")|| (question4 === "How to interact with things (UX)")){
      $("#rethink").hide();
      $("#c-sharp").hide();
      $("#ruby").show();
      $("#php").hide();
    } else if ((question2 === "Established employer") || (question4 === "How things work (logic)") || (question3 === "Software Development")){
      $("#c-sharp").show();
      $("#rethink").hide();
      $("#ruby").hide();
      $("#php").hide();
    } else if ((question3 === "Mobile Aps") || (question2 === "Enterprise") || (question1 === "To build something fun/useful")){
      $("#rethink").hide();
      $("#c-sharp").hide();
      $("#ruby").hide();
      $("#php").show();
    } else {
       $("#rethink").show();
       $("#c-sharp").hide();
       $("#php").hide();
       $("#ruby").hide();
    }

    event.preventDefault();
  });
});
