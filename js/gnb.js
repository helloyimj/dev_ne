/* GNB */

// nav +=      '<nav class="nav">';
nav +=        '<div class="area_state">';
nav +=          '<h2>국민평가관리시스템</p>';
nav +=        '</div>';
nav +=        '<div class="area_menu">';
nav +=          '<ul>';
nav +=            '<li class="depth01">';
nav +=              '<h3 class="depth01_item">평가단원 관리</h3>';
nav +=              '<ul class="sub_menu depth02_menu">';
nav +=                '<li class="depth02"><a href=".html" class="depth02_item">- 평가단원 목록</a></li>';
nav +=                '<li class="depth02"><a href=".html" class="depth02_item">- 평가단원 업로드</a></li>';
nav +=              '</ul>';
nav +=            '</li>';
nav +=            '<li class="depth01">';
nav +=              '<h3 class="depth01_item">평가플랫폼 관리</h3>';
nav +=              '<ul class="sub_menu depth02_menu">';
nav +=                '<li class="depth02"><a href=".html" class="depth02_item">- 평가플랫폼 관리</a></li>';
nav +=                '<li class="depth02"><a href=".html" class="depth02_item">- 평가플랫폼 업로드</a></li>';
nav +=              '</ul>';
nav +=            '</li>';
nav +=            '<li class="depth01">';
nav +=              '<h3 class="depth01_item">산출물 관리</h3>';
nav +=              '<ul class="sub_menu depth02_menu">';
nav +=                '<li class="depth02"><a href=".html" class="depth02_item">- 산출물 목록</a></li>';
nav +=                '<li class="depth02"><a href=".html" class="depth02_item">- 산출물 등록</a></li>';
nav +=              '</ul>';
nav +=            '</li>';
nav +=            '<li class="depth01">';
nav +=              '<h3 class="depth01_item">운영자 관리</h3>';
nav +=              '<ul class="sub_menu depth02_menu">';
nav +=                '<li class="depth02"><a href=".html" class="depth02_item">- 운영자 목록</a></li>';
nav +=                '<li class="depth02"><a href=".html" class="depth02_item">- 운영자 등록</a></li>';
nav +=              '</ul>';
nav +=            '</li>';
nav +=          '</ul>';
nav +=        '</div>';
// nav +=      '</nav>';


$(document).ready(function () {
  $("body .wrapper .nav").html(nav);	
});





// gnb_top$("body > .wrapper")
var gnb_top_login = "";
gnb_top_login += 		      '<div class="area_logo">'
gnb_top_login += 			      '<a href="/">'
gnb_top_login += 			    	  '<img src="../img/logo/LOGO_dep.png" alt="국립농산물품질관리원 로고">'
gnb_top_login += 			      '</a>'
gnb_top_login += 		      '</div>'


$(document).ready(function () {
  $("body .login_page .gnb_top_login").html(gnb_top_login);	
});
