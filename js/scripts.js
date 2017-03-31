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
      $("#php").hide();
      $("#ruby").hide();
    } else if ((question1 === "To run a startup<") || (question2 === "Start ups")){
      $("#ruby").show();
      $("#c-sharp").hide();
      $("#php").hide();
      $("#rethink").hide();
    } else if ((question2 === "Established employer") || (question3 === "Software Development")){
      $("#c-sharp").show();
      $("#php").hide();
      $("#ruby").hide();
      $("#rethink").hide();
    } else if ((question3 === "Mobile Aps") || (question1 === "Enterprise")){
      $("#php").show();
      $("#c-sharp").hide();
      $("#ruby").hide();
      $("#rethink").hide();
    } else if ((question4 === "How things work (logic)") || (question1 === "Established employer")){
      $("#c-sharp").show();
      $("#php").hide();
      $("#ruby").hide();
      $("#rethink").hide();
    } else if (question1 === "Be a professional developer") {
      $("#ruby").show();
      $("#c-sharp").hide();
      $("#php").hide();
      $("#rethink").hide();
    } else if (question2 === "Established employer"){
      $("#c-sharp").show();
      $("#php").hide();
      $("#ruby").hide();
      $("#rethink").hide();
    } else {
       $("#rethink").show();
       $("#c-sharp").hide();
       $("#php").hide();
       $("#ruby").hide();
    }

    event.preventDefault();
  });
});
