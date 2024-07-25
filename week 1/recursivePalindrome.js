function recursiveString(str){
    if(str.length === 0){
        return true;
    }

    if(str[0] !== str[str.length-1]){
        return false
    }

    return recursiveString(str.slice(1, -1))
}

console.log(recursiveString("malayalam"));