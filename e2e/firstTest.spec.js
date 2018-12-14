import { takeScreenshot } from './helpers';

describe('Color Selection', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a choose color button', async () => {
    // it('should have a choose color button', () => {
    await expect(element(by.id('color-options-button'))).toBeVisible();
    await expect(element(by.id('main-view'))).toBeVisible();
  });

  it('should show choose color screen after tap', async () => {
    await element(by.id('color-options-button')).tap();
    await expect(element(by.text('RED'))).toBeVisible();
    await expect(element(by.text('GREEN'))).toBeVisible();
    await expect(element(by.text('BLUE'))).toBeVisible();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
})
