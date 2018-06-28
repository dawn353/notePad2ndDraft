
function Newnote (title, textEdit) {
  return { 
   title: title,
   textEdit: textEdit
  }
}

// test button 
Newnote.prototype.createBtn = function(){
  var input = document.createElement('input');
  input.value = 'Save';
  input.type = 'button';
}

// function newCard() {
//   var newCard = new Newnote();
  
//   // create a node that creates a List item
//   var liNode = document.createElement('li');
//   // create a node that holds all of the card HTML;
//   var htmlCard = document.createElement('')
  
//   node.appendChild(htmlCard);
//   // newCard.createBtn(document.body); 
                                  
// }

function newCard(){
  $("body").append(` <div class="col-sm-4"> 
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
        </div>`);
}