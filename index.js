
const db = new Dexie ('ShoppingApp')

db.version(1).stores({items: `++id,name,price,isPurchased`})

const itemForm = document.getElementById('itemForm')
const itemsDiv = document.getElementById('itemsDiv')
const totalPriceDiv = document.getElementById('totalPriceDiv')


window.toggleItemStatus = async (event,id, isPurchased) => {

  event.preventDefault()

  const name = document.getElementById('nameInput').value
  const quantity = document.getElementById('quantityInput').value
  const price = document.getElementById('priceInput').value
  
  await db.items.add(name, quantity,price)

  itemForm.reset()

}

// const indexedDB = window.indexedDB
// ;

// const request = indexedDB.open("JobsDB", 1);

// request.onerror = function (event) {
//   console.error("An error occurred with IndexedDB");
//   console.error(event);
// };



// // Create the schema on create and version upgrade
// request.onupgradeneeded = function () {
//     const db = request.result;
//     const store = db.createObjectStore("jobs", { keyPath: "id" });
//     store.createIndex("jobs_num", ["job_num"], { unique: true });
//     store.createIndex("jobs_name", ["job_name"], { unique: false, });
//     store.createIndex("cust_num", ["cust_num"], { unique: false, });
//     store.createIndex("cust_name", ["cust_name"], { unique: false, });
    

//   };
  
//   request.onsuccess = function () {
//     console.log("Database opened successfully");
  
//     const db = request.result;
//     const transaction = db.transaction("jobs", "readwrite");
//     const store = transaction.objectStore("jobs");

//     // const colourIndex = store.index("jobs_Num");
//     // const makeModelIndex = store.index("jobs_Name");
  
//     // Add some data
//     store.put({ id: 1, jobs_Num: "1001", jobs_Name: "Rebuild elctrical box",cust_num: "52",cust_Name: "Shane Way" });
//     store.put({ id: 2, jobs_Num: "1002", jobs_Name:  "elctrical box",cust_num: "53",cust_Name: "Belinda Way" });
//     store.put({ id: 3, jobs_Num: "1003", jobs_Name:  "box",cust_num: "54",cust_Name: "Carl Row" });
//     store.put({ id: 4, jobs_Num: "1004", jobs_Name:  "elctrical box delete",cust_num: "55",cust_Name: "Shane Way"});
  
//     // Query the data
     
   
    
  
//     transaction.oncomplete = function () {
//       db.close();
//     };
//   };
