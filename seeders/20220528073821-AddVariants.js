'use strict';

// Reusable Description
const description = "Run it up the flag pole spinning our wheels. This is not the hill i want to die on digital literacy yet dear hiring manager: yet run it up the flagpole, ping the boss and circle back so service as core &innovations as power makes our brand globalize."

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
    return await queryInterface.bulkInsert('Variants', [
      { id: 1, title: 'Gold', slug: 'gold', description, price: 20, productId: 1, inventory: 8, createdAt, updatedAt  },
      { id: 2, title: 'Silver', slug: 'silver', description, price: 20, productId: 1, inventory: 10, createdAt, updatedAt  },
      { id: 3, title: 'Small', slug: 'small', description, price: 15, productId: 2, inventory: 0, createdAt, updatedAt  },
      { id: 4, title: 'Large', slug: 'large', description, price: 15, productId: 2, inventory: 10, createdAt, updatedAt  },
      { id: 5, title: 'Small Red', slug: 'small-red', description, price: 50, productId: 3, inventory: 5, createdAt, updatedAt  },
      { id: 6, title: 'Small Orange', slug: 'small-orange', description, price: 50, productId: 3, inventory: 10, createdAt, updatedAt  },
      { id: 7, title: 'Small', slug: 'small', description, price: 60, productId: 4, inventory: 3, createdAt, updatedAt  },
      { id: 8, title: 'Medium', slug: 'medium', description, price: 60, productId: 4, inventory: 3, createdAt, updatedAt  },
      { id: 9, title: 'Large Black', slug: 'large-black', description, price: 35, productId: 5, inventory: 10, createdAt, updatedAt  },
      { id: 10, title: 'Large White', slug: 'large-white', description, price: 35, productId: 5, inventory: 20, createdAt, updatedAt  }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Variants', null, {})
  }
};
