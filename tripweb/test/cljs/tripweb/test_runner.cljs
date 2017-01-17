(ns tripweb.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [tripweb.core-test]
   [tripweb.common-test]))

(enable-console-print!)

(doo-tests 'tripweb.core-test
           'tripweb.common-test)
