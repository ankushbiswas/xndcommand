
document.getElementById("loader").onload = function() {myFunction()};
   
        $(function () {
            var $window = $(window),
                $body = $('body'),
                $note = $("#note");

            $window.scroll(function () {
                if ($window.scrollTop() > $body.height() / 2) {
                    $note.fadeIn();
                }
                else {
                    $note.fadeOut();
                }
            });

            $('.close').on('click', function () {
                $note.fadeOut("slow");
                $window.off('scroll');
            });
        });
   
        $(function () {
            var $window = $(window),
                $body = $('body'),
                $note = $("#note"),
                notifyCookie = document.cookie;

            $window.scroll(function () {
                if (($window.scrollTop() > $body.height() / 2) &&
                        (notifyCookie.search('hideNote') === -1)) {
                    $note.fadeIn();
                }
                else {
                    $note.fadeOut();
                }
            });


            $('.close').on('click', function () {
                $note.fadeOut("slow");
                $window.off('scroll');
                document.cookie = 'hideNote=true; expires=' +
                                    (new Date(Date.now() + (10000 * 

1)).toUTCString());
            });
        });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("myBtnf").style.display = "block";
    } else {
        document.getElementById("myBtnf").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

  (function() {
    var cx = '006291456337040211058:ll59iobtcl4';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function goBack() {
    window.history.back();
}

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("wrapnav").style.display = "block";
}
