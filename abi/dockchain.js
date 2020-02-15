export var abi =[
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "country",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "consulId",
          "type": "uint256"
        }
      ],
      "name": "addConsul",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "consul_id",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "country",
          "type": "string"
        }
      ],
      "name": "getConsul",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getBuyer",
      "outputs": [
        {
          "internalType": "address",
          "name": "buy",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getSeller",
      "outputs": [
        {
          "internalType": "address",
          "name": "sell",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "buy",
          "type": "address"
        }
      ],
      "name": "setBuyer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "sell",
          "type": "address"
        }
      ],
      "name": "setSeller",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]