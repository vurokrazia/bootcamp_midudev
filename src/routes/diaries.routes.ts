import express from 'express'
import { DiaryEntry } from '../types'
import * as diaryServices from './../services/diary.services'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntrities())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  const {
    date,
    weather,
    visibility,
    comment
  } = req.body
  const diaryEntry: DiaryEntry = diaryServices.addEntry(
    {
      date,
      weather,
      visibility,
      comment
    }
  )
  res.send(diaryEntry)
})

export default router;