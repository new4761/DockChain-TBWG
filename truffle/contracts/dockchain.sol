pragma solidity >=0.4.22 <0.7.0;

contract Dockchain {
    address private buyer;
    address private seller;
    address nowProvider;
    uint256 private harmonize;
    address shipId;
    address consul_in;
    address consul_des;

    // constructor(address buyers,address provider) public {
    //     buyer = buyers;
    //     seller = msg.sender;
    //     nowProvider = provider;
    //     //consul_in = 1;
    //     //consul_des = 9;
    // }
    mapping(uint256 => Consul) public consul;
    //consul["Thai"]=9;

    //consul[] consuls;
    struct Consul {
        string name;
        uint256 id;
    }
    Consul[] consuls;
    function addConsul(string memory _country, uint256 _consulId) public {
       consuls.push(Consul(_country, _consulId));

    }

    function getConsul(uint256 _consulId) public view returns (string memory) {
  return consuls[_consulId].name;
    }

}
