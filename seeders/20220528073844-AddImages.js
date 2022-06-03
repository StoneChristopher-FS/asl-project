'use strict';

const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('Images', [
      { id: 1, variantId: 1, extension: '.jpg', createdAt, updatedAt },
      { id: 2, variantId: 2, extension: '.jpg', createdAt, updatedAt },
      { id: 3, variantId: 3, extension: '.jpg', createdAt, updatedAt },
      { id: 4, variantId: 4, extension: '.jpg', createdAt, updatedAt },
      { id: 5, variantId: 5, extension: '.jpg', createdAt, updatedAt },
      { id: 6, variantId: 6, extension: '.jpg', createdAt, updatedAt },
      { id: 7, variantId: 7, extension: '.jpg', createdAt, updatedAt },
      { id: 8, variantId: 8, extension: '.jpg', createdAt, updatedAt },
      { id: 9, variantId: 9, extension: '.jpg', createdAt, updatedAt },
      { id: 10, variantId: 10, extension: '.jpg', createdAt, updatedAt },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Images', null, {})
  }
};
