var loopCard = [];
var count = 1;

function newCard(){

 var card = $("#myCards").append(` <li class='eachCard'><div class="col-sm-4">
        <div class="panel panel-info">
          <div class="panel-heading">Note</div>
           <div class="note">
             <strong>
               <BR/>
                 <TEXTAREA style="WIDTH: 259px; HEIGHT: 30px" rows="3" wrap="virtual" cols=48></TEXTAREA><BR></strong><BR/>        
                 <TEXTAREA style="WIDTH: 259px; HEIGHT: 182px" id="output" name="output" rows="9" wrap="virtual" cols=48></TEXTAREA>
               <BR>
           </div>
         </div>
       </div></li>`);

 loopCard.push(card);
 document.getElementById('numberOfNotes').innerHTML = loopCard.length;
}


function removeCard(){
 $('button').click(function() {
   $('li').remove('.eachCard');
   document.getElementById('numberOfNotes').innerHTML = count--;
 })
}