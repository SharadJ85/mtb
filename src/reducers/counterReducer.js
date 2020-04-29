const CounterReducer=(state=0,action)=>{
  switch (action.type) {
    case 'INC':
      return action.payload?(state*action.payload)+1:state + 1;
    case 'DEC':
      return action.payload?(state*action.payload)-1:state - 1;
    default:
      return state
  }
};

export default CounterReducer;