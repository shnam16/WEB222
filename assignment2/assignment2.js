/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
/*********************************************************************************
* WEB222 – Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Seung Ho Nam Student ID: shnam Date: 10/08/2018
*
********************************************************************************/ 

/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];




 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

var CustomerDB = {

    customers: [],
    addresses: [],
    stores: []
}

CustomerDB.insertData = function(allData){
  for(var i = 0; i < allData.length; i++){
  
    switch (allData[i].type){
        case "customer":
            this.addCustomer(allData[i].data);
            break;
        case "store":
            this.addStore(allData[i].data);
            break;
        case "address":
            this.addAddress(allData[i].data);
            break;
    }
      
  }
    
}
    
/**********************************
*         Customer Methods        *
**********************************/
    CustomerDB.addCustomer = function(customerObj){
        customerObj.add_date = new Date();
        this.customers.push({type: "customer", data: customerObj});
    }
    
    CustomerDB.outputCustomerById = function(customer_id){
        for(var i = 0; i < this.customers.length; i++){
            var customerObj = this.customers[i].data;
            if(customerObj["customer_id"] == customer_id){
               var j = this.getAddressById(this.customers[i].data.address_id);
            console.log("Customer " + customer_id + ": " +  this.customers[i].data.first_name + " " + this.customers[i].data.last_name + "(" + this.customers[i].data.email + ")");
            console.log("Home Address: " + j.address + " " + j.city + ", " + j.province + ". " + j.postal_code);
            console.log("Joined: " + this.customers[i].data.add_date + "\n\n");
                
            }
        }
    }
    
    CustomerDB.outputAllCustomers = function() {
        console.log("All Customers\n\n");
        for(var i = 0; i < this.customers.length; i++){
            var j = this.getAddressById(this.customers[i].data.address_id);
            console.log("Customer " + this.customers[i].data.customer_id + ": " +  this.customers[i].data.first_name + " " + this.customers[i].data.last_name + "(" + this.customers[i].data.email + ")");
            console.log("Home Address: " + j.address + " " + j.city + ", " + j.province + ". " + j.postal_code);
            console.log("Joined: " + this.customers[i].data.add_date + "\n\n");  
        }
    }
    
    CustomerDB.outputCustomersByStore = function(store_id) {
        var storeObj = CustomerDB.getStoreById(store_id);
        console.log("Customers in Store: " + storeObj.data.name + "\n\n");
        for(var i = 0; i < this.customers.length; i++){
            var customerObj = this.customers[i].data;
            if(customerObj.store_id == store_id){
                CustomerDB.outputCustomerById(customerObj.customer_id);
            }
        }
        console.log("\n");
    },
    
    CustomerDB.removeCustomerById = function(customer_id){
        var customer = 0;
        var match = 0;
        for(var i = 0; i < this.customers.length; i++){
            if(customer_id == this.customers[i].data.customer_id){
                match = 1;
                customer = i;
            }
        }
        if(match == 1){
            CustomerDB.removeAddressById(this.customers[customer].data.address_id);
        }
        this.customers.splice(customer, 1);
        
    }
    
    /**********************************
*         Address Methods        *
**********************************/
    
    CustomerDB.addAddress = function(addressObj){
        this.addresses.push({type: "address", data: addressObj});
    }
    
    CustomerDB.getAddressById = function(address_id){
   
        for(var i = 0; i <  this.addresses.length; i++){
  
            if(this.addresses[i].data.address_id == address_id){
                
                return this.addresses[i].data;
            }
        }
        
    }
    
    CustomerDB.outputAllAddresses = function(){
        console.log("All Addresses");
        for(var i = 0; i < this.addresses.length; i++){
            var addressObj = this.addresses[i].data;
            console.log("\nAddress " + addressObj.address_id + ": " + addressObj.address + " " + addressObj.city + ", " + addressObj.province + ". " + addressObj.postal_code + "\n" );
            
            
        }
        console.log("\n");
    }
    
    CustomerDB.removeAddressById = function(address_id){
        var address = 0;
        var match = 0;
        for(var i = 0; i < this.addresses.length; i++){
            var addressObj = this.addresses[i].data;
            if(addressObj.address_id == address_id){
                match = 1;
                address = i;
            }
        }
        if(match == 1){
            var customerAddress = 0;
            var store = 0;
            for(var i = 0; i < this.customers.length; i++){
            if(address_id == this.customers[i]){
                if(i != address){
                    customerAddress = 1;
                }
            }
        }
            for(var i = 0; i < this.stores.length; i++){
                if(address_id == this.stores[i].data.address_id){
                    store = 1;
                }
            }
            if(customerAddress != 0 || store != 0){
                this.addresses.splice(address, 1);
            }
            }
        
    }
    
    /**********************************
*        Store Methods        *
**********************************/
    
    CustomerDB.addStore = function(storeObj){
        this.stores.push({type: "store", data:storeObj});
        }
    
    CustomerDB.getStoreById = function(store_id){
        var store = 0;
        for(var i = 0; i < this.stores.length; i++){
            var storeObj = this.stores[i].data;
            if(storeObj.store_id == store_id){
                store = i;
            }
            return this.stores[store];
        }
    }
    
    CustomerDB.outputAllStores = function(){
        console.log("All Stores\n");
        
        for(var i = 0; i < this.stores.length; i++){
            var storeObj = this.stores[i].data;
            var locationObj = CustomerDB.getAddressById(storeObj.address_id);
            
            console.log("\nStore " + storeObj.store_id + ": " +storeObj.name);
            console.log("Location: " + locationObj.address + " " + locationObj.city + ", " + locationObj.province + " " +locationObj.postal_code);
        }
    }
    

    






/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/



// Insert all Data into the Database

CustomerDB.insertData(allData);


// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 


/*
Exception: TypeError: this.customers[i].data is undefined
outputAllCustomers@Scratchpad/1:93:17
@Scratchpad/1:254:1
*/
/*
Exception: SyntaxError: expected expression, got '}'
@Scratchpad/1:219
*/
/*
Exception: ReferenceError: dataObj is not defined
CustomerDB.insertData@Scratchpad/1:52:18
@Scratchpad/1:249:1
*/
/*
Exception: TypeError: this.customers[i].data is undefined
CustomerDB.outputAllCustomers@Scratchpad/1:94:17
@Scratchpad/1:255:1
*/
/*
Exception: TypeError: this.customers[i].data is undefined
CustomerDB.outputAllCustomers@Scratchpad/1:94:17
@Scratchpad/1:255:1
*/
/*
Exception: TypeError: this.customers[i].data is undefined
CustomerDB.outputAllCustomers@Scratchpad/1:94:17
@Scratchpad/1:255:1
*/
/*
Exception: TypeError: this.customers[i].data is undefined
CustomerDB.outputAllCustomers@Scratchpad/1:94:17
@Scratchpad/1:255:1
*/
/*
Exception: ReferenceError: dataObj is not defined
CustomerDB.insertData@Scratchpad/1:52:18
@Scratchpad/1:249:1
*/
/*
Exception: TypeError: this.customers[i].data is undefined
CustomerDB.outputAllCustomers@Scratchpad/1:94:17
@Scratchpad/1:255:1
*/
/*
Exception: TypeError: this.customers[i].data is undefined
CustomerDB.outputAllCustomers@Scratchpad/1:94:17
@Scratchpad/1:255:1
*/
/*
Exception: SyntaxError: missing } after property list
@Scratchpad/1:195
*/
/*
Exception: TypeError: this.customers[i].data is undefined
CustomerDB.outputAllCustomers@Scratchpad/1:94:17
@Scratchpad/1:255:1
*/
/*
Exception: TypeError: this.addresses[i].data is undefined
CustomerDB.getAddressById@Scratchpad/1:141:1
CustomerDB.outputAllCustomers@Scratchpad/1:94:21
@Scratchpad/1:255:1
*/
/*
Exception: ReferenceError: addrObj is not defined
CustomerDB.outputCustomerById@Scratchpad/1:84:22
CustomerDB.outputCustomersByStore@Scratchpad/1:107:17
@Scratchpad/1:273:1
*/
/*
Exception: TypeError: addressObj.data is undefined
CustomerDB.outputCustomerById@Scratchpad/1:84:22
CustomerDB.outputCustomersByStore@Scratchpad/1:107:17
@Scratchpad/1:273:1
*/
/*
Exception: TypeError: addressObj.data is undefined
CustomerDB.outputCustomerById@Scratchpad/1:84:22
CustomerDB.outputCustomersByStore@Scratchpad/1:107:17
@Scratchpad/1:273:1
*/