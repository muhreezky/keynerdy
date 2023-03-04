import { useNavigate } from "react-router-dom";

function Navigate(){
  function init() {
    return useNavigate();
  }
  
  console.log(init());
  return init();
}

export default Navigate;