set :deploy_to, '/home/deployer/dashboard'
set :user, 'deployer'
set :pid_file_name, 'deployer.pid'
set :branch, 'prd'
set :url_ping, 'https://notif.citylity.com/dashboard'
role :app, %w{deployer@89.40.113.104}
server '89.40.113.104', user: 'deployer', roles: %w{web}
