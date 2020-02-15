pragma solidity >=0.4.22 <0.7.0;

contract maya {
    uint digit = 16;

    function turnme() public view returns (uint) {
        return digit;
    }

}