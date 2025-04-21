export const formula = (ind : number) : number => {
    switch ( ind) {
        case 0 : 
            return 300;
        case 1 : 
            return 150;
        case 2 : 
            return 0;
        case 3 : 
            return -150;
        case 4 : 
            return -300;
        default : 
            return 0;
    }
}

export const odd = ( ind : number) => {
    if(ind % 2 == 0) {
        return 4;
    }
    return -4;
}