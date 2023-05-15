import { createSlice } from '@reduxjs/toolkit'
export const appNotesSlice = createSlice({
    name: 'appNotes',
    initialState: {
        notes: []
    },
    reducers: {
        handleSelectEvent: (state, action) => {
            state.selectedEvent = action.payload
        },
        handleCalendarsUpdate: (state, action) => {
            const filterIndex = state.selectedCalendars.findIndex(i => i === action.payload)
            if (state.selectedCalendars.includes(action.payload)) {
                state.selectedCalendars.splice(filterIndex, 1)
            } else {
                state.selectedCalendars.push(action.payload)
            }
            if (state.selectedCalendars.length === 0) {
                state.events.length = 0
            }
        },
        handleAllCalendars: (state, action) => {
            const value = action.payload
            if (value === true) {
                state.selectedCalendars = ['Personal', 'Business', 'Family', 'Holiday', 'ETC']
            } else {
                state.selectedCalendars = []
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            state.events = action.payload
        })
    }
})
export const { handleSelectEvent, handleCalendarsUpdate, handleAllCalendars } = appCalendarSlice.actions

export default appNotesSlice

