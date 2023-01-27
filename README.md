# Notes
## Site
We use vanilla html/css. Optional html is omitted when possible, using [this list as a reference.](https://meiert.com/en/blog/optional-html/) Javascript is only used for making custom elements. 

## Firewall
We use a UFW firewall with OpenSSL and Apache Full allowed.

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04

## Apache
We use Apache as our web server.
### Setup
https://ubuntu.com/tutorials/install-and-configure-apache#2-installing-apache

By default, config is in `/etc/apache2/sites-enabled/000-default.conf` and `000-default-le-ssl.conf` in the same directory. `000-default` is for http, `000-default-le-ssl` is for https. Make sure to update both.

Modified config fields:
```
ServerAdmin the.net.persists@gmail.com
ServerName worlds.place
ServerAlias www.worlds.place
ErrorDocument 404 /404.html
ErrorDocument 500 /50x.html
ErrorDocument 502 /50x.html
ErrorDocument 503 /50x.html
ErrorDocument 504 /50x.html
```
`service apache2 restart`
### Site Deployment
Deploy pages to `/var/www/html/`

## SSL Cert
We use Certbot to auto-renew our Let's Encrypt SSL cert.

https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-20-04

It sets up a systemd timer for renewal. To check if it's running: 
```
systemctl list-timers | grep certbot
```

To test if the next run will work:
```
certbot renew --dry-run
```
