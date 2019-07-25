window.onload = () => {

let myPronoun = ['the','our'];
let myAdj = ['great', 'big' ];
let myNoun = ['jogger','racoon'];

let arr = []

for (i=0; i<myPronoun.length; i++) {
    for (x=0; x<myAdj.length; x++) {
        for (j=0; j<myNoun.length; j++) {
            arr.push( myPronoun[i] + myAdj[x] + myNoun[j] + ".com  ")
        }
    }
}



document.getElementById("main").innerHTML = arr

}