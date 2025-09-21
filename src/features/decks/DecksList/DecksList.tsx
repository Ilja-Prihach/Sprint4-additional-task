import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'
import { useDispatch } from 'react-redux'
import { setDecksAC } from '../decks-reducer.ts'
import { useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { selectDecks } from '../decks-selectors.ts'

export const DecksList = () => {
  const dispatch = useDispatch()
  const decks = useAppSelector(selectDecks)

  useEffect(() => {
    decksApi.fetchDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [])
  return <ul className={s.list}>
    {decks.map((deck) => (<DeckItem key={deck.id} deck={deck} />))}
  </ul>
}
