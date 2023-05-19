function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    function moveWithArrowKeys(left,bottom)
    {
            let x = 100;
let y = 250;
let direction = null;
let vel = 4;
document.addEventListener('keydown',function(event)
{
    if(event.repeat) return;

    if(event.key === 'w')
    {
        character.src='assets/green-character/north.gif'
        direction = '1'
    }
    if(event.key === 'a')
    {
        character.src='assets/green-character/west.gif'
        direction = '2'
    }
    if(event.key === 's')
    {
        character.src='assets/green-character/south.gif'
        direction = '3'
    }
    if(event.key === 'd')
    {
        character.src='assets/green-character/east.gif'
        direction = '4'
    }

    
    console.log(direction)

})
document.addEventListener('keyup',function(event){
    direction=null;
    character.src='assets/green-character/static.gif'
})
function movecharacter(){
    if(direction === '1'){
        
        y=y+1
    }
    if(direction === '2')
    {
        x=x-1
    }
    if(direction==='3')
    {
        y=y-1
    }
    if(direction==='4')
    {
        x=x+1
    }
    character.style.bottom = y+'px'
    character.style.left = x+'px'
}

setInterval(movecharacter, 1)
    }

    return {
        to: moveToCoordinates,
        moveWithArrowKeys:moveWithArrowKeys
    }
    
}