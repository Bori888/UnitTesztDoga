function tokeletesE(a) {
    if (a === undefined){
        return "Nincs paraméter"
    }
    if (arguments.length>1){
        return "Egynél több paraméter"
    }
    if (isNaN(a)){
        return "Nem szám"
    }
    a = parseInt(a)
    if (a<=0){
        return "Pozitív szám csak a bemenet"
    }
    if(a % 2 == 1){
        return false}
    if (a){
        return true
    }
    if (
    !(
      isFinite(Number(a)) &&
      isFinite(eval(Number(a)).toFixed(8))
    )
  )
    return "Túlcsordulás";
    return Number(a);
}

function TokeletesSzamok(n) {
    const LISTA = [];
    let index = 1;
    while (index <= n) {
      LISTA.push(tokeletesE(index));
      index++;
    }
    return LISTA.join(", ");
  }
