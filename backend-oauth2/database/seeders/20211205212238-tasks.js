module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('tasks', [
      {
        titulo: 'Aprender React',
        concluida: true,
      },
      {
        titulo: 'Estudar NodeJS',
        concluida: false,
      },
      {
        titulo: 'Praticar TypeScript',
        concluida: false,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
