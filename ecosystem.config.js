module.exports = {
  apps: [
    {
      name: 'nuxtApp',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: 'npm',
      args: 'start',
    },
  ],
}