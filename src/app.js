        var batch;
        if(typeof web3!=="undefined"){
                web3=new Web3(ethereum);
        } 
        else{
            web3=new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
        } 
        const contract = new web3.eth.Contract( [
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "drugName",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "drugQuantity",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "dateOfManufacture",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "dateOfExpire",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "fileaddress",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "verified",
                "type": "bool"
              },
              {
                "indexed": false,
                "name": "activity",
                "type": "uint8"
              }
            ],
            "name": "addDrugs",
            "type": "event",
            "signature": "0x436a57fae6c0adfb3538d6f8999ebd1c40d8f870d1552d4a8a69097d30be4c9e"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "origmanufacturer",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "origmantimestamp",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "origdistributor",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "origdistimestamp",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "origlogistic",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "origlogtimestamp",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "origenduser",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "origusertimestamp",
                "type": "uint256"
              }
            ],
            "name": "manageSupplychain",
            "type": "event",
            "signature": "0x0f09c3dfa2e3af7b40c7b5be6fe6ed1f408ea0fd76c28b3bf02657d37b46f38b"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "manfloc",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "distloc",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "logloc",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "userloc",
                "type": "string"
              }
            ],
            "name": "manageLocation",
            "type": "event",
            "signature": "0x727f43905e902a01e4d20b4eaab649c26f74ee61cabf65c99005f28727b26508"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_drugName",
                "type": "string"
              },
              {
                "name": "_drugQuantity",
                "type": "string"
              },
              {
                "name": "_dateOfManufacture",
                "type": "string"
              },
              {
                "name": "_dateOfExpire",
                "type": "string"
              },
              {
                "name": "_fileaddress",
                "type": "string"
              },
              {
                "name": "_verified",
                "type": "bool"
              },
              {
                "name": "batchno",
                "type": "string"
              }
            ],
            "name": "AddDrug",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xd213cf22"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              }
            ],
            "name": "retrieveDrug",
            "outputs": [
              {
                "name": "",
                "type": "string"
              },
              {
                "name": "",
                "type": "string"
              },
              {
                "name": "",
                "type": "string"
              },
              {
                "name": "",
                "type": "string"
              },
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x5c013927"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              }
            ],
            "name": "retrieveDrug1",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              },
              {
                "name": "",
                "type": "uint8"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x5b70e90a"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              },
              {
                "name": "loc",
                "type": "string"
              }
            ],
            "name": "addManufactuer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x5718d9c8"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              },
              {
                "name": "loc",
                "type": "string"
              }
            ],
            "name": "addDistributor",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xdc2fdb14"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              },
              {
                "name": "loc",
                "type": "string"
              }
            ],
            "name": "addLogistic",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x3c77f219"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              },
              {
                "name": "loc",
                "type": "string"
              }
            ],
            "name": "addEndUser",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x19357f57"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              }
            ],
            "name": "returnRolesAddresses",
            "outputs": [
              {
                "name": "",
                "type": "address"
              },
              {
                "name": "",
                "type": "address"
              },
              {
                "name": "",
                "type": "address"
              },
              {
                "name": "",
                "type": "address"
              },
              {
                "name": "",
                "type": "uint256"
              },
              {
                "name": "",
                "type": "uint256"
              },
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x8ecd2f0b"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              }
            ],
            "name": "returnRolesTimeStamp",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              },
              {
                "name": "",
                "type": "uint256"
              },
              {
                "name": "",
                "type": "uint256"
              },
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x0e972e6d"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              }
            ],
            "name": "returnRolesStatus",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              },
              {
                "name": "",
                "type": "bool"
              },
              {
                "name": "",
                "type": "bool"
              },
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xc7ce7e88"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              }
            ],
            "name": "returnRolesLocation",
            "outputs": [
              {
                "name": "",
                "type": "string"
              },
              {
                "name": "",
                "type": "string"
              },
              {
                "name": "",
                "type": "string"
              },
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x68cc425a"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              }
            ],
            "name": "addSecretCode",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xfe8ac4fd"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              }
            ],
            "name": "generateSecretCode",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xb81f20df"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "batchno",
                "type": "string"
              },
              {
                "name": "code",
                "type": "uint256"
              }
            ],
            "name": "stopSupplychain",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xa5fe211c"
          }
        ], "0x9e0F16D25E4EBD749AF3C971c2FDB3CF875E5207");   
function add_drug(){
  var dname=document.getElementById("dname").value;
  var batchno=document.getElementById("batchno").value;
  var quantity=document.getElementById("quantity").value;
  var manfdate=document.getElementById("manfdate").value;
  var expdate=document.getElementById("expdate").value; 
  batch=batchno; 
  addDrug(dname,batchno,quantity,manfdate,expdate);
}  
async function toUint8Array(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      resolve(new Uint8Array(event.target.result));
    });
    reader.addEventListener('error', reject);
    reader.readAsArrayBuffer(file);
  });
}
async function addDrug(dname,batchno,quantity,manfdate,expdate){
  const node = await Ipfs.create()
  const file = document.querySelector('input[type="file"]').files[0]
  const buffer = await toUint8Array(file)
  const results = await node.add(buffer)
  var cid=results.path; 
  // const file1 = await node.cat(cid)
  // const link = document.createElement('a')
  // link.href = URL.createObjectURL(new Blob([file1]))
  // link.download = 'downloadable-file.txt'
  // link.innerHTML = 'Download file'
  // document.body.appendChild(link) 
  const accounts=await window.ethereum.request({method:'eth_requestAccounts'}); 
  const account=accounts[0];
  const tx=await contract.methods.AddDrug(dname,quantity,manfdate,expdate,cid,true,batchno).send({from:account}); 
  document.getElementById("info").innerHTML="*Drug added!"
  document.getElementById("manfbtn").disabled = false;
} 
//Validate Manufacturer
function add_manufacturer(){
  function getLocation() { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      add_Manufacturer("Geolocation is not supported by this browser.",batch);
    }
  }
  function showPosition(position) {
    add_Manufacturer("Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude,batch);
  }  
  getLocation();
} 
async function add_Manufacturer(location,batchno){
  const accounts=await window.ethereum.request({method:'eth_requestAccounts'}); 
  const account=accounts[0];
  const tx=await contract.methods.addManufactuer(batchno,location).send({from:account});     
  var qrCode = new QRCode(document.getElementById("qrcode"),{
  width: 128,
  height: 128,
  colorDark: "black",
  colorLight: "white",
  correctLevel: QRCode.CorrectLevel.H}); //Initializing the library
  qrCode.makeCode(batchno); 
  document.getElementById("info1").innerHTML="*Save QR code"
}
//Validate Distributor
function add_distributor(text){
  function getLocation() { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      add_Distributor("Geolocation is not supported by this browser.",text);
    }
  }
  function showPosition(position) {
    add_Distributor("Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude,text);
  }  
  getLocation();
}
async function add_Distributor(location,batchno){
  const accounts=await window.ethereum.request({method:'eth_requestAccounts'}); 
  const account=accounts[0]; 
  const tx=await contract.methods.addDistributor(batchno,location).send({from:account});     
}
//Validate Logistic
function add_logistic(text){
  function getLocation() { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      add_Logistic("Geolocation is not supported by this browser.",text);
    }
  }
  function showPosition(position) {
    add_Logistic("Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude,text);
  }  
  getLocation();
}
async function add_Logistic(location,batchno){
  const accounts=await window.ethereum.request({method:'eth_requestAccounts'}); 
  const account=accounts[0];
  const tx=await contract.methods.addLogistic(batchno,location).send({from:account});     
} 

//Validate Enduser
function add_user(text){
  function getLocation() { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      add_User("Geolocation is not supported by this browser.",text);
    }
  }
  function showPosition(position) {
    add_User("Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude,text);
  }  
  getLocation();
}
async function add_User(location,batchno){
  const accounts=await window.ethereum.request({method:'eth_requestAccounts'}); 
  const account=accounts[0];
  const tx=await contract.methods.addEndUser(batchno,location).send({from:account});     
} 
function getDetails(batchno){
  _getDetails(batchno);
} 
async function _getDetails(batchno){
  contract.methods.retrieveDrug(batchno).call().then(function(result) {
    document.getElementById("drugdetails").innerHTML="Name: "+result[0]+"<br>"+"Quantity: "+result[1]+"<br>"+"Date of Manufacture: "+result[2]+"<br>"+"Date of Expire: "+result[3]+"<br>"+"File Address: "+result[4];
  });   
  contract.methods.retrieveDrug1(batchno).call().then(function(result) { 
    if(result[1]==0){
      result[1]="Active";
    } 
    else{
      result[1]="Inactive";
    }
    document.getElementById("drugdetails1").innerHTML="Verified: "+result[0]+"<br>"+"Activity: "+result[1];
  });    
  contract.methods.returnRolesStatus(batchno).call().then(function(result) {
    console.log(result);
      if(result[0]){
        document.getElementById("manficon").style.color="#6BD0FF";
        document.getElementById("manficon").style.borderColor="#6BD0FF";
      }
      if(result[1]){
        document.getElementById("disticon").style.color="#6BD0FF";
        document.getElementById("disticon").style.borderColor="#6BD0FF";
      }
      if(result[2]){
        document.getElementById("logicon").style.color="#6BD0FF";
        document.getElementById("logicon").style.borderColor="#6BD0FF";
      }
      if(result[3]){
        document.getElementById("usericon").style.color="#6BD0FF";
        document.getElementById("usericon").style.borderColor="#6BD0FF";
      }
  }); 
} 
function displaydetails(batchno){
  _displaydetails(batchno);  
}
async function _displaydetails(batchno){
  getDetails(batchno);
  contract.methods.returnRolesLocation(batchno).call().then(function(result) {
    console.log(result);
    document.getElementById("manloc").innerHTML="Location: "+result[0]+"<br>";
    document.getElementById("suploc").innerHTML="Location: "+result[1]+"<br>";
    document.getElementById("logloc").innerHTML="Location: "+result[2]+"<br>";
    document.getElementById("userloc").innerHTML="Location: "+result[3]+"<br>";
  });
  contract.methods.returnRolesTimeStamp(batchno).call().then(function(result) { 
let options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false 
};
let dateObj1 = new Date(result[0] * 1000);
let time1 = dateObj1.toLocaleDateString('en-US', options);
document.getElementById("mants").innerHTML="Timestamp: "+time1+"<br>";
let dateObj2 = new Date(result[1] * 1000);
let time2 = dateObj2.toLocaleDateString('en-US', options);
document.getElementById("supts").innerHTML="Timestamp: "+time2+"<br>";
let dateObj3 = new Date(result[2] * 1000);
let time3 = dateObj3.toLocaleDateString('en-US', options);
document.getElementById("logts").innerHTML="Timestamp: "+time3+"<br>"; 
let dateObj4 = new Date(result[3] * 1000);
let time4 = dateObj4.toLocaleDateString('en-US', options);
document.getElementById("userts").innerHTML="Timestamp: "+time4+"<br>";
});
  contract.methods.returnRolesAddresses(batchno).call().then(function(result) {
    console.log(result);
    document.getElementById("manadd").innerHTML="Address: "+result[0]+"<br>";
    document.getElementById("supadd").innerHTML="Address: "+result[1]+"<br>";
    document.getElementById("logadd").innerHTML="Address: "+result[2]+"<br>";
    document.getElementById("useradd").innerHTML="Address: "+result[3]+"<br>";
  });
  contract.methods.returnRolesStatus(batchno).call().then(function(result) {
    console.log(result);
    document.getElementById("manvfd").innerHTML="Verified: "+result[0]+"<br>";
    document.getElementById("supvfd").innerHTML="Verified: "+result[1]+"<br>";
    document.getElementById("logvfd").innerHTML="Verified: "+result[2]+"<br>";
    document.getElementById("uservfd").innerHTML="Verified: "+result[3]+"<br>";
  });
} 
function generatecode(batchno,mail){
  _generatecode(batchno,mail);
}
async function _generatecode(batchno,mail){
  const accounts=await window.ethereum.request({method:'eth_requestAccounts'}); 
  const account=accounts[0];
  const tx=await contract.methods.addSecretCode(batchno).send({from:account}); 
  contract.methods.generateSecretCode(batchno).call().then(function(result) {
    document.getElementById("info1").innerHTML="*Secret code has been generated successfully!"+"<br>"+"Secret code: "+result+"<br>"+"Mail sent successfully!";
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "dharshu1810@gmail.com",
      Password: "00670F2CA1BDD38CFCA2D55B09EB8F29DFE2",
      To: mail,
      From: "dharshu1810@gmail.com",
      Subject: "Verification Code",
      Body: "The secret code generated for batch number: "+batchno+" is "+result+"<br>Do enter this code without any trailing space to complete the supplychain.",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  });     
}
function _endchain(text,code){
  endsupplychain(text,code);
}
async function endsupplychain(text, code){
  const accounts=await window.ethereum.request({method:'eth_requestAccounts'}); 
  const account=accounts[0];
  const tx=await contract.methods.stopSupplychain(text,code).send({from:account}); 
  alert("Supplychain has been terminated successfully!"); 
}