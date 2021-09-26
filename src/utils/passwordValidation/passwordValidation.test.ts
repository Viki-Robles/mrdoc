import * as Yup from 'yup'
import { passwordValidation } from './passwordValidation'

const passwordTest = (password: string, pass: boolean): void => {
  const schema = Yup.object().shape({
    password: passwordValidation,
  })
  schema
    .isValid({
      password,
    })
    .then((valid) => {
      if (valid !== pass) {
        console.log(
          `passwordTest debugger`,
          `password: "${password}"`,
          `isValid: ${valid}`,
          `pass: ${pass}`,
        )
      }
      expect(valid).toBe(pass)
    })
}

describe('Given the password validation function', () => {
  test('test passing password requirements', () => {
    passwordTest('!Bb18h7!', true)
    passwordTest('fG@1%8hj!!', true)
    passwordTest('Aa!18hjh', true)
    passwordTest('A a! 18hj@', true)
    passwordTest('11A a! 18hj@', true)
    passwordTest('11aB}!18hj@22', true)
    passwordTest('fG@1%8hj!!', true)
    passwordTest('fG@1%8hj!!', true)

    passwordTest('0A1aB}!18hj@2', true)
    passwordTest('!1aB}!18hj@2Bx|?c', true)
    passwordTest('_!1aB}!18hj@2Bx|?c>_', true)
    passwordTest('+Gcv!!!1!?c>_', true)
    passwordTest('A b 1 ! 2 %', true)
    passwordTest('1__c__ A__!2', true)
    passwordTest(' A b 1 ! v     ', true)
    passwordTest(' __ __ __ !aV2', true)
    passwordTest(' 1__c__A__!2 ', true)
    passwordTest(' _ _ _ _ ! . Ba11@', true)
    passwordTest(' +_+_+_+_+!123Bv', true)
  })

  test('test failing password requirements', () => {
    passwordTest('ahhhhhh', false)
    passwordTest('Ahhhhhh', false)
    passwordTest(' Ahhhhhh', false)
    passwordTest('Ahhhhhh ', false)
    passwordTest('ahhh ', false)
    passwordTest('', false)
    passwordTest('1111111', false)
    passwordTest('..!!! ">@', false)
    passwordTest('   ', false)
    passwordTest(' bB!  ', false)
    passwordTest('.', false)
    passwordTest(' A b 1 !', false)
    passwordTest('_______1bA', false)
  })
})
