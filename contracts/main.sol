pragma solidity ^0.5.0; 
    
contract main{  
    address origmanufacturer; 
    address origdistributor; 
    address origlogistic; 
    address origenduser; 
    uint origmantimestamp;
    uint origdistimestamp;
    uint origlogtimestamp;
    uint origusertimestamp;

    //Tracks whether the drug is active or inactive in supplychain
    enum drugActivity{
        Active, 
        Inactive
    } 

    //Drug details
    struct Drug{
            string drugName;
            string drugQuantity; 
            string dateOfManufacture; 
            string dateOfExpire;
            string companyName;
            string companyAddress; 
            bool verified;
            drugActivity activity;  
        }  
    mapping(string=>Drug) drugDetail;      

    mapping(string=>uint) secretCode;

     //Event to add drug to blockchain 
    event addDrugs(string drugName, string drugQuantity, string dateOfManufacture, string dateOfExpire, string companyName, string companyAddress, bool verified, drugActivity activity);


    //Tracks the status of drug at each actor role, "true" if the drug has reached the particular actor role else "false"
     struct DrugTrack{
        bool manufacturer;
        bool distributor; 
        bool logisticreg; 
        bool enduser;
    }  

    //Address of actor roles if the drug has reached the particular actor role
    struct supplyChain{
        address _manufacturer; 
        uint _mantimestamp;
        address _distributor; 
        uint _distimestamp;
        address _logistics; 
        uint _logtimestamp;
        address _enduser;
        uint _usertimestamp;
    } 

    //batch no linked to Structure drugTrack
    mapping(string=>DrugTrack) drugTrack; 

    //batch no linked to Structure supplychain
    mapping(string=>supplyChain) supplychain; 

    //Event is triggered to add address of particular actor role when drug is reached
    //This event handles struct supplychain
    event manageSupplychain(address origmanufacturer, uint origmantimestamp, address origdistributor, uint origdistimestamp, address origlogistic, uint origlogtimestamp, address origenduser, uint origusertimestamp);
    
    //Event to add drug to blockchain 
    event addDrug(string drugName, string drugQuantity, string dateOfManufacture, string dateOfExpire, string companyName, string companyAddress, bool verified, drugActivity activity, string batchno);

    function AddDrug(string memory _drugName, 
    string memory _drugQuantity, 
    string memory _dateOfManufacture, 
    string memory _dateOfExpire, 
    string memory _companyName, 
    string memory _companyAddress, 
    bool _verified, 
    drugActivity activity, 
    string memory batchno) public{
        drugDetail[batchno]= Drug(_drugName,_drugQuantity,_dateOfManufacture,_dateOfExpire,_companyName,_companyAddress,_verified,drugActivity.Active);
        emit addDrugs(_drugName, _drugQuantity, _dateOfManufacture, _dateOfExpire, _companyName, _companyAddress, _verified, drugActivity.Active);
    } 

    function retrieveDrug(string memory batchno) public view returns(string memory, string memory , string memory, string memory, string memory, string memory){
        return (drugDetail[batchno].drugName, drugDetail[batchno].drugQuantity, drugDetail[batchno].dateOfManufacture, drugDetail[batchno].dateOfExpire, drugDetail[batchno].companyName, drugDetail[batchno].companyAddress);
    } 
    function retrieveDrug1(string memory batchno) public view returns(bool, drugActivity){
        return (drugDetail[batchno].verified, drugDetail[batchno].activity);
    }    
    //To add manufatuer to supplychain 
    function addManufactuer(string memory batchno) public{
        address manufacturerAddress=msg.sender; 
        if(manufacturerAddress != address(0)){
            _addManufactuer(manufacturerAddress,batchno);
        }
    }
    function _addManufactuer(address man_Address, string memory batchno) private{
        origmanufacturer=man_Address; 
        origmantimestamp=block.timestamp;
        supplychain[batchno]=supplyChain(origmanufacturer,origmantimestamp,origdistributor,origdistimestamp,origlogistic,origlogtimestamp,origenduser,origusertimestamp); 
        drugTrack[batchno].manufacturer=true; 
        emit manageSupplychain(origmanufacturer,origmantimestamp,origdistributor,origdistimestamp,origlogistic,origlogtimestamp,origenduser,origusertimestamp);
    }   
    
    //To add distributor to supplychain 
    function addDistributor(string memory batchno) public{
        address distributorAddress=msg.sender; 
        if(distributorAddress != address(0)){
            _addDistributor(distributorAddress,batchno);
        }
    }
    function _addDistributor(address dis_Address, string memory batchno) private{
        origdistributor=dis_Address; 
        origdistimestamp=block.timestamp;
        supplychain[batchno]=supplyChain(origmanufacturer,origmantimestamp,origdistributor,origdistimestamp,origlogistic,origlogtimestamp,origenduser,origusertimestamp); 
        drugTrack[batchno].distributor=true;
        emit manageSupplychain(origmanufacturer,origmantimestamp,origdistributor,origdistimestamp,origlogistic,origlogtimestamp,origenduser,origusertimestamp);
    }   

    //To add logistic to supplychain 
    function addLogistic(string memory batchno) public{
        address logisticAddress=msg.sender; 
        if(logisticAddress != address(0)){
            _addLogistic(logisticAddress,batchno);
        }
    }
    function _addLogistic(address logi_Address, string memory batchno) private{
        origlogistic=logi_Address;
        origlogtimestamp=block.timestamp;
        supplychain[batchno]=supplyChain(origmanufacturer,origmantimestamp,origdistributor,origdistimestamp,origlogistic,origlogtimestamp,origenduser,origusertimestamp); 
        drugTrack[batchno].logisticreg=true;
        emit manageSupplychain(origmanufacturer,origmantimestamp,origdistributor,origdistimestamp,origlogistic,origlogtimestamp,origenduser,origusertimestamp);
    }   

    //To add endUser to supplychain 
    function addEndUser(string memory batchno) public{
        address endUserAddress=msg.sender; 
        if(endUserAddress != address(0)){
            _addEndUser(endUserAddress,batchno);
        }
    }
    function _addEndUser(address enduser_Address, string memory batchno) private{
        origenduser=enduser_Address;
        origusertimestamp=block.timestamp;
        supplychain[batchno]=supplyChain(origmanufacturer,origmantimestamp,origdistributor,origdistimestamp,origlogistic,origlogtimestamp,origenduser,origusertimestamp); 
        drugTrack[batchno].enduser=true;
        emit manageSupplychain(origmanufacturer,origmantimestamp,origdistributor,origdistimestamp,origlogistic,origlogtimestamp,origenduser,origusertimestamp);
    }   

    //Return Address added to supplychain for particular batchno
    function returnRolesAddresses(string memory batchno) public view returns(address,address,address,address,uint,uint,uint){
        return (supplychain[batchno]._manufacturer,supplychain[batchno]._distributor,supplychain[batchno]._logistics,supplychain[batchno]._enduser,supplychain[batchno]._mantimestamp,supplychain[batchno]._distimestamp,supplychain[batchno]._logtimestamp);
    } 

    //Return Timestamp of each role created
    function returnRolesTimeStamp(string memory batchno) public view returns(uint,uint,uint,uint){
        return (supplychain[batchno]._mantimestamp,supplychain[batchno]._distimestamp,supplychain[batchno]._logtimestamp,supplychain[batchno]._usertimestamp);
    }

    //Return Status(true/false) added to supplychain for particular batchno
    function returnRolesStatus(string memory batchno) public view returns(bool, bool, bool, bool){
        return (drugTrack[batchno].manufacturer,drugTrack[batchno].distributor,drugTrack[batchno].logisticreg,drugTrack[batchno].enduser);
    } 
    function addSecretCode(string memory batchno)public{
        uint _secretCode=uint(keccak256(abi.encodePacked(block.difficulty,block.timestamp)));
        secretCode[batchno]=_secretCode; 
    } 
    function generateSecretCode(string memory batchno) public view returns(uint){
        return secretCode[batchno];
    }
    function stopSupplychain(string memory batchno, uint code) public{
       if(secretCode[batchno] == code){
           drugDetail[batchno].activity=drugActivity.Inactive;
       } 
    } 
}