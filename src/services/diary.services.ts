import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntrities = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  return entry
}

export const getEntritiesWithOutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({
    id,
    date,
    weather,
    visibility
  }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addEntry = (
  diaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiadryEntrity = {
    ...diaryEntry,
    id: Math.max(...diaries.map(d => d.id)) + 1
  }
  diaries.push(newDiadryEntrity)
  return newDiadryEntrity
}
