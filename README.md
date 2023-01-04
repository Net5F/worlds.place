# Notes
## Site
We use vanilla html/css and edit/duplicate files as necessary. Optional html is omitted when possible, using [this list as a reference.](https://meiert.com/en/blog/optional-html/)

## Firewall
We use a UFW firewall with OpenSSL and Apache Full allowed.

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04

## Apache
We use Apache as our web server.
### Setup
https://ubuntu.com/tutorials/install-and-configure-apache#2-installing-apache

Modified fields in 000-default.conf:
```
ServerAdmin the.net.persists@gmail.com
ServerName worlds.place
ServerAlias www.worlds.place
```
`service apache2 reload`
### Site Deployment
Deploy pages to `/var/www/html/`.

## SSL Cert
We use Certbot to auto-renew our Let's Encrypt SSL cert.

https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-20-04

