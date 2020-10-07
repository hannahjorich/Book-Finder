module.exports = function(sequelize, DataTypes) {
  const Book = sequelize.define("Book", {
    // thumbnail: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    author: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  // Book.associate = function(models) {
  //   // We're saying that a book should belong to an user
  //   // A Book can't be created without an user due to the foreign key constraint
  //   Book.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Book;
};
