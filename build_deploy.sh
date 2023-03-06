rm -r -f ./build
npm run build
cp -R ./deploy/* ./build

aws deploy push --application-name landing-frontend \
    --description "landing-frontend upload" \
    --ignore-hidden-files \
    --s3-location s3://mintdeploy/landing-frontend.zip \
    --source ./build

aws deploy create-deployment \
  --application-name landing-frontend \
  --deployment-config-name CodeDeployDefault.OneAtATime \
  --deployment-group-name landing-frontend \
  --s3-location bucket=mintdeploy,bundleType=zip,key=landing-frontend.zip