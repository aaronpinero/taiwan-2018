$(document).ready(function(){
  // apply inview event handler to images for lazy load
  $("img[data-src]").one("inview",function(event,isInView){
    if (isInView) {
      let self = $(this);
      let src = self.attr("data-src");
      let img = new Image();
      img.onload = function(){
        console.log(self);
        self.after('<img style="opacity:0;" src="'+src+'">');
        self.next().animate({opacity:1},1000);
      }
      img.src = src;
    }
  });
});