const numbers = document.querySelectorAll(".integer")
const show_Display = document.querySelector(".first")
const secondNumber_Display = document.querySelector(".secondNum")
const all_operator = document.querySelectorAll(".operator")
const equalBtn = document.getElementById("equal")
const edit_Btn = document.querySelectorAll(".edit")
const dotButton = document.querySelectorAll(".dot-button")

let firstNum = ""
let secondNum = ""
let is_Dot_present = false
let firstNumLength
let secondNum_Length

numbers.forEach((integer) => {
  integer.addEventListener("click", (e) => {
    if (e.target.textContent === "." && !is_Dot_present) {
      is_Dot_present = true
    } else if (e.target.textContent === "." && is_Dot_present) return

    if (show_Display.classList.contains("active")) {
      firstNum += e.target.textContent
      firstNumLength = firstNum.length - 1
      show_Display.textContent = firstNum
    }

    if (!show_Display.classList.contains("active")) {
      // show_Display.textContent = ""
      secondNum += e.target.textContent
      secondNum_Length = secondNum.length - 1
      show_Display.textContent = secondNum
      // secondNum = ''
    }
  })
})

function operations(operator) {
  switch (operator) {
    case "x":
      const answer1 = Number(firstNum) * Number(secondNum)
      console.log(answer1);
      show_Display.textContent = answer1
      firstNum = answer1
      secondNum = ""
      break
    default:
      const answer2 = eval(`${Number(firstNum)}${operator}${Number(secondNum)}`)
      show_Display.textContent = answer2
      firstNum = answer2
      secondNum = ""
      break
  }
}

let operatorArr = [];
let lastOperator = ''

all_operator.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    is_Dot_present = false
    show_Display.classList.remove("active")
    operatorArr.push(e.target.textContent)

    lastOperator = e.target.textContent
    const [firstOperator, secondOperator] = operatorArr.slice(-2)

    if (firstNum && secondNum) {
      if (firstOperator === secondOperator) {
        operations(e.target.textContent)
      }
      if (firstOperator !== secondOperator) {
        operations(firstOperator);
      }
    }
  })
})

function delete_Operation() {
  const activeBtn = document.querySelector(".active")
  if (activeBtn) {
    firstNum = firstNum.slice(0, firstNumLength--)
    show_Display.textContent = firstNum

    if (firstNum.length <= 0) {
      firstNum = "0"
      show_Display.textContent = "0"
    }
    console.log(firstNum);
  } else {
    secondNum = secondNum.slice(0, secondNum_Length--)
    show_Display.textContent = secondNum
    if (secondNum.length <= 0) {
      secondNum = "0"
      show_Display.textContent = 0
    }
  }
}

edit_Btn.forEach((el) => {
  el.addEventListener("click", (e) => {
    // deelte
    if (e.target.id === "delete") {
      delete_Operation()
    }
    //reset
    if (e.target.id === "reset") {
      firstNum = '';
      secondNum = '';
      show_Display.classList.add('active');
      show_Display.textContent = '0'
    }
  })
})
// equal button to get final answer
equalBtn.addEventListener('click' , () => {
  if(firstNum && secondNum) {
    const final_Answer = eval(`${Number(firstNum)}${lastOperator === 'x' ? '*' : lastOperator}${Number(secondNum)}`)

    firstNum = final_Answer
      show_Display.textContent = final_Answer;
      secondNum = ""
  }

})

// dot button
function changeColor_Mode(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12,c13) {
  document.body.style.backgroundColor = c1
  document.querySelector("#keys").style.backgroundColor = c2
  document.getElementById("result").style.backgroundColor = c3
  document.getElementById("result").style.color = c4
  document.getElementById("calc-logo").style.color = c4
  document.querySelectorAll(".all").forEach((el) => {
    el.style.backgroundColor = c5
    el.style.color = c6
    el.style.boxShadow = c7
  })
  document.getElementById("tag").style.color = c4
  document.querySelectorAll(".span").forEach((el) => (el.style.color = c4))
  document.getElementById("mode-detector").style.backgroundColor = c2
  document.querySelectorAll("#equal").forEach((el) => {
    el.style.backgroundColor = c8
    el.style.boxShadow = c9
    el.style.color = c13
  })
  document.querySelectorAll(".edit").forEach((el) => {
    el.style.backgroundColor = c10
    el.style.boxShadow = c11
    el.style.color = c12
  })
  document.querySelector(".dot-active").style.backgroundColor = c8
}

dotButton.forEach((el) => {
  el.addEventListener("click", (e) => {
    document.querySelectorAll(".dot-button").forEach((item) => {
      item.classList.remove("dot-active")
      item.style.backgroundColor = 'transparent'
    })
    e.target.classList.add("dot-active")
    if (e.target.id === "dot2") {
      changeColor_Mode(
        `hsl(0, 0%, 90%)`,
        `hsl(0, 5%, 81%)`,
        `hsl(0, 0%, 93%)`,
        `hsl(60, 10%, 19%)`,
        `hsl(45, 7%, 89%)`,
        `hsl(60, 10%, 19%)`,
        `0px 3px 1px hsl(35, 11%, 61%)`,
        `hsl(25, 98%, 40%)`,
        `0px 3px 1px hsl(25, 99%, 27%)`,
        `hsl(185, 42%, 37%)`,
        `0px 3px 1px hsl(185, 58%, 25%)`,
        `#ffffff`,
        `#ffffff`
      )
    }

    if (e.target.id === "dot1") {
      changeColor_Mode(
        `#3a4764`,
        `#232c43`,
        `#182034`,
        `#ffffff`,
        `hsl(30, 25%, 89%)`,
        `#444b5a`,
        `0px 3px 1px hsl(28, 16%, 65%)`,
        `hsl(6, 63%, 50%)`,
        `0px 3px 1px hsl(6, 70%, 34%)`,
        `hsl(225, 21%, 49%)`,
        `0px 3px 1px hsl(224, 28%, 35%)`,
        `#ffffff`,
        `#ffffff`
      )
    }

    if(e.target.id === 'dot3') {
      changeColor_Mode(
        `hsl(268, 75%, 9%)`,
        `hsl(268, 71%, 12%)`,
        `hsl(268, 71%, 12%)`,
        `hsl(52, 100%, 62%)`,
        `hsl(268, 47%, 21%)`,
        `hsl(52, 100%, 62%)`,
        `0px 3px 1px hsl(290, 70%, 36%)`,
        `hsl(176, 100%, 44%)`,
        `0px 3px 1px hsl(177, 92%, 70%)`,
        `hsl(281, 89%, 26%)`,
        `0px 3px 1px hsl(285, 91%, 52%)`,
        `#ffffff`,
        `hsl(198, 20%, 13%)`


      )
    }
  })
})
