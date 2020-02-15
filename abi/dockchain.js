export var abi = [{
        "constant": true,
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "consul",
        "outputs": [{
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "internalType": "string",
                "name": "_country",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_consulId",
                "type": "uint256"
            }
        ],
        "name": "addConsul",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "internalType": "uint256",
            "name": "_consulId",
            "type": "uint256"
        }],
        "name": "getConsul",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
