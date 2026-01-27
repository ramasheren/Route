/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common=null
    for (let i=0; i<strs.length; i++){
        let local=-1
        for(let j=0; j<strs[0].length; j++){
            if(strs[i][j]!=strs[0][j]){
                break;
            }else{
                local=j;
            }
        }
        if(common==null || local<common) common=local
    }
    if (common==-1) return ""
    return strs[0].slice(0,common+1)
};