class imageSlice {
    constructor(img, x, y, w, h){
      this.img = img,
      this.x = x,
      this.y = y,
      this.w = w,
      this.h = h,
      this.offsetX = 0,
      this.offsetY = 0,
      this.hover = false,
      this.dragging = false,
      this.isDraggable = true,
      this.rollover = false;
      
    }
    
    
    over(){
      if (imageIsBeingMoved){
        rectMode(CORNER);     
        if (mouseX > this.x && 
            mouseX < this.x + this.w && 
            mouseY > this.y && 
            mouseY < this.y + this.h) {
            this.rollover = true;
        } else {
          this.rollover = false;
        }
      } else {
        imageIsBeingMoved = false;
      } 
    }
    
    update(){
      if (this.isDraggable){
        if (imageIsBeingMoved){
          if (this.dragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
          }
        } else {
        imageIsBeingMoved = false;
      }   
      }
    }
    
    show(){
      if (imageIsBeingMoved){
        if (this.dragging){
          //image(startImage, 0, 0);
          image(this.img, this.x, this.y, this.w, this.h);
        } else if (this.rollover){
          push();
          fill(0, 255, 0, 10);
          image(this.img, this.x, this.y, this.w, this.h);
          rect(this.x, this.y, this.w, this.h);
        } 
      } else {
        imageIsBeingMoved = false;
      }     
    }
    
    pressed(){    
      if (imageIsBeingMoved){
        if (mouseX > this.x && 
            mouseX < this.x + this.w && 
            mouseY > this.y && 
            mouseY < this.y + this.h) {
          this.dragging = true;
          this.offsetX = this.x - mouseX;
          this.offsetY = this.y - mouseY;
          
          if (this.isDraggable){
            push();
            fill(backgroundColor);
            stroke(backgroundColor);
            strokeWeight(2);
            rect(this.x, this.y, this.w, this.h);
            startImage = get();
            pop();
          }     
        }
      } else {
        imageIsBeingMoved = false;
      } 
    }
    
    released(){
      if (imageIsBeingMoved){
        this.dragging = false;
        this.isDraggable = false;
        imageIsBeingMoved = false;
        activeCutOut = [];
      } else {
        imageIsBeingMoved = false;
        activeCutOut = [];
      }
    }
  }