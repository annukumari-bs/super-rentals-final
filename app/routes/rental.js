import Route from '@ember/routing/route';

export default class RentalRoute extends Route {
  async model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }
}
