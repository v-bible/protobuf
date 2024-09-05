.PHONY: gen-proto
gen-proto:
	cd ./protobuf && buf generate
