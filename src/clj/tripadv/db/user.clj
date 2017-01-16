(ns tripadv.db.user
  (:require [datomic.api :as d]
            [mount.core :refer [defstate]]
            [tripadv.db.core :refer [conn] ]
            [tripadv.config :refer [env]]))



(defn get-users [login]
  (let [
        user (find-user login)

        users (if ( = (nth user 1)  "user" ) 
                (set [login] ) 
                (if (or ( = (nth user 1)  "admin" )  
                        ( = (nth user 1)  "manager" )
                        )
                  (d/q '[:find ?login
                               :where
                               [?u :user/code ?login]
                               ]
                        (d/db conn) login) #{})


                  )

    ]
    users
  )
)

(defn update-user [login password role]
  (d/transact
   conn
   [{:user/code login ;; this finds the existing entity
     :db/id #db/id [:db.part/user]  ;; will be replaced by exiting id
     :user/password password
     :user/role role
     }])
)

(defn delete-user [login]
   
(let [id (first (first (d/q '[:find ?u
                          :in $ ?login
                          :where
                          [?u :user/code ?login]
                          ]
                        (d/db conn) login) ))  

      ]
     

(d/transact
   conn
   [[:db.fn/retractEntity id]]
  )
)

)

(defn find-user [login]
  (let [users (d/q '[:find ?login ?r
                      :in $ ?login
                      :where
                      [?u :user/code ?login]
                      [?u :user/role ?r]
                     ]
                     (d/db conn) login)
    ]
    (if (not= users #{} ) (first users)  ["" ""]) 
  )
)


