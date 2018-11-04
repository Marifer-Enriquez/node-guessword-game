function Letter(alpha) {
    this.alpha = alpha;
    this.letguessed = false;
   
    this.display = function (){
       
      if (!this.letguessed){
            return "_";
        }
        else {
            return this.alpha;
        }
  
    }
this.check = function (guess){
    if (guess === this.alpha){
        this.letguessed = true; 
        return true;
    }
    else{
        return false;
    }

}
}

module.exports = Letter; 