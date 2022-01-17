FROM registry.redhat.io/ubi8/nodejs-14 as builder

ADD ./ .
RUN npm install
RUN ng build

FROM registry.redhat.io/ubi8/nginx-118

ADD colorpad.conf $NGINX_DEFAULT_CONF_PATH
COPY --from=builder /opt/app-root/src/dist/colorpad-app/ .
RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log
CMD nginx -g "daemon off;"