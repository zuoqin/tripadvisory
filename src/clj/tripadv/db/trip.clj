(ns tripadv.db.trip
  (:require [datomic.api :as d]
            [mount.core :refer [defstate]]
            [tripadv.db.core :refer [conn] ]
            [tripadv.config :refer [env]]))



(defn get-trips [login]
  (let [
        trips (d/q '[:find ?t
                     :in $ ?login
                     :where
                     [?u :user/code ?login]
                     [?t :trip/user ?u]
                    ]
                    (d/db conn) login)
    ]
    trips
  )
)

(defn update-trip [id destination startdate enddate description]
  (d/transact
   conn
   [{:db/id id
     :trip/destination destination
     :trip/startdate startdate
     :trip/enddate enddate
     :trip/comment description
     }])
)

(defn delete-trip [id]
   (d/transact
   conn
   [[:db.fn/retractEntity id]]
  )
)




