 

localStorage.getElement("kidset")
 var kidData = [
    {
      image_url:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F25%2Ff5%2F26%2F25f5269bdaff68b40af9aaa0d65b9fd3.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fwinniekidscloth%2Fkids-jackets-coats%2F&tbnid=2BZ-I6dmffB9oM&vet=12ahUKEwjzxIS5rr76AhUUgGMGHdiuDysQMygOegUIARCLAg..i&docid=-DSx-jfNkcXuxM&w=1417&h=1417&q=kid%20image%20%20with%20jacket&ved=2ahUKEwjzxIS5rr76AhUUgGMGHdiuDysQMygOegUIARCLAg",
      name: "CUTE KID",
     
    },
    {
      image_url:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…ycUXma63mZiW5z++kUUkqNvAWiigDGaRM8MUAgzwRRQD/2Q==",
      name: "CUTE KID ",
     
    },
    {
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHu9-gwzb-FGQh76-vAR_I78bJUA5toBM9Cg&usqp=CAU",
      name: " CUTE KID",
     
    },
    {
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwks9M8MVsa6u4LEqqDu1t-JEq2jav9xSfsaOCLdqeYq2RJ28GJSR5jjSMEzgz8yAQ0pM&usqp=CAU",
      name: "CUTE KID",
    }
]
document.querySelector("#set2").addEventListener("click",showme);


function showme(){
    console.log("me")
   
    kidData.forEach(function(el){
        let divv=document.querySelector("div")
        let immg=document.querySelector("img")
        immg.src=el.image_url
        let nam=document.querySelector("h3")
        nam.innerText=el.name
        divv.append(immg,nam)
        document.querySelector("#set2").append(divv)
        localStorage.setItem("kidset",el);
    })

}
console.log("me")