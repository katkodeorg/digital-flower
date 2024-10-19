.PHONY: web
web:
	npm run build
	rm -rf ./docs
	mv ./out ./docs
