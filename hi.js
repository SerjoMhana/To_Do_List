// ======================================================= حلقى  3  =========================================
// var y = 1000
// var title = "hello word"





// console.log (x)


// x = 60
// console.log (title)
// console.log (x) 
// console.log (y) 
// console.log ("serjo mhana")
// console.log ("serjo mhana")
// console.log ("serjo mhana")
// console.log ("serjo mhana")
// console.log ("serjo mhana")
// console.log ("serjo mhana")

// ==============================================================حلقة 4 ==========================================

// بعض من قواعد تسمية المتغيرات المتداولة والمعروفة مسبقا 

// ==============================================================حلقة 5.1 ==========================================

// var number1 = 10
// var number2 = 4
// var fisrst = `first number is ${number1}`
// var second = `first number is ${number2}`


// var sum = `the sum is ${number1+number2}`
// var sub = `the sub is ${number1-number2}`
// var mult = `the mult is ${number1*number2}`
// var div = `the div is ${number1/number2}`
// var mod = `the mid is ${number1%number2}`


// console.log(fisrst)
// console.log(second)
// console.log(sum)
// console.log(sub)
// console.log(mult)
// console.log(div)
// console.log( mod)

// ==============================================================حلقة 5.2 ==========================================

// طرق الرياضيه المعروفه للمتغيرات و كيف تجمع اكثر من متغير حرفي معا 


// ==============================================================حلقة 5.3 انواع البيانات ==========================================

// console.log ("hello word") // string  سلسلة نصية 
// console.log (50) // number   
// console.log (50.4) // number    

// console.log (typeof "hello word")
// console.log (typeof 10000)
// console.log (typeof 100.33)


// ==============================================================6سلاسل الحرفية ==========================================
// typeof
// باش تعرف نوع المتغيرات المستخدم هل هواا حرفي رقمي او بولين 



// ==============================================================حلقة 7 السلاسل النصية ======================================


// substring
// تقوم بتحديد من اين تقرا في السلسة الحرفية


// EXAMPLE

// var title = "hello word"
// console.log (title.substring(1,5))


// length
// تقوم بإيجاد عدد الاحرف و الفراغات 
// يبدا العدد من الاتش تحسب 1 

// EXAMPAL

// console.log(title.length)

// ==============================================================حلقة8 السلاسل النصية ======================================


// var title = "Hello World"
// var titeltouppercase = title.toUpperCase()
// var theChar = title.charAt(3)

// console.log(title.toUpperCase())
// console.log(title.toLowerCase())


// console.log(title.replace("Hello", "Welcom"))



// console.log(titeltouppercase)
// console.log(titeltouppercase.replace("HELLO", "welcom" ))

// console.log(theChar)

// console.log(title[2])

// var name = "serjo"

// console.log (`Hello ${name} welcom to our plan`)

// ==============================================================2حلقة8 السلاسل النصية ======================================

// var mystr = "Hello World"

// var mystrupper = mystr.toUpperCase()

// console.log(`${mystr}
// ${mystrupper}`)

// var mystrreplace = mystrupper.replace("O","Y")

// console.log(mystrreplace)


// ==============================================================3 السلاسل النصية ======================================

// var mystr =document.getElementById("hi").innerHTML
// console.log (mystr)

// var allcaps = mystr.toUpperCase()    
// var replac = allcaps.replace("O","Y")
// var reversestr = replac.split("").reverse().join("");

// document.getElementById("by").innerHTML = `${allcaps}-------${replac}
// ------${reversestr}`

// ==============================================================4 السلاسل 8 النصية ======================================

// document.getElementById("submit-btn").addEventListener("click",function(){
//     var mystr =document.getElementById("string").value
//     console.log (mystr)

//     var allcaps = mystr.toUpperCase()    
//     var replac = allcaps.replace("O","Y")
//     var reversestr = replac.split("").reverse().join("");

//     document.getElementById("by").innerHTML = `${allcaps}-------${replac}
//     ------${reversestr}`
// })

// ==============================================================  الأرقام9  ======================================

// var x = 10
// var y = 20 
// var z = x+y
// console.log (z) 

// var x = "10"
// var y = "20" 
// var z = x+y
// console.log (z) 
// 
// الفرق حيث انه لما درنا""" بدي يتعامل انعامل كانه حروف فلما بيجمعهم يجمع ايحط
// الرقمين طول بحدا بعض مش جمع لاكن باقي العمليات عادي

// is Nan 
// دالة عشان توضح لو كان مش رقم 

// console.log(isNaN(z))

// Math 
// مكتبه فيهاخصائص منهاطلع اكبر قيمة ةاصغر قيمةمثالا
// var z = 10
// var x = 20 

// console.log(Math.min(z,x))
// console.log(Math.maxy(z,x))

// ==============================================================  10 القيم المنظقية في الجافا سكريبت  ======================================

// var x = true
// var y = false

// console.log(x)
// console.log(typeof x)

// var x = 10
// var y = 20 

// console.log(x<y)
// console.log(x>y)
// console.log(x==y)

// ============================================================== 11 العوامل المنطقية في الجافا سكريبت  ======================================

// var x = 7
// var y = 10 
// console.log(x>5 && x <15)
// console.log(x>5 && x <15 && y >7)

// console.log(x>5 || x <15)

// console.log(x!=3 && x <15)

// ============================================================== 12 التعليقات   ======================================

// شرح عادي شني التعليقات وكيف تقدر تكتبهاا 
// كلها اشياء معروفه 

// ============================================================== 13 تغير انواع المتغيرات  ======================================

// var x = Number("10")
// var y = "20"

// // كيف نغير المتغيرات من حرفي الا رقم من غير مس المتغيرات باستخدام دوال

// console.log(Number(x)+Number(y))
// console.log(typeof x)

// تغير للحرفي باستخدام نفس الطريقه لاكن تكتب 
// String     or use  toString

// تحويل الى قيم صح او خطا 1 او 0 نستخدم 
// Boolean

// var x = 10 

// console.log (Boolean(x))

// ============================================================== 14 العبارات الشرطية   ======================================

// var age = 20 

// if(age >= 50) {
//     console.log(`this man is old and his age is ${age}`) 
// }else{
//     console.log(`this man not old enough he is ${age}`)
// }

// ============================================================== 15 العبارات الشرطيةالمتعة   ======================================

// var age = 20 

// if(age >= 60) {
//     console.log(`this man is old and his age is ${age}`) 
// }else if (age >=40 && age <60){
//     console.log(`this man mid age and he is ${age}`)
// }
// else {
//     console.log(`this man not old enough he is ${age}`)
// }

// console.log("done")

// ============================================================== 16  switch     ======================================

// var age = 70
// var health = "weak"

// switch (health){
//     case("strong"):
//         console.log("your health good")
//         break;
//     case("weak"):
//         console.log("you need to work on your **** health")
//         break;
//     default:
//         console.log("you good")
// }

// ============================================================== 17.1  switch     ======================================


//  احسب بي ام اي  الوزن بالكيلو غرام ثم تقسم الوزن على طولك تربيع 
//  
// document.getElementById("submit-btn").addEventListener("click",function(){
//     var witgh = document.getElementById("witgh").value
// var heigh = document.getElementById("heigh").value

// var bmi = witgh / (heigh*heigh)



// if(bmi<18){
//     document.getElementById("by").innerHTML = `${bmi} 
//     نحافة`
// }
// else if (bmi>=18 && bmi < 25){
//     document.getElementById("by").innerHTML = `${bmi} 
//     وزن مثالي`
// }
// else if (bmi>=25 && bmi < 30){
//     document.getElementById("by").innerHTML = `${bmi} 
//     وزن زائد`
// }
// else if (bmi>=30 && bmi < 35){
//     document.getElementById("by").innerHTML = `${bmi} 
//     وزن سمنة درجة اولى`
// }
// else if (bmi>=35 && bmi < 40){
//     document.getElementById("by").innerHTML = `${bmi} 
//     وزن سمنة درجة ثانية`
// }
// else{
//     document.getElementById("by").innerHTML = `${bmi} 
//     سمنة خطيره`
// }
// })

// ============================================================== 17.2  switch     ======================================

// var age = 70
// var health = "weak"

// switch (true){
//     case(age <= 60):
//         console.log("your health good")
//         break;
//     case(age >= 70):
//         console.log("you need to work on your **** health")
//         break;
//     default:
//         console.log("you good")
// }

// ============================================================== 18    المصفوفات   ======================================

// var students = ["ahmed","ali","seraj","mohamed","mo3z","moad"]
// // console.log(typeof students)

// document.getElementById("by").innerHTML = students


// ============================================================== 19   العمليات المصفوفات   ======================================

// var students = ["ahmed","ali","seraj","mohamed","mo3z","moad"]
// // console.log(typeof students)

// // تضيف في نهايه المصفوفه
// students.push("amjed")
// // تبدل قيمةبقيمة 
// students[1] = "Amear"
// // تحذف اخر عنصر في المصفوفة
// students.pop()

// document.getElementById("by").innerHTML = students

// console.log(students.length)
// console.log(students[0])
// console.log(students[2])
// console.log(students[20])


// ============================================================== 20 العمليات المصفوفات   ======================================

// var students = ["ahmed","ali","seraj","mohamed","mo3z","moad"]
// // console.log(typeof students)

// document.getElementById("by").innerHTML = students

// // splice
// // داله تستخدم في المصفوفات لحذف عنصر معين على حسب الإندكس  تأخد متغيرين الاول 
// // يحدد منوين يبدا يحدف و الثاني قداش متغير يحدف من بعد العدد الول 
// //  المتغير الثالث تحدد متغير تحطه في مكان بعد اول متغير بتحذفه

// console.log(students)
// // students.splice(1,3) 
// // students.splice(1,3,"ehsan") 

// // اهني تم استخامها باش اضيف عنصر في مكان محدد
// students.splice(1,0,"ehsan") 
// console.log(students)

// ============================================================== 21 الدوال في  المصفوفات   ======================================

// var arr = [10,100,50,49,90,70,20]
// var isitarr = Array.isArray(arr)

// console.log(isitarr)
// console.log(typeof isitarr)

// المصفوفه تشمل الرقم هدا او لا
// console.log(arr.includes(90))
// console.log(arr.includes(30))

// مكان الرقم هدا في المصفوفه
// console.log(arr.indexOf(70))
// console.log(arr.indexOf(1000))

// تحذف الرقم الاول في المصفوفة
// arr.shift()
// console.log(arr)

// اضافه عنصر في بداية المصفوفه
// arr.unshift(10000)
// console.log(arr)

//  تعكس ترتيب العناصر في المصفوفة
// arr.reverse()
// console.log(arr)

// ============================================================== 21.1الدوال في  المصفوفات   ======================================

// var nams = [] 
// document.getElementById("submit-add").addEventListener("click",function(){
    
//     const value = document.getElementById("heigh").value
//     nams.push(value)
//     document.getElementById("by").innerHTML = nams
//     document.getElementById("heigh").value = ""
    
// })


// document.getElementById("submit-del").addEventListener("click",function(){
//     nams.pop()
//     document.getElementById("by").innerHTML = nams

// })

// ============================================================== 22     جمل التكرار    ======================================

// for(var i =1;i<=10;i+=2){
//     console.log(`hello world ${i}`)
// }
// for(var i =0;i<1000;i++){
//     if(i % 2 == 0)
//     console.log(`hello world ${i}`)
// }


// ============================================================== 22 .1,2    جمل التكرار    ======================================


// var x = 10

// for(var i=0;i<=30;i++){
//     // console.log(`${x} * ${i} = ${x * i}`)
//     document.getElementById("by").innerHTML += `${x} * ${i} = ${x * i} </br>`
// }

// ============================================================== 23    جمل التكرار    ======================================

// var names = "welcom to the league of driven"

// for(var x =0; x<names.length;  x++){
//     console.log(names[x])
// }

// ============================================================== 23 1.2   جمل التكرار    ======================================

// document.getElementById("but").addEventListener("click", function(){
//     document.getElementById("re").innerHTML = ""
//     var text = document.getElementById("game").value
    
//     for(var char of text ) {
//         var lowcas = char.toLowerCase()
//         if(lowcas != "e" && lowcas != "i" && lowcas != "o" && lowcas != "u" &&lowcas != "a" ) {
//             document.getElementById("re").innerHTML += `${char}<br>`
//         }
//     }
    
// })

// ============================================================== 24   جمل التكرار    ======================================

// var school = [ "T.ahmed", "T.ali", "seraj","deya", "mohamed"]

// for(memberindex = 0 ;memberindex < school.length ; memberindex++){
//     if(school[memberindex][0] == "T") {
//         document.getElementById("re").innerHTML += school[memberindex] + " - "
//     }
// }

// ============================================================== 24 .1.2  جمل التكرار    ======================================

// var students = [ "ahmed", "ali" , "seraj" , "ehsan" ]

// document.getElementById("but").addEventListener("click", function(){
//     // document.getElementById("re").innerHTML = ""
//     var inputs = document.getElementById("game").value.toLowerCase()
//     var isFound = false
//     for(var member of students){
//         var lowstudents = member.toLowerCase()
//         if(inputs == lowstudents){
//             isFound = true
//         }
//     }

//     if(isFound == true) {
//         document.getElementById("re").innerHTML = `${inputs} is in the school`
//     }else {
//         document.getElementById("re").innerHTML = `${inputs} is not in the school`
//     }
// })

// ============================================================== 25  brake && continue     ======================================

// var students = [ "ahmed", "ali" , "seraj" , "ehsan" ]

// document.getElementById("but").addEventListener("click", function(){
    
//     var inputs = document.getElementById("game").value.toLowerCase()
//     for(var member of students){
//         var lowstudents = member.toLowerCase()
//         if(inputs == lowstudents) {
//             document.getElementById("re").innerHTML = `${inputs} is in the school`
//             break
//         } 
//         document.getElementById("re").innerHTML = `${inputs} is not in the school`
//     }


//     for(var member of students){
//         var lowstudents = member.toLowerCase()
//         document.getElementById("re").innerHTML = `${inputs} is not in the school`

//         if(inputs != lowstudents) {
//             continue
//         } 
//         document.getElementById("re").innerHTML = `${inputs} is in the school`
//         break
//     }
// })

// ============================================================== 26 while do while     ======================================

// //normal while
// var i =0

// while(i<=10){
//     console.log(i)
//     i = i+1
// }

// var x = 0
// // do while
// console.log("form do while")
// do{
//     console.log(x)
//     x= x+1
// }while (x<=10)

// ============================================================== 26.1.2  brake && continue     ======================================
// same stuff asthe last challenge just you gonna use do while instade of for 



// ============================================================== 27    2D arry     ======================================

// شرح نظري على المصفوفات الثنائية وكيفيه التعامل معهاوماهي المشاكل اللتي تحلها 



// ============================================================== 28  brake && continue     ======================================

// var studends = [
//     ["seraj", "ahmed", "mohamed"],
//     ["ehsan", "ali", "mouad"],
//     ["sohail", "mo3s", "shrfo"],
// ]

// console.log(studends[1])
// console.log(studends[2 ][2])


// var titel = document.createElement("p");
// var text = document.createTextNode("كلية تقنية المعلومات ");

// titel.appendChild(text);


// document.body.appendChild(titel)

// document.body.removeChild(titel)
// var MyFunction= addEventListener('click', function(){

//     document.getElementById("title").innerHTML= "Hello ";
// })

// var hi = document.getElementById("hi")

// document.body.removeChild(hi);



// ============================================================== 29  brake && continue     ======================================




// ======================================================= 30 nested loop =============================================



// var students = [
//     ["ali", "mohamed","seraj"],
//     ["sohil", "ahmed"],
//     ["etman", "salm","ghaled"],
// ]

// for (var i =0 ; i <students.length ; i++){

//     var currentclasss = students[i]
//     document.getElementById("result").innerHTML += "<br>" + `<h1> class ${i + 1}</h1>` +"<hr>"

//     for (var j =0 ; j <currentclasss.length ; j++){
//         var currentstudent = currentclasss[j]
//         document.getElementById("result").innerHTML += currentstudent + "<br>"
//     }
// }


// ================================================== 31.1,.2 challeng nested loops  =============================================================================


//  for (var i =1 ; i<= 10 ; i++){
//     document.getElementById("result").innerHTML += `<h3> Multplication Table Of ${i} </h3>`
//     for(var j=1 ; j<=10 ; j++){
//         document.getElementById("result").innerHTML += `${i} X ${j} = ${i*j} <br>`
//     }
//     document.getElementById("result").innerHTML += `<hr>`
//  }


// ====================================================== 32 function in  javascript ===============================================================================


// function PrintWelcomMessage(){
//     console.log ("Hi Seraj")
//     console.log ("Wlecom to the team ")
//     console.log ("get the fuckout now ")
// }


// PrintWelcomMessage()
// PrintWelcomMessage()
// PrintWelcomMessage()



// ========================================================= 33 function parameters  ============================================================================


// function PrintWelcomMessage(name ){
//     console.log (`Hi ${name}`)
//     console.log ("Wlecom to the team ")
//     console.log ("get the fuckout now ")
// }

// PrintWelcomMessage("Seraj")

// PrintWelcomMessage("Ahmed")

// PrintWelcomMessage("Mohamed")

// ====================================================== 34 Multiple Parameters Function ===========================================================================


// function NumberSquared (Number1=10 , Number2=20) {
//     var result = Number1 *Number2 
//     console.log (` The Squard for ${Number1} * ${Number2} = ${result}`)
// }

// NumberSquared()
// NumberSquared(2,2)

// ====================================================== 35  Function with Return Values =============================================================================

// var arr = [20,23,15,10]
// console.log(arr.reverse())




// ===================================================== 35,  1. 2 =====================================================================================================

// function reverseArray(arr=[]){
//     var outputArry = []
//     for (element of arr){
//         outputArry.unshift(element)
//     }
//     return outputArry
// }

// var myArray = ["hello", "hi", true , 10, 90 ]

// console.log(myArray)
// console.log("the revers is " + reverseArray (myArray))

// var arr = [10,20,80]
// console.log("the second revers is " + reverseArray (arr))

// ===================================================== 36 المنصات البرمجية  =====================================================================================================



// ===================================================== 37 Anonymous Function in javaScript  =====================================================================================================

// function test (x,c,d,e){
//         console.log("hi")
// }

// var x = test

// var y = function(){
//     console.log("hi from y ")
// }

// function callAnoTheFuncton(functionToCall){
//     console.log("geting ready to call another function")
//     functionToCall()
// }

// callAnoTheFuncton(function(){
//     console.log("hello")
// })


// ===================================================== 38 CallBack Function in javaScript  ===============================================================================================================
// يشغل الفانكشن بعد فتره من الزمن 
// setTimeout(function(){
//     console.log("HELLO WORLD ")
// },3000)

// setInterval(function(){
//     console.log("Hello to my team")
// },3000)

// var arry = [20 , 40 ,30 ,90]

// arry.forEach(function(element){
//     console.log(element)
// })



// ===================================================== 38 1,2 Anonymos / CallBack Function challeng  =====================================================================================================

// document.getElementById("startbtn").addEventListener('click', function(){
   

//     this.style.backgroundColor = makeArandomRGB()


//     setInterval(function(){

//     document.getElementById("result").style.backgroundColor = makeArandomRGB()
//     },2000)
    
// })

// function makeArandomNumber(){
//     return Math.random()*255
// }
// function makeArandomRGB(){
//     var randomR = makeArandomNumber()
//     var randomG = makeArandomNumber()
//     var randomB = makeArandomNumber()
//     return `rgb(${randomR},${randomG},${randomB})`
// }

// ==================================================== 39 Arrow Fuction  ===================================================================================================================================
// var x = function(){
//     console.log("hi from x ")
// }

// x()

// var y = ()=>{
//     console.log("hi from y ")
// }

// y()


// function test (callBack){
//     callBack()
// }

// // test(function(){
// //     console.log("Hello")
// // })
// test(()=>{
//     console.log("Hello")
// })

// ================================================40 ================================================================================================================================================

// ================================================43 objects in java script ================================================================================================================================================

// let studend = {
//     firstName: "Seraj",
//     lasteName: "mhana",
//     age: 23,
//     years: 2000,
// }

// function PrintFullName(studend){
//     console.log(studend.firstName + " " + studend.lasteName)
// }

// PrintFullName(studend)

// ================================================44 edite keys objects in java script================================================================================================================================================

// let studend = {
//     firstName: "Seraj",
//     lasteName: "mhana",
//     age: 23,
//     years: 2000,
// }

// function PrintFullName(studend){
//     console.log(studend.firstName + " " + studend.lasteName)
// }

// // PrintFullName(studend)


// //  Edite in the keys 
// studend.age = 26

// // add new keys
// studend.life = "live"

// console.log (studend.life)

// ================================================45 arry with object ================================================================================================================================================
 

// let studends = [
//         {
//             firstName: "Seraj",
//             lasteName: "mhana",
//             age: 23,
//             years: 2000,
//         },
//         {
//             firstName: "ahme",
//             lasteName: "mhana",
//             age: 21,
//             years: 2002,
//         },
//         {
//             firstName: "ali",
//             lasteName: "mhana",
//             age: 17,
//             years: 2009,
//         }
// ]

// console.log(studends)
// console.log(studends[0])
// console.log(studends[0].firstName)


// ================================================45,1,2 arry with object ================================================================================================================================================

// let studends = [
//         {
//             firstName: "Seraj",
//             lasteName: "mhana",
//             age: 23,
//             years: 2000,
//         },
//         {
//             firstName: "ahme",
//             lasteName: "mhana",
//             age: 21,
//             years: 2002,
//         },
//         {
//             firstName: "ali",
//             lasteName: "mhana",
//             age: 17,
//             years: 2009,
//         }
// ]

// for(st of studends){
//      let content = `<tr>
//                         <td>${st.firstName}</td>
//                         <td>${st.age}</td>
//                         <td>${st.years}</td>
//                     </tr>`

//                     document.getElementById("Students").innerHTML += content
// }


// ================================================46 nested  object javascript ================================================================================================================================================

// let st = {
//     name:"seraj",
//     age:23,
// }

// let {name, age} = st
// console.log(name,age)

// var arr = [10,20,30]
// let [first, second , third] = arr
// console.log(first, second, third)

// let studends = [
//         {
//            nam: {
//             firstName: "Seraj",
//             lasteName: "mhana",
//            },
//             age: 23,
//             years: 2000,
//         },
//         {
//             firstName: "ahme",
//             lasteName: "mhana",
//             age: 21,
//             years: 2002,
//         },
//         {
//             firstName: "ali",
//             lasteName: "mhana",
//             age: 17,
//             years: 2009,
//         }
// ]

// console.log(studends[0])

// ================================================47 what is the json  ================================================================================================================================================


// ================================================48: Pass By Reference VS Pass By Value  ================================================================================================================================================


// pass by value 

//let x = "hi"
//let y = x
//x = "hello"

//console.log(x)
//console.log(y)

// pass by refrence 

//let x = {
//    name: "seraj",
//}
//let y = x 
//
//x.name = "mhana"
//
//console.log(x)
//console.log(y)

// ================================================49: Dom in java script ================================================================================================================================================



// ================================================50: html elements in java script ================================================================================================================================================


// let el1 = document.getElementById("title")
// let el2 = document.getElementsByClassName("title")
// let el3 = document.getElementsByTagName("h3")

// //document.getElementsByClassName("title")[1].innerHTML = "weee"
// //document.getElementsByTagName("h3")[2].innerHTML = "qwerty"
// console.log(el1)
// console.log(el2)
// console.log(el3)


// ================================================51: html style the attributes in java script ================================================================================================================================================

// document.getElementById("titel").innerHTML = "Hello"

// let content =  document.getElementById("title").innerHTML 

// document.getElementsByTagName("input")[0].setAttribute("value","content")

// document.getElementsByTagName("input")[0].setAttribute("type","submit")

// document.getElementById("title").style.backgroundColor = "blue"


// ================================================52: html events in java script ================================================================================================================================================


// function changetitel2 (){
//     document.getElementById("titel2").innerHTML = "HI FROM SERJO"
// }


// ================================================53: html events in java script ================================================================================================================================================

//document.getElementById("titel").addEventListener("mouseover", function(){
//    document.getElementById("titel2").innerHTML = "HI FROM SERJO"
    //this.innerHTML = " hiiii"
    
//})
//document.getElementById("titel").addEventListener("mouseout", function(){
//    document.getElementById("titel2").innerHTML = "test"
    //this.innerHTML = " hiiii"
    
//})


// ================================================54: html events in java script ================================================================================================================================================

//document.getElementById("ul").innerHTML += "<li>ali</li>"

// let liElement = document.createElement ("li")
// let textLi = document.createTextNode("Mhana")
// liElement.appendChild(textLi)

// document.getElementById("ul").appendChild(liElement)
// document.getElementById("ul").removeChild(liElement)

// ================================================54,1,2, html events in java script challenge  ================================================================================================================================================

// let isSube = false
// let h1 = document.getElementById("h1")
// let but = document.getElementById ("but")


// document.getElementById("input").addEventListener("mouseout",function(){
//     let inpute = document.getElementById("input").value 
//     document.getElementById("h3").innerHTML = inpute
// })

// but.addEventListener("click" , function(){

//     if(!isSube){
//         isSube  = true
//         h1.innerHTML = ""
//     }
//     let i = document.getElementById("input").value 
    
//     let text = document.createTextNode(i)
    
//     h1.appendChild(text)

//     let br = document.createElement("br")
    
//     h1.appendChild(br)

// })

// h1.addEventListener("mouseover",function(){
//     if (isSube){
//         h1.style.backgroundColor = "green"
//     }else{
//         h1.style.backgroundColor = "red"
//     }
// })

// h1.addEventListener("mouseout",function(){
//     h1.style.backgroundColor = ""
// })

// ================================================55: Libarys in java script   ================================================================================================================================================


// ================================================56: jquery Libary in java script   ================================================================================================================================================


// ================================================57 to 65: final java script project  ================================================================================================================================================

let tasks = [
    {
        "titel" : "قراءة كتاب",
        "data" : "23/12/2000",
        "isDon" : false,
    },
    {
        "titel" : " اخر مشروع ",
        "data" : "23/12/2000",
        "isDon" : false,
    },
    {
        "titel" : " مشروع ال javascript",
        "data" : "23/12/2000",
        "isDon" : false,
    }
]


 tasks = JSON.parse(localStorage.getItem("tk"))


function filltaskes(){
    document.getElementById("aa").innerHTML = ""
    let index = 0 
    for(task of tasks){

        let content  = 
         `
                     <div class="list_body ${task.isDon ? 'list_body_done' : ''}"> 
                     <div class="item">
                         <div class="item_edit">
                             <button onclick="Edittaske(${index})" class="circl" style="background-color: cadetblue;">
                                 <span class="material-symbols-outlined">
                                     edit
                                 </span>
                             </button>
                             ${task.isDon ? 
                            `
                             <button onclick="Donetask(${index})" class="circl" style="background-color: #8a2ae396;">
                             <span class="material-symbols-outlined">
                                cancel
                             </span>
                             </button>
                            `:
                             `
                             <button onclick="Donetask(${index})" class="circl" style="background-color: rgba(0, 128, 0, 0.671);">
                             <span class="material-symbols-outlined">
                                 done
                             </span>
                             </button>
                             `
                            }
                            
                             <button onclick="deletetaske(${index})" class="circl" style="background-color: rgba(255, 0, 0, 0.678);">
                                 <span class="material-symbols-outlined">
                                     delete
                                 </span>
                             </button>
                         </div>
                         <div class="item_name">
                             <p> ${task.titel}</p>
                             <div class="item_name_date">
                                 <span>${task.data}</span>
                                 <span class="material-symbols-outlined">
                                     calendar_month
                                 </span>
                             </div>
                         </div>
                     </div>
                 </div>
         `
     
     
         document.getElementById("aa").innerHTML += content
         index++
     }
}

filltaskes()


document.getElementById("add-btn").addEventListener('click', function(){
    let titel_name =prompt("الرجاء ادخال عنوان المهمة")

    let now = new Date()
    let data = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear()
    let taskobj = {
        "titel" : titel_name ,
        "data" : data,
        "isDon" : false,
    }
    tasks.push(taskobj)

    storage()
    filltaskes()
})



function deletetaske(index){
    let task = tasks[index]
   let isconf = confirm("هل انت متأكد من حذف مهمة : " + task.titel)

   if(isconf){
    tasks.splice(index, 1)
    storage()
    filltaskes()
   }else{

   }
}

function Edittaske (index){
    let task = tasks[index]
    let newtitel = prompt("الرجاء ادخال عنوان المهمة الجديد ", task.titel )
    task.titel = newtitel

    storage()
    filltaskes()
}

function Donetask (index){
    let task = tasks[index]
    if(task.isDon){
        task.isDon = false
    }else{
        task.isDon = true
    }
    
    storage()
    filltaskes()
}


// function for storage

function storage (){
    let tasksString = JSON.stringify(tasks)
    localStorage.setItem("tk",tasksString)
}