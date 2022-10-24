$(document).ready(function(){  
    $('#card1').hover(function(){  
        $(this).css("background", "linear-gradient(0deg, rgba(242, 101, 101, 100%), rgba(242, 101, 101, 100%)),url(../images/caseStudy1.png)");
        }, function(){  
        $(this).css("background", "linear-gradient(0deg, rgba(242, 101, 101, 84%), rgba(242, 101, 101, 84%)),url(images/caseStudy1.png)");
    });
    $('#card2').hover(function(){  
        $(this).css("background", "linear-gradient(0deg, rgba(58, 74, 96, 100%), rgba(58, 74, 96, 100%)), url(../images/caseStudy2.png)");
        }, function(){  
        $(this).css("background", "linear-gradient(0deg, rgba(58, 74, 96, 84%), rgba(58, 74, 96, 84%)), url(images/caseStudy2.png)");
    });
    $('#card3').hover(function(){  
        $(this).css("background", "linear-gradient(0deg, rgba(16, 92, 140, 100%), rgba(16, 92, 140, 100%)), url(../images/caseStudy3.png)");
        }, function(){  
        $(this).css("background", "linear-gradient(0deg, rgba(16, 92, 140, 74%), rgba(16, 92, 140, 74%)), url(images/caseStudy3.png)");
    });  
    $('#card4').hover(function(){  
        $(this).css("background", "linear-gradient(0deg, rgba(49, 95, 48, 100%), rgba(49, 95, 48, 100%)), url(../images/caseStudy4.png)");
        }, function(){  
        $(this).css("background", "linear-gradient(0deg, rgba(49, 95, 48, 80%), rgba(49, 95, 48, 80%)), url(images/caseStudy4.png)");
    });    
}); 