# Costas Array Audio Demonstration

The intent is to play an audio interpretation of Costas Arrays, which may be the world's ugliest form of musical expression.

Functions: 

Generate a Costas array of prime number N dimensions on each side.

On array being ready, draw the array in a SVG canvas.

When the canvas of the array is finished, play the notes to represent the array.  As Costas arrays are single value per column, this could be a single finger on the piano to play.

To play the notes, an audio resource will be loaded in the page, and it's audio tag will be manipulated by the script to be a piano.

The audio resource will be 88 pure tones, 1 second of each, in an ogg audio file.