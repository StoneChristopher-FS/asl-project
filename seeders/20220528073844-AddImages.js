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
      { id: 1, variantId: 1, extension: 'aviatorsunglasses.jpg', createdAt, updatedAt },
      { id: 2, variantId: 2, extension: 'aviatorsunglasses.jpg', createdAt, updatedAt },
      { id: 3, variantId: 3, extension: 'tanktop.jpg', createdAt, updatedAt },
      { id: 4, variantId: 4, extension: 'tanktop.jpg', createdAt, updatedAt },
      { id: 5, variantId: 5, extension: 'sportsteered.jpg', createdAt, updatedAt },
      { id: 6, variantId: 6, extension: 'sportsteered.jpg', createdAt, updatedAt },
      { id: 7, variantId: 7, extension: 'sportsteeorange.jpg', createdAt, updatedAt },
      { id: 8, variantId: 8, extension: 'sportsteeorange.jpg', createdAt, updatedAt },
      { id: 9, variantId: 9, extension: 'varsitytop.jpg', createdAt, updatedAt },
      { id: 10, variantId: 10, extension: 'varsitytop.jpg', createdAt, updatedAt },
      { id: 11, variantId: 11, extension: 'varsitytop.jpg', createdAt, updatedAt },
      { id: 12, variantId: 12, extension: 'hoodieblack.jpg', createdAt, updatedAt },
      { id: 13, variantId: 13, extension: 'hoodieblack.jpg', createdAt, updatedAt },
      { id: 14, variantId: 14, extension: 'hoodiewhite.jpg', createdAt, updatedAt },
      { id: 15, variantId: 15, extension: 'hoodiewhite.jpg', createdAt, updatedAt }
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
