(ns user
  (:require [mount.core :as mount]
            tripadv.core))

(defn start []
  (mount/start-without #'tripadv.core/http-server
                       #'tripadv.core/repl-server))

(defn stop []
  (mount/stop-except #'tripadv.core/http-server
                     #'tripadv.core/repl-server))

(defn restart []
  (stop)
  (start))


