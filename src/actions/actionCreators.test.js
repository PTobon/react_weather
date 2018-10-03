import {getFiveDayForecast, getSelectedDay} from './actionCreators';

describe('getFiveDayForecast', () => {
    it('Should return the action', () => {
        const city = {test: 'test'};
        const action = getFiveDayForecast(city);
        expect(action.type).toEqual('GET_FIVE_DAY_FORECAST');
        expect(action.city).toEqual(city);
    });
});

describe('getSelectedDay', () => {
    it('Should return the action', () => {
        const day = {testWeatherData: 'test'};
        const action = getSelectedDay(day);
        expect(action.type).toEqual('GET_SELECTED_DAY');
        expect(action.day).toEqual(day);
    });
});
