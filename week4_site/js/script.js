var names = ["wes", "bob", "joe"];

names.special = "x12";
names[4] = "ash";

console.log(names[3]);

for (var name in names){
    console.log(name);
    console.log("Hello " + names[name]);
}