(ns tripadv.db.trip
  (:require [datomic.api :as d]
            [mount.core :refer [defstate]]
            [tripadv.db.core :refer [conn] ]
            [tripadv.config :refer [env]]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [clj-time.local :as l]
            [clj-time.coerce :as c]
))



(defn get-trips [login]
  (let [
        trips (d/q '[:find ?t ?d ?c ?s ?e
                     :in $ ?login
                     :where
                     [?u :user/code ?login]
                     [?t :trip/user ?u]
                     [?t :trip/destination ?d]
                     [?t :trip/comment ?c]
                     [?t :trip/startdate ?s]
                     [?t :trip/enddate ?e]
                     
                    ]
                    (d/db conn) login)
    ]
    trips
  )
)


(defn update-trip [id destination startdate enddate description]
  (let [start (java.util.Date. (c/to-long (f/parse startdate)))
        end (java.util.Date. (c/to-long (f/parse enddate)))
        ]

   (d/transact
    conn
    [{:db/id id
      :trip/destination destination
      :trip/startdate start
      :trip/enddate end
      :trip/comment description
      }])

  )
)


(defn create-trip [user destination startdate enddate description]

  (let [userid (first (first (d/q '[:find ?u
                                :in $ ?login
                                :where
                                [?u :user/code ?login]
                                ]
                              (d/db conn) user))) 

        start (java.util.Date. (c/to-long (f/parse startdate)))
        end (java.util.Date. (c/to-long (f/parse enddate)))
        ]  


   (d/transact
   conn
   [{:db/id #db/id[:db.part/user -1000001] :trip/user userid :trip/destination destination :trip/startdate start :trip/enddate end :trip/comment description}]
  )

    ;;userid
  )
  
)


(defn delete-trip [id]
   (d/transact
   conn
   [[:db.fn/retractEntity id]]
  )
)




