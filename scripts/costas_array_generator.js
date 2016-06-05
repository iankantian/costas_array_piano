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