import 'mocha'
import { expect } from 'chai'

import { handler } from './index'

describe('the fireplace function handler', () => {

  it('should fail with a message when given an invalid payload', () => {
    
  })
  
  it('should be able to warm 1 function with a concurrency of 1', async () => {
    let result = await handler(undefined!, undefined!, undefined!)
  })

  it('should be able to warm 1 function with a concurrency of 10', () => {

  })

  it('should be able to warm 10 functions with a concurrency of 5', () => {

  })

  it('should be able to warm 5 functions with a concurrency of 100', () => {

  })

  it('should be able to warm 20 functions with a concurrency of 350', () => {
    
  })

})
