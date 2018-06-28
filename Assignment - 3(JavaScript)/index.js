
function solution1()
{ 
    var a = 5;
    var b = 6;
    var c = 7;
    var s = (a+b+c)/2;
    var t = s*(s-a)*(s-b)*(s-c);
    var x = Math.pow(t,0.5);
    console.log(x);
}
function sol2_cto_f( c)
{
    var f;
     //from  celcius to fahrenheit
     f = (9*c)/5 + 32;
    
    console.log(f);
    
}
function sol2_fto_c( f)
{
    var c;
    c = 5*(f-32)/9;
    console.log(c);
}
function solution3(a,b,c)
{
    //var a,b,c;
    if(a>b && a>c)
    {
          console.log(a+" is greatest");
    }
    else if(c>a && c>b)
    {
          console.log(c+" is greatest")
    }
    else
       console.log(b+ " is greatest");
}

function solution4(str)
{

   var str = str.split(" ");

    for (var i = 0; i < str.length; i++) 
    {
        str[i] = str[i][0].toUpperCase();
    }

    return str.join(" ");
}

function solution5(n)
{
   if((n % 3 == 0) && (n % 7 == 0))
     console.log("n is divisible by 3 and 7");
   else
     console.log("n is not divisible by 3 and 7")
}

function solution6(s , t)
{
    var count=0;
    for(var i = 0;i<s.length ; i++)
    {
        if(s[i] != t[i])
          count++;
    }
    console.log(count);
}

function solution7(string)
{
    string = string.toLowerCase();
    var check = 'abcdefghijklmnopqrstuvwxyz';
    var b = true;
    for(var i=0; i<check.length; i++){
        if(string.indexOf(check[i]) == -1){
            b=false;
            break;
        }
    }
    if(b) 
    {
        //alert('Pangram');
        console.log("It is a Pangram");
    }
    else 
    {
        //alert('Not a Pangram');
        console.log("Not a pangram");
    }
}

function solution8(s)
{
    var count=0;
  for(var i =0;i<s.length;i++)
  {
      for(var j=i+1;j<s.length;j++)
      {
          if(s[i] == s[j])
            count++;
      }
  }
  if(count != 0)
     console.log("not  isogram");
  else
    console.log(" isogram");
}

function solution9(name)
{
    a = name.split(" ");
    for(var i=0;i<name.length;i++)
    {
        console.log(a[i][0]);
    }
}
class post{
    constructor(name,image,content,likes,comments,share)
    {
        this.name=name;
        this.image=image;
        this.content=content;
        this.likes=likes;
        this.comments=comments;
        this.share=share;
    }
}

function solution10()
 {
    var post1=new post("user1","path of image1","This is post 1",["Raj","tanay","gaurang"],["ashish","gaurang","tanay"],["name1","name2","name3"]);
    var post2=new post("user2","path of image2","This is post 2",["Raj","tanay","gaurang"],["ashish","gaurang"],["name1","name2","name3"]);
    var post3=new post("user3","path of image3","This is post 3",["Raj","tanay","gaurang"],["ashish","gaurang","tanay"],["name1","name2","name3"]);
    var post4=new post("user4","path of image4","This is post 4",["Raj","tanay","gaurang"],["ashish","gaurang"],["name1","name2","name3"]);
    var post5=new post("user5","path of image5","This is post 5",["Raj","tanay","gaurang"],["ashish","gaurang","gaurang","tanay"],["name1","name2","name3"]);
    var post6=new post("user6","path of image5","This is post 6",["Raj","tanay","gaurang"],["ashish","gaurang","tanay"],["name1","name2","name3"]);
    var post7=new post("user7","path of image5","This is post 7",["Raj","tanay","gaurang"],["ashish","gaurang","tanay"],["name1","name2","name3"]);
    var post8=new post("user8","path of image5","This is post 8",["Raj","tanay","gaurang"],["ashish","gaurang","tanay"],["name1","name2","name3"]);
    var post9=new post("user9","path of image5","This is post 9",["Raj","tanay","gaurang"],["ashish","gaurang","tanay"],["name1","name2","name3"]);
    var post10=new post("user10","path of image5","This is post 10",["Raj","tanay","gaurang"],["ashish","gaurang","tanay"],["name1","name2","name3"]);
    var posts=[post1,post2,post3,post4,post5,post6,post7,post8,post9,post10];
    
   // console.log(post5.likes.length);

    var quesNo = prompt("Enter question number");
    if(quesNo == 1)
    {
       sol10_1(posts);
    }
    if(quesNo == 2)
    {
        sol10_2(posts);
    } 
    if(quesNo == 3)
    {
        sol10_3(posts);
    }
    if(quesNo == 4)
    {
        sol10_4(posts);
    }
    if(quesNo == 5)
    {
        sol10_5(posts);
    }
    if(quesNo == 6)
    {
        sol10_6(posts);
    }
 }
function sol10_1(posts)
{
    var count=0;
    for(var i=0;i<10; i++)
    {
        if(posts[i].name == "user1")
          count++;
    }
    console.log(count);
}

function sol10_2(posts)
{
    console.log(posts[4].likes.length);
}

function sol10_3(posts)
{
    console.log(posts[4].likes);
}

function sol10_4(posts)
{
    console.log(posts[4].likes[0]);
}

function sol10_5(posts)
{
  var count =0;
  var same = [];
  for(var i=0;i<posts[4].likes.length;i++)
  {
      for(var j=0; j < posts[4].comments.length; j++)
      {
        if(posts[4].likes[i] == posts[4].comments[j])
           {
            same.push(posts[4].likes[i]);
            count++;
           }
      }
  }
  console.log("no. of users who have liked and commented on post5 :" + count);
  console.log("same users are "+ same); 
}

function sol10_6(posts)
{
    var count = 0;
    var same = [];
    var same2 = [];
        for(var j=0; j< posts.length; j++)
        {
            same = same.concat(posts[j].comments);
        }
        var max = 0;
        for(var i=0; i< same.length; i++)
        {
            if(same[i] != same[i+1])
            {
                if(count > max)
                {
                    max = count;
                    count = 0;
                    same2 = same[i];
                }
            }
            else
            {
                count++;
            }
        }
        console.log("max comments by single user is: " + same2);
        
}
function solution11()
{
    var friendlist = [{
        "first": "Emmott",
        "last": "Semiras"
    }, {
        "first": "Bette",
        "last": "Swinfen"
    }, {
        "first": "Fake",
        "last": "Flipsen"
    }, {
        "first": "fake",
        "last": "Meaney"
    }, {
        "first": "Fake",
        "last": "Dunbabin"
    }, {
        "first": "Martynne",
        "last": "Doberer"
    }, {
        "first": "Hirsch",
        "last": "Weaben"
    }, {
        "first": "Donnie",
        "last": "Kasparski"
    }, {
        "first": "Ike",
        "last": "Terbeek"
    }, {
        "first": "Denney",
        "last": "Waldram"
    }, {
        "first": "Janifer",
        "last": "D'Ambrogi"
    }, {
        "first": "Scotti",
        "last": "Edinborough"
    }, {
        "first": "Camilla",
        "last": "Moloney"
    }, {
        "first": "Jephthah",
        "last": "Trotter"
    }, {
        "first": "Patin",
        "last": "Strettell"
    }, {
        "first": "Annnora",
        "last": "Clews"
    }, {
        "first": "Caritta",
        "last": "Micklewright"
    }, {
        "first": "Thornton",
        "last": "Grimshaw"
    }, {
        "first": "Cariotta",
        "last": "Junkinson"
    }, {
        "first": "Arnoldo",
        "last": "Gartshore"
    }]
    var quesNo = prompt("Enter question number");

    if(quesNo == 1)
    {
        so11_1(friendlist);
    }
    if(quesNo == 2)
    {
        so11_2(friendlist);
    }
    if(quesNo == 3)
    {
        so11_3(friendlist);
    }
    if(quesNo == 4)
    {
        so11_4(friendlist);
    }
    if(quesNo == 5)
    {
        so11_5(friendlist);
    }
}
function solution_a(friendlist)
{
    var fake = [];
    name = name.split(" ");
    for(var i=0; i< friendlist.name.length; i++)
    {
        if(friendlist.name[i][0] == "Fake" || friendlist.name[i][0] == "fake")
        {
          fake = friendlist.name.splice([i],1);
        }
    }
    console.log("persons with initials fake are :"+ fake);
}
function solution_b(friendlist)
{
    var frnd1 = prompt("Enter friends name");
    var frnd2 = prompt("Enter second friend name");

    friendlist.name.push(frnd1);
    friendlist.name.push(frnd2);
    console.log(friendlist.name);

}

function solution11_c() {
    friendlist.sort(function (a, b) {
        return a.first.length - b.first.length;
    });
    console.log(friendlist);
    return friendlist;
}

function solution11_d() {
    friendlist.sort(function (a, b) {
        return a.first.length - b.first.length;
    });
    console.log(friendlist);
    return friendlist
}

function so11_5(friendlist)
{
   var  name = name.split(" ");
    for(var i=0; i< friendlist.name.length; i++)
    {
        name[i] = name[i][0].toUpperCase();
    }
    return name.join(" ");
}