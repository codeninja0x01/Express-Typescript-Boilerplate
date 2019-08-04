"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateProduct {
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            yield em.createQueryBuilder()
                .insert()
                .into('product')
                .values([
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Arc d\'Triomphe', description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.', price: 14.99, discountedPrice: 0.00, image1: 'arc-d-triomphe.gif', image2: 'arc-d-triomphe-2.gif', thumbnail: 'arc-d-triomphe-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Chartres Cathedral', description: '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!', price: 16.95, discountedPrice: 15.95, image1: 'chartres-cathedral.gif', image2: 'chartres-cathedral-2.gif', thumbnail: 'chartres-cathedral-thumbnail.gif', display: '2' },
                // tslint:disable-next-line:max-line-length
                { name: 'Coat of Arms', description: 'There/s good reason why the ship plays a prominent part on this shield!', price: 14.50, discountedPrice: 0.00, image1: 'coat-of-arms-2.gif', image2: 'coat-of-arms-2.gif', thumbnail: 'coat-of-arms-thumbnail.gif', display: 0 },
                // tslint:disable-next-line:max-line-length
                { name: 'Gallic Cock', description: 'This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you\'d better get your T-shirt now!', price: 18.99, discountedPrice: 16.99, image1: 'gallic-cock.gif', image2: 'gallic-cock-2.gif', thumbnail: 'gallic-cock-thumbnail.gif', display: 2 },
                // tslint:disable-next-line:max-line-length
                { name: 'Marianne', description: 'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!', price: 15.95, discountedPrice: 14.95, image1: 'marianne.gif', image2: 'marianne-2.gif', thumbnail: 'marianne-thumbnail.gif', display: 2 },
            ])
                .execute();
        });
    }
}
exports.CreateProduct = CreateProduct;
//# sourceMappingURL=004-CreateProduct.js.map