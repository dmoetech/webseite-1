"use strict";var LineChart=function(){var t=$("#apex-line");t.length&&t.each(function(){!function(t){var e={chart:{zoom:{enabled:!1},toolbar:{show:!1},shadow:{enabled:!1}},stroke:{width:7,curve:"smooth"},series:[{name:"Likes",data:[4,3,10,9,29,19,22,9,12,7,19,5,13,9]}],xaxis:{labels:{format:"MMM",style:{colors:PurposeStyle.colors.gray[600],fontSize:"14px",fontFamily:PurposeStyle.fonts.base,cssClass:"apexcharts-xaxis-label"}},axisBorder:{show:!1},axisTicks:{show:!0,borderType:"solid",color:PurposeStyle.colors.gray[300],height:6,offsetX:0,offsetY:0},type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000","10/11/2000","11/11/2000","12/11/2000","1/11/2001","2/11/2001"]},yaxis:{labels:{style:{color:PurposeStyle.colors.gray[600],fontSize:"12px",fontFamily:PurposeStyle.fonts.base}},axisBorder:{show:!1},axisTicks:{show:!0,borderType:"solid",color:PurposeStyle.colors.gray[300],height:6,offsetX:0,offsetY:0}},fill:{type:"solid"},markers:{size:4,opacity:.7,strokeColor:"#fff",strokeWidth:3,hover:{size:7}},grid:{borderColor:PurposeStyle.colors.gray[300],strokeDashArray:5},dataLabels:{enabled:!1}},a=(t.data().dataset,t.data().labels,t.data().color),o=t.data().height,n=t.data().type;e.colors=[PurposeStyle.colors.theme[a]],e.markers.colors=[PurposeStyle.colors.theme[a]],e.chart.height=o||350,e.chart.type=n||"line";var i=new ApexCharts(t[0],e);setTimeout(function(){i.render()},300)}($(this))})}(),MonthlyEarningsChart=function(){var t=$("#apex-monthly-earnings");t.length&&t.each(function(){!function(t){var e={chart:{width:"100%",type:"bar",zoom:{enabled:!1},toolbar:{show:!1},shadow:{enabled:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"50%"}},stroke:{show:!1},series:[{name:"",data:[8e3,3e3,1e3,9e3,2e3,3e3,5e3]}],xaxis:{labels:{format:"MMM",style:{colors:PurposeStyle.colors.gray[600],fontSize:"13px",fontFamily:PurposeStyle.fonts.base,cssClass:"apexcharts-xaxis-label"}},axisBorder:{show:!1},axisTicks:{show:!0,borderType:"solid",color:PurposeStyle.colors.gray[300],height:6,offsetX:0,offsetY:0},type:"datetime",categories:["1/01/2019","2/02/2019","3/03/2019","4/04/2019","5/05/2019","6/06/2019","7/07/2019"]},yaxis:{show:!1},fill:{type:"solid"},markers:{size:4,opacity:.7,strokeColor:"#fff",strokeWidth:3,hover:{size:7}},grid:{show:!1},dataLabels:{enabled:!1},tooltip:{enabled:!0,x:{show:!1},y:{formatter:function(t){return"$"+t+" USD"}}}},a=(t.data().dataset,t.data().labels,t.data().color),o=t.data().height;t.data().type,e.colors=[PurposeStyle.colors.theme[a]],e.markers.colors=[PurposeStyle.colors.theme[a]],e.chart.height=o||350;var n=new ApexCharts(t[0],e);setTimeout(function(){n.render()},300)}($(this))})}(),SparkChart=function(){var t=$('[data-toggle="spark-chart"]');t.length&&t.each(function(){!function(t){var e={chart:{width:"100%",sparkline:{enabled:!0}},series:[],labels:[],stroke:{curve:"smooth"},markers:{size:0},colors:[],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(t){return""}}},marker:{show:!1}}},a=t.data().dataset,o=t.data().labels,n=t.data().color,i=t.data().height,s=t.data().type,r=t.data().stroke;e.series=[{data:a}],o&&(e.labels=[o]),e.colors=[PurposeStyle.colors.theme[n]],e.chart.height=i||35,e.chart.type=s||"line",e.stroke.width=r||2;var l=new ApexCharts(t[0],e);setTimeout(function(){l.render()},300)}($(this))})}(),AnimateProgressBar=function(){function t(){$(".progress-bar-animated").each(function(t){var e=$(this);e.hasClass("w-100")||!function(t){var e=t.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}(this)||e.addClass("w-100")})}$(window).scroll(function(){t()})}(),BgImgHolder=function(){var t=$(".bg-img-holder");t.length&&t.each(function(){!function(t){var e=t.children("img").attr("src"),a=t.data("bg-position")?t.data("bg-position"):"initial",o=t.data("bg-size")?t.data("bg-size"):"auto",n=t.data("bg-height")?t.data("bg-height"):"100%";t.css("background-image",'url("'+e+'")').css("background-position",a).css("background-size",o).css("opacity","1").css("height",n)}($(this))})}(),CardActions=function(){var t=$(".card"),o=".card-product-actions";t.length&&$(o).length&&(t.on({mouseenter:function(){!function(t){var e=t.find(o),a=e.data("animation-in");e.length&&(e.addClass("in animated "+a),e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass("animated "+a)}))}($(this))}}),t.on({mouseleave:function(){!function(t){var e=t.find(o),a=e.data("animation-out");e.length&&(e.addClass("animated "+a),e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass("in animated "+a)}))}($(this))}}))}(),Cookies=function(){var t,e=$("#modal-cookies");e.length&&(t=e,localStorage.getItem("modal_cookies")||t.modal("show"),e.on("hidden.bs.modal",function(t){localStorage.setItem("modal_cookies",1)}))}(),CopyType=function(){var t,e=".btn-type-clipboard",a=$(e);a.length&&((t=a).tooltip().on("mouseleave",function(){t.tooltip("hide")}),new ClipboardJS(e).on("success",function(t){$(t.trigger).attr("title","Copied!").tooltip("_fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("_fixTitle"),t.clearSelection()}))}(),Demo=void $('[data-toggle="sweet-alert"]').on("click",function(){switch($(this).data("sweet-alert")){case"basic":Swal.fire({title:"Here's a message!",text:"A few words about this sweet alert ...",buttonsStyling:!1,confirmButtonClass:"btn btn-primary"});break;case"info":case"info":Swal.fire({title:"Info",text:"A few words about this sweet alert ...",type:"info",buttonsStyling:!1,confirmButtonClass:"btn btn-info"});break;case"success":Swal.fire({title:"Success",text:"A few words about this sweet alert ...",type:"success",buttonsStyling:!1,confirmButtonClass:"btn btn-success"});break;case"warning":Swal.fire({title:"Warning",text:"A few words about this sweet alert ...",type:"warning",buttonsStyling:!1,confirmButtonClass:"btn btn-warning"});break;case"question":Swal.fire({title:"Are you sure?",text:"A few words about this sweet alert ...",type:"question",buttonsStyling:!1,confirmButtonClass:"btn btn-dark"});break;case"confirm":Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,buttonsStyling:!1,confirmButtonClass:"btn btn-danger",confirmButtonText:"Yes, delete it!",cancelButtonClass:"btn btn-secondary"}).then(function(t){t.value&&Swal.fire({title:"Deleted!",text:"Your file has been deleted.",type:"success",buttonsStyling:!1,confirmButtonClass:"btn btn-primary"})});break;case"image":Swal.fire({title:"Sweet",text:"Modal with a custom image ...",imageUrl:"../../assets/img/prv/splash.png",buttonsStyling:!1,confirmButtonClass:"btn btn-primary",confirmButtonText:"Super!"});break;case"timer":Swal.fire({title:"Auto close alert!",text:"I will close in 2 seconds.",timer:2e3,showConfirmButton:!1})}}),Dropdown=function(){var t=$(".dropdown-animate"),e=$('.dropdown-submenu [data-toggle="dropdown"]');t.length&&t.on({"hide.bs.dropdown":function(){!function(t){var e=t.find(".dropdown-menu");e.addClass("hide"),setTimeout(function(){e.removeClass("hide")},300)}(t)}}),e.length&&e.on("click",function(t){return function(t){t.next().hasClass("show")||t.parents(".dropdown-menu").first().find(".show").removeClass("show");var e=t.next(".dropdown-menu");e.toggleClass("show"),e.parent().toggleClass("show"),t.parents(".nav-item.dropdown.show").on("hidden.bs.dropdown",function(t){$(".dropdown-submenu .show").removeClass("show")})}($(this)),!1})}(),FormControl=function(){var t=$(".form-control"),e=$('[data-toggle="indeterminate"]');t.length&&t.on("focus blur",function(t){$(this).parents(".form-group").toggleClass("focused","focus"===t.type)}).trigger("blur"),e.length&&e.each(function(){$(this).prop("indeterminate",!0)})}(),CustomInputFile=function(){var t=$(".custom-input-file");t.length&&t.each(function(){var e=$(this);e.on("change",function(t){!function(t,e,a){var o,n=t.next("label"),i=n.html();e&&1<e.files.length?o=(e.getAttribute("data-multiple-caption")||"").replace("{count}",e.files.length):a.target.value&&(o=a.target.value.split("\\").pop()),o?n.find("span").html(o):n.html(i)}(e,this,t)}),e.on("focus",function(){!function(t){t.addClass("has-focus")}(e)}).on("blur",function(){!function(t){t.removeClass("has-focus")}(e)})})}(),NavbarCollapse=function(){var e=$("#navbar-main"),t=$("#navbar-main-collapse"),a=$("#navbar-top-main");t.length&&(t.on({"show.bs.collapse":function(){e.addClass("navbar-collapsed"),a.addClass("navbar-collapsed"),$("body").addClass("modal-open")}}),t.on({"hide.bs.collapse":function(){!function(t){t.removeClass("collapsing").addClass("collapsing-out"),e.removeClass("navbar-collapsed").addClass("navbar-collapsed-out"),a.removeClass("navbar-collapsed").addClass("navbar-collapsed-out")}(t)}}),t.on({"hidden.bs.collapse":function(){!function(t){t.removeClass("collapsing-out"),e.removeClass("navbar-collapsed-out"),a.removeClass("navbar-collapsed-out"),$("body").removeClass("modal-open")}(t)}}))}(),NavbarSticky=function(){var t=$(".navbar-sticky"),a=0,e=!1;t.length&&(a=t.offset().top,$(window).on({scroll:function(){e=!0,setInterval(function(){e&&(e=!1,function(t){var e=$(window).scrollTop();t.outerHeight(),a+300<e?t.addClass("sticky"):t.removeClass("sticky")}(t))},250)}}))}(),NegativeMargin=function(){var t=$("[data-negative-margin]");$(window).on({"load resize":function(){t.length&&t.each(function(){!function(t){var e=t.find($(t.data("negative-margin"))).height();console.log(e),991<$(window).width()?t.css({"margin-top":"-"+e+"px"}):t.css({"margin-top":"0"})}($(this))})}})}(),PasswordText=function(){var t=$('[data-toggle="password-text"]');t.length&&t.on("click",function(t){!function(t){var e=$(t.data("target"));"password"==e.attr("type")?e.attr("type","text"):e.attr("type","password")}($(this))})}(),Pricing=function(){var t=$(".pricing-container"),e=$(".pricing-container button[data-pricing]");t.length&&e.on({click:function(){!function(t){t.data("pricing");var e=t.parents(".pricing-container"),a=$("."+e.attr("class")+" [data-pricing-value]");t.hasClass("active")||($("."+e.attr("class")+" button[data-pricing]").removeClass("active"),t.addClass("active"),a.each(function(){var t=$(this).data("pricing-value"),e=$(this).find("span.price").text();$(this).find("span.price").text(t),$(this).data("pricing-value",e)}))}($(this))}})}(),ScrollTo=function(){var t=$(".scroll-me, [data-scroll-to], .toc-entry a"),e=window.location.hash;t.length&&t.on("click",function(t){!function(t){var e=t.attr("href"),a=t.data("scroll-to-offset")?t.data("scroll-to-offset"):0,o={scrollTop:$(e).offset().top-a};$("html, body").stop(!0,!0).animate(o,300),event.preventDefault()}($(this))}),$(window).on("load",function(){e&&"#!"!=e&&$(e).length&&function(t){$("html, body").animate({scrollTop:$(t).offset().top},"slow")}(e)})}(),Shape=function(){var t=$(".shape-container");$(window).on({"load resize":function(){t.length&&setTimeout(function(){t.each(function(){!function(t){var e=t.find("svg").height();t.css({height:e+"px"})}($(this))})},300)}})}(),Spotlight=function(){var t=$("[data-spotlight]");$(window).on({"load resize":function(){t.length&&t.each(function(){!function(e){var t;if("fullscreen"==e.data("spotlight")){if(e.data("spotlight-offset")){var a=$("body").find(e.data("spotlight-offset")).height();t=$(window).height()-a}else t=$(window).height();991<$(window).width()?e.find(".spotlight-holder").css({height:t+"px"}):e.find(".spotlight-holder").css({height:"auto"})}e.imagesLoaded().done(function(t){e.find(".animated").each(function(){var t=$(this);if(!t.hasClass("animation-ended")){var e=t.data("animation-in"),a=(t.data("animation-out"),t.data("animation-delay"));setTimeout(function(){t.addClass("animation-ended "+e,100).on("webkitAnimationEnd animationend",function(){t.removeClass(e)})},a)}})})}($(this))})}})}(),Layout=function(){function n(t){$(".sidenav-toggler").addClass("active"),$(".sidenav-toggler").data("action","sidenav-unpin"),$("body").addClass("sidenav-pinned ready"),$("body").find(".main-content").append('<div class="sidenav-mask mask-body d-xl-none" data-action="sidenav-unpin" data-target='+t.data("target")+" />"),$(t.data("target")).addClass("show"),localStorage.setItem("sidenav-state","pinned")}function i(t){$(".sidenav-toggler").removeClass("active"),$(".sidenav-toggler").data("action","sidenav-pin"),$("body").removeClass("sidenav-pinned"),$("body").addClass("ready"),$("body").find(".sidenav-mask").remove(),$(t.data("target")).removeClass("show"),localStorage.setItem("sidenav-state","unpinned")}var t=localStorage.getItem("sidenav-state")?localStorage.getItem("sidenav-state"):"pinned";if($(window).on({"load resize":function(){$(".sidenav-toggler").length?$(window).width()<1200?i($(".sidenav-toggler")):"pinned"==t?n($(".sidenav-toggler")):"unpinned"==t&&i($(".sidenav-toggler")):$("body").addClass("ready")}}),$("body").on("click","[data-action]",function(t){t.preventDefault();var e=$(this),a=e.data("action"),o=e.data("target");switch(a){case"offcanvas-open":o=e.data("target"),$(o).addClass("open"),$("body").append('<div class="body-backdrop" data-action="offcanvas-close" data-target='+o+" />");break;case"offcanvas-close":o=e.data("target"),$(o).removeClass("open"),$("body").find(".body-backdrop").remove();break;case"aside-open":o=e.data("target"),e.addClass("active"),$(o).addClass("show"),$("body").append('<div class="mask-body mask-body-light" data-action="aside-close" data-target='+o+" />");break;case"aside-close":o=e.data("target"),e.removeClass("active"),$(o).removeClass("show"),$("body").find(".body-backdrop").remove();break;case"omnisearch-open":o=e.data("target"),e.addClass("active"),$(o).addClass("show"),$(o).find(".form-control").focus(),$("body").addClass("omnisearch-open").append('<div class="mask-body mask-body-dark" data-action="omnisearch-close" data-target="'+o+'" />');break;case"omnisearch-close":o=e.data("target"),$('[data-action="search-open"]').removeClass("active"),$(o).removeClass("show"),$("body").removeClass("omnisearch-open").find(".mask-body").remove();break;case"search-open":o=e.data("target"),e.addClass("active"),$(o).addClass("show"),$(o).find(".form-control").focus();break;case"search-close":o=e.data("target"),$('[data-action="search-open"]').removeClass("active"),$(o).removeClass("show");break;case"sidenav-pin":n(e);break;case"sidenav-unpin":i(e)}}),$("[data-offset-top]").length){var e=$("[data-offset-top]"),a=$(e.data("offset-top")).height();e.css({"padding-top":a+"px"})}}(),Popover=function(){var t=$('[data-toggle="popover"]');t.length&&t.each(function(){!function(t){var e="";t.data("color")&&(e=" popover-"+t.data("color"));var a={trigger:"focus",template:'<div class="popover'+e+'" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'};t.popover(a)}($(this))})}(),PurposeStyle=function(){var t=getComputedStyle(document.body);return{colors:{gray:{100:"#f6f9fc",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#8898aa",700:"#525f7f",800:"#32325d",900:"#212529"},theme:{primary:t.getPropertyValue("--primary")?t.getPropertyValue("--primary").replace(" ",""):"#6e00ff",info:t.getPropertyValue("--info")?t.getPropertyValue("--info").replace(" ",""):"#00B8D9",success:t.getPropertyValue("--success")?t.getPropertyValue("--success").replace(" ",""):"#36B37E",danger:t.getPropertyValue("--danger")?t.getPropertyValue("--danger").replace(" ",""):"#FF5630",warning:t.getPropertyValue("--warning")?t.getPropertyValue("--warning").replace(" ",""):"#FFAB00",dark:t.getPropertyValue("--dark")?t.getPropertyValue("--dark").replace(" ",""):"#212529"},transparent:"transparent"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}}}(),SvgInjector=function(){var t=document.querySelectorAll("img.svg-inject"),e=!1;return t.length&&SVGInjector(t,{},function(t){e=!0}),{status:e}}(),Tooltip=function(){var t=$('[data-toggle="tooltip"]');t.length&&t.tooltip()}(),TextareaAutosize=function(){var t=$('[data-toggle="autosize"]');t.length&&autosize(t)}(),Countdown=function(){var t=$(".countdown");t.length&&t.each(function(){!function(t){var e=t.data("countdown-date");t.countdown(e).on("update.countdown",function(t){$(this).html(t.strftime('<div class="countdown-item"><span class="countdown-digit">%-D</span><span class="countdown-label countdown-days">day%!D</span></div><div class="countdown-item"><span class="countdown-digit">%H</span><span class="countdown-separator">:</span><span class="countdown-label">hours</span></div><div class="countdown-item"><span class="countdown-digit">%M</span><span class="countdown-separator">:</span><span class="countdown-label">minutes</span></div><div class="countdown-item"><span class="countdown-digit">%S</span><span class="countdown-label">seconds</span></div>'))})}($(this))})}();!function(c){c.fn.countTo=function(d){return d=d||{},c(this).each(function(){var a=c.extend({},c.fn.countTo.defaults,{from:c(this).data("from"),to:c(this).data("to"),speed:c(this).data("speed"),refreshInterval:c(this).data("refresh-interval"),decimals:c(this).data("decimals")},d),t=Math.ceil(a.speed/a.refreshInterval),e=(a.to-a.from)/t,o=this,n=c(this),i=0,s=a.from,r=n.data("countTo")||{};function l(t){var e=a.formatter.call(o,t,a);n.text(e)}n.data("countTo",r),r.interval&&clearInterval(r.interval),r.interval=setInterval(function(){i++,l(s+=e),"function"==typeof a.onUpdate&&a.onUpdate.call(o,s),t<=i&&(n.removeData("countTo"),clearInterval(r.interval),s=a.to,"function"==typeof a.onComplete&&a.onComplete.call(o,s))},a.refreshInterval),l(s)})},c.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(t,e){return t.toFixed(e.decimals)},onUpdate:null,onComplete:null}}(jQuery);var Counter=function(){var t,e=".counter",a=$(e);a.length&&(t=a,inView(e).on("enter",function(){t.hasClass("counting-finished")||t.countTo({formatter:function(t,e){return t.toFixed(e.decimals)},onUpdate:function(t){},onComplete:function(t){$(this).addClass("counting-finished")}})}))}(),Datepicker=function(){var t=$('[data-toggle="date"]'),e=$('[data-toggle="datetime"]'),a=$('[data-toggle="time"]');t.length&&t.each(function(){!function(t){t.flatpickr({enableTime:!1,allowInput:!0})}($(this))}),e.length&&e.each(function(){!function(t){t.flatpickr({enableTime:!0,allowInput:!0})}($(this))}),a.length&&a.each(function(){!function(t){t.flatpickr({noCalendar:!0,enableTime:!0,allowInput:!0})}($(this))})}(),Highlight=void $(".highlight").each(function(t,e){!function(t,e){$(e).before('<button class="action-item btn-clipboard" title="Copy to clipboard"><i data-feather="copy"></i></button>'),$(".btn-clipboard").tooltip().on("mouseleave",function(){$(this).tooltip("hide")});var a=new ClipboardJS(".btn-clipboard",{target:function(t){return t.nextElementSibling}});a.on("success",function(t){$(t.trigger).attr("title","Copied!").tooltip("_fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("_fixTitle"),t.clearSelection()}),a.on("error",function(t){var e="Press "+(/Mac/i.test(navigator.userAgent)?"⌘":"Ctrl-")+"C to copy";$(t.trigger).attr("title",e).tooltip("_fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("_fixTitle")}),hljs.highlightBlock(e)}(0,e)}),Masonry=function(){var t=$(".masonry-container");t.length&&t.each(function(){!function(t){var e=t.find(".masonry"),o=t.find(".masonry-filter-menu"),a=o.find(".active"),n=a.data("filter"),i=e.imagesLoaded(function(){null!=n&&""!=n&&("*"!=n&&(n="."+n),a.addClass("active"));var t={itemSelector:".masonry-item",filter:n};i.isotope(t)});o.on("click","a",function(t){t.preventDefault();var e=$(this),a=$(this).attr("data-filter");a="*"==a?"":"."+a,i.isotope({filter:a}).on("arrangeComplete",function(){o.find("[data-filter]").removeClass("active"),e.addClass("active")})})}($(this))})}(),Notify=function(){var t=$('[data-toggle="notify"]');t.length&&t.on("click",function(t){t.preventDefault(),function(t,e,a,o,n,i){$.notify({icon:a,title:" Bootstrap Notify",message:"Turning standard Bootstrap alerts into awesome notifications",url:""},{element:"body",type:o,allow_dismiss:!0,placement:{from:t,align:e},offset:{x:15,y:15},spacing:10,z_index:1080,delay:2500,timer:25e3,url_target:"_blank",mouse_over:!1,animate:{enter:n,exit:i},template:'<div class="alert alert-{0} alert-icon alert-group alert-notify" data-notify="container" role="alert"><div class="alert-group-prepend align-self-start"><span class="alert-group-icon"><i data-notify="icon"></i></span></div><div class="alert-content"><strong data-notify="title">{1}</strong><div data-notify="message">{2}</div></div><button type="button" class="close" data-notify="dismiss" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'})}($(this).attr("data-placement"),$(this).attr("data-align"),$(this).attr("data-icon"),$(this).attr("data-type"),$(this).attr("data-animation-in"),$(this).attr("data-animation-out"))})}(),Scrollbar=function(){var t=$(".scrollbar-inner");t.length&&t.scrollbar().scrollLock()}(),Select=function(){var t=$('[data-toggle="select"]');t.length&&t.each(function(){!function(t){t.select2({})}($(this))})}(),Sticky=function(){var t=$('[data-toggle="sticky"]');$(window).on("load resize",function(){t.length&&t.each(function(){!function(t){var e={offset_top:t.data("sticky-offset")?t.data("sticky-offset"):0};1e3<$(window).width()?t.stick_in_parent(e):t.trigger("sticky_kit:detach")}($(this))})})}(),WpxSwiper=function(){var t=$(".swiper-js-container");$(document).ready(function(){t.length&&t.each(function(t,e){!function(t){var e=t.find(".swiper-container"),a=t.find(".swiper-pagination"),o=t.find(".swiper-button-next"),n=t.find(".swiper-button-prev"),i=e.data("swiper-effect")?e.data("swiper-effect"):"slide",s=e.data("swiper-direction")?e.data("swiper-direction"):"horizontal",r=e.data("swiper-initial-slide")?e.data("swiper-initial-slide"):0,l=!!e.data("swiper-autoheight")&&e.data("swiper-autoheight"),d=!!e.data("swiper-autoplay")&&e.data("swiper-autoplay"),c=!!e.data("swiper-centered-slides")&&e.data("swiper-centered-slides"),p=e.data("swiper-pagination-type")?e.data("swiper-pagination-type"):"bullets",u=e.data("swiper-items"),f=e.data("swiper-sm-items"),g=e.data("swiper-md-items"),h=e.data("swiper-lg-items"),m=e.data("swiper-xl-items"),v=e.data("swiper-space-between"),w=e.data("swiper-sm-space-between"),b=e.data("swiper-md-space-between"),y=e.data("swiper-lg-space-between"),$=e.data("swiper-xl-space-between");u=u||1,f=f||u,g=g||f,h=h||g,m=m||h,v=v||0,w=w||v,b=b||w,y=y||b,$=$||y,new Swiper(e,{pagination:{el:a,clickable:!0,type:p},navigation:{nextEl:o,prevEl:n},slidesPerView:u,spaceBetween:v,initialSlide:r,autoHeight:l,centeredSlides:c,mousewheel:!1,keyboard:{enabled:!0,onlyInViewport:!1},grabCursor:!0,autoplay:d,effect:i,coverflowEffect:{rotate:10,stretch:0,depth:50,modifier:3,slideShadows:!1},speed:800,direction:s,preventClicks:!0,preventClicksPropagation:!0,observer:!0,observeParents:!0,breakpointsInverse:!0,breakpoints:{575:{slidesPerView:f,spaceBetweenSlides:w},767:{slidesPerView:g,spaceBetweenSlides:b},991:{slidesPerView:h,spaceBetweenSlides:y},1199:{slidesPerView:m,spaceBetweenSlides:$}}})}($(e))})})}(),Tags=function(){var t=$('[data-toggle="tags"]');t.length&&t.each(function(){!function(t){t.tagsinput({tagClass:"badge badge-primary"})}($(this))})}(),Typed=function(){var t=$(".typed");t.length&&t.each(function(){!function(t){var e="#"+t.attr("id"),a=(a=t.data("type-this")).split(","),o=new Typed(e,{strings:a,typeSpeed:100,backSpeed:70,loop:!0});inView(e).on("enter",function(){o.start()}).on("exit",function(){o.stop()})}($(this))})}(),GoogleMapCustom=function(){var i,s,r,l,t=document.getElementById("map-custom");void 0!==t&&null!=t&&google.maps.event.addDomListener(window,"load",function(t){i=t.getAttribute("data-lat"),s=t.getAttribute("data-lng"),r=t.getAttribute("data-color"),l=t.getAttribute("data-zoom")?parseInt(t.getAttribute("data-zoom")):12;var e=new google.maps.LatLng(i,s),a={zoom:l,scrollwheel:!1,center:e,mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:r},{visibility:"on"}]}]};t=new google.maps.Map(t,a);var o=new google.maps.Marker({position:e,map:t,animation:google.maps.Animation.DROP,title:"Hello World!"}),n=new google.maps.InfoWindow({content:'<div class="info-window-content"><h5>Company Name</h5><p>Description comes here...</p></div>'});google.maps.event.addListener(o,"click",function(){n.open(t,o)})}(t))}(),GoogleMap=function(){var i,s,r,t=document.getElementById("map-default");void 0!==t&&null!=t&&google.maps.event.addDomListener(window,"load",function(t){i=t.getAttribute("data-lat"),s=t.getAttribute("data-lng"),r=t.getAttribute("data-zoom")?parseInt(t.getAttribute("data-zoom")):12;var e=new google.maps.LatLng(i,s),a={zoom:r,scrollwheel:!1,center:e,mapTypeId:google.maps.MapTypeId.ROADMAP};t=new google.maps.Map(t,a);var o=new google.maps.Marker({position:e,map:t,animation:google.maps.Animation.DROP,title:"Hello World!"}),n=new google.maps.InfoWindow({content:'<div class="info-window-content"><h2>{{ site.product.name }} {{ site.product.name_long }}</h2><p>{{ site.product.description }}</p></div>'});google.maps.event.addListener(o,"click",function(){n.open(t,o)})}(t))}();