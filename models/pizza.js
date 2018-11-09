module.exports = (Sequelize, sequelize) => {
  return sequelize.define('pizzas', {
    // TODO: описание полей
    id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		description: {
			type: Sequelize.STRING,
			allowNull: false
		},
		calories: {
			type: Sequelize.DOUBLE,
			allowNull: false
		}
  });
};
