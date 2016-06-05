/**
 * Created by joshuabrown on 6/5/16.
 */
/*
 * make the notes of piano with math instead of typing the whole array
 * any piano note (n) frequency can be found with the equation
 * f(n) = 2^((n-19)/12) * 440 Hz
 * https://en.wikipedia.org/wiki/Piano_key_frequencies
 */

function piano_array() {
    var result = [];
    function nth_piano_key_frequency (n) {
        var power = ( n - 49 ) / 12;
        return ( Math.pow(2, power) * 440 );
    }
    function array_pusher() {
        for (var i = 0; i < 88; i++) {
            result.push( nth_piano_key_frequency(i) );
        }
        return result;
    }
    array_pusher();
    return result;
}
