import React from 'react'
import ResetButton from '../components/Atoms/Button/ResetButton'
import {fireEvent, render} from "@testing-library/react"

describe('resetButton', () => {

    test('resetButton triggers alert when clicked ', async () => {
        const alertMock = jest.spyOn('window', 'alert').mockImplementation()
        const{ getByTestId } = render(<ResetButton/>)

        fireEvent.click(getByTestId('resetButton'))
        expect(alertMock).toHaveBeenCalledTimes(1);
    })
})