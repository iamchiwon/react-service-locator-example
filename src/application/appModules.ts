import { MainPageViewModel } from "./pages/main/MainPageViewModel";
import { AboutPageViewModel } from "./pages/about/AboutPageViewModel";
import { GlobalService } from "../domain/service/GlobalService";
import { PageService } from "../domain/service/PageService";
import { ServiceLocator, ServiceScope } from "../domain/di/ServiceLocator";

export function makeModules() {
  // Services

  ServiceLocator.regist(ServiceScope.single, GlobalService.name, (s) => {
    return new GlobalService();
  });

  ServiceLocator.regist(ServiceScope.factory, PageService.name, (s) => {
    const global: GlobalService = s.resolve(GlobalService.name);
    return new PageService(global);
  });

  // ViewModels

  ServiceLocator.regist(ServiceScope.factory, MainPageViewModel.name, (s) => {
    return new MainPageViewModel();
  });

  ServiceLocator.regist(ServiceScope.factory, AboutPageViewModel.name, (s) => {
    return new AboutPageViewModel();
  });
}
