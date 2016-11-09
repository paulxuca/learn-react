class Middleware {
  constructor() {
    this.devmiddlewares = {};
    this.hotmiddlewares = {};
  }

  set(id, dev, hot) {
    this.devmiddlewares[id] = dev;
    this.hotmiddlewares[id] = hot;
  }

  get(id) {
    return {
      hot: this.hotmiddlewares[id],
      dev: this.devmiddlewares[id],
    };
  }

  remove(id) {
    delete this.hotmiddlewares[id];
    delete this.devmiddlewares[id];
  }
}

const middlewareWrapper = new Middleware();

module.exports = {
  wrapper: middlewareWrapper,
};
