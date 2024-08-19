let num =  Math.floor(Math.random() *100)+1;

if (num % 3==0 && num % 5 ==0){
  console.log("3と5の倍数です")
}

//変数が3の倍数の場合、"3の倍数です"と出力する
else if (num % 3==0){
  console.log("3の倍数です")
}

//変数が5の倍数の場合、”5の倍数です”と出力する
else if (num % 5==0){
  console.log("5の倍数です")
}


//それ以外の場合、変数を出力する
else {
  console.log(num)
}
