import * as actionTypes from "../actions/actionTypes";

//Gelen aksiyona göre işlem yapılıor. Burada apiye falan bağlanılmaz. sadece basit redueser işleri yapılır.
//Zamanla bu redourserlarımız artıcaktır. PRoduct, category vs. Bunun için resucerleri index js de topluyoruz. 
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return ( state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (state + action.payload);
    default:
      return state;
  }
};
export default counterReducer;
