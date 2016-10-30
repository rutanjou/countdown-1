(function(){
	
	var app ={

		second:130,
		intervalID: null,
		active:true,

		init:function(){
			this.listeners();
		},

		listeners:function(){
			$('#setStart').on('click',this.start.bind(this));
			$('#setReset').on('click',this.reset.bind(this));
			$('#setStop').on('click',this.stop.bind(this));
		},

		start:function(){
			this.setTime();
			this.launcherInterval();
		},

		launcherInterval:function(){
			clearInterval(this.intervalID);
			this.intervalID = setInterval(this.interval.bind(this),1000);
		},

		interval:function(){
			this.second--;
			this.updateView();

			if(this.second<1){
				clearInterval(this.intervalID);
			}

		},

		updateView:function(){
			var seconde = this.second%60;
			var minute = Math.floor(this.second/60);

			if(seconde < 10){
				seconde = "0" + seconde;
			}

			if(minute < 10){
				minute = "0" + minute;
			}

			$('#viewMinute').html(minute);
			$('#viewSeconde').html(seconde);
		},

		setTime:function(){
			var min = $('#setMinute').val();
			var sec = $('#setSeconde').val();
			this.second = parseInt(sec, 10)+parseInt(min, 10)*60;
		},


		reset:function(){
			this.start();
		},

		stop:function(){

			if(this.active === true){

				clearInterval(this.intervalID);
				this.active = false;

			}else{

				this.launcherInterval();
				this.active = true;

			}
		},

	}

	app.init();
})();