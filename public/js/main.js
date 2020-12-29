let pre = prompt("entre ton prenom"); 

//1. 
pre2 = pre.substr(0,1);
console.log(pre2);

//2.
pre3 = pre.substr(pre.length-1, 1);
console.log(pre3);

//3. 
pre4 = pre.substr(1, pre.length+1);
console.log(pre4);

//4. 
//pre5 = pre.charAt(1).toLocaleUpperCase(); 

//pre5 = pre.charAt(1).replace().toLocaleUpperCase(); 


//pre5 = pre.charAt(1).toUpperCase() + pre.slice(1);

//pre5 = pre.replace(/([a-z])/gi, function(x) { return x.toUpperCase(); }); 

pre5 = pre.charAt(0) + pre.charAt(1).toUpperCase() + pre.slice(2); // 1 slice


//console.log(pre.slice(pre.charAt(1))); 
//pre5 = pre.replace( preA , pre.charAt(1).toLocaleUpperCase );

console.log(pre5);

//5. 

let lettre = prompt("quel lettre veux tu en maj? "); 

pre6 = pre.replace(lettre, lettre.toUpperCase());

console.log(pre6);

//6. 
pre7 = pre.toLowerCase();
pre7 = pre.charAt(0).toUpperCase() + pre.slice(1);


console.log(pre7);

// 7. 

pre8 = Math.floor(Math.random() * pre.length + 1 ); 

pre9 = pre.replace(pre.charAt(pre8), "");
console.log(pre9); 