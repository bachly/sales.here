
const slugify = require('slugify');
const $ = Cypress.$;

const BASE_URL = 'https://www.ozsale.com.au';

describe('Profile input', () => {
    before(() => {
        cy.viewport(1920, 40000)
        cy.visit(BASE_URL)
        cy.wait(10000);
    })

    it('download all banners from homepage', () => {
        cy.get('.test-banner-grid-img').each(($el, index, $list) => {
            const largeImageUrl = $el.attr('srcset').split(',')[0].split(' ')[0];
            const imageAlt = $el.attr('alt');
            const handle = slugify(imageAlt,
                {
                    remove: /[*+~.()'"!:@]/g,
                    strict: true,
                    lower: true
                })
            cy.downloadFile(largeImageUrl, 'cypress/downloads/banners', `${handle}.jpeg`);
        })
    })

    afterEach(() => {
    })
})