pragma solidity >=0.4.22 <0.7.0;
contract Provider {
    mapping (string => address) nameToProvider;
    

    function addProvider(string memory name,address pAddress) public {
      nameToProvider[name] = pAddress;
    }

     function approveOrder(uint docId)// bind seller

  function rejectOrder(uint docId)//bind seller




}
