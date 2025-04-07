// import

import type {Browser} from 'playwright';
import fs from 'fs/promises';


// export

export async function automate(browser: Browser) {  
  // prepare the workspace

  const outputDir = `./.output/${browser.browserType().name()}`;
  await fs.mkdir(outputDir, {recursive: true});
  await fs.rm(outputDir, {recursive: true, force: true});

  // navigate via url bar

  const page = await browser.newPage();
  await page.goto('https://www.arketa.com/');
}
