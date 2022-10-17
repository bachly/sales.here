const slugify = require('slugify');
const $ = Cypress.$;

const BASE_URL = 'https://www.ozsale.com.au';
const COLLECTION_URL = `${BASE_URL}/shop/sale/women-s-men-s-apparel-dresses-shirts-more/s/62wNes_i-EmmBQTvCdQHgg`;
const productLinks = {};

describe('Profile input', () => {
    before(() => {
        cy.visit(COLLECTION_URL)
    })

    it('visit product and hover pictures', () => {
        cy.get('.test-product-list-item_link').each(($el, index, $list) => {
            const link = $el.find('a[data-link]')[0];
            const linkUrl = $(link).attr('data-link');
            let title = '';
            let handle = '';

            cy.visit(`${BASE_URL}${linkUrl}`);

            cy.get('.test-sku-info_name').first().then($title => {
                title = $title.text();
                handle = slugify(title,
                    {
                        remove: /[*+~.()'"!:@]/g,
                        strict: true,
                        lower: true
                    })

                productLinks[linkUrl] = {
                    ...productLinks[linkUrl],
                    title,
                    handle
                }
            });
            cy.get('.test-sku-info-price-wrapper .mOGaF span').first().then($price => {
                productLinks[linkUrl] = {
                    ...productLinks[linkUrl],
                    price: $price.text(),
                }
            });
            cy.get('.test-sku-info-price-wrapper .NA3e_ span').first().then($price => {
                productLinks[linkUrl] = {
                    ...productLinks[linkUrl],
                    compareAtPrice: $price.text(),
                }
            });
            cy.get('.test-product-info-block_description .oGyfn').first().then($description => {
                productLinks[linkUrl] = {
                    ...productLinks[linkUrl],
                    body: $description.html(),
                }
            });
            cy.get('.test-image-slider-thumbnails_item').each(($el, index, $list) => {
                cy.wrap($el).click();
                productLinks[linkUrl] = {
                    ...productLinks[linkUrl],
                    images: []
                }
                cy.get('#cloud-zoom-a-img-wrap').first().then($zoomImage => {
                    const imageUrl = $zoomImage.attr('href');
                    productLinks[linkUrl].images.push(imageUrl);
                    cy.downloadFile(imageUrl, 'cypress/downloads', `${handle}_img-${index}.jpeg`);
                });
            })
        })
    })

    afterEach(() => {
        cy.writeFile('cypress/downloads/products.json', productLinks);
    })
})