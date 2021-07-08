import manageProductReducer from './cart_reducer';

test('add the initial cart value in the cartItem', async () => {
	const initialState = {
		cartItems: []
	};

	const Action = {
		type: 'SET_CART_ITEMS',
		products: [
			{
				productId: '123',
				quantity: 2
			},
			{
				productId: '124',
				quantity: 4
			}
		]
	};
	const finalState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			},
			{
				productId: '124',
				quantity: 4
			}
		]
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('add the initial wishlist value in the wishList', async () => {
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

	const Action = {
		type: 'SET_WISHLISTED_ITEMS',
		products: [ '123', '124' ]
	};
	const finalState = {
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
		wishList: [ '123', '124' ]
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('increment the quantity of the product in the cart and update the state', async () => {
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

	const Action = {
		type: 'INCREMENT',
		item: '123'
	};

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

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('decrement the quantity of the product in the cart and update the state', async () => {
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

	const Action = {
		type: 'DECREMENT',
		item: '124'
	};

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

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('remove the product from the cart and update the state', async () => {
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

	const Action = {
		type: 'REMOVE',
		item: '124'
	};

	const finalState = {
		cartItems: [
			{
				productId: '123',
				quantity: 2
			}
		],
		wishList: []
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('add the product to the wishlist and update the state', async () => {
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

	const Action = {
		type: 'WISHLIST',
		item: '124'
	};

	const finalState = {
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
		wishList: [ '124' ]
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('remove the product from the wishlist and update the state', async () => {
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
		wishList: [ '123', '124' ]
	};

	const Action = {
		type: 'WISHLIST',
		item: '123'
	};

	const finalState = {
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
		wishList: [ '124' ]
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('set the sortByPrice value Price_High_to_Low and update the state', async () => {
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
		wishList: [ '123', '124' ],
		sortByPrice: '',
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 50000
	};

	const Action = {
		type: 'SORT_BY_PRICE',
		payload: 'Price_High_to_Low'
	};

	const finalState = {
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
		wishList: [ '123', '124' ],
		sortByPrice: 'Price_High_to_Low',
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 50000
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('set the showAllProducts value false when user unchecks Include Out of Stock', async () => {
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
		wishList: [ '123', '124' ],
		sortByPrice: 'Price_High_to_Low',
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 50000
	};

	const Action = {
		type: 'SHOW_ALL_PRODUCTS'
	};

	const finalState = {
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
		wishList: [ '123', '124' ],
		sortByPrice: 'Price_High_to_Low',
		fastDelivery: false,
		showAllProducts: false,
		totalCartValue: 0,
		priceRangeMaxValue: 50000
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('set the fastDelivery value true when user checks Fast Delivery Only', async () => {
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
		wishList: [ '123', '124' ],
		sortByPrice: 'Price_High_to_Low',
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 50000
	};

	const Action = {
		type: 'FAST_DELIVERY'
	};

	const finalState = {
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
		wishList: [ '123', '124' ],
		sortByPrice: 'Price_High_to_Low',
		fastDelivery: true,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 50000
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('set the priceRangeMaxValue 5000 when user selects 5000 range', async () => {
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
		wishList: [ '123', '124' ],
		sortByPrice: 'Price_High_to_Low',
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 50000
	};

	const Action = {
		type: 'PRICE_RANGE',
		value: 5000
	};

	const finalState = {
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
		wishList: [ '123', '124' ],
		sortByPrice: 'Price_High_to_Low',
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 5000
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('set the searchText value Bat when user searches for Bat', async () => {
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
		wishList: [ '123', '124' ],
		sortByPrice: 'Price_High_to_Low',
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 50000,
		searchText: ''
	};

	const Action = {
		type: 'SEARCH_ACTION',
		value: 'Bat'
	};

	const finalState = {
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
		wishList: [ '123', '124' ],
		sortByPrice: 'Price_High_to_Low',
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 50000,
		searchText: 'Bat'
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('set the showLoader value true when user loads the product page', async () => {
	const initialState = {
		sortByPrice: null,
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 50000,
		searchText: '',
		showLoader: false
	};

	const Action = {
		type: 'SET_LOADER',
		value: true
	};

	const finalState = {
		sortByPrice: null,
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 50000,
		searchText: '',
		showLoader: true
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('set the showNav value true when user clicks on the navbar', async () => {
	const initialState = {
		sortByPrice: null,
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 50000,
		searchText: '',
		showNav: false
	};

	const Action = {
		type: 'SHOW_NAV',
		value: true
	};

	const finalState = {
		sortByPrice: null,
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 50000,
		searchText: '',
		showNav: true
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('set the initial values for all the state values when user clicks on the clear filters', async () => {
	const initialState = {
		sortByPrice: 'Price_High_to_Low',
		fastDelivery: false,
		showAllProducts: true,
		totalCartValue: 0,
		priceRangeMaxValue: 5000,
		searchText: '',
		showNav: true
	};

	const Action = {
		type: 'CLEAR_ALL_FILTERS'
	};

	const finalState = {
		sortByPrice: null,
		fastDelivery: false,
		showAllProducts: true,
		priceRangeMaxValue: 50000,
		totalCartValue: 0,
		searchText: '',
		showNav: true
	};

	const updatedState = manageProductReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});
