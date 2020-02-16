pragma solidity >=0.4.22 <0.7.0;
contract ContactFactory {
    Contact[] contacts;

    function createContact(
        address _sellerContact,
        address _buyerContact,
        string memory _docmentCode
    ) public {
        Contact newContact = new Contact(
            msg.sender,
            _buyerContact,
            _docmentCode,
            false
        );
        contacts.push(newContact);

    }
    //int id = contractMap.push()-1;

    )
    function getContact(uint256 _Id)
        public
        view
        returns (address, address, string memory, bool)
    {
        return contacts[_Id].getContactData();
    }
    function getAllContact() public view returns (Contact[] memory) {
        return contacts;
    }

}

contract Contact {
    address sellerContact;
    address buyerContac;
    string docmentCode;
    bool validated;

    constructor(
        address _sellerContact,
        address _buyerContac,
        string memory _docmentCode,
        bool _validated
    ) public {
        sellerContact = _sellerContact;
        buyerContac = _buyerContac;
        docmentCode = _docmentCode;
        validated = _validated;
    }
    function getContactData()
        public
        view
        returns (address, address, string memory, bool)
    {
        return (sellerContact, buyerContac, docmentCode, validated);
    }
    function setValidated() public {
        validated = !validated;
    }

}
