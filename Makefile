dist:                         \
	dist/esm/CustomError.js     \
	dist/esm/CustomError.d.ts   \
	dist/cjs/CustomError.js     \
	dist/cjs/CustomError.d.ts   \

dist/esm/%.js: src/%.js
	mkdir -p $$(dirname $@)
	cat $< | sed 's/exports\.CustomError = CustomError;/export { CustomError };/' > $@

dist/cjs/%.js: src/%.js
	mkdir -p $$(dirname $@)
	cp $< $@

dist/%.d.ts: src/CustomError.d.ts
	mkdir -p $$(dirname $@)
	cp $< $@

.PHONY: clean dist dist/%.d.ts
