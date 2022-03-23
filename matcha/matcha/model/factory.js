// eslint-disable-next-line import/no-named-as-default
import factory from 'factory-bot';
import User from '../model/User.js';

function buildFactory() {
  try {
    factory.define('User', User, {
      gender: factory.chance('integer', { min: 0, max: 1 }),
      first_name: factory.chance('first', { nationality: 'fr' }),
      last_name: factory.chance('last', { nationality: 'fr' }),
      user_name: factory.seq('User.email', n => `username${n}`),
      password: '$2b$10$R/y6E88GOfMiSOQzt1xPzeaElXUT3llz7gz/MH5um2Y30DfkpVxDO', // 1234
      activation_code: 'activated',
      age: factory.chance('age', { type: 'adult' }),
      score: factory.chance('integer', { min: 0, max: 100 }),
      email: factory.seq('User.email', n => `user${n}@ymail.com`),
      bio: factory.chance('paragraph', { sentences: 1 }),
    });
    return factory;
  } catch {
    return factory;
  }
}

export default buildFactory;