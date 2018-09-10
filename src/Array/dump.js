function dump(array, level) {

    var output = "";

    if (!level)
        level = 0;

    var text = "";

    for (var i = 0; i < level + 1; i++)
        text += "  ";

    if (typeof(array) == 'object') {

        for (var item in array) {

            var value = array[item];

            if (typeof(value) == 'object') {
            
                output += text + "'" + item + "'\n";
                output += dump(value, level + 1);
                
                
            } else {
                output += text + "'" + item + "' => \"" + value + "\"\n";
                
            }
            
        }
        
    } else {
    
        output = "(" + typeof(array) + ") => \n" + array;
        
    }
    
    return output;
    
}