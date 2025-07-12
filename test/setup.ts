import {afterEach, vi} from 'vitest';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
//this code will be run before each and every test
afterEach(() => {
    cleanup();
    vi.clearAllMocks()//if you are using vitest
    // jest.clearAllMocks();//if you are using jes
})