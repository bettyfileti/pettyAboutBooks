class Sticker {
    constructor(img, index, x, y){
      this.img = img,
      this.index = index,
      this.w = img.width * .25,
      this.h = img.height * .25,
      this.x = x,
      this.y = y,
      this.dragging = false,
      this.rollover = false,
      this.offsetX = 0,
      this.offsetY = 0,
      this.new = true
    }
    
    over(){
      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        this.rollover = true;
      } else {
        this.rollover = false;
      }
    }
    
    update(){
      if (this.dragging) {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
      }
    }
    
    show(){
      push();
      stroke(0);
      noFill();
      if (this.dragging) {
        stroke("white");
        if (startImage){
          image(startImage, 0, 0);
          for (let sticker of stickers){
            image(sticker.img, sticker.x, sticker.y, sticker.w, sticker.h);
          }
        }
      } else if (this.rollover) {
        stroke("white");
      } else {
        stroke("black");
      }
      image(this.img, this.x, this.y, this.w, this.h);
      ellipse(this.x + this.w / 2, this.y + this.h / 2, this.w)
      pop();
    }
    
      
     pressed() {
      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        this.dragging = true;
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
      }
    }
  
    released() {
      this.dragging = false;
      // cutting = !cutting;
      // moving = !moving;
    }
    
  }