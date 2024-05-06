// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('true for phone numbers', () => {
  expect(isPhoneNumber('000-000-0000')).toBe(true);
  expect(isPhoneNumber('(000) 000-0000')).toBe(true);
});

test('false for phone numbers', () => {
  expect(isPhoneNumber('0')).toBe(false);
  expect(isPhoneNumber('aaa-aaa-aaaa')).toBe(false);
});

test('true for emails', () => {
  expect(isEmail('email@google.com')).toBe(true);
  expect(isEmail('mail@yahoo.co')).toBe(true);
});

test('false for emails', () => {
  expect(isEmail('00000')).toBe(false);
  expect(isEmail('0000@.com')).toBe(false);
});

test('true for password strength', () => {
  expect(isStrongPassword('Str0ng_pAssw0rD')).toBe(true);
  expect(isStrongPassword('test0PASS')).toBe(true);
});

test('false for password strength', () => {
  expect(isStrongPassword('')).toBe(false);
  expect(isStrongPassword('00000')).toBe(false);
});

test('true for dates', () => {
  expect(isDate('01/01/2001')).toBe(true);
  expect(isDate('04/20/2020')).toBe(true);
});

test('false for dates', () => {
  expect(isDate('1/1/01')).toBe(false);
  expect(isDate('00-00-2000')).toBe(false);
});

test('true for hex colors', () => {
  expect(isHexColor('#aaa')).toBe(true);
  expect(isHexColor('#454545')).toBe(true);
});

test('false hex colors', () => {
  expect(isHexColor('#00000')).toBe(false);
  expect(isHexColor('#xyz')).toBe(false);
});