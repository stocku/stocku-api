import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb+srv://stocku:stockuadmin@stocku-pwwk9.mongodb.net/stockuapi?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
