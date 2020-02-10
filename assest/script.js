$(document).ready(function () {
    //var save = $(".save");
    $(".save9").on("click", function () {
        var text9 = $(".input9").val();
        localStorage.setItem("text9", text9);

        //$(".input9").css("background-color", "yellow");

    });
    window.onload = function () {

        var name9 = localStorage.getItem("text9");
        $(".input9").val(name9);


        // ...
    }

    window.onload();

    $(".save1").on("click", function () {
        var text1 = $(".input1").val();
        localStorage.setItem("text1", text1);
        // $(".input1").css("background-color", "red");


    });
    window.onload = function () {

        var name1 = localStorage.getItem("text1");
        $(".input1").val(name1);


        // ...
    }
    window.onload();

    $(".save2").on("click", function () {
        var text2 = $(".input2").val();
        localStorage.setItem("text2", text2);
        // $(".input1").css("background-color", "red");


    });
    window.onload = function () {

        var name2 = localStorage.getItem("text2");
        $(".input2").val(name2);


        // ...
    }
    window.onload();

    $(".save3").on("click", function () {
        var text3 = $(".input3").val();
        localStorage.setItem("text3", text3);
        // $(".input1").css("background-color", "red");


    });
    window.onload = function () {

        var name3 = localStorage.getItem("text3");
        $(".input3").val(name3);


        // ...
    }
    window.onload();

    $(".save4").on("click", function () {
        var text4 = $(".input4").val();
        localStorage.setItem("text4", text4);
        // $(".input1").css("background-color", "red");


    });
    window.onload = function () {

        var name4 = localStorage.getItem("text4");
        $(".input4").val(name4);


        // ...
    }
    window.onload();

    $(".save5").on("click", function () {
        var text5 = $(".input5").val();
        localStorage.setItem("text5", text5);
        // $(".input1").css("background-color", "red");


    });
    window.onload = function () {

        var name5 = localStorage.getItem("text5");
        $(".input5").val(name5);


        // ...
    }
    window.onload();

    $(".save7").on("click", function () {
        var text7 = $(".input7").val();
        localStorage.setItem("text7", text7);
        // $(".input1").css("background-color", "red");


    });
    window.onload = function () {

        var name7 = localStorage.getItem("text7");
        $(".input7").val(name7);


        // ...
    }
    window.onload();

    $(".save6").on("click", function () {
        var text6 = $(".input6").val();
        localStorage.setItem("text6", text6);
        // $(".input1").css("background-color", "red");


    });
    window.onload = function () {

        var name6 = localStorage.getItem("text6");
        $(".input6").val(name6);


        // ...
    }
    window.onload();


    $(".save8").on("click", function () {
        var text8 = $(".input8").val();
        localStorage.setItem("text8", text8);
        // $(".input1").css("background-color", "red");


    });
    window.onload = function () {

        var name8 = localStorage.getItem("text8");


        $(".input8").val(name8);



        // ...
    }
    window.onload();
    //var now =  $("#time");

    $("#time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var time = moment().format('H');
    var p = $("#9").attr("data-h");



    console.log(time);
    console.log(p);
    if (time < p) {
        $("#9").css("background-color", "red");
    } else if (time === p) {
        $("#9").css("background-color", "gray");

    } else {
        $("#9").css("background-color", "green");

    }



    var p1 = $("#10").attr("data-h");
    console.log(p1);
    if (time > p1) {
        $("#10").css("background-color", "red");
    } else if (time === p1) {
        $("#10").css("background-color", "gray");

    } else {
        $("#10").css("background-color", "green");

    }
    var p2 = $("#11").attr("data-h");
    console.log(p2);
    if (time > p2) {
        $("#11").css("background-color", "red");
    } else if (time === p2) {
        $("#11").css("background-color", "gray");

    } else {
        $("#11").css("background-color", "green");

    }
    var p3 = $("#12").attr("data-h");
    console.log(p3);
    if (time > p3) {
        $("#12").css("background-color", "red");
    } else if (time === p3) {
        $("#12").css("background-color", "gray");

    } else {
        $("#12").css("background-color", "green");
    }

    var p4 = $("#13").attr("data-h");
    console.log(p4);
    if (time > p4) {
        $("#13").css("background-color", "red");
    } else if (time === p4) {
        $("#13").css("background-color", "gray");

    } else {
        $("#13").css("background-color", "green");

    }

    var p5 = $("#14").attr("data-h");
    console.log(p5);
    if (time > p5) {
        $("#14").css("background-color", "red");
    } else if (time === p5) {
        $("#14").css("background-color", "gray");

    } else {
        $("#14").css("background-color", "green");

    }

    var p6 = $("#15").attr("data-h");
    console.log(p6);
    if (time > p6) {
        $("#15").css("background-color", "red");
    } else if (time === p6) {
        $("#15").css("background-color", "gray");

    } else {
        $("#15").css("background-color", "green");

    }

    var p7 = $("#16").attr("data-h");
    console.log(p7);
    if (time > p7) {
        $("#16").css("background-color", "red");
    } else if (time === p7) {
        $("#16").css("background-color", "gray");

    } else {
        $("#16").css("background-color", "green");

    }

    var p8 = $("#17").attr("data-h");
    console.log(p8);
    if (time > p8) {
        $("#17").css("background-color", "red");
    } else if (time === p8) {
        $("#17").css("background-color", "gray");

    } else {
        $("#17").css("background-color", "green");

    }



    






});