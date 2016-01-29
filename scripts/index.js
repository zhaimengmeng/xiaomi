window.onload=function(){
	var picture=document.getElementsByClassName('picture');
		 uipages=document.getElementsByClassName('ui-page-item'),
	 	left=document.getElementById('leftpic'),
		right=document.getElementById('rightpic'),
		categoryhost=document.getElementById('categoryhost');
		var circles=uipages[0],
	 	banner=picture[0],
	 	index=0,
	 	kaiguan=true,
	 	timepic=2000;
	 	uipages[0].style.background='white';
	 var fn=function(){
			circles.style.background='#A09C9C';
			uipages[index].style.background='white';
			circles=uipages[index];

			banner.style.display='none';
			picture[index].style.display='block';
			banner=picture[index];
			index+=1;
			if(index==picture.length){
				index=0;
			}
	};
 var timerId=setInterval(fn,timepic);

	for(var i=0;i<uipages.length;i++){
		uipages[i].count=i;
		uipages[i].onclick=function(){
			clearInterval(timerId);
			kaiguan=false;
			banner.style.display='none';
			picture[this.count].style.display='block';
			banner=picture[this.count];
			
			circles.style.background='#A09C9C';
			this.style.background='white';
			circles=this;
			return false;	
		}
	}
	categoryhost.onmouseover=function(){
		clearInterval(timerId);
	}
	categoryhost.onmouseout=function(){
		if(kaiguan){
			clearInterval(timerId);
			timerId=setInterval(fn,timepic);
		}
		
	}
	left.onclick=function(){
		clearInterval(timerId);
		kaiguan=false;
		index--;
		 if(index<0){
		 	index=picture.length-1;
		 }
		banner.style.display='none';
		picture[index].style.display='block';
		banner=picture[index];
		circles.style.background='#A09C9C';
		uipages[index].style.background='white';
		circles=uipages[index];
		clearInterval(timerId);
	}
	right.onclick=function(){
		clearInterval(timerId);
		kaiguan=false;
		fn();
	}

	
};