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
 const totalSalesByProductId = sales.reduce((totalsByProduct, singleSale) => {
    if (!totalsByProduct[singleSale.pructId]) {
      totalsByProduct[singleSale.productId] = singleSale.amount;
    } else {
      totalsByProduct[singleSale.productId] += singleSale.amount;
    }
    return totalsByProduct
  }, {});
  return Object.keys(totalSalesByProductId).reduce((bestSeller, product) => {
    if (bestSeller === null) {
      bestSeller = totalSalesByProductId[product];
    } else if (totalSalesByProductId[product] > bestSeller.productId) {
      bestSeller = totalSalesByProductId[product]
    }
    return bestSeller;
  }, {})[0];
}

module.exports = { bestSales, sales };
