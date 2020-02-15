export const productAbi = [{
        "inputs": [{
                "internalType": "address",
                "name": "_ownProduct",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_destination",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_productName",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getProductData",
        "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_location",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_provider",
                "type": "address"
            }
        ],
        "name": "addStage",
        "outputs": [],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "internalType": "string",
                "name": "docID",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "stageID",
                "type": "uint256"
            }
        ],
        "name": "addDocment",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]