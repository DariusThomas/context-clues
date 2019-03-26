$(document).ready(function(){
    
var names = ['Adriana','Grace','Faith','Aliza','Marcelle'];
var objects =['rubber duck','toothbrush','stop sign','cinder block','glow stick','shoe lace','pool stick','mop','tire swing','newspaper','truck','tweezers','television','fork','lamp','toaster','knife','ice cube tray','carrot','usb drive']
var location =['study','kitchen','ballroom','conservatory','library','hall','dining room','cellar','backyard','bathroom']
loadAccusations();
function accusation(){
    var randomName= names[Math.floor(Math.random()*names.length)]
    var randomPlace=location[Math.floor(Math.random()*location.length)]
    var randomgThing=objects[Math.floor(Math.random()*objects.length)]
    function accAlert(){
        alert('I accuse '+ randomName +', with the '+randomgThing + ' in the '+randomPlace)
    }
    return accAlert
}
function loadAccusations(){
        for(var accusationNum = 1; accusationNum<= 100; accusationNum++){
            var $accHeading = $('<h3></h3>');
            $accHeading.text('Accusation '+accusationNum);
            $accHeading.attr('id',''+accusationNum);
            var alertText = accusation()
            $accHeading.click(alertText)
            $('body').append($accHeading);
        }
    }
})