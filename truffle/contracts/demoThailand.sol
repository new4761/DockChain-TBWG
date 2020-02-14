pragma solidity >=0.4.22 <0.7.0;

contract Calculator {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    event diplay(address _from,uint res,uint _value);
    function myPlus(uint _a,uint _b) public returns (uint res ) {
         res = _a + _b;
        return res;
    }
    function myMinus(uint _a,uint _b) public returns (uint res) {
       res = _a - _b;
        return res;
    }
     function hello() public returns (string memory text) {
       text = "WOW";
        return text;
    }

}
