convertToSpongebobCase = (str) => {
    var output = "";

    for (var i = 0, l = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch.match('/^[a-zA-Z0-9]$/')) {
            l++;    // "Letter" counter increments by one if current charcter is alphanumeric
            
            if (l%2 != 0) {
                // odd "letter" to lowercase
                ch = ch.toLowerCase();
            } else {
                // even "letter" to UPPERCASE
                ch = ch.toUpperCase();
            }
        }

        output += ch;
    }

    return output;
}