.PHONY: gen-proto
gen-proto:
	buf generate && buf dep update
