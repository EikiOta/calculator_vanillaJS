
let flag = 2;//0:前回数値入力 1:前回演算子入力 2:初期状態
let pointFlag = 0;//0:小数点見入力 1:小数点入力済

function get_calc(btn) {
  flag = 0;
  switch(btn.value){
    case "=":
      document.calculator.display.value = eval(document.calculator.display.value);
      break;
    case "%":
      document.calculator.display.value = document.calculator.display.value / 100;
      break;
    default:
      document.calculator.display.value += btn.value;
      break;
  }
}
  
  function four_arithmetic_operations(btn){
    if(flag == 0){
      switch(btn.value){
        case "×":
          btn.value = "*";
          break;
        case "÷":
          btn.value = "/";
          break;
      }
    
    document.calculator.display.value += btn.value;
    document.calculator.multi_btn.value = "×";
    document.calculator.div_btn.value = "÷";
    flag = 1;
    pointFlag = 0;
    }
  }
  
  function all_clear(){
    document.calculator.display.value = "";
    flag = 2;
    pointFlag = 0;
  }

  function brackets(btn){
    document.calculator.display.value += btn.value;
    flag = 2;
  }
  function point(btn){
    if(pointFlag == 0){
      document.calculator.display.value += btn.value;
      pointFlag = 1;
    }
  }