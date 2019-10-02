const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function bestSales(sales) {
  let totalSalesByProduct = sales.reduce((totals, sale) => {
    if (productIdIndexes.indexOf(sale.productId) === -1 ) {
      totals.push(sale)
    } else {
      totals[indexOf(sale.productId)].amount += sale.amount;
    }
    return totals;
  }, [])
  let bestSeller = {};
  totalSalesByProduct.array.forEach(element => {
    if (bestSeller.ammount < element.amount || ! bestSeller.amount) bestSeller = element;
  });
  return bestSeller;
}

module.exports = { bestSales, sales };
