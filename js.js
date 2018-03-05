// JavaScript Document

//title 
var aLi= document.getElementsByClassName('headerList');
	var aUl= document.getElementsByClassName('titleList');
	for(var i=0; i<aLi.length;i++){
		aLi[i].index = i;
		aLi[i].onmouseover = function(){
			aUl[this.index].style.display = 'block';
			var aUlLi = this.getElementsByTagName('li');
			for(var j=0; j<aUlLi.length;j++){
				aUlLi[j].onmouseover = function(){
					this.style.backgroundColor = '#ccc';
				}
				aUlLi[j].onmouseout = function(){
					this.style.backgroundColor = '#fff';
				}
			}
		}
		aLi[i].onmouseout = function(){
			aUl[this.index].style.display = 'none';	
		}	
	}
//===============================================================
//picshow
	var oPic = document.getElementById('picshow');
	var aA = oPic.getElementsByTagName('a');
	var oImg = oPic.getElementsByTagName('img')[0];
	var arrImg = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg']
	var num = 0;
	var timer = null;
	function fnTab(){
		timer = setInterval(function(){
			for(var i=0;i<aA.length; i++)
				aA[i].className='';
			aA[num].className='picActive';	
			oImg.src=arrImg[num];
			num++;
			num %= arrImg.length;
		},1000);
	}
	fnTab();
	oPic.onmouseover = function(){
		clearInterval(timer);
	}
	oPic.onmouseout = function(){
		fnTab();
	}
	for(i=0;i<aA.length;i++){

		aA[i].index = i;
		aA[i].onclick = function(){
			oImg.src = arrImg[this.index];
			for(i=0;i<arrImg.length;i++)
				aA[i].className='';
			this.className='picActive';	
		}
	}