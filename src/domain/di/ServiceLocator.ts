export enum ServiceScope {
  factory,
  single
}

class InstanceFactory<T> {
  creator: (ServiceLocator) => T;
  scope: ServiceScope;
  instance?: T;
}

export class ServiceLocator {
  private static _instances = {};

  static regist<T>(
    scope: ServiceScope,
    name: string,
    creator: (locator: ServiceLocator) => T
  ) {
    const factory = new InstanceFactory();
    factory.creator = creator;
    factory.scope = scope;
    factory.instance = null;

    ServiceLocator._instances[name] = factory;
  }

  static resolve<T>(name: string): T {
    const instance = ServiceLocator._instances[name];
    if (!instance) {
      throw new Error(`regist ${name} first!!`);
    }

    const factory = instance as InstanceFactory<T>;
    if (factory.scope === ServiceScope.single) {
      if (factory.instance == null) {
        factory.instance = factory.creator(this);
      }
      return factory.instance as T;
    }

    return factory.creator(this) as T;
  }

  resolve<T>(name: string): T {
    const instance = ServiceLocator._instances[name];
    if (!instance) {
      throw new Error(`regist ${name} first!!`);
    }

    const factory = instance as InstanceFactory<T>;
    if (factory.scope === ServiceScope.single) {
      if (factory.instance == null) {
        factory.instance = factory.creator(this);
      }
      return factory.instance as T;
    }

    return factory.creator(this) as T;
  }
}
