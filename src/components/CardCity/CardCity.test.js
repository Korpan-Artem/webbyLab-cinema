

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import CardCity from '../../components/CardCity';
import * as reduxHooks from 'react-redux';

jest.mock('axios');
jest.mock('react-redux');

const data = {
    data: [
        {"coord":{"lon":-96.7836,"lat":32.7668},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":1.16,"feels_like":-1.72,"temp_min":-0.72,"temp_max":3.42,"pressure":1032,"humidity":45},"visibility":10000,"wind":{"speed":2.57,"deg":240},"clouds":{"all":0},"dt":1671982447,"sys":{"type":2,"id":2075302,"country":"US","sunrise":1671974842,"sunset":1672010819},"timezone":-21600,"id":4684904,"name":"Dallas","cod":200}
    ]
}


describe('Сity Card', () => {

    it('render City Card without data',() => {
        jest.spyOn(reduxHooks,'useSelector').mockReturnValue([])
        render(<CardCity/>);
    })

})
