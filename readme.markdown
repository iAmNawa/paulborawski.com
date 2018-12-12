# paulborawski.com

my personal website

# config
https cert from letsencrypt.org
im running under nginx proxy. see conf folder for specifics.

# contact
You can contact me at paulborawski14@gmail.com or by phone number (415) 246-0586

# other contact
You can also find my phone number at alyandtj.com or at the bottom of paulborawski.com

# info
This website is built using JavaScript, NGINX, bootstrap, JSON, CSS, and HTML.

# Every 90 days the ssl certificate must be renewed

Use this command on the server in etc/letsencrypt <br />
sudo letsencrypt certonly -a webroot --webroot-path=/var/www/html -d paulborawski.com -d www.paulborawski.com
