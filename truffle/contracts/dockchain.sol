pragma solidity >=0.4.22 <0.7.0;

import "./Product.sol" ;
import "./Contact.sol" ;

contract Dockchain is ProductFactory,ContactFactory {

  function moveOrder(address nerProvider);

  function updateOrder(string destination);

  function addDocumment(string doc,uint id); //bind seller

  function checkDocumentStatus(uint id) //bind seller

  function checkOrderStatus(address provider) //, CALL PROVIDER

  function placeOrder(address provider,string productName);

  function approveOrder(uint docId)// bind seller, CALL PROVIDER

  function rejectOrder(uint docId)//bind seller, CALL PROVIDER


}
