function upload()
{
    var author = $("#authName").val();
    $("#authName").val("");
    var mainpic = $("#enterP").val();
    $("#enterP").val("");
    var userpic = $("#EnterU").val();
    $("#EnterU").val("");
    var caption = $("#EnterC").val();
    $("#EnterC").val("");
    

    var card1clone = $("#card1").clone();
    
    console.log(card1clone);
    
    //to set author name
    $("div.d-flex.align-items-center.px-2 div div",card1clone).text(author);
    //to set main pic
    card1clone.find("img").attr("src",mainpic);
    //to set userpic
    card1clone.find("div.avatar.avatar-md.mr-3").attr("style","background-image: url(\'"+userpic+"\')");
    //to add caption
    card1clone.find("span").text(caption);
    //to add time 
    $("small.d-block.text-muted",card1clone).text("JustNow");
    //appending the card to the top 
    $("div.row.row-cards").prepend(card1clone);
}