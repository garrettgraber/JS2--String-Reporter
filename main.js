

var input_info = window.prompt("Enter a Word", "");

var input_info_length = input_info.length;

var input_info_third = input_info.charAt(2);

var input_info_lowercase = input_info.toLowerCase();

var input_info_uppercase = input_info.toUpperCase();

var input_info_sentence = "This is the word " + input_info + " in a sentence."

var input_info_subword = input_info.slice(1,4);


var line1 = "You entered: " + input_info + '\n';
var line2 = "There are " + input_info_length + " characters in the word.\n";
var line3 = "The third character is " + "'" + input_info_third + "'\n";
var line4 = "Lowercase: " + input_info_lowercase + '\n';
var line5 = "Uppercase: " + input_info_uppercase + '\n';
var line6 = "Example: " + input_info_sentence + '\n';
var line7 = "Subword: " + input_info_subword + '\n';
var total_alert_output = line1 + line2 + line3 + line4 + line5 + line6 + line7;

alert(total_alert_output);