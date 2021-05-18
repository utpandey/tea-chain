//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

contract Teachain {

    struct TeaBatch {
        uint256 batchId;
        FarmerEntry farmerEntry;
        ManufacturerEntry manufacturerEntry;
        WholesalerEntry wholesalerEntry;
        DistributerEntry distributerEntry;
        RetailerEntry retailerEntry;
    }

    struct FarmerEntry {
        address farmerAddress;
        string farmerName;
        string teaSpecies;
        string teaLocation;
        uint256 harvestingDate;
        uint8 flushNumber;
        bool isVerified;
    }

    struct ManufacturerEntry {
        address manufacturerAddress;
        string manufacturerName;
        string teaType;
        uint256 receivingDate;
        uint256 witheringDuration;
        bool isVerified;
    }

    struct WholesalerEntry {
        address wholesalerAddress;
        string wholesalerName;
        uint256 receivingDate;
        bool isVerified;
    }

    struct DistributerEntry {
        address distributerAddress;
        string distributerName;
        uint256 receivingDate;
        uint32 storageTemperature;
        bool isVerified;
    }

    struct RetailerEntry {
        address retailerAddress;
        string retailerName;
        uint256 receivingDate;
        bool isVerified;
    }

    event BatchCreated(uint256 _batchId);

    mapping(address => uint256[]) public batches;
    mapping(uint256 => TeaBatch) public teaBatches;

    constructor() {
        createBatch();
    }


    /// @param _batchId uint256;
    /// @param _addr address;
    /// @param _farmerName string;
    /// @param _teaSpecies string;
    /// @param _teaLocation string;
    /// @param _harvestingDate uint256;
    /// @param _flushNumber uint8;
    function updateFarmerEntry(uint256 _batchId, address _addr, string memory _farmerName, string memory _teaSpecies, string memory _teaLocation, uint256 _harvestingDate, uint8 _flushNumber) public {
        FarmerEntry memory _farmerEntry = FarmerEntry(_addr, _farmerName, _teaSpecies, _teaLocation, _harvestingDate, _flushNumber, false); 
        teaBatches[_batchId].farmerEntry = _farmerEntry;
        batches[_addr].push(_batchId);
    }

    /// @param _batchId uint256;
    /// @param _addr address;
    /// @param _manufacturerName string;
    /// @param _teaType string;
    /// @param _receivingDate uint256;
    /// @param _witheringDuration uint256;
    function updateManufcturerEntry(uint256 _batchId, address _addr, string memory _manufacturerName, string memory _teaType, uint256 _receivingDate, uint256 _witheringDuration) public {
        ManufacturerEntry memory _manufacturerEntry = ManufacturerEntry(_addr, _manufacturerName, _teaType, _receivingDate, _witheringDuration, false); 
        teaBatches[_batchId].manufacturerEntry = _manufacturerEntry;
        batches[_addr].push(_batchId);
    }

    /// @param _batchId uint256;
    /// @param _addr address;
    /// @param _wholesalerName string;
    /// @param _receivingDate uint256;
    function updateWholesalerEntry(uint256 _batchId, address _addr, string memory _wholesalerName, uint256 _receivingDate) public {
        WholesalerEntry memory _wholesalerEntry = WholesalerEntry(_addr, _wholesalerName, _receivingDate, false); 
        teaBatches[_batchId].wholesalerEntry = _wholesalerEntry;
        batches[_addr].push(_batchId);
    }

    /// @param _batchId uint256;
    /// @param _addr address;
    /// @param _distributerName string;
    /// @param _receivingDate uint256;
    /// @param _storageTemperature uint32;
    function updateDistributerEntry(uint256 _batchId, address _addr, string memory _distributerName, uint256 _receivingDate, uint32 _storageTemperature) public {
        DistributerEntry memory _distributerEntry = DistributerEntry(_addr, _distributerName, _receivingDate, _storageTemperature, false); 
        teaBatches[_batchId].distributerEntry = _distributerEntry;
        batches[_addr].push(_batchId);
    }

    /// @param _batchId uint256;
    /// @param _addr address;
    /// @param _retailerName string;
    /// @param _receivingDate uint256;
    function updateRetailerEntry(uint256 _batchId, address _addr, string memory _retailerName, uint256 _receivingDate) public {
        RetailerEntry memory _retailerEntry = RetailerEntry(_addr, _retailerName, _receivingDate, false); 
        teaBatches[_batchId].retailerEntry = _retailerEntry;
        batches[_addr].push(_batchId);
    }

    /// @param _addr address;
    /// @return _teaBatches TeaBatch[];
    function getBatches(address _addr) public view returns (TeaBatch[] memory) {
        uint256[] memory batchIds = batches[_addr];
        TeaBatch[] memory _teaBatches = new TeaBatch[](batchIds.length);
        for(uint i = 0; i < batchIds.length; i++) {
            _teaBatches[i] = teaBatches[batchIds[i]];
        }
        return _teaBatches;
    }

    function createBatch() public {
        uint256 _id = rand();
        TeaBatch memory teaBatch;
        teaBatch.batchId = _id;
        teaBatches[_id] = teaBatch;
        emit BatchCreated(_id);
    }
}

/// @return _id uint256
function rand() view returns(uint256) {
    uint256 seed = uint256(keccak256(abi.encodePacked(
        block.timestamp + block.difficulty +
        ((uint256(keccak256(abi.encodePacked(block.coinbase)))) / (block.timestamp)) +
        block.gaslimit + 
        ((uint256(keccak256(abi.encodePacked(msg.sender)))) / (block.timestamp)) +
        block.number
    )));

    return (seed - ((seed / 1000) * 1000));
}
