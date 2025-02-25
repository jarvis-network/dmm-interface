import { createAction } from '@reduxjs/toolkit'
import { BigNumber } from '@ethersproject/bignumber'

import { Token } from 'libs/sdk/src'

export const setLoading = createAction<boolean>('vesting/setLoading')
export const setSchedulesByRewardLocker = createAction<{
  [key: string]: [BigNumber, BigNumber, BigNumber, BigNumber, Token, number][]
}>('vesting/setSchedulesByRewardLocker')
export const setShowConfirm = createAction<boolean>('vesting/setShowConfirm')
export const setAttemptingTxn = createAction<boolean>('vesting/setAttemptingTxn')
export const setTxHash = createAction<string>('vesting/setTxHash')
export const setVestingError = createAction<string>('vesting/setVestingError')
