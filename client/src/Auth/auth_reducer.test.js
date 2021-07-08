import authReducer from './auth_reducer';

test('setting the credentials in the state', async () => {
	const initialState = {
		login: false,
		username: null,
		password: null,
		navigate: null,
		navigateTo: '/',
		userId: null
	};

	const Action = {
		type: 'SET_CREDENTIALS',
		username: 'Ankit',
		password: 'Welcome',
		navigate: 'Navigate',
		navigateTo: '/',
		userId: '1234'
	};
	const finalState = {
		login: false,
		username: 'Ankit',
		password: 'Welcome',
		navigate: 'Navigate',
		navigateTo: '/',
		userId: '1234'
	};
	const updatedState = authReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('login the user', async () => {
	const initialState = {
		login: false,
		username: null,
		password: null,
		userId: null
	};

	const Action = {
		type: 'LOGIN',
		username: 'Ankit',
		password: 'Welcome',
		navigate: 'Navigate',
		navigateTo: '/',
		userId: '1234'
	};
	const finalState = {
		login: true,
		username: null,
		password: null,
		userId: null
	};
	const updatedState = authReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('logout the user', async () => {
	const initialState = {
		login: true,
		username: null,
		password: null,
		userId: null
	};

	const Action = {
		type: 'LOGOUT',
		username: 'Ankit',
		password: 'Welcome',
		navigate: 'Navigate',
		navigateTo: '/',
		userId: '1234'
	};
	const finalState = {
		login: false,
		username: null,
		password: null,
		userId: null
	};
	const updatedState = authReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});

test('setting the navigate', async () => {
	const initialState = {
		login: true,
		username: null,
		password: null,
		userId: null,
		navigate: null,
		navigateTo: '/'
	};

	const Action = {
		type: 'SET_NAVIGATE',
		username: 'Ankit',
		password: 'Welcome',
		navigate: 'Navigate',
		navigateTo: '/products',
		userId: '1234'
	};
	const finalState = {
		login: true,
		username: null,
		password: null,
		userId: null,
		navigate: 'Navigate',
		navigateTo: '/products'
	};
	const updatedState = authReducer(initialState, Action);

	expect(updatedState).toEqual(finalState);
});
