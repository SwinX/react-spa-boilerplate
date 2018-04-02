import template from '../../src/server/template';

describe('basic html template', () => {
    it('should return some html', () => {
        const rendered = template({});

        expect(rendered).to.match(/<html>/);
    });
});
