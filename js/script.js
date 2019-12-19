$(document).ready(function(){
  $("#surge").click(function(){
    $("#surge").slideDown(200).hide(1000);
    $("#surgery").slideUp(200).show(1000);
})
$("#surgery").click(function(){
    $("#surgery").slideUp(200).hide(1000);
    $("#surge").slideDown(200).show(1000);
  });
});

$(document).ready(function(){
  $("#routin").click(function(){
    $("#routin").slideDown(200).hide(200);
    $("#routine").slideUp(200).show(200);
  })
  $("#routine").click(function(){
    $("#routine").slideUp(200).hide(1000);
    $("#routin").slideDown(200).show(1000);
  })
})

$(document).ready(function(){
  $("#genera").click(function(){
    $("#genera").slideDown(200).hide(1000);
    $("#general").slideUp(200).show(1000);
  })
  $("#general").click(function(){
    $("#general").slideUp(200).hide(1000);
    $("#genera").slideDown(200).show(1000);
  })
})

$(document).ready(function(){
  $("#shop").click(function(){
    $("#shop").slideDown(200).hide(100);
    $("#pet").slideUp(200).show(100);
  })
  $("#pet").click(function(){
    $("#pet").slideUp(200).hide(1000);
    $("#shop").slideDown(200).show(1000);
  })
})

$(document).ready(function(){
  $("#vaccin").click(function(){
    $("#vaccin").slideDown(200).hide(1000);
    $("#vaccinate").slideUp(200).show(1000);
  })
  $("#vaccinate").click(function(){
    $("#vaccinate").slideUp(200).hide(1000);
    $("#vaccin").slideDown(200).show(1000);
  })
})

$(document).ready(function(){
  $("#groom").click(function(){
    $("#groom").slideDown(200).hide(1000);
    $("#grooming").slideUp(200).show(1000);
  })
  $("#grooming").click(function(){
    $("#grooming").slideUp(200).hide(1000);
    $("#groom").slideDown(200).show(1000);
  })
})

$(document).ready(function(){
  $("#dent").click(function(){
    $("#dent").slideDown(200).hide(1000);
    $("#dentistry").slideUp(200).show(1000);
  })
  $("#dentistry").click(function(){
    $("#dentistry").slideUp(200).hide(1000);
    $("#dent").slideDown(200).show(1000);
  })
})

$(document).ready(function(){
  $("#nutrition1").click(function(){
    $("#nutrition1").slideDown(200).hide(1000);
    $("#nutrition").slideUp(200).show(1000);
  })
  $("#nutrition").click(function(){
    $("#nutrition").slideUp(200).hide(1000);
    $("#nutrition1").slideDown(200).show(1000);
  })
})

$(document).ready(function(){
  $("#animal1").click(function(){
    $("#animal1").slideDown(200).hide(1000);
    $("#animal").slideUp(200).show(1000);
  })
  $("#animal").click(function(){
    $("#animal").slideUp(200).hide(1000);
    $("#animal1").slideDown(200).show(1000);
  })
})

//form validation

$(document).ready(function(){
  $("#booknow").click(function(event){
    console.log("cliked button");

    var name=$("#name").val();
    var telephone=$("#telephone").val();
    var animal=$("#animals").val();
    var time=$("#time").val();
    var email=$("#email").val();
    var concern=$("#concerns").val();

    if(name.length>2){
      console.log(name);
    } else{
      alert("name invalid");
    }
    if(isNaN(telephone)){
    alert("Please input correct phone number")
  }
   if(email.includes("@") && email.includes(".")){

     event.preventDefault();
   }
   else{
     alert("E-mail invalid");
   }
    if (time.includes(":")){
     console.log("time correct");
    }
    else{
      alert("Time format invalid");
      event.preventDefault();
    }
  })
})

$(document).ready(function(){
  $("#bookdoctor").click(function(){
    $("#booknow").show();
    $("#hide").fadeIn(2000).show(2000);
  })
})
$(document).ready(function(){
  $("#bk").click(function(){
    $("#hide").fadeOut(2000).hide(2000);
    event.preventDefault();
    alert("Thank you,we have received your booking information,our Doctor will get back to you shortly.");
  })
})
