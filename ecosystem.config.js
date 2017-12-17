module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'Basse Dige Bot',
      script    : './app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'ali',
      host: 'localhost',
      ref  : 'origin/master',
      repo : 'git@github.com:sa-akhavani/telegram-bot.git',
      path: '/home/ali/tmp/basse-dige-bot/app.js',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'ali',
      host: '192.168.111.103',
      ref  : 'origin/master',
      repo : 'git@github.com:sa-akhavani/telegram-bot.git',
      path : '/var/www/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
