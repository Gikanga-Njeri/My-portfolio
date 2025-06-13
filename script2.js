// Changing role on home
const roles = ["Web Designer", "Data Manager", "Data Analyser"];
let idx = 0;
const roleSpan = document.getElementById("changing-role");

function changeRole() {
  roleSpan.classList.add("fade-out");
  setTimeout(() => {
    idx = (idx + 1) % roles.length;
    roleSpan.textContent = roles[idx];
    roleSpan.classList.remove("fade-out");
    roleSpan.classList.add("fade-in");
    setTimeout(() => roleSpan.classList.remove("fade-in"), 500);
  }, 500);
}

setInterval(changeRole, 2000);



// <!-- about tabs -->
 
    var tabLinks = document.getElementsByClassName('tab-link');
    var tabContents = document.getElementsByClassName('tab-content');

    function opentab(tabname){
      for (tabLink of tabLinks) {
        tabLink.classList.remove("active");
      }
      for (tabContent of tabContents) {
        tabContent.classList.remove("active");
      }
      event.currentTarget.classList.add("active");
      document.getElementById(tabname).classList.add("active");
    }

//   <!-- side bar -->
 
    var menu = document.getElementById('sidemenu');

    function openMenu(){
      menu.style.right = '0';
    }
    function closeMenu(){
      menu.style.right = '-200px';
    }

// <!-- contact form -->

  const scriptURL =                       
      "https://script.google.com/macros/s/AKfycbwPwIOKeVqwtogSKms3zZPBmbIMwK5Eg-6TZiO9ZOTb5Ew3LkSlNsFlRfBgBdkv6HCZ/exec";
      const form = document.forms["submit-to-google-sheet"];
      var msg = document.getElementById("msg");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        var formData = new FormData(form);
        var name = document.getElementById("Name");
        var email = document.getElementById("Email");
        var message = document.getElementById("Message");
      
        

        fetch(scriptURL, { method: "POST", body: formData })
          .then((response) => {
            // swal("Done", "Submitted Successfully.", "success");
            
            msg.innerHTML = "Thank you for your message <br> We will get back to you soon.";

            // Clear message after 3 seconds
            setTimeout(() => {
              msg.innerHTML = "";
            }, 5000);

            form.reset();
            
          })
          .catch((error) => {
            // swal("Error", "Something went wrong. please try again!", "error");
            msg.innerHTML = "Error submitting message. <br> Please try again later.";

            setTimeout(() => {
              msg.innerHTML = "";
            }, 4000);
      
      
            form.reset();
          });

      });




// for generating quick links dynamically
const links = [
  { name: "Home", url: "https://yourwebsite.com" },
  { name: "About", url: "https://yourwebsite.com/about" },
  { name: "Projects", url: "https://yourwebsite.com/projects" },
  { name: "Contact", url: "https://yourwebsite.com/contact" }
];

const quickLinksDiv = document.querySelector('.quick-links');