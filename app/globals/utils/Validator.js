const checkValueIsNumberOrNot = (inputValue) => {
  //Handler called on button click
  if (isNaN(inputValue)) {
    //if input is not a number then here
    alert('It is not a Number');
  } else {
    //if input is number then here
    alert('It is a Number');
  }
};
export const isValid = valid => checkValueIsNumberOrNot;
