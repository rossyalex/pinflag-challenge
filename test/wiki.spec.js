import {expect, jest, test} from '@jest/globals';
import {searchApi} from "../services/wikipedia.js";
import axios from "axios";

jest.mock('axios');

describe('Wikipedia', () => {
    it('should wiki response', async () => {
        const mockData = { pages: ['page1', 'page2'] };
        axios.get.mockResolvedValueOnce({ data: mockData });
        const response = await searchApi('inteligencia');
        expect(response).toEqual(mockData.pages);
    });

    it('should handle error', async () => {
        const mockError = new Error('Error request Wiki');
        axios.get.mockRejectedValueOnce(mockError);
        await expect(() => searchApi('perro')).rejects.toThrow(mockError);
    });
})