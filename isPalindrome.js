function isPalindrome(str) {
    // 공백과 특수문자를 제거하고 소문자로 변환
    var cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // 문자열의 반을 기준으로 앞뒤를 비교
    for (var i = 0; i < cleaned.length / 2; i++) {
        if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 함수 테스트
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
