(ns tripadv.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[tripadv started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[tripadv has shut down successfully]=-"))
   :middleware identity})
