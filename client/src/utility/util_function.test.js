import {
	filterByStockAndDelivery,
	manageCart,
	manageWishList,
	removeItemFromCart,
	searchFilter,
	showPriceRange,
	sortingByPrice
} from './util_functions';
test('add a new product in the cart', async () => {
	const initialState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			},
			{
				productId: '124',
				quantity: 4
			}
		],
		wishList: []
	};

	const productId = '125';
	const incOrDec = 1;
	const finalState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			},
			{
				productId: '124',
				quantity: 4
			},
			{
				productId: '125',
				quantity: 1
			}
		],
		wishList: []
	};

	const updatedState = manageCart(initialState, productId, incOrDec);

	expect(updatedState).toEqual(finalState);
});

test('increment the quantity of the product in the cart', async () => {
	const initialState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			},
			{
				productId: '124',
				quantity: 4
			}
		],
		wishList: []
	};

	const productId = '123';
	const incOrDec = 1;
	const finalState = {
		cartItems: [
			{
				productId: '123',
				quantity: 3
			},
			{
				productId: '124',
				quantity: 4
			}
		],
		wishList: []
	};

	const updatedState = manageCart(initialState, productId, incOrDec);

	expect(updatedState).toEqual(finalState);
});

test('decrement the quantity of the product in the cart', async () => {
	const initialState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			},
			{
				productId: '124',
				quantity: 4
			}
		],
		wishList: []
	};

	const productId = '124';
	const incOrDec = -1;
	const finalState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			},
			{
				productId: '124',
				quantity: 3
			}
		],
		wishList: []
	};

	const updatedState = manageCart(initialState, productId, incOrDec);

	expect(updatedState).toEqual(finalState);
});

test('remove the product from the cart', async () => {
	const initialState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			},
			{
				productId: '124',
				quantity: 4
			}
		],
		wishList: []
	};

	const productId = '124';

	const finalState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			}
		],
		wishList: []
	};

	const updatedState = removeItemFromCart(initialState, productId);

	expect(updatedState).toEqual(finalState);
});

test('add product to the wishlist', async () => {
	const initialState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			}
		],
		wishList: []
	};

	const productId = '124';

	const finalState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			}
		],
		wishList: [ '124' ]
	};

	const updatedState = manageWishList(initialState, productId);

	expect(updatedState).toEqual(finalState);
});

test('remove the product from the wishlist', async () => {
	const initialState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			}
		],
		wishList: [ '123', '124' ]
	};

	const productId = '123';

	const finalState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			}
		],
		wishList: [ '124' ]
	};

	const updatedState = manageWishList(initialState, productId);

	expect(updatedState).toEqual(finalState);
});

test('sort the products based on their price high to low', async () => {
	const initialProductList = [
		{
			productId: '123',
			price: 400
		},
		{
			productId: '124',
			price: 600
		},
		{
			productId: '125',
			price: 500
		}
	];
	const state = {
		sortByPrice: 'Price_High_to_Low',
		fastDelivery: true,
		showAllProducts: true
	};

	const finalProductList = [
		{
			productId: '124',
			price: 600
		},
		{
			productId: '125',
			price: 500
		},
		{
			productId: '123',
			price: 400
		}
	];

	const updatedProductList = sortingByPrice(state, initialProductList);

	expect(updatedProductList).toEqual(finalProductList);
});

test('sort the products based on their price low to high', async () => {
	const initialProductList = [
		{
			productId: '123',
			price: 400
		},
		{
			productId: '124',
			price: 600
		},
		{
			productId: '125',
			price: 500
		}
	];
	const state = {
		sortByPrice: 'Price_Low_to_High',
		fastDelivery: true,
		showAllProducts: true
	};

	const finalProductList = [
		{
			productId: '123',
			price: 400
		},
		{
			productId: '125',
			price: 500
		},
		{
			productId: '124',
			price: 600
		}
	];

	const updatedProductList = sortingByPrice(state, initialProductList);

	expect(updatedProductList).toEqual(finalProductList);
});

test('do not sort the products based on their price if their is no option choosed', async () => {
	const initialProductList = [
		{
			productId: '123',
			price: 400
		},
		{
			productId: '124',
			price: 600
		},
		{
			productId: '125',
			price: 500
		}
	];
	const state = {
		sortByPrice: null,
		fastDelivery: true,
		showAllProducts: true
	};

	const finalProductList = [
		{
			productId: '123',
			price: 400
		},
		{
			productId: '124',
			price: 600
		},
		{
			productId: '125',
			price: 500
		}
	];

	const updatedProductList = sortingByPrice(state, initialProductList);

	expect(updatedProductList).toEqual(finalProductList);
});

test('filter all the products', async () => {
	const initialProductList = [
		{
			productId: '123',
			price: 400,
			inStock: true
		},
		{
			productId: '124',
			price: 600,
			inStock: false
		},
		{
			productId: '125',
			price: 500,
			inStock: false
		}
	];
	const state = {
		sortByPrice: null,
		fastDelivery: false,
		showAllProducts: true
	};

	const finalProductList = [
		{
			productId: '123',
			price: 400,
			inStock: true
		},
		{
			productId: '124',
			price: 600,
			inStock: false
		},
		{
			productId: '125',
			price: 500,
			inStock: false
		}
	];

	const updatedProductList = filterByStockAndDelivery(state, initialProductList);

	expect(updatedProductList).toEqual(finalProductList);
});

test('filter the products that are in stock', async () => {
	const initialProductList = [
		{
			productId: '123',
			price: 400,
			inStock: true
		},
		{
			productId: '124',
			price: 600,
			inStock: false
		},
		{
			productId: '125',
			price: 500,
			inStock: false
		}
	];
	const state = {
		sortByPrice: null,
		fastDelivery: false,
		showAllProducts: false
	};

	const finalProductList = [
		{
			productId: '123',
			price: 400,
			inStock: true
		}
	];

	const updatedProductList = filterByStockAndDelivery(state, initialProductList);

	expect(updatedProductList).toEqual(finalProductList);
});

test('filter the products that are available for fast delivery', async () => {
	const initialProductList = [
		{
			productId: '123',
			price: 400,
			inStock: true,
			isFastDeliveryAvailable: false
		},
		{
			productId: '124',
			price: 600,
			inStock: true,
			isFastDeliveryAvailable: true
		},
		{
			productId: '125',
			price: 500,
			inStock: false,
			isFastDeliveryAvailable: true
		}
	];
	const state = {
		sortByPrice: null,
		fastDelivery: true,
		showAllProducts: true
	};

	const finalProductList = [
		{
			productId: '124',
			price: 600,
			inStock: true,
			isFastDeliveryAvailable: true
		},
		{
			productId: '125',
			price: 500,
			inStock: false,
			isFastDeliveryAvailable: true
		}
	];

	const updatedProductList = filterByStockAndDelivery(state, initialProductList);

	expect(updatedProductList).toEqual(finalProductList);
});

test('filter the products that are available for fast delivery and also are in stock', async () => {
	const initialProductList = [
		{
			productId: '123',
			price: 400,
			inStock: true,
			isFastDeliveryAvailable: false
		},
		{
			productId: '124',
			price: 600,
			inStock: true,
			isFastDeliveryAvailable: true
		},
		{
			productId: '125',
			price: 500,
			inStock: false,
			isFastDeliveryAvailable: true
		}
	];
	const state = {
		sortByPrice: null,
		fastDelivery: true,
		showAllProducts: false
	};

	const finalProductList = [
		{
			productId: '124',
			price: 600,
			inStock: true,
			isFastDeliveryAvailable: true
		}
	];

	const updatedProductList = filterByStockAndDelivery(state, initialProductList);

	expect(updatedProductList).toEqual(finalProductList);
});

test('filter all the products that have price less than 400', async () => {
	const initialProductList = [
		{
			productId: '123',
			price: 400,
			inStock: true,
			isFastDeliveryAvailable: false
		},
		{
			productId: '124',
			price: 200,
			inStock: true,
			isFastDeliveryAvailable: true
		},
		{
			productId: '125',
			price: 500,
			inStock: false,
			isFastDeliveryAvailable: true
		}
	];
	const state = {
		sortByPrice: null,
		fastDelivery: true,
		showAllProducts: false,
		priceRangeMaxValue: 400
	};

	const finalProductList = [
		{
			productId: '123',
			price: 400,
			inStock: true,
			isFastDeliveryAvailable: false
		},
		{
			productId: '124',
			price: 200,
			inStock: true,
			isFastDeliveryAvailable: true
		}
	];

	const updatedProductList = showPriceRange(state, initialProductList);

	expect(updatedProductList).toEqual(finalProductList);
});

test('filter all the products that have name or category name Bat', async () => {
	const initialProductList = [
		{
			productId: '123',
			name: 'Bat',
			price: 400,
			inStock: true,
			isFastDeliveryAvailable: false,
			category_name: 'Cricket'
		},
		{
			productId: '124',
			name: 'Cricket Kit',
			price: 200,
			inStock: true,
			isFastDeliveryAvailable: true,
			category_name: 'Bat'
		},
		{
			productId: '125',
			name: 'Ball',
			price: 500,
			inStock: false,
			isFastDeliveryAvailable: true,
			category_name: 'Cricket'
		}
	];
	const state = {
		sortByPrice: null,
		fastDelivery: true,
		showAllProducts: false,
		searchText: 'bat'
	};

	const finalProductList = [
		{
			productId: '123',
			name: 'Bat',
			price: 400,
			inStock: true,
			isFastDeliveryAvailable: false,
			category_name: 'Cricket'
		},
		{
			productId: '124',
			name: 'Cricket Kit',
			price: 200,
			inStock: true,
			isFastDeliveryAvailable: true,
			category_name: 'Bat'
		}
	];

	const updatedProductList = searchFilter(state, initialProductList);

	expect(updatedProductList).toEqual(finalProductList);
});
