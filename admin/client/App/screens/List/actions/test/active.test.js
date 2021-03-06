import demand from 'must';
import {
	setActiveSearch,
	setActiveList,
} from '../active';
import {
	SET_ACTIVE_SEARCH,
	SET_ACTIVE_LIST,
} from '../../constants';

describe('<List /> active actions', () => {
	describe('setActiveSearch()', () => {
		it('should have a type of SET_ACTIVE_SEARCH', () => {
			demand(setActiveSearch().type).eql(SET_ACTIVE_SEARCH);
		});

		it('should pass on the passed string', () => {
			const string = 'some string';
			demand(setActiveSearch(string).searchString).eql(string);
		});
	});

	describe('setActiveList()', () => {
		it('should have a type of SET_ACTIVE_LIST', () => {
			demand(setActiveList().type).eql(SET_ACTIVE_LIST);
		});

		it('should pass on the passed list', () => {
			const list = 'Some List';
			demand(setActiveList(list).list).eql(list);
		});

		it('should pass on the passed id', () => {
			const id = 'somelongid';
			demand(setActiveList(undefined, id).id).eql(id);
		});
	});
});
