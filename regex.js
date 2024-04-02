function solution(babbling) {
    var answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;

    babbling.forEach((word) => {
        if (regex.test(word)) answer++;
    });

    return answer;
}

function solution(babbling) {
    // return babbling.filter(elem => [...new Set(elem.match(/(aya|ye|woo|ma)/g))]?.join('') === elem ).length
    // return babbling.filter(el => el.match(/(aya|ye|woo|ma)/g)?.filter((_, i, arr) => arr[i] !== arr[i+1])?.join('') === el).length
    let answer = 0;
    for (let i = 0; i < babbling.length; i++) {
        const word = babbling[i];
        const matchArr = word.match(/(aya|ye|woo|ma)/g);
        const joinStr = matchArr?.join('');

        let continousMatch = false;
        for (let j = 0; j < matchArr?.length - 1; j++) {
            if (matchArr[j] === matchArr[j + 1]) {
                continousMatch = true;
                break;
            }
        }
        if (!continousMatch && word === joinStr) answer++;
        // console.log(word, matchArr)
    }
    return answer;
}
