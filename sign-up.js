document.querySelector("form").addEventListener("submit",todo);


function todo(event){
    event.preventDefault()
    let first=document.querySelector("#firstname").value;

    let last=document.querySelector("#lastname").value;

    let email=document.querySelector("#email").value;

    let validate=document.querySelector("#validate").value;

    let select=document.querySelector("#select").value;

    let dobday=document.querySelector("#dob-day").value;

    let dobmonth=document.querySelector("#dob-month").value;
    let dobyear=document.querySelector("#dob-year").value;


    let checkbox=document.querySelector("#required-checkbox-data-protection").value;

   console.log(first,last);
   let h=document.createElement("h2")
   h.innerText="Welcome to mytheresa.com"
   let pp=document.createElement("p");
   pp.innerText="Thank you for subscribing to our newsletter. If you don't want to continue receiving our newsletter, you can unsubscribe at any time."
   document.querySelector("#p").append(h,pp)
   window.location.href="sign.html"
}
