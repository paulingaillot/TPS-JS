function repeatTest() {
    console.log(repeat("foo", 4));
    console.log(repeat("test", 2));
    console.log(repeat("isen", 10));
    console.log(repeat("+", 3));
    console.log(repeat("-", 1));
}

function repeatTestTruncate() {
    console.log(truncate("unchanged text", 20)); // => unchanged text
    console.log(truncate("unchanged text", 14)); // => unchanged text
    console.log(truncate("truncated text", 10)); // => truncat...
}

function repeatTestIsPalindrome() {
    console.log(isPalindrome("bonjour")); // => false
    console.log(isPalindrome("toto")); // => false
    console.log(isPalindrome("kayak")); // => true
    console.log(isPalindrome("ressasser")); // => true
}

function repeatTestchange() {
    console.log(swapCase("HELLO")); // => hello
    console.log(swapCase("bye")); // => BYE
    console.log(swapCase("GooD NighT")); // => gOOd nIGHt
}