var stringpad = require("./");
var test = require("tape");

test('stringpad', function(assert) {
  assert.plan(10);
  assert.strictEqual(stringpad.left('foo', 5), '  foo');
  assert.strictEqual(stringpad.left('foobar', 6), 'foobar');
  assert.strictEqual(stringpad.left(1, 2, 0), '01');
  assert.strictEqual(stringpad.left(1, 2, '-'), '-1');
  assert.strictEqual(stringpad.right('foo', 5), 'foo  ');
  assert.strictEqual(stringpad.right('foobar', 6), 'foobar');
  assert.strictEqual(stringpad.right(1, 2, 0), '10');
  assert.strictEqual(stringpad.right(1, 2, '-'), '1-');
  assert.strictEqual(stringpad.center('foo', 5), '  foo  ');
  assert.strictEqual(stringpad.center('foo', 6, '-'), '---foo---');
});
