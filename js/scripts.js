$(document).ready(function(){
  $(".design").click(function(){
    $(".P").toggle();
    $(".I").toggle();

  });

  $(".icon").click(function(){
    $(".M").toggle();
    $(".D").toggle();

  })
  $(".product").click(function(){
    $(".G").toggle();
    $(".Pr").toggle();

  })

  $(".work4-item").on({
    mouseenter: function(){
      $(".w4").show();
      $(".w4").css("display", "flex")
    },
    mouseleave:function(){
        $(".work4").hide();

    }
  })

  $(".work3-item").on({
    mouseenter: function(){
      $(".w3").show();
      $(".w3").css("display", "flex")
    },
    mouseleave:function(){
        $(".work4").hide();

    }
  })
  $(".work2-item").on({
    mouseenter: function(){
      $(".w2").show();
      $(".w2").css("display", "flex")
    },
    mouseleave:function(){
        $(".work4").hide();

    }
  })
  $(".work1-item").on({
    mouseenter: function(){
      $(".w1").show();
      $(".w1").css("display", "flex")
    },
    mouseleave:function(){
        $(".work4").hide();

    }
  })
  $(".work5-item").on({
    mouseenter: function(){
      $(".w5").show();
      $(".w5").css("display", "flex")
    },
    mouseleave:function(){
        $(".work4").hide();

    }
  })
  $(".work6-item").on({
    mouseenter: function(){
      $(".w6").show();
      $(".w6").css("display", "flex")
    },
    mouseleave:function(){
        $(".work4").hide();

    }
  })
  $(".work7-item").on({
    mouseenter: function(){
      $(".w7").show();
      $(".w7").css("display", "flex")
    },
    mouseleave:function(){
        $(".work4").hide();

    }
  })
  $(".work8-item").on({
    mouseenter: function(){
      $(".w8").show();
      $(".w8").css("display", "flex")
    },
    mouseleave:function(){
        $(".work4").hide();

    }
  })
  $("form#form").submit(function(event) {
    event.preventDefault();
    var name = $("#Name").val();
    alert(name +  " we have recieved your message")





  });


});
