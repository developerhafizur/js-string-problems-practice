const lyrics = 'tumi bondhu kala Pakhi ami jeno ki.kala kala sada sada rong jomese sada kala';
const searchSting = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchSting);
const searchStingLower = searchSting.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStingLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchSting.toLowerCase());



// console.log(doesExist);
// console.log(doesExistOneLine);

//-------------------------------------
//indexOf
console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('tumi'));
// 
if(lyrics.indexOf('sada') !== -1){
    console.log('exists inside the string');
}
else{
    console.log('cannot find it');
}

//startsWith
console.log(lyrics.startsWith('tumi'));


//endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith('.pdf'));





