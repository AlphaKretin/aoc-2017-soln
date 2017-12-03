let input = 361527;

let arr = [];

for (let i = 0; i < input; i++) {
	arr.push(i + 1);
}

let spiralMatrix = (x, y, step, count) => { //https://stackoverflow.com/a/46852039
    let distance = 0;
    let range = 1;
    let direction = 'up';

    for ( let i = 0; i < count; i++ ) {
        console.log('x: '+x+', y: '+y);
        distance++;
        switch ( direction ) {
            case 'up':
                y += step;
                if ( distance >= range ) {
                    direction = 'right';
                    distance = 0;
                }
                break;
            case 'right':
                x += step;
                if ( distance >= range ) {
                    direction = 'bottom';
                    distance = 0;
                    range += 1;
                }
                break;
            case 'bottom':
                y -= step;
                if ( distance >= range ) {
                    direction = 'left';
                    distance = 0;
                }
                break;
            case 'left':
                x -= step;
                if ( distance >= range ) {
                    direction = 'up';
                    distance = 0;
                    range += 1;
                }
                break;
            default:
                break;
        }
    }
}

spiralMatrix(0, 0, 1, input); //answer is x + y from final output