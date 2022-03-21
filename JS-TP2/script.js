function isPerfect(n) {
    let result = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            result = result + i;
        }
    }
    if (result == n) {
        return true;
    } else {
        return false;
    }

}

function square(line1, collums) {

    for (let i = 0; i < collums; i++) {
        line(line1);
    }
}

function line(n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result = result + "* ";
    }
    console.log(result);
}

function triangle_iso(n) {

    let o = 0;
    for (let i = 0; i < n; i++) {
        o++;
        line(o);
    }

}

function carre_vide(line3, collums) {

    for (let i = 0; i < collums; i++) {
        if (i == 0 || i == (collums - 1)) line(line3);
        else {
            line2(line3);
        }
    }
}

function traingle_vide_inv(n) {

    let o = n;
    line(n);
    for (let i = n - 1; i > 0; i--) {
        o--;
        line2(o);
    }


}

function traingle_vide(n) {

    let o = 0;
    for (let i = 0; i < (n - 1); i++) {
        o++;
        line2(o);
    }
    line(n);

}

function line2(n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        if (i == 0 || i == (n - 1)) result = result + "* ";
        else result = result + "  ";
    }
    console.log(result);
}


function tobit(x, unit) {

    switch (unit) {
        case 'T':
            x = x * 1024;
        case 'G':
            x = x * 1024;
        case 'M':
            x = x * 1024;
        case 'K':
            x = x * 1024;
        default:
            break;
    }
    return x;
}


function isPerfect2(n) {
    let result = 0;
    for (let i = 1; i < n; i++) {
        result = result + n % i == 0 ? 1 : 0;
    }
    return result == n ? true : false;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function celciusToFahrenheit(celcius) {
    return (celcius * 1.8) + 32;
}

function limit(x, inf, sup) {

    if (x > sup) {
        x = sup;
    } else if (x < inf) {

        x = inf;
    }

    return x;

}

function decomposition(x) {
    let power = 3;
    while (x > 1000) {
        while (x > Math.pow(10, power)) {
            if (x > Math.pow(10, power)) x = x - Math.pow(10, power);
        }
        power++;
    }
    return x;
}

function decomposition2(n) {
    let result = 0;
    let i = 0;
    let nb = n;
    while (nb > 10) {
        i++;
        nb = Math.trunc(nb / 10);
    }
    for (let j = i; j >= 0; j--) {
        result += (n % 10) * Math.pow(10, j);
        n = Math.trunc(n / 10);
    }
    return result;
}

function is_on(A1, A2, A3, A4, A5, A6) {
    if ((A1 && A3) || (A1 && A4 && A5) || (A2 && A6)) return true;
    else return false;
}

function euro(x) {

    let cent = 0;
    let dix = 0;
    let cinquante = 0;
    let deux = 0;
    let un = 0;
    let xb = x;

    while (x != 0) {
        if (x >= 100) {
            x -= 100;
            cent++;
        } else if (x >= 50) {
            x -= 50;
            cinquante++;
        } else if (x >= 10) {
            x -= 10;
            dix++;
        } else if (x >= 2) {
            x -= 2;
            deux++;
        } else if (x >= 1) {
            x -= 1;
            un++;
        }

    }
    xb = xb - 100 * cent;
    console.log("==> " + cent + " billet de 100€, reste " + xb);
    xb = xb - 50 * cinquante;
    console.log("==> " + cinquante + " billet de 50€, reste " + xb);
    xb = xb - 10 * dix;
    console.log("==> " + dix + " billet de 10€, reste " + xb);
    xb = xb - 2 * deux;
    console.log("==> " + deux + " piece de 2, reste " + xb);
    xb = xb - 1 * un;
    console.log("==> " + un + " piece de 1€");

}

function color(x, y) {

    if (x <= 0 || y <= 0 || x > 90 || y > 70) return "En dehors de la feuille";
    else if (y <= 10 || x <= 10 || x > 85 || (y > 55 && y <= 60) || (x > 25 && x <= 50 && y > 20 && y <= 45)) return "jaune";
    else if (x > 60 && (y > 15 && y <= 45) || (y > 60 && y <= 85)) return "rouge";
    else return "bleu";


}

function main() {
    let celcius = 40;

    let far = celciusToFahrenheit(celcius);
    console.log(far);

    let inf = 3;
    let sup = 8;
    let x = 20;

    x = limit(x, inf, sup);
    console.log(x);


    let n = 28;
    console.log(isPerfect2(n));

    let x2 = 14;
    let unit = "T";
    console.log(tobit(x2, unit));

    line(5);
    square(5, 5);
    triangle_iso(5);
    carre_vide(5, 5);
    traingle_vide(5);
    traingle_vide_inv(5);
    console.log(is_on(true, true, true, true, true, true));
    console.log(decomposition(22156179));
    console.log(decomposition2(179));
    euro(173591648);

    console.log(color(46, 41));
}
main();