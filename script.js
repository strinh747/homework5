$(document).ready(function() {
    
    var m = moment();
    $('#currentDay').text(m.format('MMMM DD, YYYY'));

    for (i=0; i<20; i++) {
        var row = $('<div class="row time-block">');
        $('.container').append(row);

        var hour = $('<div class="col-md-1 hour">');
        var hourNum = m.set({hour: 4 + i, minute:0});
        hour.text(hourNum.format("hh:mm"));
        row.append(hour);

        var toDo = $('<div class="col-md-10" style="padding-right:0px">');
        var formText = $('<textarea class="form-control rounded-0">');
        formText.attr("rows", "3");
        formText.attr("id", 4 + i);
        toDo.append(formText);
        row.append(toDo);

        var save = $('<div class="col-md-1 btn saveBtn">');
        save.text("Save");
        row.append(save);
    }

    for (i=4; i<24; i++) {
        var storedText = localStorage.getItem(i);
        $("#"+i).text(storedText);
        if (i < moment().hours()) {
            $("#"+i).addClass("past");
        }
        else if (i === moment().hours()) {
            $("#"+i).addClass("present");
        }
        else {
            $("#"+i).addClass("future");
        }
        }

    $(".saveBtn").on("click", function() {
        var userInput = $(this).siblings().find("textarea");
        localStorage.setItem($(userInput).attr("id"), userInput.val());
    })

})