var light,L;
var thumbnail,kira_ryuzaki,rules,headquaters,jist;
var button,timer=600;
var light_kira, L_detect;
function preload(){
	
	investigationArea=loadImage("headquaters.jpeg")
    deathNoteRules=loadImage("death note rules.jpeg")
	ryukPlay=loadImage("thumbnail.jpeg")
	kiraVsRyuzaki=loadImage("vs.jpeg")
    storyline=loadImage("jist.jpeg")
	light=loadImage("li - Copy.png")
	L=loadImage("ryu.png")
	L_music=loadSound("l's soundtrack.mp3")
	light_music=loadSound("light soundtrack.mp3")
	light_laugh=loadSound("light's laugh soundtrack.mp3")
	bg_music=loadSound("thumbnail soundtrack (1).mp3")
}

function setup(){
	createCanvas(windowWidth,windowHeight)
	background1=createSprite(width/2,height/2,width,height)
	background1.addImage("1",ryukPlay)
	button=createButton("next")
	button.position(width/2+200,height-50)
	background1.scale=0.9
	bg_music.loop()
	button.mousePressed(()=>{
		background1.addImage("2",kiraVsRyuzaki)
		background1.changeImage("2")
		button.hide()
	    jist=createSprite(width/2,height/2+10)
		jist.addImage(storyline)
		console.log(timer)
		jist.scale=0.5

		
		button1=createButton("next")
	button1.position(width/2+200,height-50)
	button1.mousePressed(()=>{
		background1.addImage("3",deathNoteRules)
		background1.changeImage("3")
		button1.hide()
		button2=createButton("next")
	button2.position(width/2+200,height-50)
	button2.mousePressed(()=>{
		background1.addImage("4",investigationArea)
		background1.changeImage("4")
		background1.scale=3
		button2.hide()

		light_kira=createSprite(1100,700,10 ,10);
		light_kira.addImage(light);
		light_kira.scale=0.8;
		

		L_detect=createSprite(400,700,10,10);
		L_detect.addImage(L);
		L_detect.scale=3;
		bg_music.stop()
	})	
	})
	})
}

function draw(){
	background("black")
	timer=timer-1
	if(timer<=0){
		jist.destroy()
		timer=0
	}
	drawSprites()
}