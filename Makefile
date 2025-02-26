clean:
	rm -rf ./out

build: clean
	yarn build

deploy: out
	scp -r out/* yuliiaj@ftp.cluster029.hosting.ovh.net:/home/yuliiaj/www

