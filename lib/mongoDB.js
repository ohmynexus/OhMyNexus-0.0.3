const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = class mongoDB {
  constructor(url, options = { useNewUrlParser: true, useUnifiedTopology: true }) {
    this.url = url;
    this.data = this._data = this._schema = this._model = {};
    this.db;
    this.options = options;
  }

  async read() {
    try {
      this.db = await mongoose.connect(this.url, { ...this.options });
      this.connection = mongoose.connection;
      let schema = this._schema = new Schema({
        data: {
          type: Object,
          required: true,
          default: {},
        },
      });
      try {
        this._model = mongoose.model('data', schema);
      } catch {
        this._model = mongoose.model('data');
      }
      this._data = await this._model.findOne({});
      if (!this._data) {
        this.data = {};
        await this.createOrUpdateData(this.data);
        this._data = await this._model.findOne({});
      } else {
        this.data = this._data.data;
      }
      return this.data;
    } catch (error) {
      console.error('Error reading data:', error);
      return null;
    }
  }

  async createOrUpdateData(data) {
    try {
      const newData = { data };
      const result = await this._model.findOneAndUpdate({}, newData, {
        upsert: true,
        new: true,
        useFindAndModify: false,
      });
      this._data = result.data;
      this.data = this._data;
      return this._data;
    } catch (error) {
      console.error('Error creating/updating data:', error);
      return null;
    }
  }

  async write(data) {
    try {
      if (!data) return data;
      this.createOrUpdateData(data);
    } catch (error) {
      console.error('Error writing data:', error);
    }
  }
};
