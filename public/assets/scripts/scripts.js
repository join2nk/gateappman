{
  //toggel btn for 
  let inform = document.querySelector('#inform')
  let inoutbtn = document.querySelector('.inoutbtn')

  let inbtn = document.querySelector('.inbtn')
  let outbtn = document.querySelector('.outbtn')


  inbtn.addEventListener('click', event => {
    inform.classList.remove('d-none')
    inoutbtn.classList.add('d-none')
    document.body.classList.add('bg-success')
    document.body.classList.add('bg-opacity-25')
  })

  outbtn.addEventListener('click', event => {
    outform.classList.remove('d-none')
    inoutbtn.classList.add('d-none')
    document.body.classList.add('bg-warning')
    document.body.classList.add('bg-opacity-25')
  })
  /////////////////only for devlopment /////////////////
  //or add hrx or fetch api
  inform.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target)
    // only for 
    inform.classList.add('d-none')
    inoutbtn.classList.remove('d-none')
    document.body.classList.remove('bg-success')

  })
  outform.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target)
    // only for 
    outform.classList.add('d-none')
    inoutbtn.classList.remove('d-none')
    document.body.classList.remove('bg-warning')

  })
  ///////////////////// end ///post anywat to redirect////////////////////
  let informbtntrucksearch = document.querySelector('.informbtn')
  let outformbtntrucksincampus = document.querySelector('.outformbtn')
  let trucknosearchdiv = document.querySelector('.trucknosearchdiv')
  let truckincampusdiv = document.querySelector('.truckincampusdiv')


  document.querySelector('table').addEventListener('click', (event) => {
    event.preventDefault()
    let clickedClass = (event.target.parentElement.classList[0])
    let selectedTruckno = clickedClass
    console.log(selectedTruckno)
    //TODO:
    //retrun to the form with the truck no  
    
      inform.classList.remove('d-none')
      trucknosearchdiv.classList.add('d-none')
    
 
    
  })
  document.querySelector('table.incampus').addEventListener('click', (event) => {
    event.preventDefault()
    let clickedClass = (event.target.parentElement.classList[0])
    let selectedTruckno = clickedClass
    console.log(selectedTruckno)
    //TODO:
    //retrun to the form with the truck no  
    

      outform.classList.remove('d-none')
      truckincampusdiv.classList.add('d-none')
    
  })
 

  informbtntrucksearch.addEventListener('click', (event) => {
    inform.classList.add('d-none')
    trucknosearchdiv.classList.remove('d-none')
  })

  outformbtntrucksincampus.addEventListener('click', (event) => {
    outform.classList.add('d-none')
    truckincampusdiv.classList.remove('d-none')
  })
}


//search inplimentation TODO:
{
  //-------------search inplimentation TODO:----
  document.querySelector('.trucknosearchinput').addEventListener('keyup', (event) => {
    console.log(event.target.value)
    inputval = event.target.value
    //TODO:
    //search the inputval in truck name and remove the others
    //TODO:
    //search the inputval in truck nos and remove the others
    inform.classList.remove('d-none')
    trucknosearchdiv.classList.add('d-none')
  })
  document.querySelector('.truckincampusinput').addEventListener('keyup', (event) => {
    console.log(event.target.value)
    inputval = event.target.value
    //TODO:
    //search the inputval in truck name and remove the others
    //TODO:
    //search the inputval in truck nos and remove the others
  })
  //------------------------------------------------
}

//functional programming ..//doing functional