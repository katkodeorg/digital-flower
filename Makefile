.PHONY: web
web:
	npm run build
	cp CNAME docs/
	cp .nojekyll docs/
