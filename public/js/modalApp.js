let myApp = {
	codeExpLinks: document.getElementsByClassName('codeExp'),
	modal: document.getElementsByClassName('modal'),
	h4tag: document.getElementsByTagName('h4'),
	holder: document.getElementById('holder'),
	ajaxContent: "<div class='cp_embed_wrapper'><iframe id='cp_embed_NAoxPP' src='https://codepen.io/catkim/embed/NAoxPP?height=500&amp;theme-id=0&amp;slug-hash=NAoxPP&amp;default-tab=result&amp;user=catkim&amp;embed-version=2&amp;pen-title=getJSON%20data' scrolling='no' frameborder='0' height='500' allowtransparency='true' allowfullscreen='true' name='CodePen Embed' title='getJSON data' class='cp_embed_iframe ' style='width: 100%; overflow: hidden;'></iframe></div>",
	dataVisContent:"<div class='cp_embed_wrapper'><iframe id='cp_embed_OXgOjR' src='https://codepen.io/catkim/embed/OXgOjR?height=600&amp;theme-id=0&amp;slug-hash=OXgOjR&amp;default-tab=result&amp;user=catkim&amp;embed-version=2&amp;pen-title=Chart%20practice%20with%20Flot.js%20and%20jQuery.js'  scrolling='no' frameborder='0' height='600' allowtransparency='true' allowfullscreen='true' name='CodePen Embed' title='Chart practice with Flot.js and jQuery.js' class='cp_embed_iframe ' style='width: 100%; overflow: hidden;'></iframe></div>",
	formContent:"<iframe  src='html5Form/Ckim_form.html' scrolling='no' frameborder='0' height='500' allowtransparency='true' allowfullscreen='true' name='HTML5 Form' title='HTML5 Form' style='width: 100%; overflow: hidden;'></iframe>",
	popupFn: function (id, e) {
  	var whichModal = id.getAttribute("id");
  	switch(whichModal){
  		case "ajax":
  		myApp.modal[0].style.display = 'block'
  		myApp.h4tag[0].className = "ajax"
  		myApp.holder.innerHTML = myApp.ajaxContent;
  		break;

  		case "form":
  		myApp.modal[0].style.display = 'block';
  		myApp.h4tag[0].className = "form";
  		myApp.holder.innerHTML = myApp.formContent;
  		break;

  		case "flot":
  		myApp.modal[0].style.display = 'block';
  		myApp.h4tag[0].className = "flot";
  		myApp.holder.innerHTML = myApp.dataVisContent;
  		break;
  	}
	},
	close: document.getElementsByClassName("close")[0],
	closeIt: function() {
		myApp.close[0].onclick = function(){
			myApp.modal[0].style.display = 'none';
		}
	}
}

var modalLinks = [].slice.call(myApp.codeExpLinks);
    modalLinks.forEach(link => link.onclick = function(e){
      myApp.popupFn(this, e)
      return false;
    });

function closePopUp(event){
	if (event.target === myApp.modal[0] ||event.target === myApp.close) {
			myApp.modal[0].style.display = "none";
	}
}
var closeSpan = document.getElementsByClassName("close")[0];
closeSpan.addEventListener('click', closePopUp);
closeSpan.addEventListener('touchstart', closePopUp);
