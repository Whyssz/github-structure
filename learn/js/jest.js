/*
JEST (spec/test)___

  describe('Descrition section', () => {
    it('Description element's, () => {
      expect(element)....
    });
  });  

  beforeEach(() => {
    //Settings pre-start
  });

  jest.mock('api-url', () => {
    const mockApi = {
      
    }
  });

Methods___

  expect(el).toBe() - classic action 
    Ex: 
      expect(el).toBe(null) 
      expect(el).toEqual({}) 
      expect(el.meth).toEqual(func) 

  expect(el).toBeInstanceOf(ClassEl) - property check

  axios.get.mockImplementaionOnce(() => Promise.resolve({ data: cities })); - Create a fake response once  (res - resonce.data)

  it('Fetch cities failur', async () => {
    const errMsg = 'Some error'
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errMsg)));
    await expect(api.cities()).rejects.toThrow(errMsg); // <--
  }); 


Ex-tests___
#1
  import locationsInstance, { Locations } from '../locations'
  import { formatDate } from '../../helpers/date'
  import api, { Api } from '../../services/apiService'

  const countries = [{ code: 'UKR', name: 'Ukraine' }]
  const cities = [{ country_code: 'UKR', name: 'Kharkiv', code: 'KH' }]
  const airlines = [{ country_code: 'UKR', name: 'Airlines', code: 'AVIA' }]

  jest.mock('../../services/apiService', () => {
    const mockApi = {
      countries: jest.fn(() => Promise.resolve([{ code: 'UKR', name: 'Ukraine' }])),
      cities: jest.fn(() => Promise.resolve([{ country_code: 'UKR', name: 'Kharkiv', code: 'KH' }])),
      airlines: jest.fn(() => Promise.resolve([{ country_code: 'UKR', name: 'Airlines', code: 'AVIA' }])),
    }

    return {
      Api: jest.fn(() => mockApi)
    }
  })

  const apiService = new Api()

  describe('Locations store tests', () => {
    beforeEach(() => {
      locationsInstance.countries = locationsInstance.serializeCountries(countries)
      locationsInstance.cities = locationsInstance.serializeCities(cities)
    })

    it('Check that locationInstance is instance of Locations class', () => {
      expect(locationsInstance).toBeInstanceOf(Locations)
    })

    it('Success Locations instance create', () => {
      const instance = new Locations(api, { formatDate })
      expect(instance.countries).toBe(null)
      expect(instance.shortCities).toEqual({})
      expect(instance.formatDate).toEqual(formatDate)
    })

    it('Check correct countries serialize', () => {
      const res = locationsInstance.serializeCountries(countries)
      const expectedData = {
        UKR: { code: 'UKR', name: 'Ukraine' }
      }

      expect(res).toEqual(expectedData)
    })

    it('Check countries serialize with incorrect data', () => {
      const res = locationsInstance.serializeCountries(null)
      const expectedData = {}

      expect(res).toEqual(expectedData)
    })

    it('Check correct cities serialize', () => {
      const res = locationsInstance.serializeCities(cities)
      const expectedData = {
        KH: {  country_code: 'UKR', name: 'Kharkiv', code: 'KH', country_name: 'Ukraine', full_name: 'Kharkiv,Ukraine' }
      }

      expect(res).toEqual(expectedData)
    })

    it('Check correct get city name by code', () => {
      const res = locationsInstance.getCityNameByCode('KH')
      expect(res).toBe('Kharkiv')
    })

    it('Check correct init method call', () => {
      const instance = new Locations(apiService, { formatDate })
      expect(instance.init()).resolves.toEqual([countries, cities, airlines])
    })
  })
#2
  import api, { Api } from '../apiService';
  import config from '../../config/apiConfig';
  import axios from 'axios';

  jest.mock('axios');

  const cities = [{ country_code: 'UKR', name: 'Kharkiv', code: 'KH'}];

  describe('Test API Service', () => {
    it('Inheritance that class', () => {
      expect(api).toBeInstanceOf(Api);
    });

    it('Success fetch citites', async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: cities }));
      await expect(api.cities()).resolves.toEqual(cities);
      expect(axios.get).toHaveBeenCalledWith(`${config.url}/cities`);
    }); 

    it('Fetch cities failur', async () => {
      const errMsg = 'Some error'
      axios.get.mockImplementationOnce(() => Promise.reject(new Error(errMsg)));
      await expect(api.cities()).rejects.toThrow(errMsg);
    }); 
  });
*/