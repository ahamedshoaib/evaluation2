

module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    Author: DataTypes.STRING,
    Name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return books;
};
