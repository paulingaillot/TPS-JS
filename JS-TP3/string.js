function repeat(s, n) {

    let sb = s;
    for (let i = 1; i < n; i++) {
        s = s + sb;
    }
    return s;
}

function truncate(s, n) {

    if (s.length <= n) return s;
    s = s.substring(0, n - 3) + "...";
    return s;

}

function isPalindrome(s) {

    let s1 = s.split('').reverse().join('');
    if (s == s1) return true;
    else return false;

}

function swapCase(s) {

    let lower = true;
    let upper = true;
    for (let i = 0; i < s.length; i++) {
        if (s[i].toUpperCase() != s[i]) upper = false;
        if (s[i].toLowerCase() != s[i]) lower = false;
    }

    if (lower == true) return s.toUpperCase();
    else if (upper == true) return s.toLowerCase();
    else {
        let s1 = "";
        for (let i = 0; i < s.length; i++) {
            if (s[i].toUpperCase() == s[i]) s1 = s1 + s[i].toLowerCase();
            else s1 = s1 + s[i].toUpperCase();

        }
        return s1;
    }

}