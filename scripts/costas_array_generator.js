/**
 * Created by joshuabrown on 6/5/16.
 */
function prime_checker ( p ){
    if( p < 0 ) return false;
    if( p > Number.MAX_SAFE_INTEGER ) return new Error('number is too large for JavaScript to safely evaluate');
    if( p % 1 !== 0 ) return false;
    for(var i = 2; i < p; i++ ) {
        if (p % i === 0) return false;
    }
    return true;
}

function costas_array ( p ){
    var result = [];
    var element;
    if( prime_checker( p )){
        result.push( 1 );
        for( var i = 1; i < p; i++ ){
            element = result[ i-1 ];
            element *= 3;
            while( element > ( p ) ){
                element -= p;
            }
            result.push( element );
        }
    }
    else{
        console.log( 'bad number:' + p );
    }
    return result;
}

// generate array of the differences between the adjoining elements
function array_diff_vector( array ){
    var result = [];
    for( var i = 0; i < array.length; i++ ){
        if( i === 0 ){
            result.push( 0 );
            continue;
        }
        result.push( array[ i ] - array[ i - 1 ]  );
    }
    return result;
}

// find the set of values in an array, if repeated they only are listed once
function set_of_values( array ){
    var set = [];
    var unique = true;
    for( var i = 0; i < array.length; i++ ){
        if( i === 0 ){ // first one, of course it's unique
            set.push( array[ 0 ] );
            continue;
        }
        for( var j = 0; j < set.length; j++ ){
            if( array[ i ] === set[ j ] ) unique = false;
        }
        if( unique === true ){
            set.push( array[ i ] );
        }
        unique = true;
    }
    return set;
}

function costas_rand_array ( p ){
    var result = [];
    var used_diffs_array = [];
    var element;
    if ( prime_checker( p ) ){
        for( var i = 1; i < p; i++ ){
            result.push( parseInt( Math.random() * (p)) );
        }
    }
    else{
        console.log( 'bad number:' + p );
    }
    return result;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

