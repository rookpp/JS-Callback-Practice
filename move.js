function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    function moveWithArrowKeys(x, y, callback) {
        let direction = null;
        
        document.addEventListener('keydown', function (event) {
            if (event.repeat) return;

            if (event.key === 'w') {
                direction = '1'
            }
            if (event.key === 'a') {
                direction = '2'
            }
            if (event.key === 's') {
                direction = '3'
            }
            if (event.key === 'd') {
                direction = '4'
            }
            callback(direction)


        })
        document.addEventListener('keyup', function (event) {
            direction = null;
            character.src = 'assets/green-character/static.gif'
            callback(direction)
        })
        function movecharacter() {
            if (direction === '1') {
                y = y + 1
            }
            if (direction === '2') {
                x = x - 1
            }
            if (direction === '3') {
                y = y - 1
            }
            if (direction === '4') {
                x = x + 1
            }
            character.style.bottom = y + 'px'
            character.style.left = x + 'px'
        }




        setInterval(movecharacter, 1)
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }

}