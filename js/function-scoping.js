const helper = () => {

  const call = (cmp) => {
    cmp.myFunction(2);
  };

  const constructed = {
    call
  };
  return constructed;
};

const concrete = () => {

  const myConst = 1;
  const myFunction = (response) => {
    console.log("response", response);
    console.log("myConst", myConst);
  };

  const constructed = {
    myFunction
  };
  return constructed;
};

const component = concrete();
const actionHelper = helper();

actionHelper.call(component);
