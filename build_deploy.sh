rm -r -f ./build
npm run build
aws s3 sync ./build s3://landing-frontend --acl public-read