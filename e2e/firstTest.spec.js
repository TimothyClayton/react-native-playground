import { takeScreenshot } from './helpers';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a choose color button', async () => {
    await expect(element(by.id('color-options-button'))).toBeVisible();
    await expect(element(by.id('main-view'))).toBeVisible();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
})
