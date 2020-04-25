
export const increment = (multiply) => {
  return {
    type: "INC",
    payload: multiply
  }
};

export const decrement = (multiply) => {
  return {
    type: "DEC",
    payload: multiply
  }
};