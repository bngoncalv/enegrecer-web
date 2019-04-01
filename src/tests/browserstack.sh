#!/bin/bash

EXIT_CODE=0

runTests() {
  browsers=( "firefox" "chrome")

  for browser in "${browsers[@]}"
  do
    echo "Browser: ${browser}"
    # Run tests sequentially.
    test_result=0;
    yarn test:functional:browserstack -e "${browser}"
    test_result=$?
    if [[ "${test_result}" != "0" ]]; then
      EXIT_CODE=1;
    fi
  done
}

runTests

kill -9 $(lsof -i:45691 -t)
exit "${EXIT_CODE}"
