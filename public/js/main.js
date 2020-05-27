document.addEventListener("DOMContentLoaded",function(){if(window.jQuery){$(".header__btn").on("click",function(){$(this).toggleClass("header__btn--active"),$(".header__nav").toggleClass("header__nav--active"),$(".body").toggleClass("body--active"),$(".header__search-btn").hasClass("active")&&($(".header__search-btn").toggleClass("active"),$(".header__search").toggleClass("header__search--active"))});const t=e=>{let t=localStorage.getItem("favourites");return!!t&&(t=JSON.parse(t)).find(t=>t.id===e.id)};if(1==$("svg#heart-svg").length){let e=$("svg#heart-svg").parent().parent().data("json");t(e)&&$("svg#heart-svg").parent().parent().find("input").prop("checked",!0)}const a=e=>{let a=localStorage.getItem("favourites");return a?(a=JSON.parse(a),t(e)?(i(e),"already a favourite"):void localStorage.setItem("favourites",JSON.stringify([...a,e]))):void localStorage.setItem("favourites",JSON.stringify([e]))},i=e=>{const t=JSON.parse(localStorage.getItem("favourites")).filter(t=>t.id!==e.id);localStorage.setItem("favourites",JSON.stringify(t))};$("svg#heart-svg").on("click",function(){try{const e=$(this).parent().parent().data("json");a(e)}catch(e){console.log(e)}}),$(".header__search-btn").on("click",function(){$(this).toggleClass("active"),$(".header__search").toggleClass("header__search--active"),$("section.home #myTabContent .row").toggleClass("p-t-50"),$('input[name="query"]').focus(),$(".header__btn").hasClass("header__btn--active")&&($(".header__btn").toggleClass("header__btn--active"),$(".header__nav").toggleClass("header__nav--active"),$(".body").toggleClass("body--active"))});let s={url:function(e){return"/suggestions/"+e},requestDelay:500,getValue:function(e){if(e)return"tv"==e.media_type?e.name:e.title},template:{type:"custom",method:function(e,t){return t.poster_path?`<img src='https://image.tmdb.org/t/p/w45/${t.poster_path}' class="img-thumbnail" /> ${e} - ${t.overview.substr(0,50)}...`:`${e} - ${t.overview.substr(0,50)}...`}},list:{maxNumberOfElements:5,match:{enabled:!0},onChooseEvent:function(){$('input[name="query"]').submit()}},theme:"dark"};$('input[name="query"]').easyAutocomplete(s),$(".home__nav--next").on("click",function(){$(".home__carousel, .home__bg").trigger("next.owl.carousel")}),$(".home__nav--prev").on("click",function(){$(".home__carousel, .home__bg").trigger("prev.owl.carousel")}),$(window).on("resize",function(){var e=$(".home__bg").height();$(".home__bg .item").css("height",e+"px")}),$(window).trigger("resize"),$(".content__mobile-tabs-menu li").each(function(){$(this).attr("data-value",$(this).text().toLowerCase())}),$(".content__mobile-tabs-menu li").on("click",function(){var e=$(this).text(),t=$(this).closest(".content__mobile-tabs").attr("id");$("#"+t).find(".content__mobile-tabs-btn input").val(e)}),$(".filter__item-menu li").each(function(){$(this).attr("data-value",$(this).text().toLowerCase())}),$(".filter__item-menu li").on("click",function(){var e=$(this).text(),t=$(this).closest(".filter__item").attr("id");$("#"+t).find(".filter__item-btn input").val(e)});let n=window.location.pathname,o=$("ul.header__nav");if("/"===n)o.children().each(function(e){$(this).removeClass("active").find("*").removeClass("active")}),o.find("li:nth-child(1)").addClass("active");else if(n.includes("/search/")){o.children().each(function(e){$(this).removeClass("active").find("*").removeClass("active")}),$(".header__search-btn").trigger("click");const e=new URL(window.location);let t=e.searchParams.get("q")||e.searchParams.get("query");n.split("/").pop()&&(t=n.split("/").pop()),$('input[name="query"]').val(t),console.log(t)}else n.includes("/movies/")?(o.children().each(function(e){$(this).removeClass("active").find("*").removeClass("active")}),o.find("li:nth-child(2)").addClass("active")):n.includes("/tv-shows/")&&(o.children().each(function(e){$(this).removeClass("active").find("*").removeClass("active")}),o.find("li:nth-child(3)").addClass("active"));function e(){var e=$(window).height(),t=$(".footer").height(),a=$(".footer").position().top+t+70;a<e&&$(".footer").css("margin-top",e-a+10+"px")}e(),window.addEventListener("resize",e),navigator.share?($(".share-btn,.grid-share-btn").addClass("show"),$(".total_votes").addClass("hide"),$(".share-btn,.grid-share-btn").on("click",function(){let e=`${window.location.protocol}//${window.location.hostname}`+$(this).data("url"),t=`Title: ${$(this).data("title")}`,a=`\n${`Rating ⭐: ${$(this).data("rating")}`}\n\nStory Line: ${$(this).data("overview")}`;navigator.share({title:t,text:a,url:e}).then(()=>{console.log("Thanks! 😄")}).catch(e=>{console.log("Couldn't share 🙁")})})):($(".share-btn,.grid-share-btn").removeClass("show"),$(".total_votes").removeClass("hide"),console.log("share is not supported"))}});
//# sourceMappingURL=main.js.map
