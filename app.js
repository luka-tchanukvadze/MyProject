const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

function PageTransitions(){
  //button click active class
  
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.active-btn')
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
      this.className += ' active-btn'
    })
  }

  //sections active class

  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    if(id){
      // remove selected from the other btns
      sectBtn.forEach((btn) =>{
        btn.classList.remove('active')
      })
      e.target.classList.add('active')

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove('active')
      })
        
      

      const element = document.getElementById(id)
      element.classList.add('active')
    }
  })

  // Toggle theme
  const themBtn = document.querySelector('.theme-btn')
  themBtn.addEventListener('click', () =>{
    let element = document.body
    element.classList.toggle('light-mode')
  })
}

PageTransitions()


let btn = document.getElementById('btn')
btn.addEventListener('click', function(e){
  e.preventDefault()
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let subject = document.getElementById('subject').value
  let message = document.getElementById('message').value
  let body = 'name: ' +name + '<br/> email: ' + email + '<br/> subject' + subject + '<br/> message' + message

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "lukagamerbroh@gmail.com",
    // Password : "zzssgmtslcwfqiwy",
    Password : "E9D62D6D2C674D9434D49303F67D00D7B1E5",
    To : 'lukagamerbroh@gmail.com',
    From : email,
    Subject : subject,
    Body : body
}).then(
  
  message => alert(message === 'OK' ? "Email Sent Successfully" : message)
);
})