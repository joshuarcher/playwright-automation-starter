// import

import { test, expect } from "playwright/test";
import { automate } from "./automate";
import fs from 'fs/promises';

// test

test('performs grab-bag of tasks', async ({browser}) => {
  const {
    output
  } = await automate(browser);
});
