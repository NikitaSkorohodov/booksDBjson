const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root@localhost', {
  logging: false, 
});

sequelize.query('CREATE DATABASE IF NOT EXISTS books')
  .then(() => {
    console.log('База данных "books" успешно создана или уже существует.');
  })
  .catch((err) => {
    console.error('Ошибка при создании базы данных:', err);
  })
  .finally(() => {
    
    sequelize.close();
  });
