function Changer1(bimg) {
    var body=document.getElementsByTagName("body");
    body[0].style.backgroundImage="url("+bimg+")";
}
var Links = {
    setColor: function(color){
      $('body').css('color', color);
    }
}
function Changer2(self){
    if(self.value == 'orange'){
      Links.setColor('')   
      self.value = 'blue';
    } else {
      Links.setColor('blue');
      self.value = 'orange';
    } 
  }