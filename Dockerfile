# Use lightweight Nginx image
FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy your app files into nginx folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

RUN apk add --no-cache curl

HEALTHCHECK --interval=30s --timeout=5s \
  CMD curl --fail http://localhost || exit 1