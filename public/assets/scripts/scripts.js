{
  //toggel btn for 
  let inform = document.querySelector('#inform')
  let inoutbtn = document.querySelector('.inoutbtn')
  
  let inbtn = document.querySelector('.inbtn')
  let outbtn = document.querySelector('.outbtn')
  

  inbtn.addEventListener('click', event => {
    inform.classList.remove('d-none')
    inoutbtn.classList.add('d-none')
  })

  outbtn.addEventListener('click', event => {
    outform.classList.remove('d-none')
    inoutbtn.classList.add('d-none')
  })
  /////////////////only for devlopment /////////////////
  inform.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(event.target)
    // only for 
    inform.classList.add('d-none')
    inoutbtn.classList.remove('d-none')

  })
  outform.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(event.target)
    // only for 
    outform.classList.add('d-none')
    inoutbtn.classList.remove('d-none')

  })
///////////////////// end ///post anywat to redirect////////////////////
}