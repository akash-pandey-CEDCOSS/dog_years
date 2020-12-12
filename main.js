function age1() {
    var year = document.getElementById("age").value;
    var month = document.getElementById("month").value;

    var month_convert = parseFloat(month / 12);

    var age_human = parseFloat(parseFloat(year) + month_convert);
    

    if (age_human >= 21) {
        var a = parseFloat(age_human - 21);
        var a1 = parseFloat(a / 4);
        var a2 = parseFloat(2 + a1);
        var y = Math.floor(a2);
        var m = Math.floor((a2 - y) / (1 / 12));
        var d = Math.floor(((a2 - y) / (1 / 12) - Math.floor((a2 - y) / (1 / 12))) / (1 / 365));



        var age_dog = y + " years " + m + " months " + d + " days";
        document.getElementById("display_age").innerHTML = age_dog;




    } else if (age_human < 21) {
        var b = parseFloat(age_human / 10.5);
        var y = Math.floor(b);
        var m = Math.floor((b - y) / (1 / 12));
        var d = Math.floor(((b - y) / (1 / 12) - Math.floor((b - y) / (1 / 12))) / (1 / 365));
        var age_dog = y + " years " + m + " months " + d + " days";
        document.getElementById("display_age").innerHTML = age_dog;

    }
    if (age_human >= 61) {
        document.body.style.backgroundImage = "url('image/dog4.jpg')";
        document.getElementById("change").innerHTML = "Sad :'(, the dog died!";
        document.getElementById("display").innerHTML = "A dog's maximum age is 13 years. Though I have converted for you.";
    }

}

