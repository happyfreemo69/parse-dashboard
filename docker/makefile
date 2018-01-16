

build:
	@DASH_PORT=`node -e 'console.log(require("./parse-dashboard/privateConfig").httpPort)'` DASHTTPS_PORT=`node -e 'console.log(require("./parse-dashboard/privateConfig").httpsPort)'` docker-compose -p parse-dashboard build parse-dashboard
run:
	@DASH_PORT=`node -e 'console.log(require("./parse-dashboard/privateConfig").httpPort)'` DASHTTPS_PORT=`node -e 'console.log(require("./parse-dashboard/privateConfig").httpsPort)'` docker-compose -p parse-dashboard up -d parse-dashboard
stop:
	@DASH_PORT=`node -e 'console.log(require("./parse-dashboard/privateConfig").httpPort)'` DASHTTPS_PORT=`node -e 'console.log(require("./parse-dashboard/privateConfig").httpsPort)'` docker-compose -p parse-dashboard stop
clean: stop
	@DASH_PORT=`node -e 'console.log(require("./parse-dashboard/privateConfig").httpPort)'` DASHTTPS_PORT=`node -e 'console.log(require("./parse-dashboard/privateConfig").httpsPort)'` docker-compose -p parse-dashboard rm parse-dashboard
