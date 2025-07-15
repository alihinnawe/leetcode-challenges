/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
        const regex = /^(?=.*[aeiouAEIOU])(?=.*[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ])[0-9A-Za-z]{3,}$/;

    return regex.test(word);
};