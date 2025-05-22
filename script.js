const toggle = document.getElementById("toggleMode")

if(localStorage.getItem('theme')==="dark"){
  document.body.classList.add("dark-mode")
  toggle.classList.remove("fa-sun")
  toggle.classList.add("fa-moon")
}
toggle.addEventListener("click", () =>{
  document.body.classList.toggle("dark-mode")
  if(document.body.classList.contains("dark-mode")
  ){  
    localStorage.setItem("theme", "dark")
    toggle.classList.remove("fa-sun")
    toggle.classList.add("fa-moon")
  } else{
    localStorage.setItem("theme", 'light')
    toggle.classList.remove("fa-moon")
    toggle.classList.add("fa-sun")
  } 
})