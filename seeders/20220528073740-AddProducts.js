'use strict';

// Reusable Description
const description = `Run it up the flag pole spinning our wheels. This is not the hill i want to die on digital literacy yet dear hiring manager: yet run it up the flagpole, ping the boss and circle back so service as core &innovations as power makes our brand globalize.`

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
     return await queryInterface.bulkInsert('Products', [
      { 
        id: 1, 
        title: 'Aviator Sunglasses', 
        slug: 'aviator-sunglasses', 
        price: 20, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 2, 
        title: 'Tank Top', 
        slug: 'tank-top', 
        price: 15, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 3, 
        title: 'Sports Tee', 
        slug: 'sports-tee', 
        price: 50, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 4, 
        title: 'Classic Varsity Top', 
        slug: 'classic-varsity-top', 
        price: 60, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 5, 
        title: 'Freemote Hoodie', 
        slug: 'freemote-hoodie', 
        price: 35, 
        is_published: true,
        description, createdAt, updatedAt
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return await queryInterface.bulkDelete('Products', null, {})
  }
};
