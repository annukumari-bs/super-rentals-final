import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders without content', async function (assert) {
    await render(hbs`<Jumbo />`);

    // The component renders but has no text content
    assert.dom(this.element).hasText('');
    assert.dom('.jumbo').exists();
    assert.dom('.jumbo .tomster').exists();
  });

  test('it renders the content inside a jumbo header with a tomster', async function (assert) {
    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('Hello World');
    assert.dom('.jumbo .tomster').exists();
  });

  test('it renders block content', async function (assert) {
    await render(hbs`
      <Jumbo>
        template block text
      </Jumbo>
    `);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('template block text');
    assert.dom('.jumbo .tomster').exists();
  });
});
