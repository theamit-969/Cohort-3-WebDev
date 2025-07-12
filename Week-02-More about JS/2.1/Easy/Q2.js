/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions){
    let TotalSpentByCategory = []   // initialize new array\
    for (let i = 0; i < transactions.length; i++) {
        const category = TotalSpentByCategory.find(item => item.category === transactions[i].category);

        if (category){
          category.totalSpent += transactions[i].price;
        }
         else {
          TotalSpentByCategory.push({
            category: transactions[i].category,
            totalSpent: transactions[i].price
          });
        }
    }
    return TotalSpentByCategory;
}
const transactions = [       // inputs
   { id: 1, timestamp: 12345678996, price: 10, category: `food`, itemname: `Pizza` },
   { id: 2, timestamp: 12345678996, price: 17, category: `food`, itemname: `Burger` },
   { id: 3, timestamp: 12345678996, price: 20, category: `entertainment`, itemname: `movie ticket` },
   { id: 4, timestamp: 12345678996, price: 15, category: `hobby`, itemname: `Playing guitar` },
   { id: 5, timestamp: 12345678996, price: 30, category: `Sports`, itemname: `badminton` }
   
]  
console.log(calculateTotalSpentByCategory(transactions));
