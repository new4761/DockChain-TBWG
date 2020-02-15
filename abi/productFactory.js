export const productFactoryAbi = [{
        "constant": false,
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
        "name": "createProduct",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "internalType": "uint256",
            "name": "_Id",
            "type": "uint256"
        }],
        "name": "getProduct",
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
        "inputs": [],
        "name": "getAllProduct",
        "outputs": [{
            "internalType": "contract Product[]",
            "name": "",
            "type": "address[]"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
