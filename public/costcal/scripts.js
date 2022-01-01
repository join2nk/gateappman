let itemsUsed = [{
    name: 'paddy',
    qty: 100,
    unit: '%',
    rate: 1480,
    amount: function () {
      return this.qty * this.rate
    }

  },
  {
    name: 'paddy',
    qty: 100,
    unit: '%',
    rate: 1480,
    amount: function () {
      return this.qty * this.rate
    }

  }
]
let itemsRecieved = [{
  name: 'bran',
  qty: 7,
  unit: '%',
  rate: 2100
},
{
  name: 'broken',
  qty:5,
  unit: '%',
  rate: 1650
}]
let otehrIncome = [{
  name: 'sarna',
  qty: 100,
  unit: '%',
  rate: 1400
}]
let otherExpense = [{
  name: 'sarna',
  qty: 100,
  unit: '%',
  rate: 1400
}]

createTable('item-used', itemsUsed)
createTable('item-recieved', itemsRecieved)
createTable('other-income', otehrIncome)
createTable('other-expense', otherExpense)





















function createTable(tableclassName, tableDataArray) {

  setTableHeading(tableclassName, tableDataArray)
  setTableBody(tableclassName, tableDataArray)
  setTableFooter(tableclassName, tableDataArray)

  function setTableHeading(tableclassName, tableDataArray) {
    let tableHead = document.querySelector(`.${tableclassName} thead tr`)

    let keys = Object.keys(tableDataArray[0])
    let headOutput = ""

    keys.forEach(key => {
      let heading = (_.capitalize(_.lowerCase(key)))
      headOutput += `<td>${heading}</td>`
    });

    tableHead.innerHTML += `${headOutput}`
  }


  // let itemsUsed = [{
  //   name: 'paddy',
  //   qty: 100,
  //   unit: '%',
  //   rate: 1480,
  //   amount: function () {
  //     return this.qty * this.rate
  //   }
  // }]

  function setTableBody(tableclassName, tableDataArray) {
    let tabelBody = document.querySelector(`.${tableclassName} tbody`)
    let bodyOutput = ""
    tableDataArray.forEach(itemobj => {
      bodyOutput += `<tr>`
      for (const key in itemobj) {
        if (Object.hasOwnProperty.call(itemobj, key)) {
          const value = itemobj[key];
          if (!(typeof itemobj[key] === "function")) {
            bodyOutput += `<td>${value}</td>`
          } else {
            functionOutput = itemobj[key]()
            bodyOutput += `<td>${functionOutput}</td>`
          }
        }
      }
      bodyOutput += `</tr>`
    });
    tabelBody.innerHTML = bodyOutput;
  }

































  function setTableFooter(tableclassName, tableDataArray) {

    let itemsUsedTabelSum = document.querySelector(`.${tableclassName} tfoot`)
    let sumOutput = ""

    tableDataArray
    itemsUsedTabelSum.innerHTML = sumOutput;
  }





}