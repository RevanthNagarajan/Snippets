function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){
    this.element = element; 
    this.next = null; 
  }; 

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

this.isempty=function(){
    if(this.head===null){
        return true;
    }else{
        return false;
    }
}
  this.add = function(element){
    // Only change code below this line
    let newNode= new Node(element);
    if(this.isempty){
        head=newNode;
        length++;
    }else{
        let current=this.head;
        while(current.next!==null){
            current++;
        }
        current.next=newNode;
        length++;
    }

    // Only change code above this line
  };
}