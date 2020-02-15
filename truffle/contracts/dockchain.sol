pragma solidity >=0.4.22 <0.7.0;

contract dockchain {
    address private buyer;
    address private seller;
    address nowProvider;
    uint private harmonize;
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
    mapping(string=>uint) consul;
    //consul["Thai"]=9;

    //consul[] consuls;

    function addConsul(string memory country,uint consulId) public returns (uint consul_id){
        consul[country] = consulId;
        return 1;
    }

    function getConsul(string memory country) public returns (uint) {
        consul[country]++;
        return 1;
    }

    // struct provider {

    // }

    //mapping(address=>provider) Provider;
    //Provider.push(adddress)


    function getBuyer()public returns (address buy) {
       return buyer;
    }
    function getSeller()public returns (address sell) {
       return seller;
    }

    function setBuyer(address buy)public {
       buyer = buy;
    }
    function setSeller(address sell)public {
       seller = sell;
    }

    // function ship(address cargo, address nowProvider, address nextProvider) public {

    // }

    //กงศุล
    // function approve(address memory seller,address memory provider)  {
    //     require(mes.sender == 1);
    //     require(seller==provider);
    //     return true;
    // }

    // //provider
    // function updateShip(address ship) {
    //     require(msg.sender==this.nowProvider);
    //     this.shipId=ship;
    // }

    // //function updateStat()

}