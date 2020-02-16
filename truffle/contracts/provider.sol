import './Product.sol';

pragma solidity >=0.4.22 <0.7.0;
contract Provider {
    //Product[] providerHolding;
    mapping (string => address) nameToProvider;
    //mapping (address => uint) providerToPid;
    mapping (uint => Product) pidToProduct; 
    mapping (uint => Product) docIdToProduct;

  function addProvider(string memory name,address pAddress) public {
    nameToProvider[name] = pAddress;
  }

  function approveOrder(uint docId, uint pid,string memory provider,string memory pName,string memory location) public returns (uint){
    //string provider for "Who accept"
    //assume doc was checked by provider and accept
    //docId will swap to pid when approve by provider
    //pid first n bits use for provider and last m digit for product
    pidToProduct[pid] =  docIdToProduct[docId];
    pidToProduct[pid].addStage(pName,location,nameToProvider[provider]);
    return pid;
  }

  function rejectOrder(uint docId) public returns (int){
    //assume doc was checked by provider and reject
    return 1;
  }

  function checkOrderStatus(uint pid) public returns(address,address,string memory){
    return pidToProduct[pid].getProductData();
  }

  function placeOrder(string memory  provider, string memory pName, uint docId) public {
    //bind product with docId till being accepted by provider
    docIdToProduct[docId] = new Product(msg.sender, nameToProvider[provider],pName);

  }



}
