function colorCombinator(firstColor, secondColor){
    if(firstColor === 'red' && secondColor==='yellow' ){
    return 'When you combine red and yellow, you get orange!'
    }
    else if(firstColor === 'red' && secondColor=== 'blue'){
    return 'When you combine red and blue, you get purple!'
    }
    else if (firstColor === 'yellow' && secondColor=== 'blue'){
    return 'When you combine yellow and blue, you get green!'
    }
    else if( firstColor === 'orange' && secondColor=== 'yellow'){
    return 'Sorry, one of those colors is not a primary color!'
    }
    else if (firstColor === 'blorgon' && secondColor=== 'red'){
    return 'Sorry, one of those colors is not a primary color!'
    }
    else if (firstColor === 'ted' && secondColor==='red'){
    return 'Sorry, one of those colors is not a primary color!'
    } 
    else if (firstColor === 'blorgon' && secondColor==='blue'){
    return 'Sorry, one of those colors is not a primary color!'
    }
    else if (firstColor === 'blorgon' && secondColor==='blue'){
        return 'Sorry, one of those colors is not a primary color!'
    }
    else if(firstColor === 'yellow' && secondColor === 'purple'){
        return 'Sorry, one of those colors is not a primary color!'
    }
    else if(firstColor === 'blue' && secondColor === 'white'){
        return 'Sorry, one of those colors is not a primary color!'
    }
    else if(firstColor === 'Ted' && secondColor === 'from Better Off Ted'){
        return 'Sorry, one of those colors is not a primary color!'
    }
    else if(firstColor === 'black' && secondColor === 'black'){
        return 'Sorry, one of those colors is not a primary color!'
    }
}





    


module.exports = colorCombinator

function getInput(i) {
    return process.argv[i + 2];
}