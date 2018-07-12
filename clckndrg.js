function init(){

			// var BB = canvas.getBoundingClientRect();
   //  		var offsetX = BB.left;
   //  		var offsetY = BB.top;
   			// var shapeArr = [];

			var stage = new createjs.Stage("canvas");

			stage.enableMouseOver();

			var circle1 = new createjs.Shape();
			circle1.graphics.beginFill("tomato").drawCircle(0,0,20);
			circle1.x=30;
			circle1.y=30;

			var circle2 = new createjs.Shape();
			circle2.graphics.beginFill("MediumSeaGreen").drawCircle(0,0,20);
			circle2.x=30;
			circle2.y=85;

			var pentagon = new createjs.Shape();
			pentagon.graphics.beginFill("slateblue").drawPolyStar(0, 0, 20, 5, 0, 90);
			pentagon.x = 30;
			pentagon.y = 135;

			var rectangle = new createjs.Shape();
			rectangle.graphics.beginFill("orange").drawRect(-10,-10,20,50);
			rectangle.x=30;
			rectangle.y=180;

			var star = new createjs.Shape();
			star.graphics.beginFill("maroon").drawPolyStar(0,0,20,5,0.5,-90);
			star.x=30;
			star.y=255;

			var block = new createjs.Shape();
			block.graphics.beginFill("black").drawRect(-10,-10,25,25);
			block.x= 30;
			block.y= 300;

			var text = new createjs.Text("Undo","20px Arial","black");
			text.x=20;
			text.y=340;
			var hit = new createjs.Shape(); //for hit area in text
			hit.graphics.beginFill("#000").drawRect(0, 0, text.getMeasuredWidth(), text.getMeasuredHeight());
			text.hitArea = hit;
			

			var dragger = new createjs.Container();
			// dragger.x = dragger.y = 0;    //to set dragger area
			// dragger.addChild(circle1,circle2,pentagon, rectangle,star);
			// stage.addChild(dragger);
			stage.addChild(circle1,circle2,pentagon,rectangle,star,block,text);
			stage.update();
			
			var trans = false;
	
			stage.on("mousedown", onClick);
			// dragger.on("pressup" , up);
			stage.on("mouseover", mouseOver);
			stage.on("mouseout", mouseOut);
			stage.on("dblclick", inDblClick);

			stage.on("contextmenu", function rightClick() {console.log("yes");});

			// function rightClick(){
			// 	console.log("yess");

			// }


			// function rightClick(e){
			// 	// dragger.removeChild(e.target.id);

			// 	console.log("ok");

			// }

			function inDblClick(e){

				if(e.target.id==1){
					var circle = new createjs.Shape();
					circle.graphics.beginFill("tomato").drawCircle(0,0,40);
					circle.x = 150;
					circle.y = 100;
					dragger.addChild(circle);
					
					// shapeArr.push(circle);
					// dragger.removeChild(circle);     //remove child on right click	

				}
				else if(e.target.id==2){
					var circle2 = new createjs.Shape();
					circle2.graphics.beginFill("MediumSeaGreen").drawCircle(0,0,40);
					circle2.x=320;
					circle2.y=120;
					dragger.addChild(circle2);
					
					// shapeArr.push(circle2);
				}
				else if(e.target.id==3){
					var pentagon = new createjs.Shape();
					pentagon.graphics.beginFill("slateblue").drawPolyStar(0, 0, 40, 5, 0, 90);
					pentagon.x = 170;
					pentagon.y = 320;
					dragger.addChild(pentagon);

					// shapeArr.push(pentagon);
					
				}
				else if(e.target.id==4){
					var rect = new createjs.Shape();
					rect.graphics.beginFill("orange").drawRect(-10,-10,30,100);
					rect.x=520;
					rect.y=270;
					dragger.addChild(rect);

					// shapeArr.push(rect);
				}
				else if(e.target.id==5){
					var star = new createjs.Shape();
					star.graphics.beginFill("maroon").drawPolyStar(0,0,50,5,0.5,-90);
					star.x=650;
					star.y=150;
					dragger.addChild(star);

					// shapeArr.push(star);
				}
				else if(e.target.id==6){
					var block = new createjs.Shape();
					block.graphics.beginFill("black").drawRect(-10,-10,30,30);
					block.x= 700;
					block.y= 300;
					dragger.addChild(block);

					// shapeArr.push(block);
				}
				else if(e.target.id==7){
					// shapeArr.pop();
					// console.log("ok");
					// stage.removeChild(shapeArr);
					dragger.children.pop();

				}
				stage.addChild(dragger);
				// console.log(e.target.id);
				// console.log(shapeArr);
				// console.log(stage);
				// console.log(dragger.children.length); //do pop using this
				// console.log(dragger.children.pop());
				// console.log(dragger);
				stage.update();
			}
			
			function onMove(e){
				e.target.x = e.stageX;
				e.target.y = e.stageY;
				stage.update();
				
			}

			function onClick(e){
				
				// e.target.shadow = new createjs.Shadow("grey",5,5,2);
				
				// polystar.shadow = new createjs.Shadow("grey",5,5,5);
				// console.log("click");
				dragger.on("pressmove", onMove);
				stage.update();
				
			}

			// function up(e){
			// 	// e.target.shadow = new createjs.Shadow("grey",0,0,0);
					
				
			// 	// console.log();
			// 	stage.update();
			// }

			function mouseOver(e){
				e.target.alpha = 0.5;
				// console.log("hello");
				stage.update();
			}

			function mouseOut(e){
				e.target.alpha = 1;
				stage.update();
			}
				
	}