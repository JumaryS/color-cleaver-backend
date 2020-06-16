
function colorDeconstructor(color1){
    if (color1 === "orange"){
        return "Orange is made by combining red and yellow!"
    }
    else if(color1 === "purple"){
    return "Purple is made by combining red and blue!"
    }
    
    else if( color1 === 'green'){
    return  "Green is made by combining blue and yellow!"
    }
    
    else if( color1 === 'yellow'){
        return  "Sorry, that's not a secondary color!"
    }
    else if( color1 === 'blorgon'){
        return  "Sorry, that's not a secondary color!"
    }
    else if (color1 === 'ted'){
        return "Sorry, that's not a secondary color!"
    }
    else if (color1 === 'black'){
        return "Sorry, that's not a secondary color!"
    }

    }


    module.exports = colorDeconstructor

function getInput(i) {
    return process.argv[i + 2];
}
