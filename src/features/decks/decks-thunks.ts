import { Dispatch } from 'redux'
import { decksApi } from './decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  decksApi.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}