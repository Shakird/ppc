import React from 'react'
import RefreshButton from '../components/Atoms/Button/RefreshButton'
import {fireEvent, render, screen} from "@testing-library/react"

describe("test window location's reload function", () => {
    const original = window.location;
  
    const clickRefresh = () => {
      window.location.reload(true);
    };
  
    beforeAll(() => {
      Object.defineProperty(window, 'location', {
        configurable: true,
        value: { reload: jest.fn() },
      });
    });
  
    afterAll(() => {
      Object.defineProperty(window, 'location', { configurable: true, value: original });
    });
  
    it('mocks reload function', () => {
      expect(jest.isMockFunction(window.location.reload)).toBe(true);
    });
  
    it('calls reload function', () => {
        clickRefresh(); // as defined above..
      expect(window.location.reload).toHaveBeenCalled();
    });
  });