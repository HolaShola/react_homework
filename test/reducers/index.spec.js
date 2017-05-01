import reducer from '../../reducers/index';
import { expect } from 'chai';

describe('reducer', () => {
	describe('SET_NUM', () => {
		it('should add new SET_NUM', () => {
			const initialState = {
			    log: false,
			    converters: [{num: 0,from: '',to: '',time: ''}]
            }
			const action = {
				type: 'SET_NUM',
				payload: 11
			};
			const nextState = reducer(initialState, action);

			expect(nextState).to.deep.equal({
			    log: false,
			    converters: [
			        {num: 0,from: '',to: '',time: ''},
			        {num: 11,from: '',to: '',time: (new Date()).toLocaleString()}
			    ]
			});
		});
	});

	describe('CONVERT_FROM', () => {
        it('should add new CONVERT_FROM', () => {
            const initialState = {
                log: false,
                converters: [{num: 0,from: '',to: '',time: ''}]
            }
            const action = {
                type: 'CONVERT_FROM',
                payload: 'g'
            };
            const nextState = reducer(initialState, action);

            expect(nextState).to.deep.equal({
                log: false,
                converters: [
                    {num: 0,from: '',to: '',time: ''},
                    {num: 0,from: 'g',to: '',time: (new Date()).toLocaleString()}
                ]
            });
        });
    });

    describe('CONVERT_TO', () => {
            it('should add new CONVERT_TO', () => {
                const initialState = {
                    log: false,
                    converters: [{num: 0,from: '',to: '',time: ''}]
                }
                const action = {
                    type: 'CONVERT_TO',
                    payload: 'Kg'
                };
                const nextState = reducer(initialState, action);

                expect(nextState).to.deep.equal({
                    log: false,
                    converters: [
                        {num: 0,from: '',to: '',time: ''},
                        {num: 0,from: '',to: 'Kg',time: (new Date()).toLocaleString()}
                    ]
                });
            });
        });

    describe('SET_LOG', () => {
            it('should add new SET_LOG', () => {
                const initialState = {
                    log: false,
                    converters: [{num: 0,from: '',to: '',time: ''}]
                }
                const action = {
                    type: 'SET_LOG',
                    payload: true
                };
                const nextState = reducer(initialState, action);

                expect(nextState).to.deep.equal({
                    log: true,
                    converters: [
                        {num: 0,from: '',to: '',time: ''},
                    ]
                });
            });
        });

});
