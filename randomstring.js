// Create a random 16 character string
var randomCharacterString = function( count )
{
    var characters = '0123456789!#$%&-_+ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var stringLength = count ? count : 16;
    var randomString = '';
    for( var i=0; i < stringLength; i++ )
    {
        var randomNumber = Math.floor( Math.random() * characters.length );
        randomString += characters.substring( randomNumber,randomNumber+1 );
    }
    
    return randomString;
};