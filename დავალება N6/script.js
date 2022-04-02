                                /* prompt */
function promptbox(){
    var text;
    person = prompt ("გთხოვთ შეავსოთ ველი")
    if(person == null || person == ""){
        text = "თქვენ არ შეგივსიათ ველი"
    }else{
        text = "თქვენ წარმატებით შეავსეთ ველი"
    }
    document.getElementById("paragraph").innerHTML = text;
}
                                /* array */
let x = ""
const snow = {
    snowboard:[
        {snowboarding: "Snowboarder", proboarder:["Shaun White", "age:31", "Achievements:ESPY Award"]},
        {snowboarding: "Snowboarder", proboarder:["Travis Rice", "age:40", "Achievements:Winter X Games"]},
        {snowboarding: "Snowboarder", proboarder:["Gretchen Bleiler", "age:21", "Achievements:The Arctic Challenge"]},
    ]
}

for(let a in snow.snowboard){
    x += "<h1>" + snow.snowboard[a].snowboarding + "</h1>";
    for(let b in snow.snowboard[a].proboarder){
        x += "<p>" + snow.snowboard[a].proboarder[b] + "</p>"
    }
}
document.getElementById("blist").innerHTML = x;