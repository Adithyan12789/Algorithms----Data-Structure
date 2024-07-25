function reverseStr(str){
    if(str <= 1){
        return str;
    }

    return str[str.length-1] + reverseStr(str.slice(0, -1))
}

console.log(reverseStr("malaya"));