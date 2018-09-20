import { MainAppModule } from './main-app.module';

describe('MainAppModule', () => {
  let mainAppModule: MainAppModule;

  beforeEach(() => {
    mainAppModule = new MainAppModule();
  });

  it('should create an instance', () => {
    expect(mainAppModule).toBeTruthy();
  });
});
