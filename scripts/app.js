/**
 * Created by joshuabrown on 6/5/16.
 */
// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator and gain node
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

// connect oscillator to gain node to speakers
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var maxFreq = 6000;
var maxVol = 0.1;

var initialFreq = 3000;
var initialVol = 0.000;

// set options for the oscillator

oscillator.type = 'sine';
oscillator.frequency.value = 0; // value in hertz
oscillator.start();

oscillator.onended = function() {
    console.log('Your tone has now stopped playing!');
};

gainNode.gain.value = initialVol;

// Mouse pointer coordinates

var CurX;
var CurY;

// Get new mouse pointer coordinates when mouse is moved
// then set new gain and pitch values

//document.onmousemove = updatePage;

//function updatePage(e) {
//    KeyFlag = false;
//
//    CurX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
//    CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
//
//    oscillator.frequency.value = (CurX/WIDTH) * maxFreq;
//    gainNode.gain.value = (CurY/HEIGHT) * maxVol;
//
//    canvasDraw();
//}


// play the discordant Costas Array of 89 prime!
function play_piano(){
    gainNode.connect(audioCtx.destination);
    // millis each note plays!
    var duration = 100;
    // generate the array of piano notes.  Wrote the code because too lazy to type its result, which is:
    var piano_grand = [25.956543598746574, 27.5, 29.13523509488062, 30.86770632850775, 32.70319566257483, 34.64782887210901, 36.70809598967594, 38.890872965260115, 41.20344461410875, 43.653528929125486, 46.2493028389543, 48.999429497718666, 51.91308719749314, 55, 58.27047018976124, 61.7354126570155, 65.40639132514966, 69.29565774421802, 73.41619197935188, 77.78174593052023, 82.4068892282175, 87.30705785825097, 92.4986056779086, 97.99885899543733, 103.82617439498628, 110, 116.54094037952248, 123.47082531403103, 130.8127826502993, 138.59131548843604, 146.8323839587038, 155.56349186104046, 164.81377845643496, 174.61411571650194, 184.9972113558172, 195.99771799087463, 207.65234878997256, 220, 233.08188075904496, 246.94165062806206, 261.6255653005986, 277.1826309768721, 293.6647679174076, 311.12698372208087, 329.6275569128699, 349.2282314330039, 369.9944227116344, 391.99543598174927, 415.3046975799451, 440, 466.1637615180899, 493.8833012561241, 523.2511306011972, 554.3652619537442, 587.3295358348151, 622.2539674441618, 659.2551138257398, 698.4564628660078, 739.9888454232688, 783.9908719634985, 830.6093951598903, 880, 932.3275230361799, 987.7666025122483, 1046.5022612023945, 1108.7305239074883, 1174.6590716696303, 1244.5079348883237, 1318.5102276514797, 1396.9129257320155, 1479.9776908465376, 1567.981743926997, 1661.2187903197805, 1760, 1864.6550460723597, 1975.533205024496, 2093.004522404789, 2217.4610478149766, 2349.31814333926, 2489.0158697766474, 2637.02045530296, 2793.825851464031, 2959.955381693075, 3135.9634878539946, 3322.437580639561, 3520, 3729.3100921447194, 3951.066410048992];
    var ping_array = costas_array(89); // generate the costas array of 89 prime

    var rand_array = costas_rand_array(89); // using the non standard costas generator with rand function instead.

    // working around the lack of block scope in ES5 and below
    function play_note( i ){
        setTimeout( function(){
            oscillator.frequency.value = piano_grand[ ping_array[ i ] -1 ];
            gainNode.gain.value = maxVol;
        }, ( i * duration ) );
        // turning off the volume just before playing the other note sounds much more staccato and less mushy,
        setTimeout( function(){
            gainNode.gain.value = 0;
        }, ( i * duration ) + ( 0.75 * duration ) );
    }
    // throw it into the stack!!!!
    for( var i = 0; i < ping_array.length; i++ ){
        play_note( i );
    }

    // done with piano turn off that noise!!!!
    setTimeout( function(){
        gainNode.disconnect();
    }, ping_array.length * duration )
}

var play = document.querySelector('.play');

play.onclick = function(){
    play_piano();
};

// mute button

var mute = document.querySelector('.mute');

mute.onclick = function() {
    if(mute.getAttribute('data-muted') === 'false') {
        gainNode.disconnect(audioCtx.destination);
        mute.setAttribute('data-muted', 'true');
        mute.innerHTML = "Unmute";
    } else {
        gainNode.connect(audioCtx.destination);
        mute.setAttribute('data-muted', 'false');
        mute.innerHTML = "Mute";
    }
};