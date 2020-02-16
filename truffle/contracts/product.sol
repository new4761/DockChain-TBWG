pragma solidity >=0.4.22 <0.7.0;
contract ProductFactory {
    Product[]  products ;


    function createProduct(
        address _ownProduct,
        address _provider,
        string memory _productName
    ) public
     {
        Product newProduct = new Product(
            _ownProduct,
            _provider,
            _productName
        );
      products.push(newProduct);

    }
    function getProduct(uint _Id )  public view returns(address,address,string memory) {

 return products[_Id].getProductData();
    }
    function getAllProduct( )  public view returns(Product[] memory) {

 return  products;
    }

}

contract Product {
    address ownProduct;
    address provider;
    string productName;

    // struct Document {
    //   string name;
    //   uint documentId;
    // }
    ProductState[] productStages;
    mapping(uint256 => string) DocumentsOf;
    //mapping(uint256 => ProductState) ProductStateeof;
    struct ProductState {
        string name;
        string location;
        address provider;
        string[] doscumentIDs;
    }

    constructor(
        address _ownProduct,
        address _provider,
        string memory _productName
    ) public {
        ownProduct = _ownProduct;
        provider = _provider;
        productName = _productName;
    }
 function getProductData()public view returns(address,address,string memory){
     return (ownProduct,provider,productName);
 }


    function addStage (
        string memory _name,
        string memory _location,
        address _provider
    ) public  pure{
        ProductState memory pd;
        pd.name = _name;
        pd.location = _location;
        pd.provider = _provider;

    }

function setProvider(address newProvider) public {
provider = newProvider;

}
    function addDocment(string memory docID, uint256 stageID) public {
        productStages[stageID].doscumentIDs.push(docID);

    }

}
