function isUpperCase(string){

    if(string === string.toUpperCase()){

        return true;

    } else {

        return false;

    }

}

function isUpperCaseIndex(string, index){
    
    if(string.charAt(index) === string.charAt(index).toUpperCase()){

        return true;

    } else {

        return false;

    }

}