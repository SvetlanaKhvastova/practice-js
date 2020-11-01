//Калькулятор

const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnMult = document.getElementById("mult");
const btnShare = document.getElementById("share");
const first = document.getElementById("firsNum");
const second = document.getElementById("secondNum");
const result = document.getElementById("result");

class Calc {
  constructor(id) {
    this.id = id;
  }
  toGetNumbers(tag1, tag2) {
    this.firstValue = +prompt("Введите первое значение");
    this.secondValue = +prompt("Введите второе значение");
    tag1.textContent = this.firstValue;
    tag2.textContent = this.secondValue;
  }

  toSum(place, tag1, tag2) {
    this.toGetNumbers(tag1, tag2);
    let total = this.firstValue + this.secondValue;
    this.toShowResult(place, total);
  }

  toSub(place, tag1, tag2) {
    this.toGetNumbers(tag1, tag2);
    let total = this.firstValue - this.secondValue;
    this.toShowResult(place, total);
  }

  toMult(place, tag1, tag2) {
    this.toGetNumbers(tag1, tag2);
    let total = this.firstValue * this.secondValue;
    this.toShowResult(place, total);
  }

  toShare(place, tag1, tag2) {
    this.toGetNumbers(tag1, tag2);
    let total = this.firstValue / this.secondValue;
    this.toShowResult(place, total);
  }

  toShowResult(place, value) {
    // alert(`Результат операции ${value}`);
    place.textContent = value;
  }
}

const myCalc = new Calc(1);
console.log(myCalc);

btnPlus.addEventListener("click", () => {
  myCalc.toSum(result, first, second);
});

btnMinus.addEventListener("click", () => {
  myCalc.toSub(result, first, second);
});

btnMult.addEventListener("click", () => {
  myCalc.toMult(result, first, second);
});

btnShare.addEventListener("click", () => {
  myCalc.toShare(result, first, second);
});
