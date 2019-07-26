/*
*
*  Given a valid (IPv4) IP address, return a defanged version of that IP address.
*  A defanged IP address replaces every period "." with "[.]".
*/

/*
*  Input: address = "1.1.1.1"
*  Output: "1[.]1[.]1[.]1"
*/


/*
* Using RegExp
*/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    if(!address) return;
    return address.replace(/\./g,'[.]')
};
