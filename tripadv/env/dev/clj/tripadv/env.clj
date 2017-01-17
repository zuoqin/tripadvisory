(ns tripadv.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [tripadv.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[tripadv started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[tripadv has shut down successfully]=-"))
   :middleware wrap-dev})
