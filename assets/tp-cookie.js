({init:function(){this.handCookie()},handCookie:function(){var e=document.getElementById("tp_cookie");e&&(window.getCookie("tp_cookie_bar")||e.classList.remove("hidden"),document.querySelectorAll("#tp_cookie .cookie-dismiss").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),e.currentTarget.closest("#tp_cookie").remove(),window.setCookie("tp_cookie_bar","dismiss",30)}),!1)})))}}).init();