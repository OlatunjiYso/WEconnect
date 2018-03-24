import chai from 'chai';

import db from '../models/index';

import testData from './testdata';

const { expect } = chai;
const { Business, Review, User } = db;


describe('All test for Models', () => {
    beforeEach((done) => {
        db.sequelize.sync({ force: true }) // drops table and re-creates it
            .then(() => {
                User.create(testData.userDetails);
                done();
            });
    });
    describe(' All Tests for creating business', () => {
        it('model should load', (done) => {
            Business.create(testData.businessDetails)
                .then((business) => {
                    Review.create({
                        businessId: business.id,
                        description: 'wonderful business',
                        reviewerId: 1,
                    })
                    .then((review) => {
                        expect(review.description).to.equal('wonderful business');
                        expect(review.reviewerId).to.equal(1);
                    });
                    expect(business.title).to.equal('Just Suits');
                    expect(business.category).to.equal('fashion');
                    expect(business.location).to.equal('Lagos');
                    done();
                });
        });
        it('model should add a business', (done) => {
            Business.create(testData.businessDetail1)
                .then((business) => {
                    Review.create({
                        businessId: business.id,
                        description: 'successful business',
                        reviewerId: 1,
                    })
                    .then((review) => {
                        expect(review.description).to.equal('successful business');
                        expect(review.reviewerId).to.equal(1);
                    });
                    expect(business.title).to.equal('Just Suitss');
                    expect(business.category).to.equal('fashions');
                    expect(business.location).to.equal('Lagoss');
                    done();
                });
        });
    });
    describe(' All Tests for finding business', () => {
        it('model should find businesses', (done) => {
            Business.findAll({
                where: {
                    title: 'Just Ties'
                }
            })
                .then((businesses) => {
                    console.log(businesses);
                    expect(businesses.length).to.equal(0);
                    done();
                });
        });
        it('model should find businesses', (done) => {
            Business.findAll({
                where: {
                    category: 'food'
                }
            })
                .then((businesses) => {
                    expect(businesses.length).to.equal(0);
                    done();
                });
        });
    });
});